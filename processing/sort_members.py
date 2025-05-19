import re
from pathlib import Path

def extract_members_blocks(content):
    """提取完整的成员对象代码块（保留原始格式）"""
    members_section = re.search(r'export const members:.*?\[\] = \[(.*?)\];', content, re.DOTALL)
    if not members_section:
        raise ValueError("未找到members数组定义")
    
    members_str = members_section.group(1)
    # 匹配成员对象（不包含末尾逗号）
    blocks = re.findall(r'(  {\n(?: {4}.*\n)+  })', members_str)
    return blocks

def sort_member_blocks(blocks):
    """按keys规则排序成员代码块"""
    def get_sort_key(block):
        keys_match = re.search(r'keys: \[(.*?)\]', block, re.DOTALL)
        if not keys_match:
            return ("0000", "3000")
        
        # 清理并提取keys值
        keys = [k.strip().replace("'", "").replace('"', "") 
               for k in keys_match.group(1).split(',')]
        
        join_year = keys[0] if len(keys) > 0 and re.match(r'^\d{4}$', keys[0]) else "0000"
        leave_year = keys[1] if len(keys) > 1 and re.match(r'^\d{4}$', keys[1]) else "3000"
        
        return (join_year, leave_year)
    
    return sorted(blocks, key=get_sort_key)

def generate_sorted_tsx(input_path, output_path):
    # 读取原始文件内容
    content = Path(input_path).read_text(encoding='utf-8')
    
    # 提取并排序成员块
    member_blocks = extract_members_blocks(content)
    sorted_blocks = sort_member_blocks(member_blocks)
    
    # 重建members数组内容（精确控制逗号）
    members_section = ',\n'.join(sorted_blocks).rstrip(',\n')
    
    # 替换原数组内容
    new_content = re.sub(
        r'(export const members:.*?\[\] = \[)(.*?)(\];)',
        r'\1\n' + members_section + r'\3',
        content,
        flags=re.DOTALL
    )
    
    # 写入新文件
    Path(output_path).write_text(new_content, encoding='utf-8')
    print(f"已生成排序后文件：{output_path}")

if __name__ == "__main__":
    generate_sorted_tsx('member.tsx', 'member_sorted.tsx')
