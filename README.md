# Stacks
- React
- Next.js
- Tailwind CSS -> shadcn
- Typescript

# Note
- use ```<Link>``` instead of ```<a>```
- use ```<Image>``` instead of ```<img>```
- use ```<div><Image></div>``` instead of ```<div className='background-image'></div>```
- <FadeIn> for animation of all foreground elements, note that it could probabilistically change layout, check everytime when add this

# Setup
- install ```npm```
- ```npm install``` to install or update all dependencies

# Preview
- ```npm run dev```

# Deploy
- Simply push the code to the GitHub and it will be done automatically.

# Image
- upload to corresponding folder in [https://github.com/MMLABassets/MMLABassets.github.io](https://github.com/MMLABassets/MMLABassets.github.io) / access via ```https://mmlabassets.github.io/*```
- reduce image size -> use [https://www.photopea.com/](https://www.photopea.com/) to reduce image quality, normally 90%

![image](https://github.com/user-attachments/assets/2d0062bf-65ea-44f5-9511-b4a3b649998a)

## Member
- full: 512 x 512 / JPG / [name]_[surname]_f.jpg, e.g. ping_luo_f.jpg
- compressed: 384 x 384 / JPG / ~20kb / [name]_[surname]_c.jpg, e.g. ping_luo_c.jpg

## Publication
- long side approx. 512 / JPG / ~15kb
- without margin / 紅框為圖像邊界
  
| ✅ | ✖️ |
|---|---|
| ![image](https://github.com/user-attachments/assets/96c2db29-e206-4850-b956-6f47a460c5a0) | ![image](https://github.com/user-attachments/assets/6a649dfe-3211-48ec-bcfa-d974db25c23d) |

# 收集信息
## member
- id 不用收集
- img 处理见```Image```
- bio 可带超链接，需要两个版本：
    - 纯文本：```this is a example link, and another link```
    - 扩住链接部分：```this is a [example link], and another [link]```
    - 文本和链接对应的关系：```[example link]: https://baidu.com, [link]: https://google.com```
- links 中的 icon 名称最好比较统一
- title 名称最好比较统一
- pi 可以为多个
