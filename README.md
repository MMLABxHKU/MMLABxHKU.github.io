# 网站技术方案 
### Stacks
- React
- Next.js
- Tailwind CSS -> shadcn
- Typescript

# 开发相关
### Setup
- install ```npm```
- ```npm install``` to install or update all dependencies

### Preview
- ```npm run dev```

### Deploy
- Simply push the code to the GitHub and it will be done automatically.

### Note
- use ```<Link>``` instead of ```<a>```
- use ```<Image>``` instead of ```<img>```
- use ```<div><Image></div>``` instead of ```<div className='background-image'></div>```
- <FadeIn> for animation of all foreground elements, note that it could probabilistically change layout, check everytime when add this



# 收集信息
- 代码注意好缩进

- 类 json 相关文件：
```
└── data
    ├── event.tsx
    ├── member.tsx
    ├── open-source.tsx
    └── publication.tsx
```

### ```member.tsx```
- ```name```：英文姓名
- ```id```： 不用收集
- ```img``` 头像url，处理见```Image```
- ```img_full``` 头像url，处理见```Image```
- ```title```：头衔，参照其他member的，做到名称最好比较统一
- ```bio```： biography ，可带超链接，超链接需要标注两个版本，修改为通知 @王晖杰：
    - 纯文本：```this is a example link, and another link```
    - 扩住链接部分：```this is a [example link], and another [link]```
    - 文本和链接对应的关系：```[example link]: https://baidu.com, [link]: https://google.com```
- ```links```：若干个相关链接，  icon 名称最好比较统一，若沒有对应图标通知 @王晖杰
    - email 邮箱地址前加 ```mailto:```，如 ```mailto:xxx@xxx.xx```
- ```pi```：与PI列表中姓名相同，可以为多个
- ```keys```： 入学年份 & ```Alumni``` 如果是 & 其他等可以帮助排序的

### ```open-source.tsx```
- keys 包含 (```Project``` or ```Dataset```) and 年份，and 可以帮助排序的
- links 中的 website 名称最好比较统一
- pi 可以为多个
- img 处理见```Image```，做好命名不要重复
- 对于明星project/dataset，可以单独收集信息，到时候再根据信息排版在```/research```
- id 用项目缩写

### ```publication.tsx```
- 定义好topic
- keys 包含 (任意数量topic) and 年份，and 可以帮助排序的
- proceedings 用缩写 / 加年份（如```CVPR 2025``` / ```TPAMI 2025```）
- links 中的 website 名称最好比较统一
- pi 可以为多个
- title 单词首字母大写
- authors 先名后姓，用英语逗号分隔


## 图像要求
- upload to corresponding folder in [https://github.com/MMLABassets/MMLABassets.github.io](https://github.com/MMLABassets/MMLABassets.github.io) / access via ```https://mmlabassets.github.io/*```
- reduce image size -> use [https://www.photopea.com/](https://www.photopea.com/) to reduce image quality, normally 90%

![image](https://github.com/user-attachments/assets/2d0062bf-65ea-44f5-9511-b4a3b649998a)

### Member
- full: 512 x 512 / JPG / [name]_[surname]_f.jpg, e.g. ping_luo_f.jpg
- compressed: 384 x 384 / JPG / ~20kb / [name]_[surname]_c.jpg, e.g. ping_luo_c.jpg

### Open Source
- long side approx. 512 / JPG / 30kb
- without margin / 紅框為圖像邊界
  
| ✅ | ✖️ |
|---|---|
| ![image](https://github.com/user-attachments/assets/96c2db29-e206-4850-b956-6f47a460c5a0) | ![image](https://github.com/user-attachments/assets/6a649dfe-3211-48ec-bcfa-d974db25c23d) |