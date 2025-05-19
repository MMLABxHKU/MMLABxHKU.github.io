export const publication_categories: { c1: string; c2s: string[] }[] = [
  {
    c1: 'Topic',
    c2s: [
      '3D Vision',
      'Audio/Speech',
      'Autonomous Driving',
      'Classification',
      'Computer Vision',
      'Dataset/Benchmark',
      'Detection',
      'Domain Adaptation',
      'Efficiency',
      'Embodied AI',
      'Face Recognition',
      'Few-Shot Learning',
      'General',
      'Generative Models',
      'Graph Learning',
      'Machine Learning',
      'Medical Imaging',
      'Multimodality',
      'Navigation',
      'Neural Rendering',
      'Pose Estimation',
      'RL',
      'Self-Supervised',
      'Segmentation',
      'Survey',
      'Transformer',
      'Tracking',
      'Video Understanding',
    ],
  },
  {
    c1: 'Year',
    c2s: [
      '2025',
      '2024',
      '2023',
      '2022',
      '2021',
      '2020',
      '2019',
      '2018',
      '2017',
      '2016',
      '2015',
      '2014',
      '2013',
      '2012',
      '2011',
      '2010',
    ],
  },
  {
    c1: 'PI',
    c2s: ['Ping Luo', 'Xihui Liu', 'Hongyang Li', 'Bo Dai'],
  },
];

