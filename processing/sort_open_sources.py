import re
from pathlib import Path

def extract_open_source_blocks(content):
    """提取完整的开源项目代码块（保留原始格式）"""
    open_sources_section = re.search(r'export const open_sources:.*?\[\] = \[(.*?)\];', content, re.DOTALL)
    if not open_sources_section:
        raise ValueError("未找到open_sources数组定义")
    
    open_sources_str = open_sources_section.group(1)
    # 匹配项目对象（不包含末尾逗号）
    blocks = re.findall(r'(  {\n(?: {4}.*\n)+  })', open_sources_str)
    return blocks

def sort_open_source_blocks(blocks):
    """按复杂规则排序开源项目"""
    def get_sort_key(block):
        # 提取年份（keys中第一个4位数字）
        year_match = re.search(r"'(\d{4})'", block)
        year = int(year_match.group(1)) if year_match else 0
        
        # 检查Highlight标记
        has_highlight = 'Highlight' in block
        
        # 检查项目类型
        is_dataset = 'Dataset' in block.split('keys:')[1].split(']')[0]
        
        return (
            year,  # 年份升序
            not has_highlight,  # Highlight优先
            not is_dataset  # Dataset优先
        )
    
    return sorted(blocks, key=get_sort_key)

def generate_sorted_tsx(input_path, output_path):
    content = Path(input_path).read_text(encoding='utf-8')
    
    blocks = extract_open_source_blocks(content)
    sorted_blocks = sort_open_source_blocks(blocks)
    
    # 重建内容（保留原始格式）
    open_sources_section = ',\n'.join(sorted_blocks)
    
    new_content = re.sub(
        r'(export const open_sources:.*?\[\] = \[)(.*?)(\];)',
        r'\1\n' + open_sources_section + r'\3',
        content,
        flags=re.DOTALL
    )
    
    Path(output_path).write_text(new_content, encoding='utf-8')
    print(f"已生成排序后文件：{output_path}")

if __name__ == "__main__":
    generate_sorted_tsx('open-source.tsx', 'open-source-sorted.tsx')
