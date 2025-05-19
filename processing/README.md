# TSX 文件格式化指南

本项目包含三个未排序的 TSX 文件，需要使用 Prettier 进行格式化和排序。本指南将帮助你设置和使用 Prettier 来格式化这些文件。

## 项目文件

项目中包含以下 TSX 文件：
- `member.tsx` - 包含团队成员信息
- `open-source.tsx` - 包含开源项目信息
- `publication.tsx` - 包含发表的论文信息

## 使用 Prettier 格式化 TSX 文件

### 项目本地安装 Prettier

1. 进入项目目录：
   ```bash
   cd 项目目录路径
   ```

2. 初始化 npm 项目（如果尚未初始化）：
   ```bash
   npm init -y
   ```

3. 在项目中安装 Prettier：
   ```bash
   npm install --save-dev prettier
   ```

4. 运行 Prettier 格式化所有 TSX 文件：
   ```bash
   npx prettier --write "*.tsx"
   ```

## Prettier 配置

项目中已经包含了 `.prettierrc.json` 配置文件，设置了以下格式化规则：

```json
{
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 100,
  "bracketSpacing": true,
  "arrowParens": "avoid"
}
```

这些配置确保了：
- 使用 2 个空格作为缩进
- 使用单引号
- 行宽限制为 100 个字符
- 其他格式化规则

## 使用 Python 脚本排序 TSX 文件内容

除了使用 Prettier 格式化文件外，项目中还包含了几个 Python 脚本，用于对 TSX 文件中的数据进行排序：

1. `sort_members.py` - 排序 `member.tsx` 文件中的成员信息
   ```bash
   python sort_members.py
   ```

2. `sort_open_sources.py` - 排序 `open-source.tsx` 文件中的开源项目信息
   ```bash
   python sort_open_sources.py
   ```

3. `publications_manager_sqlite.py` - 管理和排序 `publication.tsx` 文件中的发表论文信息
   ```bash
   python publications_manager_sqlite.py
   ```
   然后选择选项 4 "Generate sorted TSX file" 或选项 5 "Run all steps in sequence"

## 完整的格式化和排序流程

1. 首先使用 Prettier 对文件进行格式化
2. 然后使用 Python 脚本对 TSX 文件内容进行排序

例如：
```bash
# 使用 Prettier 格式化所有 TSX 文件
npx prettier --write "*.tsx"

# 排序成员信息
python sort_members.py

# 排序开源项目信息
python sort_open_sources.py

# 排序发表论文信息
python publications_manager_sqlite.py
# 选择选项 4 或 5
```

## 注意事项

1. Prettier 只会格式化文件的代码风格（缩进、引号、空格等），不会改变代码的逻辑或内容的排序
2. Python 脚本负责对 TSX 文件中的数据内容进行排序
3. 建议先使用 Prettier 进行格式化，然后再运行 Python 脚本进行内容排序
4. 如果你修改了 `.prettierrc.json` 配置文件，更改将应用于下一次格式化
