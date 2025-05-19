import re

pub = [
    {
        'title': "Towards Synergistic, Generalized, and Efficient Dual-System for Robotic Manipulation",
        'link': "https://arxiv.org/abs/2410.08001",
        'image': "/assets/publication/robodual.jpg",
        'author': "Qingwen Bu, Hongyang Li, Li Chen, Jisong Cai, Jia Zeng, Heming Cui, Maoqing Yao, Yu Qiao",
        'note': "arXiv 2024",
        'noteoption': '',
        'star': "https://img.shields.io/github/stars/OpenDriveLab/RoboDual?style=social",
        'starlink': "https://github.com/OpenDriveLab/RoboDual",
        'icon': [
            {
                'type': "github",
                'link': "https://github.com/OpenDriveLab/RoboDual",
            },
            {
                'type': "webpage",
                'link': "/RoboDual/",
            },
        ],
        'description': "Our objective is to develop a synergistic dual-system framework which supplements the generalizability of large-scale pre-trained generalist with the efficient and task-specific adaptation of specialist.",
        'tag': "",
    },
    {
        'title': "Closed-Loop Visuomotor Control with Generative Expectation for Robotic Manipulation",
        'link': "https://arxiv.org/abs/2409.09016",
        'image': "/assets/publication/clover.jpg",
        'author': "Qingwen Bu, Jia Zeng, Li Chen, Yanchao Yang, Guyue Zhou, Junchi Yan, Ping Luo, Heming Cui, Yi Ma, Hongyang Li",
        'note': "NeurIPS 2024",
        'noteoption': '',
        'star': "https://img.shields.io/github/stars/OpenDriveLab/CLOVER?style=social",
        'starlink': "https://github.com/OpenDriveLab/CLOVER",
        'icon': [
            {
                'type': "github",
                'link': "https://github.com/OpenDriveLab/CLOVER",
            },
            {
                'type': "bilibili",
                'link': "https://www.bilibili.com/video/BV1rHqZYeECL",
            },
        ],
        'description': "CLOVER employs a text-conditioned video diffusion model for generating visual plans as reference inputs, then these sub-goals guide the feedback-driven policy to generate actions with an error measurement strategy.",
        'tag': "",
    },
    {
        'title': "Learning Manipulation by Predicting Interaction",
        'link': "https://arxiv.org/abs/2406.00439",
        'image': "/assets/publication/mpi.jpg",
        'author': "Jia Zeng, Qingwen Bu, Bangjun Wang, Wenke Xia, Li Chen, Hao Dong, Haoming Song, Dong Wang, Di Hu, Ping Luo, Heming Cui, Bin Zhao, Xuelong Li, Yu Qiao, Hongyang Li",
        'note': "RSS 2024",
        'noteoption': '',
        'star': "https://img.shields.io/github/stars/OpenDriveLab/MPI?style=social",
        'starlink': "https://github.com/OpenDriveLab/MPI",
        'icon': [
            {
                'type': "webpage",
                'link': "/MPI/",
            },
            {
                'type': "github",
                'link': "https://github.com/OpenDriveLab/MPI",
            },
        ],
        'description': "We propose a general pre-training pipeline that learns Manipulation by Predicting the Interaction (MPI).",
        'tag': "",
    },
]


result = []
for p in pub:
    new = {}
    new['title'] = p['title']
    new['authors'] = p['author']
    new['proceedings'] = p['note']
    new['links'] = [
        {
            'website': 'Paper', 
            'url': p['link']
        }
    ]
    for icon in p['icon']:
        website = icon['type'].split('_')
        website = [s.capitalize() for s in website]
        website = ' '.join(website)
        if website == 'Github':
            website = 'GitHub'
        if website == 'Youtube':
            website = 'YouTube'
        if website == 'Wechat':
            website = 'WeChat'
        if website == 'Bilibili':
            website = 'bilibili'
        if website == 'Webpage':
            website = 'Page'
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
    new['keys'] = ['Embodied AI']
    pattern = r'\d{4}'
    match = re.search(pattern, p['note'])
    if match:
        new['keys'].append(str(match.group(0)))

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