export const publications: {
  title: string;
  authors: string;
  proceedings: string;
  links: { website: string; url: string }[];
  keys: string[];
  pis: string[];
}[] = [
  {
    title: 'Planning-oriented Autonomous Driving',
    authors:
      'Yihan Hu, Jiazhi Yang, Li Chen, Keyu Li, Chonghao Sima, Xizhou Zhu, Siqi Chai, Senyao Du, Tianwei Lin, Wenhai Wang, Lewei Lu, Xiaosong Jia, Qiang Liu, Jifeng Dai, Yu Qiao, Hongyang Li',
    proceedings: 'CVPR 2023',
    links: [
      {
        website: 'Paper',
        url: 'https://openaccess.thecvf.com/content/CVPR2023/html/Hu_Planning-Oriented_Autonomous_Driving_CVPR_2023_paper.html',
      },
      {
        website: 'GitHub',
        url: 'https://github.com/OpenDriveLab/UniAD',
      },
      {
        website: 'Video',
        url: 'https://www.youtube.com/watch?v=cyrxJJ_nnaQ',
      },
      {
        website: 'Slides',
        url: 'https://opendrivelab.github.io/UniAD_plenary_talk_slides.pdf',
      },
    ],
    keys: ['2023', 'Autonomous Driving', 'End-to-End'],
    pis: ['Hongyang Li'],
  },
  {
    title:
      'AgiBot World Colosseo: A Large-scale Manipulation Platform for Scalable and Intelligent Embodied Systems',
    authors: 'Team AgiBot World',
    proceedings: 'arXiv 2025',
    links: [
      {
        website: 'Blog',
        url: 'https://opendrivelab.com/blog/agibot-world/',
      },
      {
        website: 'Paper',
        url: 'https://arxiv.org/abs/2503.06669',
      },
      {
        website: 'GitHub',
        url: 'https://github.com/OpenDriveLab/AgiBot-World',
      },
      {
        website: 'Dataset',
        url: 'https://huggingface.co/agibot-world',
      },
      {
        website: 'Page',
        url: 'http://agibot-world.com/',
      },
    ],
    keys: ['2025', 'Embodied AI'],
    pis: ['Hongyang Li'],
  },
  {
    title: 'Closed-Loop Visuomotor Control with Generative Expectation for Robotic Manipulation',
    authors:
      'Qingwen Bu, Jia Zeng, Li Chen, Yanchao Yang, Guyue Zhou, Junchi Yan, Ping Luo, Heming Cui, Yi Ma, Hongyang Li',
    proceedings: 'The Conference on Neural Information Processing Systems (NeurIPS). 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://arxiv.org/abs/2409.09016',
      },
      {
        website: 'GitHub',
        url: 'https://github.com/OpenDriveLab/CLOVER',
      },
      {
        website: 'Video',
        url: 'https://www.bilibili.com/video/BV1rHqZYeECL',
      },
    ],
    keys: ['2024', 'Embodied AI'],
    pis: ['Hongyang Li'],
  },
  {
    title: 'DriveLM: Driving with Graph Visual Question Answering',
    authors:
      'Chonghao Sima, Katrin Renz, Kashyap Chitta, Li Chen, Hanxue Zhang, Chengen Xie, Jens Beißwenger, Ping Luo, Andreas Geiger, Hongyang Li',
    proceedings: 'European Conference on Computer Vision (ECCV), 2024',
    links: [
      {
        website: 'Paper',
        url: 'https://link.springer.com/chapter/10.1007/978-3-031-72943-0_15',
      },
      {
        website: 'GitHub',
        url: 'https://github.com/OpenDriveLab/DriveLM',
      },
      {
        website: 'Dataset',
        url: 'https://huggingface.co/datasets/OpenDriveLab/DriveLM',
      },
      {
        website: 'Page',
        url: 'https://opendrivelab.com/DriveLM/',
      },
    ],
    keys: ['2024', 'Autonomous Driving'],
    pis: ['Hongyang Li'],
  },

  {
    title:
      'Sem-iNeRF: Camera pose refinement by inverting neural radiance fields with semantic feature consistency',
    authors: 'Anran Liu, Xiaoxiao Long, Yuan Liu, Ping Luo, Wenping Wang',
    proceedings: 'Computational Visual Media',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:nPT8s1NX_-sC',
      },
    ],
    keys: ['Neural Rendering', 'Pose Estimation'],
    pis: ['Ping Luo'],
  },
  {
    title: 'RoboTwin: Dual-Arm Robot Benchmark with Generative Digital Twins',
    authors:
      'Yao Mu, Tianxing Chen, Zanxin Chen, Shijia Peng, Zhiqian Lan, Zeyu Gao, Zhixuan Liang, Qiaojun Yu, Yude Zou, Mingkun Xu, Lunkai Lin, Zhiqiang Xie, Mingyu Ding, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2504.13059',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:hQUaER0FWQ4C',
      },
    ],
    keys: ['Embodied AI', 'Generative Models'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Analogcoder: Analog circuit design via training-free code generation',
    authors:
      'Yao Lai, Sungyoung Lee, Guojin Chen, Souradip Poddar, Mengkang Hu, David Z Pan, Ping Luo',
    proceedings: 'Proceedings of the AAAI Conference on Artificial Intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Hck25ST_3aIC',
      },
    ],
    keys: ['Efficiency', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'End-to-end autonomous driving through V2X cooperation',
    authors: 'Haibao Yu, Wenxian Yang, Jiaru Zhong, Zhenwei Yang, Siqi Fan, Ping Luo, Zaiqing Nie',
    proceedings: 'Proceedings of the AAAI Conference on Artificial Intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:mWEH9CqjF64C',
      },
    ],
    keys: ['Autonomous Driving', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Autommlab: Automatically generating deployable models from language instructions for computer vision tasks',
    authors: 'Zekang Yang, Wang Zeng, Sheng Jin, Chen Qian, Ping Luo, Wentao Liu',
    proceedings: 'Proceedings of the AAAI Conference on Artificial Intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:raTqNPD5sRQC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'PixelFlow: Pixel-Space Generative Models with Flow',
    authors: 'Shoufa Chen, Chongjian Ge, Shilong Zhang, Peize Sun, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2504.07963',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:LGlY6t8CeOMC',
      },
    ],
    keys: ['Generative Models', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Styleadapter: A unified stylized image generation model',
    authors:
      'Zhouxia Wang, Xintao Wang, Liangbin Xie, Zhongang Qi, Ying Shan, Wenping Wang, Ping Luo',
    proceedings: 'International Journal of Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:tHtfpZlB6tUC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Forensics-Bench: A Comprehensive Forgery Detection Benchmark Suite for Large Vision Language Models',
    authors:
      'Jin Wang, Chenghui Lv, Xian Li, Shichao Dong, Huadong Li, Chao Li, Wenqi Shao, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2503.15024',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:t-hv7AR41mYC',
      },
    ],
    keys: ['Detection', 'Dataset/Benchmark'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Centaur: Robust End-to-End Autonomous Driving with Test-Time Training',
    authors:
      'Chonghao Sima, Kashyap Chitta, Zhiding Yu, Shiyi Lan, Ping Luo, Andreas Geiger, Hongyang Li, Jose M Alvarez',
    proceedings: 'arXiv preprint arXiv:2503.11650',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:BmWJbWwHJAwC',
      },
    ],
    keys: ['Autonomous Driving', 'Machine Learning'],
    pis: ['Ping Luo', 'Hongyang Li'],
  },
  {
    title:
      'JiSAM: Alleviate Labeling Burden and Corner Case Problems in Autonomous Driving via Minimal Real-World Data',
    authors: 'Runjian Chen, Wenqi Shao, Bo Zhang, Shaoshuai Shi, Li Jiang, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2503.08422',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:hGdtkIFZdKAC',
      },
    ],
    keys: ['Autonomous Driving', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Text2world: Benchmarking large language models for symbolic world model generation',
    authors:
      'Mengkang Hu, Tianxing Chen, Yude Zou, Yuheng Lei, Qiguang Chen, Ming Li, Yao Mu, Hongyuan Zhang, Wenqi Shao, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2502.13092',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:YB4bud6kWLwC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'SAMRefiner: Taming Segment Anything Model for Universal Mask Refinement',
    authors:
      'Yuqi Lin, Hengjia Li, Wenqi Shao, Zheng Yang, Jun Zhao, Xiaofei He, Ping Luo, Kaipeng Zhang',
    proceedings: 'arXiv preprint arXiv:2502.06756',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:8dzOF9BpDQoC',
      },
    ],
    keys: ['Segmentation', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Goku: Flow Based Video Generative Foundation Models',
    authors:
      'Shoufa Chen, Chongjian Ge, Yuqi Zhang, Yida Zhang, Fengda Zhu, Hao Yang, Hongxiang Hao, Hui Wu, Zhichao Lai, Yifei Hu, Ting-Che Lin, Shilong Zhang, Fu Li, Chuan Li, Xing Wang, Yanghua Peng, Peize Sun, Ping Luo, Yi Jiang, Zehuan Yuan, Bingyue Peng, Xiaobing Liu',
    proceedings: 'arXiv preprint arXiv:2502.04896',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:hvmnpdAuIbkC',
      },
    ],
    keys: ['Video Understanding', 'Generative Models'],
    pis: ['Ping Luo'],
  },
  {
    title: 'FlashVideo: Flowing Fidelity to Detail for Efficient High-Resolution Video Generation',
    authors:
      'Shilong Zhang, Wenbo Li, Shoufa Chen, Chongjian Ge, Peize Sun, Yida Zhang, Yi Jiang, Zehuan Yuan, Binyue Peng, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2502.05179',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:RuPIJ_LgqDgC',
      },
    ],
    keys: ['Video Understanding', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'LiT: Delving into a Simplified Linear Diffusion Transformer for Image Generation',
    authors:
      'Jiahao Wang, Ning Kang, Lewei Yao, Mengzhao Chen, Chengyue Wu, Songyang Zhang, Shuchen Xue, Yong Liu, Taiqiang Wu, Xihui Liu, Kaipeng Zhang, Shifeng Zhang, Wenqi Shao, Zhenguo Li, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2501.12976',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Zh0EY9V9P6UC',
      },
    ],
    keys: ['Generative Models', 'Transformer'],
    pis: ['Xihui Liu', 'Ping Luo'],
  },
  {
    title: 'MangaNinja: Line Art Colorization with Precise Reference Following',
    authors:
      'Zhiheng Liu, Ka Leong Cheng, Xi Chen, Jie Xiao, Hao Ouyang, Kai Zhu, Yu Liu, Yujun Shen, Qifeng Chen, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2501.08332',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:KWzIFqRkAKkC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'RIGID: Recurrent GAN Inversion and Editing of Real Face Videos and Beyond',
    authors: 'Yangyang Xu, Shengfeng He, Kwan-Yee K Wong, Ping Luo',
    proceedings: 'International Journal of Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:-uzm3Y7AvW0C',
      },
    ],
    keys: ['Face Recognition', 'Generative Models'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Mm-eureka: Exploring visual aha moment with rule-based large-scale reinforcement learning',
    authors:
      'F Meng, L Du, Z Liu, Z Zhou, Q Lu, D Fu, B Shi, W Wang, J He, K Zhang, P Luo, Y Qiao, Q Zhang, W Shao',
    proceedings: 'arXiv preprint arXiv:2503.07365',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:YTuZlYwrTOUC',
      },
    ],
    keys: ['RL', 'Machine Learning'],
    pis: [],
  },
  {
    title: 'NADER: Neural Architecture Design via Multi-Agent Collaboration',
    authors: 'Zekang Yang, Wang Zeng, Sheng Jin, Chen Qian, Ping Luo, Wentao Liu',
    proceedings: 'arXiv preprint arXiv:2412.19206',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ZqE1mSdD_DYC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'B-AVIBench: Towards Evaluating the Robustness of Large Vision-Language Model on Black-box Adversarial Visual-Instructions',
    authors:
      'Hao Zhang, Wenqi Shao, Hong Liu, Yongqiang Ma, Ping Luo, Yu Qiao, Nanning Zheng, Kaipeng Zhang',
    proceedings: 'IEEE Transactions on Information Forensics and Security',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:NMlhSUseqAsC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'DepthLab: From Partial to Complete',
    authors:
      'Zhiheng Liu, Ka Leong Cheng, Qiuyu Wang, Shuzhe Wang, Hao Ouyang, Bin Tan, Kai Zhu, Yujun Shen, Qifeng Chen, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2412.18153',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:H_jBuBxbQIAC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Prompt-a-video: Prompt your video diffusion model via preference-aligned llm',
    authors:
      'Yatai Ji, Jiacheng Zhang, Jie Wu, Shilong Zhang, Shoufa Chen, Chongjian GE, Peize Sun, Weifeng Chen, Wenqi Shao, Xuefeng Xiao, Weilin Huang, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2412.15156',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:AzKEL7Gb_04C',
      },
    ],
    keys: ['Video Understanding', 'Generative Models'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'ConvBench: A Multi-Turn Conversation Evaluation Benchmark with Hierarchical Ablation Capability for Large Vision-Language Models',
    authors:
      'Shuo Liu, Kaining Ying, Hao Zhang, Yuqi Lin, Tianle Zhang, Chuanhao Li, Yu Qiao, Ping Luo, Wenqi Shao, Kaipeng Zhang',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:z6xuaG2dYH0C',
      },
    ],
    keys: ['Dataset/Benchmark', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Visionllm v2: An end-to-end generalist multimodal large language model for hundreds of vision-language tasks',
    authors:
      'Jiannan Wu, Muyan Zhong, Sen Xing, Zeqiang Lai, Zhaoyang Liu, Zhe Chen, Wenhai Wang, Xizhou Zhu, Lewei Lu, Tong Lu, Ping Luo, Yu Qiao, Jifeng Dai',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:DyXnQzXoVgIC',
      },
    ],
    keys: ['Multimodal', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Needle in a multimodal haystack',
    authors:
      'Weiyun Wang, Shuibo Zhang, Yiming Ren, Yuchen Duan, Tiantong Li, Shuo Liu, Mengkang Hu, Zhe Chen, Kaipeng Zhang, Lewei Lu, Xizhou Zhu, Ping Luo, Yu Qiao, Jifeng Dai, Wenqi Shao, Wenhai Wang',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:silx2ntsSuwC',
      },
    ],
    keys: ['Multimodal', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'DiCoDe: Diffusion-Compressed Deep Tokens for Autoregressive Video Generation with Language Models',
    authors: 'Yizhuo Li, Yuying Ge, Yixiao Ge, Ping Luo, Ying Shan',
    proceedings: 'arXiv preprint arXiv:2412.04446',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:zwpXiJ37cpgC',
      },
    ],
    keys: ['Video Understanding', 'Generative Models'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'CLAP: Unsupervised 3D Representation Learning for Fusion 3D Perception via Curvature Sampling and Prototype Learning',
    authors:
      'Runjian Chen, Hang Zhang, Avinash Ravichandran, Hyoungseob Park, Wenqi Shao, Alex Wong, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2412.03059',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:CNPyR2KL9-0C',
      },
    ],
    keys: ['3D Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'TREND: Unsupervised 3D Representation Learning via Temporal Forecasting for LiDAR Perception',
    authors: 'Runjian Chen, Hyoungseob Park, Bo Zhang, Wenqi Shao, Ping Luo, Alex Wong',
    proceedings: 'arXiv preprint arXiv:2412.03054',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:NxmKEeNBbOMC',
      },
    ],
    keys: ['3D Vision', 'Video Understanding'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Open-vocabulary animal keypoint detection with semantic-feature matching',
    authors:
      'Hao Zhang, Lumin Xu, Shenqi Lai, Wenqi Shao, Nanning Zheng, Ping Luo, Yu Qiao, Kaipeng Zhang',
    proceedings: 'International Journal of Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:g5Ck-dwhA_QC',
      },
    ],
    keys: ['Detection', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'G3Flow: Generative 3D Semantic Flow for Pose-aware and Generalizable Object Manipulation',
    authors:
      'Tianxing Chen, Yao Mu, Zhixuan Liang, Zanxin Chen, Shijia Peng, Qiangyu Chen, Mingkun Xu, Ruizhen Hu, Hongyuan Zhang, Xuelong Li, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2411.18369',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:EsEWqaRxkBgC',
      },
    ],
    keys: ['3D Vision', 'Generative Models'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Dexdiffuser: Interaction-aware diffusion planning for adaptive dexterous manipulation',
    authors:
      'Zhixuan Liang, Yao Mu, Yixiao Wang, Fei Ni, Tianxing Chen, Wenqi Shao, Wei Zhan, Masayoshi Tomizuka, Ping Luo, Mingyu Ding',
    proceedings: 'arXiv preprint arXiv:2411.18562',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:unp9ATQDT5gC',
      },
    ],
    keys: ['Generative Models', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Lvlm-ehub: A comprehensive evaluation benchmark for large vision-language models',
    authors:
      'Peng Xu, Wenqi Shao, Kaipeng Zhang, Peng Gao, Shuo Liu, Meng Lei, Fanqing Meng, Siyuan Huang, Yu Qiao, Ping Luo',
    proceedings: 'IEEE Transactions on Pattern Analysis and Machine Intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:FiytvqdAVhgC',
      },
    ],
    keys: ['Dataset/Benchmark', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Autoregressive Models in Vision: A Survey',
    authors:
      'Jing Xiong, Gongye Liu, Lun Huang, Chengyue Wu, Taiqiang Wu, Yao Mu, Yuan Yao, Hui Shen, Zhongwei Wan, Jinfa Huang, Chaofan Tao, Shen Yan, Huaxiu Yao, Lingpeng Kong, Hongxia Yang, Mi Zhang, Guillermo Sapiro, Jiebo Luo, Ping Luo, Ngai Wong',
    proceedings: 'arXiv preprint arXiv:2411.05902',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:-6RzNnnwWf8C',
      },
    ],
    keys: ['Survey', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'MoLE: Enhancing Human-centric Text-to-image Diffusion via Mixture of Low-rank Experts',
    authors: 'Jie Zhu, Yixiong Chen, Mingyu Ding, Ping Luo, Leye Wang, Jingdong Wang',
    proceedings: 'arXiv preprint arXiv:2410.23332',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:SAZ1SQo2q1kC',
      },
    ],
    keys: ['Generative Models', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'CompGS: Unleashing 2D Compositionality for Compositional Text-to-3D via Dynamically Optimizing 3D Gaussians',
    authors:
      'Chongjian Ge, Chenfeng Xu, Yuanfeng Ji, Chensheng Peng, Masayoshi Tomizuka, Ping Luo, Mingyu Ding, Varun Jampani, Wei Zhan',
    proceedings: 'arXiv preprint arXiv:2410.20723',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:D_tqNUsBuKoC',
      },
    ],
    keys: ['3D Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Janus: Decoupling visual encoding for unified multimodal understanding and generation',
    authors:
      'Chengyue Wu, Xiaokang Chen, Zhiyu Wu, Yiyang Ma, Xingchao Liu, Zizheng Pan, Wen Liu, Zhenda Xie, Xingkai Yu, Chong Ruan, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2410.13848',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:L_l9e5I586QC',
      },
    ],
    keys: ['Multimodal', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Dynamic Multimodal Evaluation with Flexible Complexity by Vision-Language Bootstrapping',
    authors: 'Yue Yang, Shuibai Zhang, Wenqi Shao, Kaipeng Zhang, Yi Bin, Yu Wang, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2410.08695',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:qE4H1tSSYIIC',
      },
    ],
    keys: ['Multimodal', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'DCP: Learning Accelerator Dataflow for Neural Network via Propagation',
    authors: 'Peng Xu, Wenqi Shao, Mingyu Ding, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2410.06553',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:C33y2ycGS3YC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Towards world simulator: Crafting physical commonsense-based benchmark for video generation',
    authors:
      'Fanqing Meng, Jiaqi Liao, Xinyu Tan, Wenqi Shao, Quanfeng Lu, Kaipeng Zhang, Yu Cheng, Dianqi Li, Yu Qiao, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2410.05363',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Wq2b2clWBLsC',
      },
    ],
    keys: ['Video Understanding', 'Dataset/Benchmark'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Prefixquant: Static quantization beats dynamic through prefixed outliers in llms',
    authors: 'Mengzhao Chen, Yi Liu, Jiahao Wang, Yi Bin, Wenqi Shao, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2410.05265',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:isU91gLudPYC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'HRVMamba: High-Resolution Visual State Space Model for Dense Prediction',
    authors: 'Hao Zhang, Yongqiang Ma, Wenqi Shao, Ping Luo, Nanning Zheng, Kaipeng Zhang',
    proceedings: 'arXiv preprint arXiv:2410.03174',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:AYInfyleIOsC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Tooth Motion Monitoring in Orthodontic Treatment by Mobile Device-based Multi-view Stereo',
    authors:
      'Jiaming Xie, Congyi Zhang, Guangshun Wei, Peng Wang, Guodong Wei, Wenxi Liu, Min Gu, Ping Luo, Wenping Wang',
    proceedings: 'IEEE Transactions on Visualization and Computer Graphics',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:eAlLMO4JVmQC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Segment, lift and fit: Automatic 3d shape labeling from 2d prompts',
    authors:
      'Jianhao Li, Tianyu Sun, Zhongdao Wang, Enze Xie, Bailan Feng, Hongbo Zhang, Ze Yuan, Ke Xu, Jiaheng Liu, Ping Luo',
    proceedings: 'European Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:-DxkuPiZhfEC',
      },
    ],
    keys: ['3D Vision', 'Segmentation'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'When pedestrian detection meets multi-modal learning: Generalist model and benchmark dataset',
    authors: 'Yi Zhang, Wang Zeng, Sheng Jin, Chen Qian, Ping Luo, Wentao Liu',
    proceedings: 'European Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:v6i8RKmR8ToC',
      },
    ],
    keys: ['Detection', 'Multimodal'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Unifs: universal few-shot instance perception with point representations',
    authors: 'Sheng Jin, Ruijie Yao, Lumin Xu, Wentao Liu, Chen Qian, Ji Wu, Ping Luo',
    proceedings: 'European Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:wvYxNZNCP7wC',
      },
    ],
    keys: ['3D Vision', 'Few-Shot Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'PIXART-: Weak-to-Strong Training of Diffusion Transformer for 4K Text-to-Image Generation',
    authors:
      'Junsong Chen, Chongjian Ge, Enze Xie, Yue Wu, Lewei Yao, Xiaozhe Ren, Zhongdao Wang, Ping Luo, Huchuan Lu, Zhenguo Li',
    proceedings: 'European Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:An6A6Jpfc1oC',
      },
    ],
    keys: ['Generative Models', 'Transformer'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Drivelm: Driving with graph visual question answering',
    authors:
      'Chonghao Sima, Katrin Renz, Kashyap Chitta, Li Chen, Hanxue Zhang, Chengen Xie, Jens Beißwenger, Ping Luo, Andreas Geiger, Hongyang Li',
    proceedings: 'European Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:mKu_rENv82IC',
      },
    ],
    keys: ['Autonomous Driving', 'Graph Learning'],
    pis: ['Ping Luo', 'Hongyang Li'],
  },
  {
    title:
      'You only learn one query: learning unified human query for single-stage multi-person multi-task human-centric perception',
    authors: 'Sheng Jin, Shuhuai Li, Tong Li, Wentao Liu, Chen Qian, Ping Luo',
    proceedings: 'European Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:PyEswDtIyv0C',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Gkgnet: Group k-nearest neighbor based graph convolutional network for multi-label image recognition',
    authors: 'Ruijie Yao, Sheng Jin, Lumin Xu, Wang Zeng, Wentao Liu, Chen Qian, Ping Luo, Ji Wu',
    proceedings: 'European Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:-mN3Mh-tlDkC',
      },
    ],
    keys: ['Graph Learning', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Articulated object manipulation using online axis estimation with sam2-based tracking',
    authors:
      'Xi Wang, Tianxing Chen, Qiaojun Yu, Tianling Xu, Zanxin Chen, Yiting Fu, Ziqi He, Cewu Lu, Yao Mu, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2409.16287',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:RJOyoaXV5v8C',
      },
    ],
    keys: ['Tracking', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Analysis and Benchmarking of Extending Blind Face Image Restoration to Videos',
    authors:
      'Zhouxia Wang, Jiawei Zhang, Xintao Wang, Tianshui Chen, Ying Shan, Wenping Wang, Ping Luo',
    proceedings: 'IEEE Transactions on Image Processing',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:2ywjKiB__4kC',
      },
    ],
    keys: ['Face Recognition', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Closed-loop visuomotor control with generative expectation for robotic manipulation',
    authors:
      'Qingwen Bu, Jia Zeng, Li Chen, Yanchao Yang, Guyue Zhou, Junchi Yan, Ping Luo, Heming Cui, Yi Ma, Hongyang Li',
    proceedings: 'arXiv preprint arXiv:2409.09016',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:0aBXIfxlw9sC',
      },
    ],
    keys: ['Embodied AI', 'Generative Models'],
    pis: ['Ping Luo', 'Hongyang Li'],
  },
  {
    title: 'Robotwin: Dual-arm robot benchmark with generative digital twins (early version)',
    authors:
      'Yao Mu, Tianxing Chen, Shijia Peng, Zanxin Chen, Zeyu Gao, Yude Zou, Lunkai Lin, Zhiqiang Xie, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2409.02920',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:eGYfIraVYiQC',
      },
    ],
    keys: ['Embodied AI', 'Generative Models'],
    pis: ['Ping Luo'],
  },
  {
    title: 'End-to-end video text spotting with transformer',
    authors: 'Weijia Wu, Yuanqiang Cai, Chunhua Shen, Debing Zhang, Ying Fu, Hong Zhou, Ping Luo',
    proceedings: 'International Journal of Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:hCrLmN-GePgC',
      },
    ],
    keys: ['Video Understanding', 'Transformer'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Task-Oriented Diffusion Inversion for High-Fidelity Text-based Editing',
    authors: 'Yangyang Xu, Wenqi Shao, Yong Du, Haiming Zhu, Yang Zhou, Ping Luo, Shengfeng He',
    proceedings: 'arXiv preprint arXiv:2408.13395',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ghEM2AJqZyQC',
      },
    ],
    keys: ['Generative Models', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Hiagent: Hierarchical working memory management for solving long-horizon agent tasks with large language model',
    authors: 'Mengkang Hu, Tianxing Chen, Qiguang Chen, Yao Mu, Wenqi Shao, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2408.09559',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:wE-fMHVdjMkC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Mmiu: Multimodal multi-image understanding for evaluating large vision-language models',
    authors:
      'Fanqing Meng, Jin Wang, Chuanhao Li, Quanfeng Lu, Hao Tian, Jiaqi Liao, Xizhou Zhu, Jifeng Dai, Yu Qiao, Ping Luo, Kaipeng Zhang, Wenqi Shao',
    proceedings: 'arXiv preprint arXiv:2408.02718',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:kJDgFkosVoMC',
      },
    ],
    keys: ['Multimodal', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Agentgen: Enhancing planning abilities for large language model based agent via environment and task generation',
    authors:
      'Mengkang Hu, Pu Zhao, Can Xu, Qingfeng Sun, Jianguang Lou, Qingwei Lin, Ping Luo, Saravan Rajmohan',
    proceedings: 'arXiv preprint arXiv:2408.00764',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:zdjWy_NXXwUC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Diffree: Text-guided shape free object inpainting with diffusion model',
    authors:
      'Lirui Zhao, Tianshuo Yang, Wenqi Shao, Yuxin Zhang, Yu Qiao, Ping Luo, Kaipeng Zhang, Rongrong Ji',
    proceedings: 'arXiv preprint arXiv:2407.16982',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:YlPif8NxrbYC',
      },
    ],
    keys: ['Generative Models', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Scaling laws with vocabulary: Larger models deserve larger vocabularies',
    authors:
      'Chaofan Tao, Qian Liu, Longxu Dou, Niklas Muennighoff, Zhongwei Wan, Ping Luo, Min Lin, Ngai Wong',
    proceedings: 'arXiv preprint arXiv:2407.13623',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:X9ykpCP0fEIC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Part123: part-aware 3d reconstruction from a single-view image',
    authors:
      'Anran Liu, Cheng Lin, Yuan Liu, Xiaoxiao Long, Zhiyang Dou, Hao-Xiang Guo, Ping Luo, Wenping Wang',
    proceedings: 'ACM SIGGRAPH 2024 Conference Papers',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:UuEBAcK4md4C',
      },
    ],
    keys: ['3D Vision', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Motionctrl: A unified and flexible motion controller for video generation',
    authors:
      'Zhouxia Wang, Ziyang Yuan, Xintao Wang, Yaowei Li, Tianshui Chen, Menghan Xia, Ping Luo, Ying Shan',
    proceedings: 'ACM SIGGRAPH 2024 Conference Papers',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:QyXJ3EUuO1IC',
      },
    ],
    keys: ['Video Understanding', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'TCFormer: Visual Recognition via Token Clustering Transformer',
    authors:
      'Wang Zeng, Sheng Jin, Lumin Xu, Wentao Liu, Chen Qian, Wanli Ouyang, Ping Luo, Xiaogang Wang',
    proceedings: 'IEEE Transactions on Pattern Analysis and Machine Intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:hSRAE-fF4OAC',
      },
    ],
    keys: ['Transformer', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Efficientqat: Efficient quantization-aware training for large language models',
    authors: 'Mengzhao Chen, Wenqi Shao, Peng Xu, Jiahao Wang, Peng Gao, Kaipeng Zhang, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2407.11062',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:27LrP4qxOz0C',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Ida-vlm: Towards movie understanding via id-aware large vision-language model',
    authors:
      'Yatai Ji, Shilong Zhang, Jie Wu, Peize Sun, Weifeng Chen, Xuefeng Xiao, Sidi Yang, Yujiu Yang, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2407.07577',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:qwy9JoKyICEC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Phybench: A physical commonsense benchmark for evaluating text-to-image models',
    authors:
      'Fanqing Meng, Wenqi Shao, Lixin Luo, Yahong Wang, Yiran Chen, Quanfeng Lu, Yue Yang, Tianshuo Yang, Kaipeng Zhang, Yu Qiao, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2406.11802',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:qe6vwMD2xtsC',
      },
    ],
    keys: ['Dataset/Benchmark', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Dag-plan: Generating directed acyclic dependency graphs for dual-arm cooperative planning',
    authors: 'Zeyu Gao, Yao Mu, Jinye Qu, Mengkang Hu, Lingyue Guo, Ping Luo, Yanfeng Lu',
    proceedings: 'arXiv preprint arXiv:2406.09953',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:8Xgff_V0N9gC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Rethinking Human Evaluation Protocol for Text-to-Video Models: Enhancing Reliability, Reproducibility, and Practicality',
    authors:
      'Tianle Zhang, Langtian Ma, Yuchen Yan, Yuchen Zhang, Kai Wang, Yue Yang, Ziyao Guo, Wenqi Shao, Yang You, Yu Qiao, Ping Luo, Kaipeng Zhang',
    proceedings: 'arXiv preprint arXiv:2406.08845',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:CYCckWUYoCcC',
      },
    ],
    keys: ['Video Understanding', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Gui odyssey: A comprehensive dataset for cross-app gui navigation on mobile devices',
    authors:
      'Quanfeng Lu, Wenqi Shao, Zitao Liu, Fanqing Meng, Boxuan Li, Botong Chen, Siyuan Huang, Kaipeng Zhang, Yu Qiao, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2406.08451',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:SIv7DqKytYAC',
      },
    ],
    keys: ['Dataset/Benchmark', 'Navigation'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Autoregressive model beats diffusion: Llama for scalable image generation',
    authors: 'Peize Sun, Yi Jiang, Shoufa Chen, Shilong Zhang, Bingyue Peng, Ping Luo, Zehuan Yuan',
    proceedings: 'arXiv preprint arXiv:2406.06525',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:UmS_249rOGwC',
      },
    ],
    keys: ['Generative Models', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Learning manipulation by predicting interaction',
    authors:
      'Jia Zeng, Qingwen Bu, Bangjun Wang, Wenke Xia, Li Chen, Hao Dong, Haoming Song, Dong Wang, Di Hu, Ping Luo, Heming Cui, Bin Zhao, Xuelong Li, Yu Qiao, Hongyang Li',
    proceedings: 'arXiv preprint arXiv:2406.00439',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:LXmCCkuhhTsC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo', 'Hongyang Li'],
  },
  {
    title:
      'Diagnosing the compositional knowledge of vision language models from a game-theoretic view',
    authors: 'Jin Wang, Shichao Dong, Yapeng Zhu, Kelu Yao, Weidong Zhao, Chao Li, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2405.17201',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:65Yg0jNCQDAC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'SearchLVLMs: A Plug-and-Play Framework for Augmenting Large Vision-Language Models by Searching Up-to-Date Internet Knowledge',
    authors:
      'Chuanhao Li, Zhen Li, Chenchen Jing, Shuo Liu, Wenqi Shao, Yuwei Wu, Ping Luo, Yu Qiao, Kaipeng Zhang',
    proceedings: 'arXiv preprint arXiv:2405.14554',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:T_ojBgVMvoEC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Enhance sample efficiency and robustness of end-to-end urban autonomous driving via semantic masked world model',
    authors: 'Zeyu Gao, Yao Mu, Chen Chen, Jingliang Duan, Ping Luo, Yanfeng Lu, Shengbo Eben Li',
    proceedings: 'IEEE Transactions on Intelligent Transportation Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:OcBU2YAGkTUC',
      },
    ],
    keys: ['Autonomous Driving', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Prototypical Context-Aware Dynamics for Generalization in Visual Control With Model-Based Reinforcement Learning',
    authors:
      'Junjie Wang, Qichao Zhang, Yao Mu, Dong Li, Dongbin Zhao, Yuzheng Zhuang, Ping Luo, Bin Wang, Jianye Hao',
    proceedings: 'IEEE Transactions on Industrial Informatics',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:IsPWOBWtZBwC',
      },
    ],
    keys: ['RL', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'KET-QA: A Dataset for Knowledge Enhanced Table Question Answering',
    authors: 'Mengkang Hu, Haoyu Dong, Ping Luo, Shi Han, Dongmei Zhang',
    proceedings: 'arXiv preprint arXiv:2405.08099',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:jSAVyFp_754C',
      },
    ],
    keys: ['Dataset/Benchmark', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Plot2code: A comprehensive benchmark for evaluating multi-modal large language models in code generation from scientific plots',
    authors:
      'Chengyue Wu, Yixiao Ge, Qiushan Guo, Jiahao Wang, Zhixuan Liang, Zeyu Lu, Ying Shan, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2405.07990',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:PkcyUWeTMh0C',
      },
    ],
    keys: ['Multimodal', 'Dataset/Benchmark'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Scalable and effective arithmetic tree generation for adder and multiplier designs',
    authors: 'Yao Lai, Jinxin Liu, David Z Pan, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2405.06758',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:rbm3iO8VlycC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'UDKAG: Augmenting Large Vision-Language Models with Up-to-Date Knowledge',
    authors:
      'Chuanhao Li, Zhen Li, Chenchen Jing, Shuo Liu, Wenqi Shao, Yuwei Wu, Ping Luo, Yu Qiao, Kaipeng Zhang',
    proceedings: 'arXiv e-prints',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:zGdJYJv2LkUC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Mmt-bench: A comprehensive multimodal benchmark for evaluating large vision-language models towards multitask agi',
    authors:
      'Kaining Ying, Fanqing Meng, Jin Wang, Zhiqian Li, Han Lin, Yue Yang, Hao Zhang, Wenbo Zhang, Yuqi Lin, Shuo Liu, Jiayi Lei, Quanfeng Lu, Runjian Chen, Peng Xu, Renrui Zhang, Haozhe Zhang, Peng Gao, Yali Wang, Yu Qiao, Ping Luo, Kaipeng Zhang, Wenqi Shao',
    proceedings: 'arXiv preprint arXiv:2404.16006',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:HJSXoJQnj-YC',
      },
    ],
    keys: ['Multimodal', 'Dataset/Benchmark'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Align, Adapt and Inject: Audio-Guided Image Generation, Editing and Stylization',
    authors: 'Yue Yang, Kaipeng Zhang, Yuying Ge, Wenqi Shao, Zeyue Xue, Yu Qiao, Ping Luo',
    proceedings:
      'ICASSP 2024-2024 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:pS0ncopqnHgC',
      },
    ],
    keys: ['Audio/Speech', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Adapting llama decoder to vision transformer',
    authors:
      'Jiahao Wang, Wenqi Shao, Mengzhao Chen, Chengyue Wu, Yong Liu, Taiqiang Wu, Kaipeng Zhang, Songyang Zhang, Kai Chen, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2404.06773',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:DrR-2ekChdkC',
      },
    ],
    keys: ['Transformer', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Convbench: A multi-turn conversation evaluation benchmark with hierarchical capability for large vision-language models',
    authors:
      'Shuo Liu, Kaining Ying, Hao Zhang, Yue Yang, Yuqi Lin, Tianle Zhang, Chuanhao Li, Yu Qiao, Ping Luo, Wenqi Shao, Kaipeng Zhang',
    proceedings: 'arXiv preprint arXiv:2403.20194',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:rTD5ala9j4wC',
      },
    ],
    keys: ['Dataset/Benchmark', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Drivecot: Integrating chain-of-thought reasoning with end-to-end driving',
    authors: 'Tianqi Wang, Enze Xie, Ruihang Chu, Zhenguo Li, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2403.16996',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:eO3_k5sD8BwC',
      },
    ],
    keys: ['Autonomous Driving', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Flashface: Human image personalization with high-fidelity identity preservation',
    authors:
      'Shilong Zhang, Lianghua Huang, Xi Chen, Yifei Zhang, Zhi-Fan Wu, Yutong Feng, Wei Wang, Yujun Shen, Yu Liu, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2403.17008',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:DkZNVXde3BIC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Cached transformers: Improving transformers with differentiable memory cachde',
    authors: 'Zhaoyang Zhang, Wenqi Shao, Yixiao Ge, Xiaogang Wang, Jinwei Gu, Ping Luo',
    proceedings: 'Proceedings of the AAAI conference on artificial intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:NDuN12AVoxsC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Deepaccident: A motion and accident prediction benchmark for v2x autonomous driving',
    authors:
      'Tianqi Wang, Sukmin Kim, Ji Wenxuan, Enze Xie, Chongjian Ge, Junsong Chen, Zhenguo Li, Ping Luo',
    proceedings: 'Proceedings of the AAAI Conference on Artificial Intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:F1b5ZUV5XREC',
      },
    ],
    keys: ['Autonomous Driving', 'Dataset/Benchmark'],
    pis: ['Ping Luo'],
  },
  {
    title: 'GenAD: Generalized Predictive Model for Autonomous Driving',
    authors:
      'Jiazhi Yang, Shenyuan Gao, Yihang Qiu, Li Chen, Tianyu Li, Bo Dai, Kashyap Chitta, Penghao Wu, Jia Zeng, Ping Luo, Jun Zhang, Andreas Geiger, Yu Qiao, Hongyang Li',
    proceedings: 'arXiv preprint arXiv:2403.09630',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:G1UMdFYMoxkC',
      },
    ],
    keys: ['Autonomous Driving', 'Machine Learning'],
    pis: ['Bo Dai', 'Ping Luo', 'Hongyang Li'],
  },
  {
    title: 'Generalized Predictive Model for Autonomous Driving',
    authors:
      'Hongyang Li, Yu Qiao, Andreas Geiger, Jun Zhang, Ping Luo, Jia Zeng, Penghao Wu, Kashyap Chitta, Bo Dai, Tianyu Li, Li Chen, Yihang Qiu, Shenyuan Gao, Jiazhi Yang',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:k_7cPK9k7w8C',
      },
    ],
    keys: ['Autonomous Driving', 'Machine Learning'],
    pis: ['Hongyang Li', 'Ping Luo', 'Bo Dai'],
  },
  {
    title: 'Position: Towards implicit prompt for text-to-image models',
    authors:
      'Yue Yang, Yuqi Lin, Hong Liu, Wenqi Shao, Runjian Chen, Hailong Shang, Yu Wang, Yu Qiao, Kaipeng Zhang, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2403.02118',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:EPG8bYD4jVwC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Avibench: Towards evaluating the robustness of large vision-language model on adversarial visual-instructions',
    authors: 'Hao Zhang, Wenqi Shao, Hong Liu, Yongqiang Ma, Ping Luo, Yu Qiao, Kaipeng Zhang',
    proceedings: 'arXiv e-prints',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:SGW5VrABaM0C',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Robocodex: Multimodal code generation for robotic behavior synthesis',
    authors:
      'Yao Mu, Junting Chen, Qinglong Zhang, Shoufa Chen, Qiaojun Yu, Chongjian Ge, Runjian Chen, Zhixuan Liang, Mengkang Hu, Chaofan Tao, Peize Sun, Haibao Yu, Chao Yang, Wenqi Shao, Wenhai Wang, Jifeng Dai, Yu Qiao, Mingyu Ding, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2402.16117',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:YsrPvlHIBpEC',
      },
    ],
    keys: ['Embodied AI', 'Multimodal'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Roboscript: Code generation for free-form manipulation tasks across real and simulation',
    authors:
      'Junting Chen, Yao Mu, Qiaojun Yu, Tianming Wei, Silang Wu, Zhecheng Yuan, Zhixuan Liang, Chao Yang, Kaipeng Zhang, Wenqi Shao, Yu Qiao, Huazhe Xu, Mingyu Ding, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2402.14623',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:mUJArPsKIAAC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Besa: Pruning large language models with blockwise parameter-efficient sparsity allocation',
    authors:
      'Peng Xu, Wenqi Shao, Mengzhao Chen, Shitao Tang, Kaipeng Zhang, Peng Gao, Fengwei An, Yu Qiao, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2402.16880',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:-nhnvRiOwuoC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Chip placement method and apparatus, and storage medium',
    authors: 'P Luo, Y Lai, MU Yao',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:KNjnJ3z-R6IC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: [],
  },
  {
    title: 'Pixart-{\delta}: Fast and controllable image generation with latent consistency models',
    authors:
      'Junsong Chen, Yue Wu, Simian Luo, Enze Xie, Sayak Paul, Ping Luo, Hang Zhao, Zhenguo Li',
    proceedings: 'arXiv preprint arXiv:2401.05252',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:uVUOdF_882EC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Llama pro: Progressive llama with block expansion',
    authors:
      'Chengyue Wu, Yukang Gan, Yixiao Ge, Zeyu Lu, Jiahao Wang, Ye Feng, Ying Shan, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2401.02415',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:O0nohqN1r9EC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Chartassisstant: A universal chart multimodal language model via chart-to-table pre-training and multitask instruction tuning',
    authors: 'Fanqing Meng, Wenqi Shao, Quanfeng Lu, Peng Gao, Kaipeng Zhang, Yu Qiao, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2401.02384',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:-95Q15plzcUC',
      },
    ],
    keys: ['Multimodal', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Towards Implicit Prompt For Text-To-Image Models',
    authors:
      'Yue Yang, Hong Liu, Wenqi Shao, Runjian Chen, Hailong Shang, Yu Wang, Yu Qiao, Kaipeng Zhang, Ping Luo',
    proceedings: 'CoRR',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:-yGd096yOn8C',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Diffagent: Fast and accurate text-to-image api selection with large language model',
    authors:
      'Lirui Zhao, Yue Yang, Kaipeng Zhang, Wenqi Shao, Yuxin Zhang, Yu Qiao, Ping Luo, Rongrong Ji',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:69ZgNCALVd0C',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Generalized predictive model for autonomous driving',
    authors:
      'Jiazhi Yang, Shenyuan Gao, Yihang Qiu, Li Chen, Tianyu Li, Bo Dai, Kashyap Chitta, Penghao Wu, Jia Zeng, Ping Luo, Jun Zhang, Andreas Geiger, Yu Qiao, Hongyang Li',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:2l5NCbZemmgC',
      },
    ],
    keys: ['Autonomous Driving', 'Machine Learning'],
    pis: ['Bo Dai', 'Ping Luo', 'Hongyang Li'],
  },
  {
    title: 'Regiongpt: Towards region understanding vision language model',
    authors:
      'Qiushan Guo, Shalini De Mello, Hongxu Yin, Wonmin Byeon, Ka Chun Cheung, Yizhou Yu, Ping Luo, Sifei Liu',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:5bg8sr1QxYwC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Program: Prototype graph model based pseudo-label learning for test-time adaptation',
    authors: 'Haopeng Sun, Lumin Xu, Sheng Jin, Ping Luo, Chen Qian, Wentao Liu',
    proceedings: 'The Twelfth International Conference on Learning Representations',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:F2UWTTQJPOcC',
      },
    ],
    keys: ['Graph Learning', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Omnimedvqa: A new large-scale comprehensive evaluation benchmark for medical lvlm',
    authors: 'Yutao Hu, Tianbin Li, Quanfeng Lu, Wenqi Shao, Junjun He, Yu Qiao, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:VN7nJs4JPk0C',
      },
    ],
    keys: ['Medical Imaging', 'Dataset/Benchmark'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Internvl: Scaling up vision foundation models and aligning for generic visual-linguistic tasks',
    authors:
      'Zhe Chen, Jiannan Wu, Wenhai Wang, Weijie Su, Guo Chen, Sen Xing, Muyan Zhong, Qinglong Zhang, Xizhou Zhu, Lewei Lu, Bin Li, Ping Luo, Tong Lu, Yu Qiao, Jifeng Dai',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:RoXSNcbkSzsC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Skilldiffuser: Interpretable hierarchical planning via skill abstractions in diffusion-based task execution',
    authors: 'Zhixuan Liang, Yao Mu, Hengbo Ma, Masayoshi Tomizuka, Mingyu Ding, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:sszUF3NjhM4C',
      },
    ],
    keys: ['Generative Models', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Gentron: Diffusion transformers for image and video generation',
    authors:
      'Shoufa Chen, Mengmeng Xu, Jiawei Ren, Yuren Cong, Sen He, Yanping Xie, Animesh Sinha, Ping Luo, Tao Xiang, Juan-Manuel Perez-Rua',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:-jrNzM816MMC',
      },
    ],
    keys: ['Video Understanding', 'Generative Models'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Mvbench: A comprehensive multi-modal video understanding benchmark',
    authors:
      'Kunchang Li, Yali Wang, Yinan He, Yizhuo Li, Yi Wang, Yi Liu, Zun Wang, Jilan Xu, Guo Chen, Ping Luo, Limin Wang, Yu Qiao',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:HGTzPopzzJcC',
      },
    ],
    keys: ['Video Understanding', 'Multimodal'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Context autoencoder for self-supervised representation learning',
    authors:
      'Xiaokang Chen, Mingyu Ding, Xiaodi Wang, Ying Xin, Shentong Mo, Yunhao Wang, Shumin Han, Ping Luo, Gang Zeng, Jingdong Wang',
    proceedings: 'International Journal of Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:q3CdL3IzO_QC',
      },
    ],
    keys: ['Self-Supervised', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Video understanding with large language models: A survey',
    authors:
      'Yunlong Tang, Jing Bi, Siting Xu, Luchuan Song, Susan Liang, Teng Wang, Daoan Zhang, Jie An, Jingyang Lin, Rongyi Zhu, Ali Vosoughi, Chao Huang, Zeliang Zhang, Pinxin Liu, Mingqian Feng, Feng Zheng, Jianguo Zhang, Ping Luo, Jiebo Luo, Chenliang Xu',
    proceedings: 'arXiv preprint arXiv:2312.17432',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:1DsIQWDZLl8C',
      },
    ],
    keys: ['Video Understanding', 'Survey'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Uniref++: Segment every reference object in spatial and temporal spaces',
    authors: 'Jiannan Wu, Yi Jiang, Bin Yan, Huchuan Lu, Zehuan Yuan, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2312.15715',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:kWvqk_afx_IC',
      },
    ],
    keys: ['Segmentation', 'Video Understanding'],
    pis: ['Ping Luo'],
  },
  {
    title: 'A survey of reasoning with foundation models',
    authors:
      'Jiankai Sun, Chuanyang Zheng, Enze Xie, Zhengying Liu, Ruihang Chu, Jianing Qiu, Jiaqi Xu, Mingyu Ding, Hongyang Li, Mengzhe Geng, Yue Wu, Wenhai Wang, Junsong Chen, Zhangyue Yin, Xiaozhe Ren, Jie Fu, Junxian He, Wu Yuan, Qi Liu, Xihui Liu, Yu Li, Hao Dong, Yu Cheng, Ming Zhang, Pheng Ann Heng, Jifeng Dai, Ping Luo, Jingdong Wang, Ji-Rong Wen, Xipeng Qiu, Yike Guo, Hui Xiong, Qun Liu, Zhenguo Li',
    proceedings: 'arXiv preprint arXiv:2312.11562',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:U_HPUtbDl20C',
      },
    ],
    keys: ['Survey', 'Machine Learning'],
    pis: ['Hongyang Li', 'Xihui Liu', 'Ping Luo'],
  },
  {
    title: 'Flow-based feature fusion for vehicle-infrastructure cooperative 3d object detection',
    authors: 'Haibao Yu, Yingjuan Tang, Enze Xie, Jilei Mao, Ping Luo, Zaiqing Nie',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:-7ulzOJl1JYC',
      },
    ],
    keys: ['Autonomous Driving', '3D Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Openlane-v2: A topology reasoning benchmark for unified 3d hd mapping',
    authors:
      'Huijie Wang, Tianyu Li, Yang Li, Li Chen, Chonghao Sima, Zhenbo Liu, Bangjun Wang, Peijin Jia, Yuting Wang, Shengyin Jiang, Feng Wen, Hang Xu, Ping Luo, Junchi Yan, Wei Zhang, Hongyang Li',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:1Ye0OR6EYb4C',
      },
    ],
    keys: ['3D Vision', 'Dataset/Benchmark'],
    pis: ['Ping Luo', 'Hongyang Li'],
  },
  {
    title: 'Foundation model is efficient multimodal multitask model selector',
    authors: 'Fanqing Meng, Wenqi Shao, Chonghe Jiang, Kaipeng Zhang, Yu Qiao, Ping Luo',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:XUvXOeBm_78C',
      },
    ],
    keys: ['Multimodal', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Raphael: Text-to-image generation via large mixture of diffusion paths',
    authors: 'Zeyue Xue, Guanglu Song, Qiushan Guo, Boxiao Liu, Zhuofan Zong, Yu Liu, Ping Luo',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:cK4Rrx0J3m0C',
      },
    ],
    keys: ['Generative Models', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Embodiedgpt: Vision-language pre-training via embodied chain of thought',
    authors:
      'Yao Mu, Qinglong Zhang, Mengkang Hu, Wenhai Wang, Mingyu Ding, Jun Jin, Bin Wang, Jifeng Dai, Yu Qiao, Ping Luo',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:v1_lew4L6wgC',
      },
    ],
    keys: ['Embodied AI', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Visionllm: Large language model is also an open-ended decoder for vision-centric tasks',
    authors:
      'Wenhai Wang, Zhe Chen, Xiaokang Chen, Jiannan Wu, Xizhou Zhu, Gang Zeng, Ping Luo, Tong Lu, Jie Zhou, Yu Qiao, Jifeng Dai',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:lgwcVrK6X84C',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Mllms-augmented visual-language representation learning',
    authors:
      'Yanqing Liu, Kai Wang, Wenqi Shao, Ping Luo, Yu Qiao, Mike Zheng Shou, Kaipeng Zhang, Yang You',
    proceedings: 'arXiv preprint arXiv:2311.18765',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:OBSaB-F7qqsC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Advancing vision transformers with group-mix attention',
    authors: 'Chongjian Ge, Xiaohan Ding, Zhan Tong, Li Yuan, Jiangliu Wang, Yibing Song, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2311.15157',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Dem6FJhTUoYC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Large language models as automated aligners for benchmarking vision-language models',
    authors:
      'Yuanfeng Ji, Chongjian Ge, Weikai Kong, Enze Xie, Zhengying Liu, Zhengguo Li, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2311.14580',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:MAUkC_7iAq8C',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Diffusionmat: Alpha matting as sequential refinement learning',
    authors: 'Yangyang Xu, Shengfeng He, Wenqi Shao, Kwan-Yee K Wong, Yu Qiao, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2311.13535',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:jE2MZjpN3IcC',
      },
    ],
    keys: ['Generative Models', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Delving into the devils of bird’s-eye-view perception: A review, evaluation and recipe',
    authors:
      'Hongyang Li, Chonghao Sima, Jifeng Dai, Wenhai Wang, Lewei Lu, Huijie Wang, Jia Zeng, Zhiqi Li, Jiazhi Yang, Hanming Deng, Hao Tian, Enze Xie, Jiangwei Xie, Li Chen, Tianyu Li, Yang Li, Yulu Gao, Xiaosong Jia, Si Liu, Jianping Shi, Dahua Lin, Yu Qiao',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:HIFyuExEbWQC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Hongyang Li'],
  },
  {
    title: 'Harvest Video Foundation Models via Efficient Post-Pretraining',
    authors: 'Yizhuo Li, Kunchang Li, Yinan He, Yi Wang, Yali Wang, Limin Wang, Yu Qiao, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2310.19554',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:KaMxkj08jr0C',
      },
    ],
    keys: ['Video Understanding', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Tree-planner: Efficient close-loop task planning with large language models',
    authors:
      'Mengkang Hu, Yao Mu, Xinmiao Yu, Mingyu Ding, Shiguang Wu, Wenqi Shao, Qiguang Chen, Bin Wang, Yu Qiao, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2310.08582',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:jFemdcug13IC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Mean-AP Guided Reinforced Active Learning for Object Detection',
    authors: 'Zhixuan Liang, Xingyu Zeng, Rui Zhao, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2310.08387',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:6_hjMsCP8ZoC',
      },
    ],
    keys: ['Detection', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'PixArt-: Fast Training of Diffusion Transformer for Photorealistic Text-to-Image Synthesis',
    authors:
      'Junsong Chen, Jincheng Yu, Chongjian Ge, Lewei Yao, Enze Xie, Yue Wu, Zhongdao Wang, James Kwok, Ping Luo, Huchuan Lu, Zhenguo Li',
    proceedings: 'arXiv preprint arXiv:2310.00426',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:DBa1UEJaJKAC',
      },
    ],
    keys: ['Generative Models', 'Transformer'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Neural MPC-Based Decision-Making Framework for Autonomous Driving in Multi-Lane Roundabout',
    authors: 'Yao Mu, Zhiqian Lan, Chen Chen, Chang Liu, Ping Luo, Shengbo Eben Li',
    proceedings:
      '2023 IEEE 26th International Conference on Intelligent Transportation Systems (ITSC)',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:sJsF-0ZLhtgC',
      },
    ],
    keys: ['Autonomous Driving', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'SPOT: Scalable 3D Pre-training via Occupancy Prediction for Learning Transferable 3D Representations',
    authors:
      'Xiangchao Yan, Runjian Chen, Bo Zhang, Hancheng Ye, Renqiu Xia, Jiakang Yuan, Hongbin Zhou, Xinyu Cai, Botian Shi, Wenqi Shao, Ping Luo, Yu Qiao, Tao Chen, Junchi Yan',
    proceedings: 'arXiv preprint arXiv:2309.10527',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:s9ia6_kGH2AC',
      },
    ],
    keys: ['3D Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'RestoreFormer++: Towards real-world blind face restoration from undegraded key-value pairs',
    authors: 'Zhouxia Wang, Jiawei Zhang, Tianshui Chen, Wenping Wang, Ping Luo',
    proceedings: 'IEEE Transactions on Pattern Analysis and Machine Intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:L1USKYWJimsC',
      },
    ],
    keys: ['Face Recognition', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'StyleAdapter: A Unified Stylized Image Generation Model',
    authors:
      'Zhouxia Wang, Xintao Wang, Liangbin Xie, Zhongang Qi, Ying Shan, Wenping Wang, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2309.01770',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:hsZV8lGYWTMC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Omniquant: Omnidirectionally calibrated quantization for large language models',
    authors:
      'Wenqi Shao, Mengzhao Chen, Zhaoyang Zhang, Peng Xu, Lirui Zhao, Zhiqian Li, Kaipeng Zhang, Peng Gao, Yu Qiao, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2308.13137',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Br1UauaknNIC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Cyclemlp: A mlp-like architecture for dense visual predictions',
    authors: 'Shoufa Chen, Enze Xie, Chongjian Ge, Runjian Chen, Ding Liang, Ping Luo',
    proceedings: 'IEEE Transactions on Pattern Analysis and Machine Intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:p__nRnzSRKYC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Tiny lvlm-ehub: Early multimodal experiments with bard',
    authors:
      'Wenqi Shao, Yutao Hu, Peng Gao, Meng Lei, Kaipeng Zhang, Fanqing Meng, Peng Xu, Siyuan Huang, Hongsheng Li, Yu Qiao, Ping Luo',
    proceedings: 'arXiv e-prints',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:owLR8QvbtFgC',
      },
    ],
    keys: ['Multimodal', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Rethinking attentive object detection via neural attention learning',
    authors: 'Chongjian Ge, Yibing Song, Chao Ma, Yuankai Qi, Ping Luo',
    proceedings: 'IEEE Transactions on Image Processing',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:PYBJJbyH-FwC',
      },
    ],
    keys: ['Detection', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Internvid: A large-scale video-text dataset for multimodal understanding and generation',
    authors:
      'Yi Wang, Yinan He, Yizhuo Li, Kunchang Li, Jiashuo Yu, Xin Ma, Xinhao Li, Guo Chen, Xinyuan Chen, Yaohui Wang, Conghui He, Ping Luo, Ziwei Liu, Yali Wang, Limin Wang, Yu Qiao',
    proceedings: 'arXiv preprint arXiv:2307.06942',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:7H_MAutzIkAC',
      },
    ],
    keys: ['Video Understanding', 'Multimodal'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Sparse R-CNN: An end-to-end framework for object detection',
    authors:
      'Peize Sun, Rufeng Zhang, Yi Jiang, Tao Kong, Chenfeng Xu, Wei Zhan, Masayoshi Tomizuka, Zehuan Yuan, Ping Luo',
    proceedings: 'IEEE transactions on pattern analysis and machine intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:WHdLCjDvYFkC',
      },
    ],
    keys: ['Detection', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Chipformer: Transferable chip placement via offline decision transformer',
    authors: 'Yao Lai, Jinxin Liu, Zhentao Tang, Bin Wang, Jianye Hao, Ping Luo',
    proceedings: 'International Conference on Machine Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:1taIhTC69MYC',
      },
    ],
    keys: ['Transformer', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      '-Tuning: Transferring Multimodal Foundation Models with Optimal Multi-task Interpolation',
    authors: 'Chengyue Wu, Teng Wang, Yixiao Ge, Zeyu Lu, Ruisong Zhou, Ying Shan, Ping Luo',
    proceedings: 'International Conference on Machine Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:4xDN1ZYqzskC',
      },
    ],
    keys: ['Multimodal', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Structured pruning for efficient generative pre-trained language models',
    authors:
      'Chaofan Tao, Lu Hou, Haoli Bai, Jiansheng Wei, Xin Jiang, Qun Liu, Ping Luo, Ngai Wong',
    proceedings: 'Findings of the Association for Computational Linguistics: ACL 2023',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:WC23djZS0W4C',
      },
    ],
    keys: ['Generative Models', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Align, adapt and inject: Sound-guided unified image generation',
    authors: 'Yue Yang, Kaipeng Zhang, Yuying Ge, Wenqi Shao, Zeyue Xue, Yu Qiao, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2306.11504',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:kw52XkFRtyQC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Syndock: N rigid protein docking via learnable group synchronization',
    authors: 'Yuanfeng Ji, Yatao Bian, Guoji Fu, Peilin Zhao, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2305.15156',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:kVjdVfd2voEC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Vdt: General-purpose video diffusion transformers via mask modeling',
    authors: 'Haoyu Lu, Guoxing Yang, Nanyi Fei, Yuqi Huo, Zhiwu Lu, Ping Luo, Mingyu Ding',
    proceedings: 'arXiv preprint arXiv:2305.13311',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:w0F2JDEymm0C',
      },
    ],
    keys: ['Video Understanding', 'Generative Models'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Videochat: Chat-centric video understanding',
    authors:
      'KunChang Li, Yinan He, Yi Wang, Yizhuo Li, Wenhai Wang, Ping Luo, Yali Wang, Limin Wang, Yu Qiao',
    proceedings: 'arXiv preprint arXiv:2305.06355',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:QD3KBmkZPeQC',
      },
    ],
    keys: ['Video Understanding', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Interngpt: Solving vision-centric tasks by interacting with chatgpt beyond language',
    authors:
      'Zhaoyang Liu, Yinan He, Wenhai Wang, Weiyun Wang, Yi Wang, Shoufa Chen, Qinglong Zhang, Zeqiang Lai, Yang Yang, Qingyun Li, Jiashuo Yu, Kunchang Li, Zhe Chen, Xue Yang, Xizhou Zhu, Yali Wang, Limin Wang, Ping Luo, Jifeng Dai, Yu Qiao',
    proceedings: 'arXiv preprint arXiv:2305.05662',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:buQ7SEKw-1sC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Multimodal-gpt: A vision and language model for dialogue with humans',
    authors:
      'Tao Gong, Chengqi Lyu, Shilong Zhang, Yudong Wang, Miao Zheng, Qian Zhao, Kuikun Liu, Wenwei Zhang, Ping Luo, Kai Chen',
    proceedings: 'arXiv preprint arXiv:2305.04790',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:jL-93Qbq4QoC',
      },
    ],
    keys: ['Multimodal', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Metabev: Solving sensor failures for bev detection and map segmentation',
    authors:
      'Chongjian Ge, Junsong Chen, Enze Xie, Zhongdao Wang, Lanqing Hong, Huchuan Lu, Zhenguo Li, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2304.09801',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:6yz0xqPARnAC',
      },
    ],
    keys: ['Segmentation', 'Detection'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Riformer: Keep your vision backbone effective while removing token mixer',
    authors:
      'Jiahao Wang, Songyang Zhang, Yong Liu, Taiqiang Wu, Yujiu Yang, Xihui Liu, Kai Chen, Ping Luo, Dahua Lin',
    proceedings: 'arXiv preprint arXiv:2304.05659',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:2tRrZ1ZAMYUC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Xihui Liu', 'Ping Luo'],
  },
  {
    title: 'Graph-based topology reasoning for driving scenes',
    authors:
      'Tianyu Li, Li Chen, Huijie Wang, Yang Li, Jiazhi Yang, Xiangwei Geng, Shengyin Jiang, Yuting Wang, Hang Xu, Chunjing Xu, Junchi Yan, Ping Luo, Hongyang Li',
    proceedings: 'arXiv preprint arXiv:2304.05277',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:2v_ZtQDX9iAC',
      },
    ],
    keys: ['Autonomous Driving', 'Graph Learning'],
    pis: ['Ping Luo', 'Hongyang Li'],
  },
  {
    title: 'Multi-level contrastive learning for dense prediction task',
    authors: 'Qiushan Guo, Yizhou Yu, Yi Jiang, Jiannan Wu, Zehuan Yuan, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2304.02010',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:GFxP56DSvIMC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Soft neighbors are positive supporters in contrastive visual representation learning',
    authors: 'Chongjian Ge, Jiangliu Wang, Zhan Tong, Shoufa Chen, Yibing Song, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2303.17142',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:nVrZBo8bIpAC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Vehicle-infrastructure cooperative 3d object detection via feature flow prediction',
    authors: 'Haibao Yu, Yingjuan Tang, Enze Xie, Jilei Mao, Jirui Yuan, Ping Luo, Zaiqing Nie',
    proceedings: 'arXiv preprint arXiv:2303.10552',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:tH6gc1N1XXoC',
      },
    ],
    keys: ['Autonomous Driving', '3D Vision'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Learning grounded vision-language representation for versatile understanding in untrimmed videos',
    authors: 'Teng Wang, Jinrui Zhang, Feng Zheng, Wenhao Jiang, Ran Cheng, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2303.06378',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:5icHVeHT4IsC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Embodied concept learner: Self-supervised learning of concepts and mapping through instruction following',
    authors:
      'Mingyu Ding, Yan Xu, Zhenfang Chen, David Daniel Cox, Ping Luo, Joshua B Tenenbaum, Chuang Gan',
    proceedings: 'Conference on robot learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:4vMrXwiscB8C',
      },
    ],
    keys: ['Embodied AI', 'Self-Supervised'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Adaptdiffuser: Diffusion models as adaptive self-evolving planners',
    authors: 'Zhixuan Liang, Yao Mu, Mingyu Ding, Fei Ni, Masayoshi Tomizuka, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2302.01877',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:gVv57TyPmFsC',
      },
    ],
    keys: ['Generative Models', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Understanding self-supervised pretraining with part-aware representation learning',
    authors:
      'Jie Zhu, Jiyang Qi, Mingyu Ding, Xiaokang Chen, Ping Luo, Xinggang Wang, Wenyu Liu, Leye Wang, Jingdong Wang',
    proceedings: 'arXiv preprint arXiv:2301.11915',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:5MTHONV0fEkC',
      },
    ],
    keys: ['Self-Supervised', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: "Fast-BEV: Towards real-time on-vehicle bird's-eye view perception",
    authors:
      'Bin Huang, Yangguang Li, Enze Xie, Feng Liang, Luya Wang, Mingzhu Shen, Fenggang Liu, Tianqi Wang, Ping Luo, Jing Shao',
    proceedings: 'arXiv preprint arXiv:2301.07870',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:LhH-TYMQEocC',
      },
    ],
    keys: ['Autonomous Driving', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'A Survey of Reasoning with Foundation Models: Concepts, Methodologies, and Outlook',
    authors:
      'Jiankai Sun, Chuanyang Zheng, Enze Xie, Zhengying Liu, Ruihang Chu, Jianing Qiu, Jiaqi Xu, Mingyu Ding, Hongyang Li, Mengzhe Geng, Yue Wu, Wenhai Wang, Junsong Chen, Zhangyue Yin, Xiaozhe Ren, Jie Fu, Junxian He, Yuan Wu, Qi Liu, Xihui Liu, Yu Li, Hao Dong, Yu Cheng, Ming Zhang, Pheng Ann Heng, Jifeng Dai, Ping Luo, Jingdong Wang, Ji-Rong Wen, Xipeng Qiu, Yike Guo, Hui Xiong, Qun Liu, Zhenguo Li',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:oPLKW5k6eA4C',
      },
    ],
    keys: ['Survey', 'Machine Learning'],
    pis: ['Hongyang Li', 'Xihui Liu', 'Ping Luo'],
  },
  {
    title: 'Rigid: Recurrent gan inversion and editing of real face videos',
    authors: 'Yangyang Xu, Shengfeng He, Kwan-Yee K Wong, Ping Luo',
    proceedings: 'Proceedings of the IEEE/CVF international conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:1tZ8xJnm2c8C',
      },
    ],
    keys: ['Face Recognition', 'Generative Models'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Advancing Vision Transformers with Group-Mix Attention',
    authors: 'GE Chongjian, Xiaohan Ding, Zhan Tong, Li Yuan, Jiangliu Wang, Yibing Song, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:SnGPuo6Feq8C',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Large Language Models as Decision Makers for Autonomous Driving',
    authors:
      'Hao Sha, Yao Mu, Yuxuan Jiang, Guojian Zhan, Li Chen, Chenfeng Xu, Ping Luo, Shengbo Eben Li, Masayoshi Tomizuka, Wei Zhan, Mingyu Ding',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ziOE8S1-AIUC',
      },
    ],
    keys: ['Autonomous Driving', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Rethinking the Noise Schedule of Diffusion-Based Generative Models',
    authors: 'Qiushan Guo, Sifei Liu, Yizhou Yu, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:oi2SiIJ9l4AC',
      },
    ],
    keys: ['Generative Models', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Language-driven open-vocabulary keypoint detection for animal body and face',
    authors:
      'Hao Zhang, Kaipeng Zhang, Lumin Xu, Shenqi Lai, Wenqi Shao, Nanning Zheng, Ping Luo, Yu Qiao',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:AXkvAH5U_nMC',
      },
    ],
    keys: ['Face Recognition', 'Detection'],
    pis: ['Ping Luo'],
  },
  {
    title: 'The first visual object tracking segmentation vots2023 challenge results',
    authors:
      'Matej Kristan, Jiří Matas, Martin Danelljan, Michael Felsberg, Hyung Jin Chang, Luka Čehovin Zajc, Alan Lukežič, Ondrej Drbohlav, Zhongqun Zhang, Khanh-Tung Tran, Xuan-Son Vu, Johanna Björklund, Christoph Mayer, Yushan Zhang, Lei Ke, Jie Zhao, Gustavo Fernández, Noor Al-Shakarji, Dong An, Michael Arens, Stefan Becker, Goutam Bhat, Sebastian Bullinger, Antoni B Chan, Shijie Chang, Hanyuan Chen, Xin Chen, Yan Chen, Zhenyu Chen, Yangming Cheng, Yutao Cui, Chunyuan Deng, Jiahua Dong, Matteo Dunnhofer, Wei Feng, Jianlong Fu, Jie Gao, Ruize Han, Zeqi Hao, Jun-Yan He, Keji He, Zhenyu He, Xiantao Hu, Kaer Huang, Yuqing Huang, Yi Jiang, Ben Kang, Jin-Peng Lan, Hyungjun Lee, Chenyang Li, Jiahao Li, Ning Li, Wangkai Li, Xiaodi Li, Xin Li, Pengyu Liu, Yue Liu, Huchuan Lu, Bin Luo, Ping Luo, Yinchao Ma, Deshui Miao, Christian Micheloni, Kannappan Palaniappan, Hancheol Park, Matthieu Paul, HouWen Peng, Zekun Qian, Gani Rahmon, Norbert Scherer-Negenborn, Pengcheng Shao, Wooksu Shin, Elham Soltani Kazemi, Tianhui Song, Rainer Stiefelhagen, Rui Sun, Chuanming Tang, Zhangyong Tang, Imad Eddine Toubal, Jack Valmadre, Joost Van De Weijer, Luc Van Gool, Jash Vira, Stèphane Vujasinović, Cheng Wan, Jia Wan, Dong Wang, Fei Wang, Feifan Wang, He Wang, Limin Wang, Song Wang, Yaowei Wang, Zhepeng Wang, Gangshan Wu, Jiannan Wu, Qiangqiang Wu, Xiaojun Wu, Anqi Xiao, Jinxia Xie, Chenlong Xu, Min Xu, Tianyang Xu, Yuanyou Xu, Bin Yan, Dawei Yang, Ming-Hsuan Yang, Tianyu Yang, Yi Yang, Zongxin Yang, Xuanwu Yin, Fisher Yu, Hongyuan Yu, Qianjin Yu, Weichen Yu, YongSheng Yuan, Zehuan Yuan, Jianlin Zhang, Lu Zhang, Tianzhu Zhang, Guodongfang Zhao, Shaochuan Zhao, Yaozong Zheng, Bineng Zhong, Jiawen Zhu, Xuefeng Zhu, Yueting Zhuang, ChengAo Zong, Kunlong Zuo',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:q-HalDI95KYC',
      },
    ],
    keys: ['Segmentation', 'Tracking'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Segment every reference object in spatial and temporal spaces',
    authors: 'Jiannan Wu, Yi Jiang, Bin Yan, Huchuan Lu, Zehuan Yuan, Ping Luo',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Ade32sEp0pkC',
      },
    ],
    keys: ['Segmentation', 'Video Understanding'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Metabev: Solving sensor failures for 3d detection and map segmentation',
    authors:
      'Chongjian Ge, Junsong Chen, Enze Xie, Zhongdao Wang, Lanqing Hong, Huchuan Lu, Zhenguo Li, Ping Luo',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:WC9gN4BGCRcC',
      },
    ],
    keys: ['3D Vision', 'Segmentation'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Spot: Scalable 3d pre-training via occupancy prediction for autonomous driving',
    authors:
      'Xiangchao Yan, Runjian Chen, Bo Zhang, Jiakang Yuan, Xinyu Cai, Botian Shi, Wenqi Shao, Junchi Yan, Ping Luo, Yu Qiao',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:1yWc8FF-_SYC',
      },
    ],
    keys: ['Autonomous Driving', '3D Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Beyond one-to-one: Rethinking the referring image segmentation',
    authors: 'Yutao Hu, Qixiong Wang, Wenqi Shao, Enze Xie, Zhenguo Li, Jungong Han, Ping Luo',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:yxmsSjX2EkcC',
      },
    ],
    keys: ['Segmentation', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Exploring transformers for open-world instance segmentation',
    authors: 'Jiannan Wu, Yi Jiang, Bin Yan, Huchuan Lu, Zehuan Yuan, Ping Luo',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:jU7OWUQzBzMC',
      },
    ],
    keys: ['Segmentation', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Scene as occupancy',
    authors:
      'Wenwen Tong, Chonghao Sima, Tai Wang, Li Chen, Silei Wu, Hanming Deng, Yi Gu, Lewei Lu, Ping Luo, Dahua Lin, Hongyang Li',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:IaI1MmNe2tcC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo', 'Hongyang Li'],
  },
  {
    title: 'Diffrate: Differentiable compression rate for efficient vision transformers',
    authors:
      'Mengzhao Chen, Wenqi Shao, Peng Xu, Mingbao Lin, Kaipeng Zhang, Fei Chao, Rongrong Ji, Yu Qiao, Ping Luo',
    proceedings: 'Proceedings of the IEEE/CVF international conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:LdasjJ6CEcoC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Riformer: Keep your vision backbone effective but removing token mixer',
    authors:
      'Jiahao Wang, Songyang Zhang, Yong Liu, Taiqiang Wu, Yujiu Yang, Xihui Liu, Kai Chen, Ping Luo, Dahua Lin',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:BzfGm06jWhQC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Xihui Liu', 'Ping Luo'],
  },
  {
    title: 'Vdt: An empirical study on video diffusion with transformers',
    authors: 'Haoyu Lu, Guoxing Yang, Nanyi Fei, Yuqi Huo, Zhiwu Lu, Ping Luo, Mingyu Ding',
    proceedings: 'arXiv preprint arXiv:2305.13311',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:jgBuDB5drN8C',
      },
    ],
    keys: ['Video Understanding', 'Generative Models'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Policy adaptation from foundation model feedback',
    authors: 'Yuying Ge, Annabella Macaluso, Li Erran Li, Ping Luo, Xiaolong Wang',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ubry08Y2EpUC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Egc: Image generation and classification via a diffusion energy-based model',
    authors: 'Qiushan Guo, Chuofan Ma, Yi Jiang, Zehuan Yuan, Yizhou Yu, Ping Luo',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ALROH1vI_8AC',
      },
    ],
    keys: ['Classification', 'Generative Models'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Going denser with open-vocabulary part segmentation',
    authors:
      'Peize Sun, Shoufa Chen, Chenchen Zhu, Fanyi Xiao, Ping Luo, Saining Xie, Zhicheng Yan',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:48xauSegjOkC',
      },
    ],
    keys: ['Segmentation', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'V2x-seq: A large-scale sequential dataset for vehicle-infrastructure cooperative perception and forecasting',
    authors:
      'Haibao Yu, Wenxian Yang, Hongzhi Ruan, Zhenwei Yang, Yingjuan Tang, Xu Gao, Xin Hao, Yifeng Shi, Yifeng Pan, Ning Sun, Juan Song, Jirui Yuan, Ping Luo, Zaiqing Nie',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:wMgC3FpKEyYC',
      },
    ],
    keys: ['Autonomous Driving', 'Dataset/Benchmark'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Road genome: A topology reasoning benchmark for scene understanding in autonomous driving',
    authors:
      'Huijie Wang, Zhenbo Liu, Yang Li, Tianyu Li, Li Chen, Chonghao Sima, Yuting Wang, Shengyin Jiang, Feng Wen, Hang Xu, Ping Luo, Junchi Yan, Wei Zhang, Jun Yao, Yu Qiao, Hongyang Li',
    proceedings: 'arXiv preprint arXiv:2304.10440',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:PVgj2kMGcgYC',
      },
    ],
    keys: ['Autonomous Driving', 'Dataset/Benchmark'],
    pis: ['Ping Luo', 'Hongyang Li'],
  },
  {
    title: 'Ec2: Emergent communication for embodied control',
    authors: 'Yao Mu, Shunyu Yao, Mingyu Ding, Ping Luo, Chuang Gan',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:NyGDZy8z5eUC',
      },
    ],
    keys: ['Embodied AI', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Visual dependency transformers: Dependency tree emerges from reversed attention',
    authors:
      'Mingyu Ding, Yikang Shen, Lijie Fan, Zhenfang Chen, Zitian Chen, Ping Luo, Joshua B Tenenbaum, Chuang Gan',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:AHdEip9mkN0C',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Ddp: Diffusion model for dense visual prediction',
    authors:
      'Yuanfeng Ji, Zhe Chen, Enze Xie, Lanqing Hong, Xihui Liu, Zhaoqiang Liu, Tong Lu, Zhenguo Li, Ping Luo',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:LgRImbQfgY4C',
      },
    ],
    keys: ['Generative Models', 'Machine Learning'],
    pis: ['Xihui Liu', 'Ping Luo'],
  },
  {
    title: 'Real-time controllable denoising for image and video',
    authors:
      'Zhaoyang Zhang, Yitong Jiang, Wenqi Shao, Xiaogang Wang, Ping Luo, Kaimo Lin, Jinwei Gu',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Bg7qf7VwUHIC',
      },
    ],
    keys: ['Video Understanding', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Accelerating vision-language pretraining with free language modeling',
    authors: 'Teng Wang, Yixiao Ge, Feng Zheng, Ran Cheng, Ying Shan, Xiaohu Qie, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:BJbdYPG6LGMC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Dense distinct query for end-to-end object detection',
    authors:
      'Shilong Zhang, Xinjiang Wang, Jiaqi Wang, Jiangmiao Pang, Chengqi Lyu, Wenwei Zhang, Ping Luo, Kai Chen',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:artPoR2Yc-kC',
      },
    ],
    keys: ['Detection', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Universal instance perception as object discovery and retrieval',
    authors: 'Bin Yan, Yi Jiang, Jiannan Wu, Dong Wang, Ping Luo, Zehuan Yuan, Huchuan Lu',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:gKiMpY-AVTkC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Diffusiondet: Diffusion model for object detection',
    authors: 'Shoufa Chen, Peize Sun, Yibing Song, Ping Luo',
    proceedings: 'Proceedings of the IEEE/CVF international conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:OP4eGU-M3BUC',
      },
    ],
    keys: ['Detection', 'Generative Models'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Learning transferable spatiotemporal representations from natural script knowledge',
    authors: 'Ziyun Zeng, Yuying Ge, Xihui Liu, Bin Chen, Ping Luo, Shu-Tao Xia, Yixiao Ge',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:yFnVuubrUp4C',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Xihui Liu', 'Ping Luo'],
  },
  {
    title: 'Image normalization processing',
    authors: 'R Zhang, P Zhanglin, L Wu, P Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Aul-kAQHnToC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: [],
  },
  {
    title:
      'Large-batch optimization for dense visual predictions: Training faster R-CNN in 4.2 minutes',
    authors: 'Zeyue Xue, Jianming Liang, Guanglu Song, Zhuofan Zong, Liang Chen, Yu Liu, Ping Luo',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:vDZJ-YLwNdEC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Maskplace: Fast chip placement via reinforced visual representation learning',
    authors: 'Yao Lai, Yao Mu, Ping Luo',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:F9fV5C73w3QC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Domino: Decomposed mutual information optimization for generalized context in meta-reinforcement learning',
    authors: 'Yao Mu, Yuzheng Zhuang, Fei Ni, Bin Wang, Jianyu Chen, Jianye Hao, Ping Luo',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:OR75R8vi5nAC',
      },
    ],
    keys: ['RL', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Rethinking resolution in the context of efficient video recognition',
    authors: 'Chuofan Ma, Qiushan Guo, Yi Jiang, Ping Luo, Zehuan Yuan, Xiaojuan Qi',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:mNrWkgRL2YcC',
      },
    ],
    keys: ['Video Understanding', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Amos: A large-scale abdominal multi-organ benchmark for versatile medical image segmentation',
    authors:
      'Yuanfeng Ji, Haotian Bai, Chongjian Ge, Jie Yang, Ye Zhu, Ruimao Zhang, Zhen Li, Lingyan Zhanng, Wanling Ma, Xiang Wan, Ping Luo',
    proceedings: 'Advances in neural information processing systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:NXb4pA-qfm4C',
      },
    ],
    keys: ['Segmentation', 'Medical Imaging'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Adaptformer: Adapting vision transformers for scalable visual recognition',
    authors: 'Shoufa Chen, Chongjian Ge, Zhan Tong, Jiangliu Wang, Yibing Song, Jue Wang, Ping Luo',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:anf4URPfarAC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Learning object-language alignments for open-vocabulary object detection',
    authors:
      'Chuang Lin, Peize Sun, Yi Jiang, Ping Luo, Lizhen Qu, Gholamreza Haffari, Zehuan Yuan, Jianfei Cai',
    proceedings: 'arXiv preprint arXiv:2211.14843',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:otzGkya1bYkC',
      },
    ],
    keys: ['Detection', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'MGL: Mutual graph learning for camouflaged object detection',
    authors: 'Qiang Zhai, Xin Li, Fan Yang, Zhicheng Jiao, Ping Luo, Hong Cheng, Zicheng Liu',
    proceedings: 'IEEE Transactions on Image Processing',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Ehil0879vHcC',
      },
    ],
    keys: ['Detection', 'Graph Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Prototypical context-aware dynamics generalization for high-dimensional model-based reinforcement learning',
    authors:
      'Junjie Wang, Yao Mu, Dong Li, Qichao Zhang, Dongbin Zhao, Yuzheng Zhuang, Ping Luo, Bin Wang, Jianye Hao',
    proceedings: 'arXiv preprint arXiv:2211.12774',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:P7Ujq4OLJYoC',
      },
    ],
    keys: ['RL', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Posetrans: A simple yet effective pose transformation augmentation for human pose estimation',
    authors: 'Wentao Jiang, Sheng Jin, Wentao Liu, Chen Qian, Ping Luo, Si Liu',
    proceedings: 'European Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=100&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:IUKN3-7HHlwC',
      },
    ],
    keys: ['Pose Estimation', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: '3d interacting hand pose estimation by hand de-occlusion and removal',
    authors: 'Hao Meng, Sheng Jin, Wentao Liu, Chen Qian, Mengxiang Lin, Wanli Ouyang, Ping Luo',
    proceedings: 'European Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:mlAyqtXpCwEC',
      },
    ],
    keys: ['3D Vision', 'Pose Estimation'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Pose for everything: Towards category-agnostic pose estimation',
    authors:
      'Lumin Xu, Sheng Jin, Wang Zeng, Wentao Liu, Chen Qian, Wanli Ouyang, Ping Luo, Xiaogang Wang',
    proceedings: 'European conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:IRz6iEL74y4C',
      },
    ],
    keys: ['Pose Estimation', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Towards grand unification of object tracking',
    authors: 'Bin Yan, Yi Jiang, Peize Sun, Dong Wang, Zehuan Yuan, Ping Luo, Huchuan Lu',
    proceedings: 'European conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:6ZxmRoH8BuwC',
      },
    ],
    keys: ['Tracking', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Miles: Visual bert pre-training with injected language semantics for video-text retrieval',
    authors:
      'Yuying Ge, Yixiao Ge, Xihui Liu, Jinpeng Wang, Jianping Wu, Ying Shan, Xiaohu Qie, Ping Luo',
    proceedings: 'European conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:GtLg2Ama23sC',
      },
    ],
    keys: ['Video Understanding', 'Machine Learning'],
    pis: ['Xihui Liu', 'Ping Luo'],
  },
  {
    title: 'Davit: Dual attention vision transformers',
    authors: 'Mingyu Ding, Bin Xiao, Noel Codella, Ping Luo, Jingdong Wang, Lu Yuan',
    proceedings: 'European conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:YohjEiUPhakC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Bytetrack: Multi-object tracking by associating every detection box',
    authors:
      'Yifu Zhang, Peize Sun, Yi Jiang, Dongdong Yu, Fucheng Weng, Zehuan Yuan, Ping Luo, Wenyu Liu, Xinggang Wang',
    proceedings: 'European conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:VaXvl8Fpj5cC',
      },
    ],
    keys: ['Detection', 'Tracking'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Not all models are equal: Predicting model transferability in a self-challenging fisher space',
    authors:
      'Wenqi Shao, Xun Zhao, Yixiao Ge, Zhaoyang Zhang, Lei Yang, Xiaogang Wang, Ying Shan, Ping Luo',
    proceedings: 'European Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:umqufdRvDiIC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Large-batch optimization for dense visual predictions',
    authors: 'Zeyue Xue, Jianming Liang, Guanglu Song, Zhuofan Zong, Liang Chen, Yu Liu, Ping Luo',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:HeT0ZceujKMC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Polygon-free: unconstrained scene text detection with box annotations',
    authors: 'Weijia Wu, Enze Xie, Ruimao Zhang, Wenhai Wang, Ping Luo, Hong Zhou',
    proceedings: '2022 IEEE International Conference on Image Processing (ICIP)',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:4hFrxpcac9AC',
      },
    ],
    keys: ['Detection', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Network training method, electronic device and storage medium',
    authors: 'X Pan, Z Xiaohang, B Dai, D Lin, P Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:3htObqc8RwsC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: [],
  },
  {
    title:
      'Decomposed mutual information optimization for generalized context in meta-reinforcement learning',
    authors: 'Yao Mu, Yuzheng Zhuang, Fei Ni, Bin Wang, Jianyu Chen, Jianye Hao, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2210.04209',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:RtRctb2lSbAC',
      },
    ],
    keys: ['RL', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Image processing method and apparatus, computer device, and storage medium',
    authors: 'R Zhang, P Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:86PQX7AUzd4C',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: [],
  },
  {
    title: 'Zoomnas: searching for whole-body human pose estimation in the wild',
    authors: 'Lumin Xu, Sheng Jin, Wentao Liu, Chen Qian, Wanli Ouyang, Ping Luo, Xiaogang Wang',
    proceedings: 'IEEE Transactions on Pattern Analysis and Machine Intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:OTTXONDVkokC',
      },
    ],
    keys: ['Pose Estimation', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'FAT: Frequency-aware transformation for bridging full-precision and low-precision deep representations',
    authors: 'Chaofan Tao, Rui Lin, Quan Chen, Zhaoyang Zhang, Ping Luo, Ngai Wong',
    proceedings: 'IEEE Transactions on Neural Networks and Learning Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:WJVC3Jt7v1AC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Real-time end-to-end video text spotter with contrastive representation learning',
    authors:
      'Wejia Wu, Zhuang Li, Jiahong Li, Chunhua Shen, Hong Zhou, Size Li, Zhongyuan Wang, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2207.08417',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:_5tno0g5mFcC',
      },
    ],
    keys: ['Video Understanding', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Exploiting Context Information for Generic Event Boundary Captioning',
    authors: 'Jinrui Zhang, Teng Wang, Feng Zheng, Ran Cheng, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2207.01050',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:sNmaIFBj_lkC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Vlmixer: Unpaired vision-language pre-training via cross-modal cutmix',
    authors: 'Teng Wang, Wenhao Jiang, Zhichao Lu, Feng Zheng, Ran Cheng, Chengguo Yin, Ping Luo',
    proceedings: 'International Conference on Machine Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:HtEfBTGE9r8C',
      },
    ],
    keys: ['Multimodal', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Flow-based recurrent belief state learning for pomdps',
    authors: 'Xiaoyu Chen, Yao Mark Mu, Ping Luo, Shengbo Li, Jianyu Chen',
    proceedings: 'International Conference on Machine Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ruyezt5ZtCIC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Towards ultra-resolution neural style transfer via thumbnail instance normalization',
    authors: 'Zhe Chen, Wenhai Wang, Enze Xie, Tong Lu, Ping Luo',
    proceedings: 'Proceedings of the AAAI Conference on artificial intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:z_wVstp3MssC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Ctrlformer: Learning transferable state representation for visual control via transformer',
    authors: 'Yao Mu, Shoufa Chen, Mingyu Ding, Jianyu Chen, Runjian Chen, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2206.08883',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:a9-T7VOCCH8C',
      },
    ],
    keys: ['Transformer', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'CO^ 3: Cooperative Unsupervised 3D Representation Learning for Autonomous Driving',
    authors:
      'Runjian Chen, Yao Mu, Runsen Xu, Wenqi Shao, Chenhan Jiang, Hang Xu, Zhenguo Li, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2206.04028',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:0izLItjtcgwC',
      },
    ],
    keys: ['Autonomous Driving', '3D Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Semantic-aware pretraining for dense video captioning',
    authors: 'Teng Wang, Zhu Liu, Feng Zheng, Zhichao Lu, Ran Cheng, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2204.07449',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:9pM33mqn1YgC',
      },
    ],
    keys: ['Video Understanding', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Semantic segmentation model training methods and apparatuses, electronic devices, and storage media',
    authors: 'Z Xiaohang, Z Liu, P Luo, CC Loy, X Tang',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:t6usbXjVLHcC',
      },
    ],
    keys: ['Segmentation', 'Machine Learning'],
    pis: [],
  },
  {
    title:
      'MBEV: Multi-Camera Joint 3D Detection and Segmentation with Unified Birds-Eye View Representation',
    authors:
      'Enze Xie, Zhiding Yu, Daquan Zhou, Jonah Philion, Anima Anandkumar, Sanja Fidler, Ping Luo, Jose M Alvarez',
    proceedings: 'arXiv preprint arXiv:2204.05088',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Ri6SYOTghG4C',
      },
    ],
    keys: ['3D Vision', 'Segmentation'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Deeply unsupervised patch re-identification for pre-training object detectors',
    authors: 'Jian Ding, Enze Xie, Hang Xu, Chenhan Jiang, Zhenguo Li, Ping Luo, Gui-Song Xia',
    proceedings: 'IEEE Transactions on Pattern Analysis and Machine Intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:_axFR9aDTf0C',
      },
    ],
    keys: ['Detection', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Compression of generative pre-trained language models via quantization',
    authors:
      'Chaofan Tao, Lu Hou, Wei Zhang, Lifeng Shang, Xin Jiang, Qun Liu, Ping Luo, Ngai Wong',
    proceedings: 'arXiv preprint arXiv:2203.10705',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ClCfbGk0d_YC',
      },
    ],
    keys: ['Generative Models', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'PVTv2: Improved Baselines with Pyramid Vision Transformer',
    authors:
      'Ling Shao Wenhai Wang, Enze Xie, Xiang Li, Deng-Ping Fan, Kaitao Song, Ding Liang, Tong Lu, Ping Luo',
    proceedings: 'Computational Visual Media',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:bz8QjSJIRt4C',
      },
    ],
    keys: ['Transformer', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title:
      "Don't touch what matters: Task-aware lipschitz data augmentation for visual reinforcement learning",
    authors:
      'Zhecheng Yuan, Guozheng Ma, Yao Mu, Bo Xia, Bo Yuan, Xueqian Wang, Ping Luo, Huazhe Xu',
    proceedings: 'arXiv preprint arXiv:2202.09982',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Ug5p-4gJ2f0C',
      },
    ],
    keys: ['RL', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Image deblurring aided by low-resolution events',
    authors: 'Zhouxia Wang, Jimmy Ren, Jiawei Zhang, Ping Luo',
    proceedings: 'Electronics',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:XoXfffV-tXoC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Pseudo-labeled auto-curriculum learning for semi-supervised keypoint localization',
    authors: 'Can Wang, Sheng Jin, Yingda Guan, Wentao Liu, Chen Qian, Ping Luo, Wanli Ouyang',
    proceedings: 'arXiv preprint arXiv:2201.08613',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:HbR8gkJAVGIC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'MetaDance: Few-shot Dancing Video Retargeting via Temporal-aware Meta-learning',
    authors: 'Yuying Ge, Yibing Song, Ruimao Zhang, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2201.04851',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Dip1O2bNi0gC',
      },
    ],
    keys: ['Video Understanding', 'Few-Shot Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Target matching method and apparatus, electronic device, and storage medium',
    authors: 'R Zhang, H Sun, P Luo, Y Ge, K Ren, L Lin, X Wang',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:VL0QpB8kHFEC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: [],
  },
  {
    title:
      'Method and apparatus for segmenting video object, electronic device, and storage medium',
    authors: 'LI Xiaoxiao, Y Qi, Z Wang, K Chen, Z Liu, SHI Jianping, P Luo, CC Loy, ...',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:abG-DnoFyZgC',
      },
    ],
    keys: ['Segmentation', 'Video Understanding'],
    pis: [],
  },
  {
    title:
      'SEM2: Enhance Sample Efficiency and Robustness of End-to-end Urban Autonomous Driving via Semantic Masked World Model',
    authors:
      'Zeyu Gao, Yao Mu, Ruoyan Shen, Chen Chen, Yangang Ren, Jianyu Chen, Shengbo Eben Li, Ping Luo, Yanfeng Lu',
    proceedings: 'Deep Reinforcement Learning Workshop NeurIPS 2022',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:mel-f30kHHgC',
      },
    ],
    keys: ['Autonomous Driving', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Homogenization of electric field distribution facilitating the Zn anode reversibility',
    authors:
      'Han Tang, Huadong Liang, Runmin Jia, Yu Liu, Huibiao Chen, Hongyu Luo, Wei Yang, Jian Wang, Mengjun Zhou, Ping Luo, Qinyou An',
    proceedings: 'Chemical Communications',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:j7_hQOaDUrUC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Self-play and self-describe: Policy adaptation with vision-language foundation models',
    authors: 'Yuying Ge, Annabella Macaluso, Li Erran Li, Ping Luo, Xiaolong Wang',
    proceedings: 'arXiv preprint arXiv:2212.07398',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ZzlSgRqYykMC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'ML-ViG: Multi-label image recognition with vision graph convolutional network',
    authors: 'Ruijie Yao, Sheng Jin, Wentao Liu, Chen Qian, Ping Luo, Ji Wu',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:_OXeSy2IsFwC',
      },
    ],
    keys: ['Graph Learning', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Restoreformer: High-quality blind face restoration from undegraded key-value pairs',
    authors: 'Zhouxia Wang, Jiawei Zhang, Runjian Chen, Wenping Wang, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:FAceZFleit8C',
      },
    ],
    keys: ['Face Recognition', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Not all tokens are equal: Human-centric visual analysis via token clustering transformer',
    authors: 'Wang Zeng, Sheng Jin, Wentao Liu, Chen Qian, Ping Luo, Wanli Ouyang, Xiaogang Wang',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:4fGpz3EwCPoC',
      },
    ],
    keys: ['Transformer', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Scale-equivalent distillation for semi-supervised object detection',
    authors: 'Qiushan Guo, Yao Mu, Jianyu Chen, Tianqi Wang, Yizhou Yu, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:5qfkUJPXOUwC',
      },
    ],
    keys: ['Detection', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Language as queries for referring video object segmentation',
    authors: 'Jiannan Wu, Yi Jiang, Peize Sun, Zehuan Yuan, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:edDO8Oi4QzsC',
      },
    ],
    keys: ['Segmentation', 'Video Understanding'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Bridging video-text retrieval with multiple choice questions',
    authors: 'Yuying Ge, Yixiao Ge, Xihui Liu, Dian Li, Ying Shan, Xiaohu Qie, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:xtoqd-5pKcoC',
      },
    ],
    keys: ['Video Understanding', 'Machine Learning'],
    pis: ['Xihui Liu', 'Ping Luo'],
  },
  {
    title: 'Dancetrack: Multi-object tracking in uniform appearance and diverse motion',
    authors: 'Peize Sun, Jinkun Cao, Yi Jiang, Zehuan Yuan, Song Bai, Kris Kitani, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:S16KYo8Pm5AC',
      },
    ],
    keys: ['Tracking', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Panoptic segformer: Delving deeper into panoptic segmentation with transformers',
    authors:
      'Zhiqi Li, Wenhai Wang, Enze Xie, Zhiding Yu, Anima Anandkumar, Jose M Alvarez, Ping Luo, Tong Lu',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:g3aElNc5_aQC',
      },
    ],
    keys: ['Segmentation', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Image processing method and apparatus, electronic device and storage medium',
    authors: 'LI Chenghan, Z Liu, L Wu, P Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:PoWvk5oyLR8C',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: [],
  },
  {
    title:
      'MetaCloth: learning unseen tasks of dense fashion landmark detection from a few samples',
    authors: 'Yuying Ge, Ruimao Zhang, Ping Luo',
    proceedings: 'IEEE Transactions on Image Processing',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:i2xiXl-TujoC',
      },
    ],
    keys: ['Detection', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Model-based reinforcement learning via imagination with derived memory',
    authors:
      'Yao Mu, Yuzheng Zhuang, Bin Wang, Guangxiang Zhu, Wulong Liu, Jianyu Chen, Ping Luo, Shengbo Li, Chongjie Zhang, Jianye Hao',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:e_rmSamDkqQC',
      },
    ],
    keys: ['RL', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Compressed video contrastive learning',
    authors: 'Yuqi Huo, Mingyu Ding, Haoyu Lu, Nanyi Fei, Zhiwu Lu, Ji-Rong Wen, Ping Luo',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:WZBGuue-350C',
      },
    ],
    keys: ['Video Understanding', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Dynamic visual reasoning by learning differentiable physics models from video and language',
    authors: 'Mingyu Ding, Zhenfang Chen, Tao Du, Ping Luo, Josh Tenenbaum, Chuang Gan',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:kz9GbA2Ns4gC',
      },
    ],
    keys: ['Video Understanding', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Revitalizing cnn attention via transformers in self-supervised visual representation learning',
    authors: 'Chongjian Ge, Youwei Liang, Yibing Song, Jianbo Jiao, Jue Wang, Ping Luo',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:LI9QrySNdTsC',
      },
    ],
    keys: ['Self-Supervised', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Rethinking the pruning criteria for convolutional neural network',
    authors: 'Zhongzhan Huang, Wenqi Shao, Xinjiang Wang, Liang Lin, Ping Luo',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:epqYDVWIO7EC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'SegFormer: Simple and efficient design for semantic segmentation with transformers',
    authors: 'Enze Xie, Wenhai Wang, Zhiding Yu, Anima Anandkumar, Jose M Alvarez, Ping Luo',
    proceedings: 'Advances in neural information processing systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ipzZ9siozwsC',
      },
    ],
    keys: ['Segmentation', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Dynamic Token Normalization Improves Vision Transformer',
    authors: 'Wenqi Shao, Yixiao Ge, Zhaoyang Zhang, Xuyuan Xu, Xiaogang Wang, Ying Shan, Ping Luo',
    proceedings: 'Advances in Neural Information Processing Systems 34',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:SpbeaW3--B0C',
      },
    ],
    keys: ['Transformer', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Fast: Faster arbitrarily-shaped text detector with minimalist kernel representation',
    authors: 'Zhe Chen, Jiahao Wang, Wenhai Wang, Guo Chen, Enze Xie, Ping Luo, Tong Lu',
    proceedings: 'arXiv preprint arXiv:2111.02394',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:oNZyr7d5Mn4C',
      },
    ],
    keys: ['Detection', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Neural network training method and apparatus, and image processing method and apparatus',
    authors: 'HAN Jiangfan, P Luo, X Wang',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:M7yex6snE4oC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: [],
  },
  {
    title: 'Data processing method and apparatus, and storage medium',
    authors: 'P Luo, L Wu, P Zhanglin, R Zhang, J Ren, W Shao',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:k8Z6L05lTy4C',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: [],
  },
  {
    title: 'Objects in semantic topology',
    authors:
      'Shuo Yang, Peize Sun, Yi Jiang, Xiaobo Xia, Ruiheng Zhang, Zehuan Yuan, Changhu Wang, Ping Luo, Min Xu',
    proceedings: 'arXiv preprint arXiv:2110.02687',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:lmc2jWPfTJgC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Exploiting deep generative prior for versatile image restoration and manipulation',
    authors: 'Xingang Pan, Xiaohang Zhan, Bo Dai, Dahua Lin, Chen Change Loy, Ping Luo',
    proceedings: 'IEEE Transactions on Pattern Analysis and Machine Intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:bnK-pcrLprsC',
      },
    ],
    keys: ['Generative Models', 'Computer Vision'],
    pis: ['Bo Dai', 'Ping Luo'],
  },
  {
    title: 'Towards high-quality temporal action detection with sparse proposals',
    authors: 'Jiannan Wu, Peize Sun, Shoufa Chen, Jiewen Yang, Zihao Qi, Lan Ma, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2109.08847',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:KUbvn5osdkgC',
      },
    ],
    keys: ['Detection', 'Video Understanding'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Neural network training method and image matching method and apparatus',
    authors: 'Y Ge, L Wu, R Zhang, P Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:tYavs44e6CUC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: [],
  },
  {
    title: 'Method and device for image processing, and computer storage medium',
    authors: 'X Pan, SHI Jianping, P Luo, X Tang',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:evX43VCCuoAC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: [],
  },
  {
    title: 'Self-supervised video representation learning with constrained spatiotemporal jigsaw',
    authors:
      'Yuqi Huo, Mingyu Ding, Haoyu Lu, Zhiwu Lu, Tao Xiang, Ji-Rong Wen, Ziyuan Huang, Jianwen Jiang, Shiwei Zhang, Mingqian Tang, Songfang Huang, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:vDijr-p_gm4C',
      },
    ],
    keys: ['Video Understanding', 'Self-Supervised'],
    pis: ['Ping Luo'],
  },
  {
    title: 'RelativeNAS: Relative neural architecture search via slow-fast learning',
    authors: 'Hao Tan, Ran Cheng, Shihua Huang, Cheng He, Changxiao Qiu, Fan Yang, Ping Luo',
    proceedings: 'IEEE Transactions on Neural Networks and Learning Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:hkOj_22Ku90C',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'vPipe: A Virtualized Acceleration System for Achieving Efficient and Scalable Pipeline Parallel DNN Training',
    authors:
      'Shixiong Zhao, Fanxin Li, Xusheng Chen, Xiuxian Guan, Jianyu Jiang, Dong Huang, Yuhao Qing, Sen Wang, Peng Wang, Gong Zhang, Cheng Li, Ping Luo, Heming Cui',
    proceedings: 'IEEE Transactions on Parallel and Distributed Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:4MWp96NkSFoC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Differentiable dynamic quantization with mixed precision and adaptive resolution',
    authors: 'Zhaoyang Zhang, Wenqi Shao, Jinwei Gu, Xiaogang Wang, Ping Luo',
    proceedings: 'International Conference on Machine Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ML0RJ9NH7IQC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'What makes for end-to-end object detection?',
    authors: 'Peize Sun, Yi Jiang, Enze Xie, Wenqi Shao, Zehuan Yuan, Changhu Wang, Ping Luo',
    proceedings: 'International Conference on Machine Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:7T2F9Uy0os0C',
      },
    ],
    keys: ['Detection', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Image processing method and apparatus, computer device, and computer storage medium',
    authors: 'W Shao, T Meng, R Zhang, P Luo, L Wu',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:EkHepimYqZsC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: [],
  },
  {
    title: 'A unified multi-scenario attacking network for visual object tracking',
    authors: 'Xuesong Chen, Canmiao Fu, Feng Zheng, Yong Zhao, Hongsheng Li, Ping Luo, Guo-Jun Qi',
    proceedings: 'Proceedings of the AAAI Conference on Artificial Intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:EYYDruWGBe4C',
      },
    ],
    keys: ['Tracking', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Polarmask++: Enhanced polar representation for single-shot instance segmentation and beyond',
    authors: 'Enze Xie, Wenhai Wang, Mingyu Ding, Ruimao Zhang, Ping Luo',
    proceedings: 'IEEE Transactions on Pattern Analysis and Machine Intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:nrtMV_XWKgEC',
      },
    ],
    keys: ['Segmentation', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Bwcp: Probabilistic learning-to-prune channels for convnets via batch whitening',
    authors: 'Wenqi Shao, Hang Yu, Zhaoyang Zhang, Hang Xu, Zhenguo Li, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2105.06423',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:yB1At4FlUx8C',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Going deeper into face detection: A survey',
    authors: 'Shervin Minaee, Ping Luo, Zhe Lin, Kevin Bowyer',
    proceedings: 'arXiv preprint arXiv:2103.14983',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:XD-gHx7UXLsC',
      },
    ],
    keys: ['Face Recognition', 'Detection'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Information processing method and apparatus, and storage medium',
    authors: 'Z Zhang, L Wu, P Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:9Nmd_mFXekcC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: [],
  },
  {
    title: 'Learning versatile neural architectures by propagating network codes',
    authors:
      'Mingyu Ding, Yuqi Huo, Haoyu Lu, Linjie Yang, Zhe Wang, Zhiwu Lu, Jingdong Wang, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2103.13253',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:t7zJ5fGR-2UC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Method and device for image processing, electronic device, and storage medium',
    authors: 'X Pan, P Luo, SHI Jianping, X Tang',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:fEOibwPWpKIC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: [],
  },
  {
    title:
      'Fat: Learning low-bitwidth parametric representation via frequency-aware transformation',
    authors: 'Chaofan Tao, Rui Lin, Quan Chen, Zhaoyang Zhang, Ping Luo, Ngai Wong',
    proceedings: 'arXiv preprint arXiv:2102.07444',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:35r97b3x0nAC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Segmenting transparent object in the wild with transformer',
    authors: 'Enze Xie, Wenjia Wang, Wenhai Wang, Peize Sun, Hang Xu, Ding Liang, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2101.08461',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:tzM49s52ZIMC',
      },
    ],
    keys: ['Segmentation', 'Transformer'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Going deeper into face detection: A survey. arXiv',
    authors: 'S Minaee, P Luo, Z Lin, K Bowyer',
    proceedings: 'arXiv preprint arXiv:2103.14983',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:BrOSOlqYqPUC',
      },
    ],
    keys: ['Face Recognition', 'Detection'],
    pis: [],
  },
  {
    title: 'Watch only once: An end-to-end video action detection framework',
    authors:
      'Shoufa Chen, Peize Sun, Enze Xie, Chongjian Ge, Jiannan Wu, Lan Ma, Jiajun Shen, Ping Luo',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:b1wdh0AR-JQC',
      },
    ],
    keys: ['Detection', 'Video Understanding'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Star: A structure-aware lightweight transformer for real-time image enhancement',
    authors: 'Zhaoyang Zhang, Yitong Jiang, Jun Jiang, Xiaogang Wang, Ping Luo, Jinwei Gu',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:gsN89kCJA0AC',
      },
    ],
    keys: ['Transformer', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Bringing events into video deblurring with non-consecutively blurry frames',
    authors: 'Wei Shang, Dongwei Ren, Dongqing Zou, Jimmy S Ren, Ping Luo, Wangmeng Zuo',
    proceedings: 'Proceedings of the IEEE/CVF international conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:TIZ-Mc8IlK0C',
      },
    ],
    keys: ['Video Understanding', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Adversarial robustness for unsupervised domain adaptation',
    authors:
      'Muhammad Awais, Fengwei Zhou, Hang Xu, Lanqing Hong, Ping Luo, Sung-Ho Bae, Zhenguo Li',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:hMsQuOkrut0C',
      },
    ],
    keys: ['Domain Adaptation', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'End-to-end dense video captioning with parallel decoding',
    authors: 'Teng Wang, Ruimao Zhang, Zhichao Lu, Feng Zheng, Ran Cheng, Ping Luo',
    proceedings: 'Proceedings of the IEEE/CVF international conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ILKRHgRFtOwC',
      },
    ],
    keys: ['Video Understanding', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Trans2seg: Transparent object segmentation with transformer',
    authors: 'Enze Xie, Wenjia Wang, Wenhai Wang, Peize Sun, Hang Xu, Ding Liang, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2101.08461',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:L7CI7m0gUJcC',
      },
    ],
    keys: ['Segmentation', 'Transformer'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Multi-frame collaboration for effective endoscopic video polyp detection via spatial-temporal feature transformation',
    authors: 'Lingyun Wu, Zhiqiang Hu, Yuanfeng Ji, Ping Luo, Shaoting Zhang',
    proceedings:
      'Medical Image Computing and Computer Assisted Intervention–MICCAI 2021: 24th International Conference, Strasbourg, France, September 27–October 1, 2021, Proceedings, Part V 24',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:vbGhcppDl1QC',
      },
    ],
    keys: ['Detection', 'Video Understanding'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Multi-compound transformer for accurate biomedical image segmentation',
    authors:
      'Yuanfeng Ji, Ruimao Zhang, Huijie Wang, Zhen Li, Lingyun Wu, Shaoting Zhang, Ping Luo',
    proceedings:
      'Medical Image Computing and Computer Assisted Intervention–MICCAI 2021: 24th International Conference, Strasbourg, France, September 27–October 1, 2021, Proceedings, Part I 24',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:BUYA1_V_uYcC',
      },
    ],
    keys: ['Segmentation', 'Transformer'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Compensation tracker: Reprocessing for lost object',
    authors: 'Z Zou, J Huang, P Luo',
    proceedings: 'arXiv preprint arXiv:2008.12052',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:AvfA0Oy_GE0C',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: [],
  },
  {
    title:
      'Hr-nas: Searching efficient high-resolution neural architectures with lightweight transformers',
    authors: 'Mingyu Ding, Xiaochen Lian, Linjie Yang, Peng Wang, Xiaojie Jin, Zhiwu Lu, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:zLWjf1WUPmwC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Vipnas: Efficient video pose estimation via neural architecture search',
    authors:
      'Lumin Xu, Yingda Guan, Sheng Jin, Wentao Liu, Chen Qian, Ping Luo, Wanli Ouyang, Xiaogang Wang',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:uc_IGeMz5qoC',
      },
    ],
    keys: ['Video Understanding', 'Pose Estimation'],
    pis: ['Ping Luo'],
  },
  {
    title: 'When human pose estimation meets robustness: Adversarial algorithms and benchmarks',
    authors: 'Jiahang Wang, Sheng Jin, Wentao Liu, Weizhong Liu, Chen Qian, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:0KyAp5RtaNEC',
      },
    ],
    keys: ['Pose Estimation', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Disentangled cycle consistency for highly-realistic virtual try-on',
    authors: 'Chongjian Ge, Yibing Song, Yuying Ge, Han Yang, Wei Liu, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:VLnqNzywnoUC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Unsupervised pretraining for object detection by patch reidentification',
    authors: 'Jian Ding, Enze Xie, Hang Xu, Chenhan Jiang, Zhenguo Li, Ping Luo, Gui-Song Xia',
    proceedings: 'arXiv preprint arXiv:2103.04814',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:uJ-U7cs_P_0C',
      },
    ],
    keys: ['Detection', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Parser-free virtual try-on via distilling appearance flows',
    authors: 'Yuying Ge, Yibing Song, Ruimao Zhang, Chongjian Ge, Wei Liu, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:j8SEvjWlNXcC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Pyramid vision transformer: A versatile backbone for dense prediction without convolutions',
    authors:
      'Wenhai Wang, Enze Xie, Xiang Li, Deng-Ping Fan, Kaitao Song, Ding Liang, Tong Lu, Ping Luo, Ling Shao',
    proceedings: 'Proceedings of the IEEE/CVF international conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:-_dYPAW6P2MC',
      },
    ],
    keys: ['Transformer', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Detco: Unsupervised contrastive learning for object detection',
    authors:
      'Enze Xie, Jian Ding, Wenhai Wang, Xiaohang Zhan, Hang Xu, Peize Sun, Zhenguo Li, Ping Luo',
    proceedings: 'Proceedings of the IEEE/CVF international conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:2KloaMYe4IUC',
      },
    ],
    keys: ['Detection', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Sparse r-cnn: End-to-end object detection with learnable proposals',
    authors:
      'Peize Sun, Rufeng Zhang, Yi Jiang, Tao Kong, Chenfeng Xu, Wei Zhan, Masayoshi Tomizuka, Lei Li, Zehuan Yuan, Changhu Wang, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:tKAzc9rXhukC',
      },
    ],
    keys: ['Detection', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Domain-adaptive few-shot learning',
    authors: 'An Zhao, Mingyu Ding, Zhiwu Lu, Tao Xiang, Yulei Niu, Jiechao Guan, Ji-Rong Wen',
    proceedings: 'Proceedings of the IEEE/CVF Winter Conference on Applications of Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:kRWSkSYxWN8C',
      },
    ],
    keys: ['Few-Shot Learning', 'Machine Learning'],
    pis: [],
  },
  {
    title: 'Transtrack: Multiple object tracking with transformer',
    authors:
      'Peize Sun, Jinkun Cao, Yi Jiang, Rufeng Zhang, Enze Xie, Zehuan Yuan, Changhu Wang, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2012.15460',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ZfRJV9d4-WMC',
      },
    ],
    keys: ['Tracking', 'Transformer'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Channel equilibrium networks for learning deep representation',
    authors: 'Wenqi Shao, Shitao Tang, Xingang Pan, Ping Tan, Xiaogang Wang, Ping Luo',
    proceedings: 'International conference on machine learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:q3oQSFYPqjQC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Do 2d gans know 3d shape? unsupervised 3d shape reconstruction from 2d image gans',
    authors: 'Xingang Pan, Bo Dai, Ziwei Liu, Chen Change Loy, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2011.00844',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Fu2w8maKXqMC',
      },
    ],
    keys: ['3D Vision', 'Generative Models'],
    pis: ['Bo Dai', 'Ping Luo'],
  },
  {
    title: 'Fashion retrieval via graph reasoning networks on a similarity pyramid',
    authors: 'Yiming Gao, Zhanghui Kuang, Guanbin Li, Ping Luo, Yimin Chen, Liang Lin, Wayne Zhang',
    proceedings: 'IEEE Transactions on Pattern Analysis and Machine Intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=200&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:UHK10RUVsp4C',
      },
    ],
    keys: ['Graph Learning', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Dynamic and static context-aware lstm for multi-agent motion prediction',
    authors: 'Chaofan Tao, Qinhong Jiang, Lixin Duan, Ping Luo',
    proceedings: 'European Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ZuybSZzF8UAC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Whole-body human pose estimation in the wild',
    authors: 'Sheng Jin, Lumin Xu, Jin Xu, Can Wang, Wentao Liu, Chen Qian, Wanli Ouyang, Ping Luo',
    proceedings: 'European Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:SdhP9T11ey4C',
      },
    ],
    keys: ['Pose Estimation', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Webly supervised image classification with self-contained confidence',
    authors:
      'Jingkang Yang, Litong Feng, Weirong Chen, Xiaopeng Yan, Huabin Zheng, Ping Luo, Wayne Zhang',
    proceedings: 'European Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:PELIpwtuRlgC',
      },
    ],
    keys: ['Classification', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Normalization method and apparatus for deep neural network, and storage media',
    authors: 'P Luo, L Wu, J Ren, P Zhanglin, R Zhang, W Xinjiang',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:1yQoGdGgb4wC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: [],
  },
  {
    title: 'Apparatuses and methods for semantic image labeling',
    authors: 'X Tang, Z Liu, LI Xiaoxiao, P Luo, CC Loy',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:RYcK_YlVTxYC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: [],
  },
  {
    title: 'Convolution-weight-distribution assumption: Rethinking the criteria of channel pruning',
    authors: 'Zhongzhan Huang, Wenqi Shao, Xinjiang Wang, Liang Lin, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2004.11627',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:HE397vMXCloC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Adax: Adaptive gradient descent with exponential long term memory',
    authors: 'Wenjie Li, Zhaoyang Zhang, Xinjiang Wang, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2004.09740',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:XiVPGOgt02cC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Every frame counts: Joint learning of video segmentation and optical flow',
    authors: 'Mingyu Ding, Zhe Wang, Bolei Zhou, Jianping Shi, Zhiwu Lu, Ping Luo',
    proceedings: 'Proceedings of the AAAI conference on artificial intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:fQNAKQ3IYiAC',
      },
    ],
    keys: ['Segmentation', 'Video Understanding'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Methods and systems for social relation identification',
    authors: 'X Tang, Z Zhang, P Luo, CC Loy',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:2P1L_qKh6hAC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: [],
  },
  {
    title: 'How does BN increase collapsed neural network filters?',
    authors: 'Sheng Zhou, Xinjiang Wang, Ping Luo, Litong Feng, Wenjie Li, Wei Zhang',
    proceedings: 'arXiv preprint arXiv:2001.11216',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:BrmTIyaxlBUC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Human Centric Visual Analysis with Deep Learning, Springer, Singapore, 2020, pp. 115–130',
    authors: 'L LIN, D ZHANG, P Luo, W ZUO',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:dBIO0h50nwkC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: [],
  },
  {
    title: 'Human Centric Visual Analysis with Deep Learning, Springer, Singapore, 2020, pp. 47–54',
    authors: 'L LIN, D ZHANG, P Luo, W ZUO',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:QYdC8u9Cj1oC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: [],
  },
  {
    title: 'Human Centric Visual Analysis with Deep Learning, Springer, Singapore, 2020, pp. 69–83',
    authors: 'L LIN, D ZHANG, P Luo, W ZUO',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:9c2xU6iGI7YC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: [],
  },
  {
    title: 'Compensation Tracker: Data Association Method for Lost Object.',
    authors: 'Zhibo Zou, Junjie Huang, Ping Luo',
    proceedings: 'CoRR',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:_Re3VWB3Y0AC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'SelfText Beyond Polygon: Unconstrained text detection with box supervision and dynamic self-training',
    authors:
      'Weijia Wu, Enze Xie, Ruimao Zhang, Wenhai Wang, Guan Pang, Zhen Li, Hong Zhou, Ping Luo',
    proceedings: 'arXiv preprint arXiv:2011.13307',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:NJ774b8OgUMC',
      },
    ],
    keys: ['Detection', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Uxnet: Searching multi-level feature aggregation for 3d medical image segmentation',
    authors: 'Yuanfeng Ji, Ruimao Zhang, Zhen Li, Jiamin Ren, Shaoting Zhang, Ping Luo',
    proceedings:
      'Medical Image Computing and Computer Assisted Intervention–MICCAI 2020: 23rd International Conference, Lima, Peru, October 4–8, 2020, Proceedings, Part I 23',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:JQOojiI6XY0C',
      },
    ],
    keys: ['3D Vision', 'Segmentation'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Differentiable hierarchical graph grouping for multi-person pose estimation',
    authors: 'Sheng Jin, Wentao Liu, Enze Xie, Wenhai Wang, Chen Qian, Wanli Ouyang, Ping Luo',
    proceedings:
      'Computer Vision–ECCV 2020: 16th European Conference, Glasgow, UK, August 23–28, 2020, Proceedings, Part VII 16',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:eq2jaN3J8jMC',
      },
    ],
    keys: ['Graph Learning', 'Pose Estimation'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Ae textspotter: Learning visual and linguistic representation for ambiguous text spotting',
    authors:
      'Wenhai Wang, Xuebo Liu, Xiaozhong Ji, Enze Xie, Ding Liang, ZhiBo Yang, Tong Lu, Chunhua Shen, Ping Luo',
    proceedings:
      'Computer Vision–ECCV 2020: 16th European Conference, Glasgow, UK, August 23–28, 2020, Proceedings, Part XIV 16',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:9vf0nzSNQJEC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Video Instance-Level Human Parsing',
    authors:
      'Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo, Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo',
    proceedings: 'Human Centric Visual Analysis with Deep Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Y5dfb0dijaUC',
      },
    ],
    keys: ['Video Understanding', 'Machine Learning'],
    pis: ['Ping Luo', 'Ping Luo'],
  },
  {
    title: 'Online knowledge distillation via collaborative learning',
    authors: 'Qiushan Guo, Xinjiang Wang, Yichao Wu, Zhipeng Yu, Ding Liang, Xiaolin Hu, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:AXPGKjj_ei8C',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: '3d human mesh regression with dense correspondence',
    authors: 'Wang Zeng, Wanli Ouyang, Ping Luo, Wentao Liu, Xiaogang Wang',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Mojj43d5GZwC',
      },
    ],
    keys: ['3D Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Learning a reinforced agent for flexible exposure bracketing selection',
    authors: 'Zhouxia Wang, Jiawei Zhang, Mude Lin, Jiong Wang, Ping Luo, Jimmy Ren',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:WA5NYHcadZ8C',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Segmenting transparent objects in the wild',
    authors: 'Enze Xie, Wenjia Wang, Wenhai Wang, Mingyu Ding, Chunhua Shen, Ping Luo',
    proceedings:
      'Computer Vision–ECCV 2020: 16th European Conference, Glasgow, UK, August 23–28, 2020, Proceedings, Part XIII 16',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:5ugPr518TE4C',
      },
    ],
    keys: ['Segmentation', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Exemplar normalization for learning deep representation',
    authors: 'Ruimao Zhang, Zhanglin Peng, Lingyun Wu, Zhen Li, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:V3AGJWp-ZtQC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Towards photo-realistic virtual try-on by adaptively generating-preserving image content',
    authors: 'Han Yang, Ruimao Zhang, Xiaobao Guo, Wei Liu, Wangmeng Zuo, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:mvPsJ3kp5DgC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Learning depth-guided convolutions for monocular 3d object detection',
    authors: 'Mingyu Ding, Yuqi Huo, Hongwei Yi, Zhe Wang, Jianping Shi, Zhiwu Lu, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF Conference on computer vision and pattern recognition workshops',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:D_sINldO8mEC',
      },
    ],
    keys: ['3D Vision', 'Detection'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Face localization and enhancement',
    authors:
      'Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo, Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo',
    proceedings: 'Human Centric Visual Analysis with Deep Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:8AbLer7MMksC',
      },
    ],
    keys: ['Face Recognition', 'Machine Learning'],
    pis: ['Ping Luo', 'Ping Luo'],
  },
  {
    title: 'Human Activity Understanding',
    authors:
      'Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo, Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo',
    proceedings: 'Human Centric Visual Analysis with Deep Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:geHnlv5EZngC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo', 'Ping Luo'],
  },
  {
    title: 'Person Verification',
    authors:
      'Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo, Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo',
    proceedings: 'Human Centric Visual Analysis with Deep Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:sSrBHYA8nusC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo', 'Ping Luo'],
  },
  {
    title: 'Self-supervised Structure-Sensitive Learning for Human Parsing',
    authors:
      'Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo, Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo',
    proceedings: 'Human Centric Visual Analysis with Deep Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:B3FOqHPlNUQC',
      },
    ],
    keys: ['Self-Supervised', 'Machine Learning'],
    pis: ['Ping Luo', 'Ping Luo'],
  },
  {
    title: 'Human centric visual analysis with deep learning',
    authors: 'Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:4fKUyHm3Qg0C',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'The Foundation and Advances of Deep Learning',
    authors:
      'Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo, Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo',
    proceedings: 'Human Centric Visual Analysis with Deep Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:tS2w5q8j5-wC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo', 'Ping Luo'],
  },
  {
    title: 'Human-Centric Visual Analysis: Tasks and Progress',
    authors:
      'Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo, Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo',
    proceedings: 'Human Centric Visual Analysis with Deep Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:vRqMK49ujn8C',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo', 'Ping Luo'],
  },
  {
    title: 'Pedestrian Detection with RPN and Boosted Forest',
    authors:
      'Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo, Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo',
    proceedings: 'Human Centric Visual Analysis with Deep Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:08ZZubdj9fEC',
      },
    ],
    keys: ['Detection', 'Machine Learning'],
    pis: ['Ping Luo', 'Ping Luo'],
  },
  {
    title: 'Face Verification',
    authors:
      'Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo, Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo',
    proceedings: 'Human Centric Visual Analysis with Deep Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:tOudhMTPpwUC',
      },
    ],
    keys: ['Face Recognition', 'Machine Learning'],
    pis: ['Ping Luo', 'Ping Luo'],
  },
  {
    title: 'Instance-Level Human Parsing',
    authors:
      'Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo, Liang Lin, Dongyu Zhang, Ping Luo, Wangmeng Zuo',
    proceedings: 'Human Centric Visual Analysis with Deep Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:l7t_Zn2s7bgC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo', 'Ping Luo'],
  },
  {
    title: 'Polarmask: Single shot instance segmentation with polar representation',
    authors:
      'Enze Xie, Peize Sun, Xiaoge Song, Wenhai Wang, Xuebo Liu, Ding Liang, Chunhua Shen, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:WbkHhVStYXYC',
      },
    ],
    keys: ['Segmentation', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Maskgan: Towards diverse and interactive facial image manipulation',
    authors: 'Cheng-Han Lee, Ziwei Liu, Lingyun Wu, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:xtRiw3GOFMkC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Differentiable Learning-to-Group Channels via Groupable Convolutional Neural Networks',
    authors:
      'Zhaoyang Zhang, Jingyu Li, Wenqi Shao, Zhanglin Peng, Ruimao Zhang, Xiaogang Wang, Ping Luo',
    proceedings: 'IEEE International Conference on Computer Vision (ICCV)',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Tiz5es2fbqcC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Deep Self-Learning from Noisy Labels',
    authors: 'Jiangfan Han, Ping Luo, Xiaogang Wang',
    proceedings: 'IEEE International Conference on Computer Vision (ICCV)',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:XiSMed-E-HIC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'PDA: Progressive data augmentation for general robustness of deep neural networks',
    authors:
      'Hang Yu, Aishan Liu, Xianglong Liu, Gengchao Li, Ping Luo, Ran Cheng, Jichen Yang, Chongzhi Zhang',
    proceedings: 'arXiv preprint arXiv:1909.04839',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:dQ2og3OwTAUC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Scale Calibrated Training: Improving Generalization of Deep Networks via Scale-Specific Normalization',
    authors: 'Zhuoran Yu, Aojun Zhou, Yukun Ma, Yudian Li, Xiaohan Zhang, Ping Luo',
    proceedings: 'arXiv preprint arXiv:1909.00182',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:PR6Y55bgFSsC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Towards improving generalization of deep networks via consistent normalization',
    authors: 'Aojun Zhou, Yukun Ma, Yudian Li, Xiaohan Zhang, Ping Luo',
    proceedings: 'ArXiv',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:nb7KW1ujOQ8C',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Switchable normalization for learning-to-normalize deep representation',
    authors: 'Ping Luo, Ruimao Zhang, Jiamin Ren, Zhanglin Peng, Jingyu Li',
    proceedings: 'IEEE transactions on pattern analysis and machine intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:NhqRSupF_l8C',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Talking face generation by adversarially disentangled audio-visual representation',
    authors: 'Hang Zhou, Yu Liu, Ziwei Liu, Ping Luo, Xiaogang Wang',
    proceedings: 'Proceedings of the AAAI conference on artificial intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:3s1wT3WcHBgC',
      },
    ],
    keys: ['Face Recognition', 'Audio/Speech'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Differentiable dynamic normalization for learning deep representation',
    authors: 'Ping Luo, Peng Zhanglin, Shao Wenqi, Zhang Ruimao, Ren Jiamin, Wu Lingyun',
    proceedings: 'International Conference on Machine Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:b0M2c_1WBrUC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Wider face and pedestrian challenge 2018: Methods and results',
    authors:
      'Chen Change Loy, Dahua Lin, Wanli Ouyang, Yuanjun Xiong, Shuo Yang, Qingqiu Huang, Dongzhan Zhou, Wei Xia, Quanquan Li, Ping Luo, Junjie Yan, Jianfeng Wang, Zuoxin Li, Ye Yuan, Boxun Li, Shuai Shao, Gang Yu, Fangyun Wei, Xiang Ming, Dong Chen, Shifeng Zhang, Cheng Chi, Zhen Lei, Stan Z Li, Hongkai Zhang, Bingpeng Ma, Hong Chang, Shiguang Shan, Xilin Chen, Wu Liu, Boyan Zhou, Huaxiong Li, Peng Cheng, Tao Mei, Artem Kukharenko, Artem Vasenin, Nikolay Sergievskiy, Hua Yang, Liangqi Li, Qiling Xu, Yuan Hong, Lin Chen, Mingjun Sun, Yirong Mao, Shiying Luo, Yongjun Li, Ruiping Wang, Qiaokang Xie, Ziyang Wu, Lei Lu, Yiheng Liu, Wengang Zhou',
    proceedings: 'arXiv preprint arXiv:1902.06854',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:bFI3QPDXJZMC',
      },
    ],
    keys: ['Face Recognition', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'CamNet: Coarse-to-fine retrieval for camera re-localization',
    authors: 'Mingyu Ding, Zhe Wang, Jiankai Sun, Jianping Shi, Ping Luo',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:5Ul4iDaHHb8C',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Vision-infused deep audio inpainting',
    authors: 'Hang Zhou, Ziwei Liu, Xudong Xu, Ping Luo, Xiaogang Wang',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:K3LRdlH-MEoC',
      },
    ],
    keys: ['Audio/Speech', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Fashion retrieval via graph reasoning networks on a similarity pyramid',
    authors: 'Zhanghui Kuang, Yiming Gao, Guanbin Li, Ping Luo, Yimin Chen, Liang Lin, Wayne Zhang',
    proceedings: 'Proceedings of the IEEE/CVF international conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:P5F9QuxV20EC',
      },
    ],
    keys: ['Graph Learning', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Once a man: Towards multi-target attack via learning multi-target adversarial network once',
    authors:
      'Jiangfan Han, Xiaoyi Dong, Ruimao Zhang, Dongdong Chen, Weiming Zhang, Nenghai Yu, Ping Luo, Xiaogang Wang',
    proceedings: 'Proceedings of the IEEE/CVF International Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:1sJd4Hv_s6UC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Switchable whitening for deep representation learning',
    authors: 'Xingang Pan, Xiaohang Zhan, Jianping Shi, Xiaoou Tang, Ping Luo',
    proceedings: 'Proceedings of the IEEE/CVF international conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:EUQCXRtRnyEC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Ssn: Learning sparse switchable normalization via sparsestmax',
    authors:
      'Wenqi Shao, Tianjian Meng, Jingyu Li, Ruimao Zhang, Yudian Li, Xiaogang Wang, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:_xSYboBqXhAC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Deepfashion2: A versatile benchmark for detection, pose estimation, segmentation and re-identification of clothing images',
    authors: 'Yuying Ge, Ruimao Zhang, Xiaogang Wang, Xiaoou Tang, Ping Luo',
    proceedings:
      'Proceedings of the IEEE/CVF conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:a0OBvERweLwC',
      },
    ],
    keys: ['Segmentation', 'Detection'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Scheduling Large-scale Distributed Training via Reinforcement Learning',
    authors: 'Zhanglin Peng, Jiamin Ren, Ruimao Zhang, Lingyun Wu, Xinjiang Wang, Ping Luo',
    proceedings: '2018 IEEE International Conference on Big Data (Big Data)',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:yD5IFk8b50cC',
      },
    ],
    keys: ['RL', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Cuimage: a neverending learning platform on a convolutional knowledge graph of billion web images',
    authors: 'Zhanglin Peng, Lingyun Wu, Jiamin Ren, Ruimao Zhang, Ping Luo',
    proceedings: '2018 IEEE International Conference on Big Data (Big Data)',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:cFHS6HbyZ2cC',
      },
    ],
    keys: ['Graph Learning', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Facefeat-gan: a two-stage approach for identity-preserving face synthesis',
    authors: 'Yujun Shen, Bolei Zhou, Ping Luo, Xiaoou Tang',
    proceedings: 'arXiv preprint arXiv:1812.01288',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:4OULZ7Gr8RgC',
      },
    ],
    keys: ['Face Recognition', 'Generative Models'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Do normalization layers in a deep ConvNet really need to be distinct?',
    authors: 'Ping Luo, Zhanglin Peng, Jiamin Ren, Ruimao Zhang',
    proceedings: 'arXiv preprint arXiv:1811.07727',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:u_35RYKgDlwC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Temporal Sequence Distillation',
    authors: 'Zhaoyang Zhang, Zhanghui Kuang, Ping Luo, Litong Feng, Wei Zhang',
    proceedings: 'Proceedings of the 26th ACM international conference on Multimedia',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:0CzhzZyukY4C',
      },
    ],
    keys: ['Video Understanding', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Temporal sequence distillation: Towards few-frame action recognition in videos',
    authors: 'Zhaoyang Zhang, Zhanghui Kuang, Ping Luo, Litong Feng, Wei Zhang',
    proceedings: 'Proceedings of the 26th ACM international conference on Multimedia',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:rO6llkc54NcC',
      },
    ],
    keys: ['Video Understanding', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Towards Understanding Regularization in Batch Normalization',
    authors: 'Ping Luo, Xinjiang Wang, Wenqi Shao, Zhanglin Peng',
    proceedings: 'arXiv preprint arXiv:1809.00846',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:zA6iFVUQeVQC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Large-scale celebfaces attributes (celeba) dataset',
    authors: 'Ziwei Liu, Ping Luo, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'Retrieved August',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:pyW8ca7W8N0C',
      },
    ],
    keys: ['Dataset/Benchmark', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'SCAN: Self-and-Collaborative Attention Network for Video Person Re-identification',
    authors: 'Ruimao Zhang, Hongbin Sun, Jingyu Li, Yuying Ge, Liang Lin, Ping Luo, Xiaogang Wang',
    proceedings: 'Transaction on Image Processing (TIP)',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:M05iB0D1s5AC',
      },
    ],
    keys: ['Video Understanding', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Differentiable learning-to-normalize via switchable normalization',
    authors: 'Ping Luo, Jiamin Ren, Zhanglin Peng, Ruimao Zhang, Jingyu Li',
    proceedings: 'arXiv preprint arXiv:1806.10779',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ldfaerwXgEUC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'From facial expression recognition to interpersonal relation prediction',
    authors: 'Zhanpeng Zhang, Ping Luo, Chen Change Loy, Xiaoou Tang',
    proceedings: 'International Journal of Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:r0BpntZqJG4C',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Spatial as deep: Spatial cnn for traffic scene understanding',
    authors: 'Xingang Pan, Jianping Shi, Ping Luo, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'Proceedings of the AAAI conference on artificial intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:NaGl4SEjCO4C',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Mix-and-match tuning for self-supervised semantic segmentation',
    authors: 'Xiaohang Zhan, Ziwei Liu, Ping Luo, Xiaoou Tang, Chen Loy',
    proceedings: 'Proceedings of the AAAI conference on artificial intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:RGFaLdJalmkC',
      },
    ],
    keys: ['Segmentation', 'Self-Supervised'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Batch kalman normalization: Towards training deep neural networks with micro-batches',
    authors: 'Guangrun Wang, Jiefeng Peng, Ping Luo, Xinjiang Wang, Liang Lin',
    proceedings: 'arXiv preprint arXiv:1802.03133',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:J_g5lzvAfSwC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Kalman normalization: Normalizing internal representations across network layers',
    authors: 'Guangrun Wang, Ping Luo, Xinjiang Wang, Liang Lin',
    proceedings: 'Advances in neural information processing systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:fPk4N6BV_jEC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Two at once: Enhancing learning and generalization capacities via ibn-net',
    authors: 'Xingang Pan, Ping Luo, Jianping Shi, Xiaoou Tang',
    proceedings: 'Proceedings of the european conference on computer vision (ECCV)',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ZHo1McVdvXMC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Faceid-gan: Learning a symmetry three-player gan for identity-preserving face synthesis',
    authors: 'Yujun Shen, Ping Luo, Junjie Yan, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'Proceedings of the IEEE conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:70eg2SAEIzsC',
      },
    ],
    keys: ['Face Recognition', 'Generative Models'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Video classification via relational feature encoding networks',
    authors: 'Yao Zhou, Jiamin Ren, Jingyu Li, Litong Feng, Shi Qiu, Ping Luo',
    proceedings: 'Proceedings of the workshop on large-scale video classification challenge',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ns9cj8rnVeAC',
      },
    ],
    keys: ['Classification', 'Video Understanding'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Unconstrained fashion landmark detection via hierarchical recurrent transformer networks',
    authors: 'Sijie Yan, Ziwei Liu, Ping Luo, Shi Qiu, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'Proceedings of the 25th ACM international conference on Multimedia',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:O3NaXMp0MMsC',
      },
    ],
    keys: ['Detection', 'Transformer'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Faceness-net: Face detection through deep facial part responses',
    authors: 'Shuo Yang, Ping Luo, Chen Change Loy, Xiaoou Tang',
    proceedings: 'IEEE transactions on pattern analysis and machine intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:TFP_iSt0sucC',
      },
    ],
    keys: ['Face Recognition', 'Detection'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Deep learning markov random field for semantic segmentation',
    authors: 'Ziwei Liu, Xiaoxiao Li, Ping Luo, Chen Change Loy, Xiaoou Tang',
    proceedings: 'IEEE transactions on pattern analysis and machine intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:RHpTSmoSYBkC',
      },
    ],
    keys: ['Segmentation', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Video object segmentation with re-identification',
    authors:
      'Xiaoxiao Li, Yuankai Qi, Zhe Wang, Kai Chen, Ziwei Liu, Jianping Shi, Ping Luo, Xiaoou Tang, Chen Change Loy',
    proceedings: 'arXiv preprint arXiv:1708.00197',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:NMxIlDl6LWMC',
      },
    ],
    keys: ['Segmentation', 'Video Understanding'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Method and system for exacting face features from data of face images',
    authors: 'X Tang, ZHU Zhenyao, P Luo, X Wang',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:BqipwSGYUEgC',
      },
    ],
    keys: ['Face Recognition', 'Machine Learning'],
    pis: [],
  },
  {
    title: 'Learning deep architectures via generalized whitened neural networks',
    authors: 'Ping Luo',
    proceedings: 'International Conference on Machine Learning',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:blknAaTinKkC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'DeepID-Net: Object Detection with Deformable Part Based Convolutional Neural Networks',
    authors:
      'Wanli Ouyang, Xingyu Zeng, Xiaogang Wang, Shi Qiu, Ping Luo, Yonglong Tian, Hongsheng Li, Shuo Yang, Zhe Wang, Hongyang Li, Kun Wang, Junjie Yan, Chen-Change Loy, Xiaoou Tang',
    proceedings: 'IEEE Transactions on Pattern Analysis and Machine Intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:35N4QoGY0k4C',
      },
    ],
    keys: ['Detection', 'Machine Learning'],
    pis: ['Ping Luo', 'Hongyang Li'],
  },
  {
    title: 'Deep Dual Learning for Semantic Image Segmentation',
    authors: 'Ping Luo, Guangrun Wang, Liang Lin, Xiaogang Wang',
    proceedings: 'ICCV',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:GnPB-g6toBAC',
      },
    ],
    keys: ['Segmentation', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'EigenNet: Towards Fast and Structural Learning of Deep Neural Networks',
    authors: 'Ping Luo',
    proceedings: 'IJCAI',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:hMod-77fHWUC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Learning object interactions and descriptions for semantic image segmentation',
    authors: 'Guangrun Wang, Ping Luo, Liang Lin, Xiaogang Wang',
    proceedings: 'Proceedings of the IEEE conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:maZDTaKrznsC',
      },
    ],
    keys: ['Segmentation', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Not all pixels are equal: Difficulty-aware semantic segmentation via deep layer cascade',
    authors: 'Xiaoxiao Li, Ziwei Liu, Ping Luo, Chen Change Loy, Xiaoou Tang',
    proceedings: 'Proceedings of the IEEE conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:k_IJM867U9cC',
      },
    ],
    keys: ['Segmentation', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Deep learning face attributes for detection and alignment',
    authors: 'Chen Change Loy, Ping Luo, Chen Huang',
    proceedings: 'Visual Attributes',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:isC4tDSrTZIC',
      },
    ],
    keys: ['Face Recognition', 'Detection'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Large-scale fashion (deepfashion) database',
    authors: 'Ziwei Liu, Ping Luo, Shi Qiu, Xiaogang Wang, Xiaoou Tang',
    proceedings:
      'The Chinese University of Hong Kong, Category and Attribute Prediction Benchmark, Xiaoou TangMultimedia Laboratory',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:URolC5Kub84C',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Joint face representation adaptation and clustering in videos',
    authors: 'Zhanpeng Zhang, Ping Luo, Chen Change Loy, Xiaoou Tang',
    proceedings:
      'Computer Vision–ECCV 2016: 14th European Conference, Amsterdam, The Netherlands, October 11-14, 2016, Proceedings, Part III 14',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:j3f4tGmQtD8C',
      },
    ],
    keys: ['Face Recognition', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Fashion Landmark Detection in the Wild',
    authors: 'Ziwei Liu, Sijie Yan, Ping Luo, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'ECCV',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:4JMBOYKVnBMC',
      },
    ],
    keys: ['Detection', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Deepfashion: Powering robust clothes recognition and retrieval with rich annotations',
    authors: 'Ziwei Liu, Ping Luo, Shi Qiu, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'Proceedings of the IEEE conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:_Qo2XoVZTnwC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Clothes Co-Parsing via Joint Image Segmentation and Labeling with Application to Clothing Retrieval',
    authors: 'Xiaodan Liang, Liang Lin, Wei Yang, Ping Luo, Junshi Huang, Shuicheng Yan',
    proceedings: 'IEEE Transactions on Multimedia',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:e5wmG9Sq2KIC',
      },
    ],
    keys: ['Segmentation', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Face Model Compression by Distilling Knowledge from Neurons',
    authors: 'Ping Luo, Zhenyao Zhu, Ziwei Liu, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'AAAI',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:R3hNpaxXUhUC',
      },
    ],
    keys: ['Face Recognition', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Wider face: A face detection benchmark',
    authors: 'Shuo Yang, Ping Luo, Chen-Change Loy, Xiaoou Tang',
    proceedings: 'Proceedings of the IEEE conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:HDshCWvjkbEC',
      },
    ],
    keys: ['Face Recognition', 'Detection'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Learning deep representation for face alignment with auxiliary attributes',
    authors: 'Zhanpeng Zhang, Ping Luo, Chen Change Loy, Xiaoou Tang',
    proceedings: 'IEEE transactions on pattern analysis and machine intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:qUcmZB5y_30C',
      },
    ],
    keys: ['Face Recognition', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Learning compositional shape models of multiple distance metrics by information projection',
    authors: 'Ping Luo, Liang Lin, Xiaobai Liu',
    proceedings: 'IEEE transactions on neural networks and learning systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:IWHjjKOFINEC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Pedestrian detection aided by deep learning semantic tasks',
    authors: 'Yonglong Tian, Ping Luo, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'CVPR',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:dhFuZR0502QC',
      },
    ],
    keys: ['Detection', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Deep Learning Face Attributes in the Wild',
    authors: 'Ziwei Liu, Ping Luo, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'ICCV',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:9ZlFYXVOiuMC',
      },
    ],
    keys: ['Face Recognition', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Deep representation learning with target coding',
    authors: 'Shuo Yang, Ping Luo, Chen Change Loy, Kenneth W Shum, Xiaoou Tang',
    proceedings: 'Proceedings of the AAAI Conference on Artificial Intelligence',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:mVmsd5A6BfQC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Learning to recognize pedestrian attribute',
    authors: 'Yubin Deng, Ping Luo, Chen Change Loy, Xiaoou Tang',
    proceedings: 'arXiv preprint arXiv:1501.00901',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:SeFeTyx0c_EC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Deep Representation Learning with Target Coding Supplementary Material',
    authors: 'Shuo Yang, Ping Luo, Chen Change Loy, Kenneth W Shum, Xiaoou Tang',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:TQgYirikUcIC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Deep Learning Strong Parts for Pedestrian Detection',
    authors: 'Yonglong Tian, Ping Luo, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'ICCV',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=300&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:mB3voiENLucC',
      },
    ],
    keys: ['Detection', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'From facial parts responses to face detection: A deep learning approach',
    authors: 'Shuo Yang, Ping Luo, Chen-Change Loy, Xiaoou Tang',
    proceedings: 'Proceedings of the IEEE international conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:hFOr9nPyWt4C',
      },
    ],
    keys: ['Face Recognition', 'Detection'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Learning social relation traits from face images',
    authors: 'Zhanpeng Zhang, Ping Luo, Chen-Change Loy, Xiaoou Tang',
    proceedings: 'Proceedings of the IEEE international conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:-f6ydRqryjwC',
      },
    ],
    keys: ['Face Recognition', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Semantic image segmentation via deep parsing network',
    authors: 'Ziwei Liu, Xiaoxiao Li, Ping Luo, Chen-Change Loy, Xiaoou Tang',
    proceedings: 'Proceedings of the IEEE international conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:hC7cP41nSMkC',
      },
    ],
    keys: ['Segmentation', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'A large-scale car dataset for fine-grained categorization and verification',
    authors: 'Linjie Yang, Ping Luo, Chen Change Loy, Xiaoou Tang',
    proceedings: 'Proceedings of the IEEE conference on computer vision and pattern recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ZeXyd9-uunAC',
      },
    ],
    keys: ['Dataset/Benchmark', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Deepid-net: Deformable deep convolutional neural networks for object detection',
    authors:
      'Wanli Ouyang, Xiaogang Wang, Xingyu Zeng, Shi Qiu, Ping Luo, Yonglong Tian, Hongsheng Li, Shuo Yang, Zhe Wang, Chen-Change Loy, Xiaoou Tang',
    proceedings: 'Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:QIV2ME_5wuYC',
      },
    ],
    keys: ['Detection', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Pedestrian attribute recognition at far distance',
    authors: 'Yubin Deng, Ping Luo, Chen Change Loy, Xiaoou Tang',
    proceedings: 'Proceedings of the 22nd ACM international conference on Multimedia',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:HoB7MX3m0LUC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Deepid-net: multi-stage and deformable deep convolutional neural networks for object detection',
    authors:
      'Wanli Ouyang, Ping Luo, Xingyu Zeng, Shi Qiu, Yonglong Tian, Hongsheng Li, Shuo Yang, Zhe Wang, Yuanjun Xiong, Chen Qian, Zhenyao Zhu, Ruohui Wang, Chen-Change Loy, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'arXiv preprint arXiv:1409.3505',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:vV6vV6tmYwMC',
      },
    ],
    keys: ['Detection', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Deep learning multi-view representation for face recognition',
    authors: 'Zhenyao Zhu, Ping Luo, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'arXiv preprint arXiv:1406.6947',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:pqnbT2bcN3wC',
      },
    ],
    keys: ['Face Recognition', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Recover canonical-view faces in the wild with deep neural networks',
    authors: 'Zhenyao Zhu, Ping Luo, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'arXiv preprint arXiv:1404.3543',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Zph67rFs4hoC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Multi-view perceptron: a deep model for learning face identity and view representations',
    authors: 'Zhenyao Zhu, Ping Luo, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'Advances in Neural Information Processing Systems',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Wp0gIr-vW9MC',
      },
    ],
    keys: ['Face Recognition', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Learning and Transferring Multi-task Deep Representation for Face Alignment',
    authors: 'Zhanpeng Zhang, Ping Luo, Chen Change Loy, Xiaoou Tang',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:aqlVkmm33-oC',
      },
    ],
    keys: ['Face Recognition', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Facial landmark detection by deep multi-task learning',
    authors: 'Zhanpeng Zhang, Ping Luo, Chen Change Loy, Xiaoou Tang',
    proceedings:
      'Computer Vision–ECCV 2014: 13th European Conference, Zurich, Switzerland, September 6-12, 2014, Proceedings, Part VI 13',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:qxL8FJ1GzNcC',
      },
    ],
    keys: ['Detection', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Switchable deep network for pedestrian detection',
    authors: 'Ping Luo, Yonglong Tian, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:_kc_bZDykSQC',
      },
    ],
    keys: ['Detection', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Clothing Co-Parsing by Joint Image Segmentation and Labeling',
    authors: 'Wei Yang, Ping Luo, Liang Lin',
    proceedings: 'IEEE Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:ULOm3_A8WrAC',
      },
    ],
    keys: ['Segmentation', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Theoretical calculation and analysis of ZrO2 spherical nanometer powders',
    authors: 'Ying Chang, Huihu Wang, Qinbiao Zhu, Ping Luo, Shijie Dong',
    proceedings: 'Journal of Advanced Ceramics',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:HtS1dXgVpQUC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'A deep sum-product architecture for robust facial attributes analysis',
    authors: 'Ping Luo, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'Proceedings of the IEEE International Conference on Computer Vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:MXK_kJrjxJIC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Pedestrian parsing via deep decompositional network',
    authors: 'Ping Luo, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'Proceedings of the IEEE international conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Se3iqnhoufwC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Deep learning identity-preserving face space',
    authors: 'Zhenyao Zhu, Ping Luo, Xiaogang Wang, Xiaoou Tang',
    proceedings: 'Proceedings of the IEEE international conference on computer vision',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:roLk4NBRz8UC',
      },
    ],
    keys: ['Face Recognition', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Joint semantic segmentation by searching for compatible-competitive references',
    authors: 'Ping Luo, Xiaogang Wang, Liang Lin, Xiaoou Tang',
    proceedings: 'Proceedings of the 20th ACM international conference on Multimedia',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:5nxA0vEk-isC',
      },
    ],
    keys: ['Segmentation', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Hierarchical face parsing via deep learning',
    authors: 'Ping Luo, Xiaogang Wang, Xiaoou Tang',
    proceedings: '2012 IEEE Conference on Computer Vision and Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:LkGwnXOMwfcC',
      },
    ],
    keys: ['Face Recognition', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Representing and recognizing objects with massive local image patches',
    authors: 'Liang Lin, Ping Luo, Xiaowu Chen, Kun Zeng',
    proceedings: 'Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:3fE2CSJIrl8C',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Semantics-driven portrait cartoon stylization',
    authors: 'Ming Yang, Shu Lin, Ping Luo, Liang Lin, Hongyang Chao',
    proceedings: '2010 IEEE International Conference on Image Processing',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:hqOjcs7Dif8C',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'A discriminative model for object representation and detection via sparse features',
    authors: 'Xi Song, Ping Luo, Liang Lin, Yunde Jia',
    proceedings: '2010 20th International Conference on Pattern Recognition',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:8k81kl-MbHgC',
      },
    ],
    keys: ['Detection', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Learning shape detector by quantizing curve segments with multiple distance metrics',
    authors: 'Ping Luo, Liang Lin, Hongyang Chao',
    proceedings:
      'Computer Vision–ECCV 2010: 11th European Conference on Computer Vision, Heraklion, Crete, Greece, September 5-11, 2010, Proceedings, Part III 11',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:UebtZRa9Y70C',
      },
    ],
    keys: ['Segmentation', 'Detection'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Hierarchical 3D perception from a single image',
    authors: 'Ping Luo, Jiajie He, Liang Lin, Hongyang Chao',
    proceedings: '2009 16th IEEE International Conference on Image Processing (ICIP)',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:0EnyYjriUFMC',
      },
    ],
    keys: ['3D Vision', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'LLaMA Decoder As Vision Transformer',
    authors:
      'Jiahao Wang, Wenqi Shao, Mengzhao Chen, Chengyue Wu, Yong Liu, Taiqiang Wu, Kaipeng Zhang, Songyang Zhang, Kai Chen, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:SxCCDk4iOpsC',
      },
    ],
    keys: ['Transformer', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'DexHandDiff: Interaction-aware Diffusion Planning for Adaptive Dexterous Manipulation',
    authors:
      'Zhixuan Liang, Yao Mu, Yixiao Wang, Tianxing Chen, Wenqi Shao, Wei Zhan, Masayoshi Tomizuka, Ping Luo, Mingyu Ding',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:4aZ_i-5WJEQC',
      },
    ],
    keys: ['Generative Models', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'RoboTwin: Dual-Arm Robot Benchmark with Generative Digital Twins (early version)',
    authors: 'Zeyu Gao, Yude Zou, Lunkai Lin, Zhiqiang Xie, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:JP7YXuLIOvAC',
      },
    ],
    keys: ['Embodied AI', 'Generative Models'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'MatchMask: Mask-Centric Generative Data Augmentation for Label-Scarce Semantic Segmentation',
    authors: 'Yuqi Lin, Wenqi Shao, Zheng Yang, Jun Zhao, Xiaofei He, Ping Luo, Kaipeng Zhang',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:__bU50VfleQC',
      },
    ],
    keys: ['Segmentation', 'Generative Models'],
    pis: ['Ping Luo'],
  },
  {
    title: 'An Empirical Study of Multiple Masking in Masked Autoencoder',
    authors: 'Jie Zhu, Zhihao Yu, Mingyu Ding, Ping Luo, Leye Wang',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:A8cqit5AE6sC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'DriveE2E: Benchmarking Closed-Loop End-to-End Autonomous Driving Based-on Real-World Traffic Scenarios',
    authors:
      'Haibao Yu, Wenxian Yang, Ruiyang Hao, Chuanye Wang, Jiaru Zhong, Ping Luo, Zaiqing Nie',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:MIg0yeAD4ggC',
      },
    ],
    keys: ['Autonomous Driving', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Generalized Predictive Model for Autonomous Driving Supplementary Material',
    authors:
      'Jiazhi Yang, Shenyuan Gao, Yihang Qiu, Li Chen, Tianyu Li, Bo Dai, Kashyap Chitta, Penghao Wu, Jia Zeng, Ping Luo, Jun Zhang, Andreas Geiger, Yu Qiao, Hongyang Li',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:Xl6nMSl579sC',
      },
    ],
    keys: ['Autonomous Driving', 'Machine Learning'],
    pis: ['Bo Dai', 'Ping Luo', 'Hongyang Li'],
  },
  {
    title:
      'Supplementary Materials for Paper “InternVL: Scaling up Vision Foundation Models and Aligning for Generic Visual-Linguistic Tasks”',
    authors:
      'Zhe Chen, Jiannan Wu, Wenhai Wang, Weijie Su, Guo Chen, Sen Xing, Muyan Zhong, Qinglong Zhang, Xizhou Zhu, Lewei Lu, Bin Li, Ping Luo, Tong Lu, Yu Qiao, Jifeng Dai',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:QsaTk4IG4EwC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'StyleAdapter: A Unified Stylized Image Generation Model without Test-Time Fine-Tuning',
    authors:
      'Zhouxia Wang, Xintao Wang, Liangbin Xie, Zhongang Qi, Ying Shan, Wenping Wang, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:TlpoogIpr_IC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Convolution on Your 12× Wide Feature: A ConvNet with Nested Design',
    authors:
      'Jiahao Wang, Songyang Zhang, Haodong Duan, Zhaohui Yu, Mengzhang Li, Yong Liu, Taiqiang Wu, Xihui Liu, Kai Chen, Dahua Lin, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:QUX0mv85b1cC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Xihui Liu', 'Ping Luo'],
  },
  {
    title: 'Going deeper into face detection: A survey. arXiv 2021',
    authors: 'Shervin Minaee, Ping Luo, Zhe Lin, Kevin Bowyer',
    proceedings: 'arXiv preprint arXiv:2103.14983',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:kF1pexMAQbMC',
      },
    ],
    keys: ['Face Recognition', 'Detection'],
    pis: ['Ping Luo'],
  },
  {
    title: 'MoLE: Human-centric Text-to-image Diffusion with Mixture of Low-rank Experts',
    authors: 'Jie Zhu, Yixiong Chen, Mingyu Ding, Ping Luo, Leye Wang, Jingdong Wang',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:w1MjKQ0l0TYC',
      },
    ],
    keys: ['Generative Models', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Conditional MAE: An Empirical Study of Multiple Masking in Masked Autoencoder',
    authors: 'Jie Zhu, Zhihao Yu, Mingyu Ding, Ping Luo, Leye Wang',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:3bvyWxjaHKcC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Flow-based Feature Fusion for Vehicle-Infrastructure Cooperative 3D Object Detection–Appendix',
    authors: 'Haibao Yu, Yingjuan Tang, Enze Xie, Jilei Mao, Ping Luo, Zaiqing Nie',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:HhcuHIWmDEUC',
      },
    ],
    keys: ['Autonomous Driving', '3D Vision'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Beyond One-to-One: Rethinking the Referring Image Segmentation (Supplementary Material)',
    authors: 'Yutao Hu, Qixiong Wang, Wenqi Shao, Enze Xie, Zhenguo Li, Jungong Han, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:6bLC7aUMtPcC',
      },
    ],
    keys: ['Segmentation', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Segment Every Reference Object in Spatial and Temporal Spaces (Supplementary Material)',
    authors: 'Jiannan Wu, Yi Jiang, Bin Yan, Huchuan Lu, Zehuan Yuan, Ping Luo',
    proceedings: 'OVIS',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:CdxZDUztZiMC',
      },
    ],
    keys: ['Segmentation', 'Video Understanding'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'MetaBEV: Solving Sensor Failures for 3D Detection and Map Segmentation< Supplementary Material',
    authors:
      'Chongjian Ge, Junsong Chen, Enze Xie Zhongdao Wang, Lanqing Hong Huchuan Lu Zhenguo Li, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:LPtt_HFRSbwC',
      },
    ],
    keys: ['3D Vision', 'Segmentation'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Accelerating Vision-Language Pretraining with Free Language Modeling (Supplementary Materials)',
    authors: 'Teng Wang, Yixiao Ge, Feng Zheng, Ran Cheng, Ying Shan, Xiaohu Qie, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:U4n9YNQMCAIC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Appendix for “Visual Dependency Transformers: Dependency Tree Emerges from Reversed Attention”',
    authors:
      'Mingyu Ding13, Yikang Shen, Lijie Fan, Zhenfang Chen, Zitian Chen, Ping Luo, Josh Tenenbaum, Chuang Gan24',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:43bX7VzcjpAC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Appendix of EC2: Emergent Communication for Embodied Control',
    authors: 'Yao Mu, Shunyu Yao, Mingyu Ding, Ping Luo, Chuang Gan',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:zCSUwVk65WsC',
      },
    ],
    keys: ['Embodied AI', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Dense Distinct Query for End-to-End Object Detection (Supplementary Material)',
    authors:
      'Shilong Zhang, Xinjiang Wang, Jiaqi Wang, Jiangmiao Pang, Chengqi Lyu, Wenwei Zhang, Ping Luo, Kai Chen',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:1lhNe0rCu4AC',
      },
    ],
    keys: ['Detection', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Universal Instance Perception as Object Discovery and Retrieval—–Supplementary Material—–',
    authors: 'Bin Yan, Yi Jiang, Jiannan Wu, Dong Wang, Ping Luo, Zehuan Yuan, Huchuan Lu',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:CaZNVDsoPx4C',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'VEHICLE-INFRASTRUCTURE COOPERATIVE 3D DETECTION VIA FEATURE FLOW PREDICTION',
    authors: 'Haibao Yu, Yingjuan Tang, Jilei Mao, Enze Xie, Jirui Yuan, Ping Luo, Zaiqing Nie',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:lvd772isFD0C',
      },
    ],
    keys: ['Autonomous Driving', '3D Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'SWORD: Demystify the Secrets of Open-world Instance Recognition',
    authors: 'Jiannan Wu, Yi Jiang, Bin Yan, Huchuan Lu, Zehuan Yuan, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:8xutWZnSdmoC',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Pose for Everything: Towards Category-Agnostic Pose Estimation–Supplementary Material–',
    authors:
      'Lumin Xu, Sheng Jin, Wang Zeng, Wentao Liu, Chen Qian, Wanli Ouyang, Ping Luo, Xiaogang Wang',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:yMeIxYmEMEAC',
      },
    ],
    keys: ['Pose Estimation', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      '3D Interacting Hand Pose Estimation by Hand De-occlusion and Removal–Supplementary Material–',
    authors: 'Hao Meng, Sheng Jin, Wentao Liu, Chen Qian, Mengxiang Lin, Wanli Ouyang, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:KbBQZpvPDL4C',
      },
    ],
    keys: ['3D Vision', 'Pose Estimation'],
    pis: ['Ping Luo'],
  },
  {
    title: 'DaViT: Dual Attention Vision Transformers–Supplementary Material–',
    authors: 'Mingyu Ding, Bin Xiao, Noel Codella, Ping Luo, Jingdong Wang, Lu Yuan',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:fFSKOagxvKUC',
      },
    ],
    keys: ['Computer Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'DeepAccident: A Large-Scale Accident Dataset for Multi-Vehicle Autonomous Driving',
    authors: 'Tianqi Wang Wenxuan Ji Shoufa Chen, Chongjian Ge Enze Xie Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:XvxMoLDsR5gC',
      },
    ],
    keys: ['Autonomous Driving', 'Dataset/Benchmark'],
    pis: [],
  },
  {
    title: 'Scale-Invariant Teaching for Semi-Supervised Object Detection',
    authors: 'Qiushan Guo, Yizhou Yu, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:PVjk1bu6vJQC',
      },
    ],
    keys: ['Detection', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Pyramid Vision Transformer: A Versatile Backbone for Dense Prediction without Convolutions—Supplemental Materials',
    authors:
      'Wenhai Wang, Enze Xie, Xiang Li, Deng-Ping Fan, Kaitao Song, Ding Liang, Tong Lu, Ping Luo, Ling Shao',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:MLfJN-KU85MC',
      },
    ],
    keys: ['Transformer', 'Computer Vision'],
    pis: ['Ping Luo'],
  },
  {
    title: 'End-to-End Dense Video Captioning with Parallel Decoding (Supplementary Materials)',
    authors: 'Teng Wang, Ruimao Zhang, Zhichao Lu, Feng Zheng, Ran Cheng, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:tuHXwOkdijsC',
      },
    ],
    keys: ['Video Understanding', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Supplementary Material Adversarial Robustness for Unsupervised Domain Adaptation',
    authors:
      'Muhammad Awais, Fengwei Zhou, Hang Xu, Lanqing Hong, Ping Luo, Sung-Ho Bae, Zhenguo Li',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:kuK5TVdYjLIC',
      },
    ],
    keys: ['Domain Adaptation', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title:
      'Supplementary Material for When Human Pose Estimation Meets Robustness: Adversarial Algorithms and Benchmarks',
    authors: 'Jiahang Wang, Sheng Jin, Wentao Liu, Weizhong Liu, Chen Qian, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:uWiczbcajpAC',
      },
    ],
    keys: ['Pose Estimation', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Supplementary Materials for AE TextSpotter',
    authors:
      'Wenhai Wang, Xuebo Liu, Xiaozhong Ji, Enze Xie, Ding Liang, ZhiBo Yang, Tong Lu, Chunhua Shen, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:N5tVd3kTz84C',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Exemplar Normalization for Learning Deep Representation Supplemental Material',
    authors: 'Ruimao Zhang, Zhanglin Peng, Lingyun Wu, Zhen Li, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:_B80troHkn4C',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: '3D Human Mesh Regression with Dense Correspondence** Supplementary Material',
    authors: 'Wang Zeng, Wanli Ouyang, Ping Luo, Wentao Liu, Xiaogang Wang',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:tkaPQYYpVKoC',
      },
    ],
    keys: ['3D Vision', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Channel Equilibrium Networks',
    authors: 'Wenqi Shao, Shitao Tang, Xingang Pan, Ping Tan, Xiaogang Wang, Ping Luo',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:eMMeJKvmdy0C',
      },
    ],
    keys: ['Machine Learning', 'General'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Joint Face Representation Adaptation and Clustering in Videos: Supplementary Material',
    authors: 'Zhanpeng Zhang, Ping Luo, Chen Change Loy, Xiaoou Tang',
    proceedings: 'none',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:bEWYMUwI8FkC',
      },
    ],
    keys: ['Face Recognition', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
  {
    title: 'Optimizing Facial Landmark Detection by Facial Attribute Learning',
    authors: 'Zhanpeng Zhang, Ping Luo, Chen Change Loy, Xiaoou Tang',
    proceedings: 'a∈ A',
    links: [
      {
        website: 'Paper',
        url: 'https://scholar.google.com.hk/citations?view_op=view_citation&hl=zh-CN&user=aXdjxb4AAAAJ&cstart=400&pagesize=100&sortby=pubdate&citation_for_view=aXdjxb4AAAAJ:M3ejUd6NZC8C',
      },
    ],
    keys: ['Detection', 'Machine Learning'],
    pis: ['Ping Luo'],
  },
];
