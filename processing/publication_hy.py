pub = [
    {
        'title': "Learning to Act Anywhere with Task-centric Latent Actions",
        'link': "https://arxiv.org/abs/2505.06111",
        'image': "/assets/publication/univla.jpg",
        'author': "Qingwen Bu, Yanting Yang, Jisong Cai, Shenyuan Gao, Guanghui Ren, Maoqing Yao, Ping Luo, Hongyang Li",
        'note': "RSS 2025",
        'noteoption': '',
        'star': "https://img.shields.io/github/stars/OpenDriveLab/UniVLA?style=social",
        'starlink': "https://github.com/OpenDriveLab/UniVLA",
        'icon': [
            {
                'type': "github",
                'link': "https://github.com/OpenDriveLab/UniVLA",
            },
        ],
        'description': "A unified vision-language-action framework that enables policy learning across different environments.",
        'tag': "",
    },
    {
        'title': "Planning-oriented Autonomous Driving",
        'link': "https://openaccess.thecvf.com/content/CVPR2023/html/Hu_Planning-Oriented_Autonomous_Driving_CVPR_2023_paper.html",
        'image': "/assets/publication/uniad.jpg",
        'author': "Yihan Hu, Jiazhi Yang, Li Chen, Keyu Li, Chonghao Sima, Xizhou Zhu, Siqi Chai, Senyao Du, Tianwei Lin, Wenhai Wang, Lewei Lu, Xiaosong Jia, Qiang Liu, Jifeng Dai, Yu Qiao, Hongyang Li",
        'note': "CVPR 2023 Best Paper Award",
        'noteoption': 'href="https://cvpr2023.thecvf.com/Conferences/2023/Awards" target="_blank"',
        'star': "https://img.shields.io/github/stars/OpenDriveLab/UniAD?style=social",
        'starlink': "https://github.com/OpenDriveLab/UniAD",
        'icon': [
            {
                'type': "github",
                'link': "https://github.com/OpenDriveLab/UniAD",
            },
            {
                'type': "youtube",
                'link': "https://www.youtube.com/watch?v=cyrxJJ_nnaQ",
            },
            {
                'type': "slides",
                'link': "https://opendrivelab.github.io/UniAD_plenary_talk_slides.pdf",
            },
            {
                'type': "zhihu",
                'link': "https://zhuanlan.zhihu.com/p/638780421",
            },
            {
                'type': "wechat",
                'link': "https://mp.weixin.qq.com/s?__biz=MzkyMDUzMDE2Mw==&mid=2247485809&idx=1&sn=5dbd00380bcf80cc32d11b6e15e93829",
            },
        ],
        'description': "A comprehensive framework up-to-date that incorporates full-stack driving tasks in one network.",
        'tag': "",
    },
    {
        'title': "AgiBot World Colosseo: A Large-scale Manipulation Platform for Scalable and Intelligent Embodied Systems",
        'link': "https://arxiv.org/abs/2503.06669",
        'image': "/assets/publication/go-1.jpg",
        'author': "Team AgiBot-World",
        'note': "arXiv 2025",
        'noteoption': '',
        'star': "https://img.shields.io/github/stars/OpenDriveLab/AgiBot-World?style=social",
        'starlink': "https://github.com/OpenDriveLab/AgiBot-World",
        'icon': [
            {
                'type': "github",
                'link': "https://github.com/OpenDriveLab/AgiBot-World",
            },
            {
                'type': "article",
                'link': "/blog/agibot-world/",
            },
            {
                'type': "webpage",
                'link': "http://agibot-world.com/",
            },
            {
                'type': "hugging_face",
                'link': "https://huggingface.co/agibot-world",
            },
            {
                'type': "bilibili",
                'link': "https://www.bilibili.com/video/BV1sNdGYWEBY",
            }
        ],
        'description': "A novel generalist policy that leverages latent action representations to maximize data utilization, demonstrating predictable performance scaling with increased data volume.",
        'tag': "",
    },
    {
        'title': "End-to-End Autonomous Driving: Challenges and Frontiers",
        'link': "https://ieeexplore.ieee.org/abstract/document/10614862/",
        'image': "/assets/publication/e2esurvey.jpg",
        'author': "Li Chen, Penghao Wu, Kashyap Chitta, Bernhard Jaeger, Andreas Geiger, Hongyang Li",
        'note': "TPAMI 2024",
        'noteoption': '',
        'star': "https://img.shields.io/github/stars/OpenDriveLab/End-to-end-Autonomous-Driving?style=social",
        'starlink': "https://github.com/OpenDriveLab/End-to-end-Autonomous-Driving",
        'icon': [
            {
                'type': "github",
                'link': "https://github.com/OpenDriveLab/End-to-end-Autonomous-Driving",
            },
        ],
        'description': "In this survey, we provide a comprehensive analysis of more than 270 papers on the motivation, roadmap, methodology, challenges, and future trends in end-to-end autonomous driving.",
        'tag': "",
    },
    {
        'title': "DriveLM: Driving with Graph Visual Question Answering",
        'link': "https://arxiv.org/abs/2312.14150",
        'image': "/assets/publication/drivelm.jpg",
        'author': "Chonghao Sima, Katrin Renz, Kashyap Chitta, Li Chen, Hanxue Zhang, Chengen Xie, Ping Luo, Andreas Geiger, Hongyang Li",
        'note': "ECCV 2024 Oral",
        'noteoption': '',
        'star': "https://img.shields.io/github/stars/OpenDriveLab/DriveLM?style=social",
        'starlink': "https://github.com/OpenDriveLab/DriveLM",
        'icon': [
            {
                'type': "dataset",
                'link': "https://github.com/OpenDriveLab/DriveLM",
            },
            {
                'type': "webpage",
                'link': "/DriveLM/",
            },
            {
                'type': "github",
                'link': "https://github.com/OpenDriveLab/DriveLM",
            },
            {
                'type': "hugging_face",
                'link': "https://huggingface.co/datasets/OpenDriveLab-org/DriveLM",
            },
        ],
        'description': "",
        'tag': "",
    },
]


result = []
for p in pub:
    new = {}
    new['title'] = p['title']
    new['authors'] = p['author']
    new['proceedings'] = p['note']
    new['links'] = []
    for icon in p['icon']:
        website = icon['type'].split('_')
        website = [s.capitalize() for s in website]
        website = ' '.join(website)
        new['links'].append({
            'website': website,
            'url': icon['link']
        })
    new['pis'] = []
    if 'Ping Luo' in p['author']:
        new['pis'].append('Ping Luo')
    new['pis'].append('Hongyang Li')
    if 'Xihui Liu' in p['author']:
        new['pis'].append('Xihui Liu')
    if 'Bo Dai' in p['author']:
        new['pis'].append('Bo Dai')

    # key
    new['keys'] = []

    result.append(new)

result = str(result)
result = result.replace("'title'", "title")
result = result.replace("'authors'", "authors")
result = result.replace("'proceedings'", "proceedings")
result = result.replace("'links'", "links")
result = result.replace("'website'", "website")
result = result.replace("'url'", "url")
result = result.replace("'keys'", "keys")
result = result.replace("'pis'", "pis")
print(result)