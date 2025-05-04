export const pis: {
    name: string;
    id: string;
    img: string;
    title: string;
    bio: string;
    links: { icon: string; link: string; }[];
}[] = [
    {
        name: "Ping Luo",
        id: "ping_luo",
        img: "https://mmlabassets.github.io/member/ping_luo_c.jpg",
        title: "Associate Professor",
        bio: "Ping Luo is an Associate Professor in the Department of Computer Science at the University of Hong Kong, an Associate Director of the HKU Musketeers Foundation Institute of Data Science (HKU IDS), and a Deputy Director of the Joint Research Lab of HKU and Shanghai AI Lab. He obtained his Ph.D. in Information Engineering from the Chinese University of Hong Kong in 2014, under the supervision of Prof. Xiaoou Tang (founder of SenseTime) and Prof. Xiaogang Wang. Before joining HKU in 2019, he was a Research Director in SenseTime. He has published 100+ papers in international conferences and journals such as TPAMI, ICML, ICLR, NeurIPS, and CVPR, with over 50,000 citations on Google Scholar. He was awarded the 2015 AAAI Easily Accessible Paper, nominated for the 2022 Computational Visual Media Journal's Best Paper of the Year, won the 2022 ACL Outstanding Paper, the 2023 World Artificial Intelligence Conference (WAIC) Outstanding Papers, and was a candidate for the Best Paper at ICCV’23. He was recognized as one of the innovators under 35 in the Asia-Pacific region by the MIT Technology Review (MIT TR35) in 2020. He has mentored 30 Ph.D. students, many of whom have received significant awards such as the Nvidia Fellowship, Baidu Fellowship, WAIC Yunfan Award, etc.",
        // bio_w_link: "Ping Luo is an Associate Professor in the Department of Computer Science at the University of Hong Kong, an Associate Director of the HKU Musketeers Foundation Institute of Data Science (HKU IDS), and a Deputy Director of the Joint Research Lab of HKU and Shanghai AI Lab. He obtained his Ph.D. in Information Engineering from the Chinese University of Hong Kong in 2014, under the supervision of [Prof. Xiaoou Tang] (founder of [SenseTime]) and [Prof. Xiaogang Wang]. Before joining HKU in 2019, he was a Research Director in SenseTime. He has published 100+ papers in international conferences and journals such as TPAMI, ICML, ICLR, NeurIPS, and CVPR, with over 50,000 citations on [Google Scholar]. He was awarded the 2015 AAAI Easily Accessible Paper, nominated for the 2022 Computational Visual Media Journal's Best Paper of the Year, won the 2022 ACL Outstanding Paper, the 2023 World Artificial Intelligence Conference (WAIC) Outstanding Papers, and was a candidate for the Best Paper at ICCV’23. He was recognized as one of the innovators under 35 in the Asia-Pacific region by the MIT Technology Review (MIT TR35) in 2020. He has mentored 30 Ph.D. students, many of whom have received significant awards such as the Nvidia Fellowship, Baidu Fellowship, WAIC Yunfan Award, etc.",
        // bio_link_map: {
        //     "Prof. Xiaoou Tang": "https://www.ie.cuhk.edu.hk/people/xotang.shtml",
        //     "SenseTime": "https://en.wikipedia.org/wiki/SenseTime",
        //     "Prof. Xiaogang Wang": "http://www.ee.cuhk.edu.hk/~xgwang/",
        //     "Google Scholar": "https://scholar.google.com/citations?user=4YL23GMAAAAJ",
        // },
        links: [
            {
                icon: "webpage",
                link: "http://luoping.me/",
            },
            {
                icon: "scholar",
                link: "https://scholar.google.com/citations?user=aXdjxb4AAAAJ",
            },
            {
                icon: "email",
                link: "mailto:pluo.lhi@gmail.com",
            },
        ],
    },
    {
        name: "Xihui Liu",
        id: "xihui_liu",
        img: "https://mmlabassets.github.io/member/xihui_liu_c.png",
        title: "Assistant Professor",
        bio: "I am an Assistant Professor at the Department of Electrical and Electronic Engineering and Institute of Data Science (IDS), The University of Hong Kong. Before joining HKU, I was a postdoc Scholar at EECS Department and BAIR at UC Berkeley, advised by Prof. Trevor Darrell. I obtained my Ph.D. degree from Multimedia Lab (MMLab), Chinese University of Hong Kong, supervised by Prof. Xiaogang Wang and Prof. Hongsheng Li. I received bachelor's degree in Electronic Engineering in Tsinghua University.",
        // bio_w_link: "I am an Assistant Professor at the Department of Electrical and Electronic Engineering and Institute of Data Science (IDS), The University of Hong Kong. Before joining HKU, I was a postdoc Scholar at EECS Department and [BAIR] at UC Berkeley, advised by Prof. Trevor Darrell. I obtained my Ph.D. degree from [Multimedia Lab (MMLab)], Chinese University of Hong Kong, supervised by [Prof. Xiaogang Wang] and [Prof. Hongsheng Li]. I received bachelor's degree in Electronic Engineering in [Tsinghua University].",
        // bio_link_map: {
        //     "BAIR": "https://bair.berkeley.edu/",
        //     "Multimedia Lab (MMLab)": "http://mmlab.ie.cuhk.edu.hk/",
        //     "Prof. Xiaogang Wang": "http://www.ee.cuhk.edu.hk/~xgwang/",
        //     "Prof. Hongsheng Li": "http://www.ee.cuhk.edu.hk/~hsli/",
        //     "Tsinghua University": "http://www.tsinghua.edu.cn/publish/thu2018en/index.html",
        // },
        links: [
            {
                icon: "webpage",
                link: "https://xh-liu.github.io/",
            },
            {
                icon: "scholar",
                link: "https://scholar.google.com.hk/citations?user=4YL23GMAAAAJ"
            },
            {
                icon: "linkedin",
                link: "https://www.linkedin.com/in/xihui-liu/"
            },
            {
                icon: "twitter",
                link: "https://twitter.com/XihuiLiu"
            },
            {
                icon: "email",
                link: "mailto:xihuiliu@eee.hku.hk",
            }
        ],
    },
    {
        name: "Hongyang Li",
        id: "hongyang_li",
        img: "https://mmlabassets.github.io/member/hongyang_li_c.jpg",
        title: "Assistant Professor",
        bio: "Hongyang Li is an Assistant Professor at Musketeers Foundation Institute of Data Science, University of Hong Kong and has led OpenDriveLab (opendrivelab.com) since 2021. His research focus is on autonomous driving and embodied AI. He led the end-to-end autonomous driving project, UniAD and won the IEEE CVPR 2023 Best Paper Award. UniAD has a tremendous impact both in academia and industry, including the recent rollout to customers by Tesla in FSD V12. He created the first large-scale real robot ecosystem, AgiBot World, that systematically investigated the scaling law principles for robotic manipulation. He proposed the bird's-eye-view perception work, BEVFormer, that won Top 100 AI Papers in 2022. He served as Area Chair for CVPR, NeurIPS (including 2023 Notable AC), ICLR, ICCV, ICML, RSS, referee for Nature Communications, Guest Editor at Automotive Innovations. He is the Working Group Chair for IEEE Standards P3474 under Vehicular Technology Society. He is the Senior Member of IEEE, CCF and CSIG. He is the recipient of China AI Wu Wen Jun Early Career Award 2024.",
        // bio_w_link: "Hongyang Li is an Assistant Professor at Musketeers Foundation Institute of Data Science, University of Hong Kong and has led OpenDriveLab ([opendrivelab.com]) since 2021. His research focus is on autonomous driving and embodied AI. He led the end-to-end autonomous driving project, UniAD and won the IEEE CVPR 2023 Best Paper Award. UniAD has a tremendous impact both in academia and industry, including the recent rollout to customers by Tesla in FSD V12. He created the first large-scale real robot ecosystem, AgiBot World, that systematically investigated the scaling law principles for robotic manipulation. He proposed the bird's-eye-view perception work, BEVFormer, that won Top 100 AI Papers in 2022. He served as Area Chair for CVPR, NeurIPS (including 2023 Notable AC), ICLR, ICCV, ICML, RSS, referee for Nature Communications, Guest Editor at Automotive Innovations. He is the Working Group Chair for IEEE Standards P3474 under Vehicular Technology Society. He is the Senior Member of IEEE, CCF and CSIG. He is the recipient of China AI Wu Wen Jun Early Career Award 2024.",
        // bio_link_map: {
        //     "opendrivelab.com": "https://opendrivelab.com/",
        // },
        links: [
            {
                icon: "webpage",
                link: "https://lihongyang.info/",
            },
            {
                icon: "OpenDriveLab",
                link: "https://opendrivelab.com/",
            },
            {
                icon: "scholar",
                link: "https://scholar.google.com/citations?user=Hfrih1EAAAAJ",
            },
            {
                icon: "email",
                link: "mailto:hongyang@hku.hk",
            },
        ],
    },
    {
        name: "Bo Dai",
        id: "bo_dai",
        img: "https://mmlabassets.github.io/member/bo_dai_c.png",
        title: "Assistant Professor",
        bio: "Dr. Bo Dai is a scientist with Shanghai AI Laboratory, leading a research group on Content Generation and Digitization. Prior to joining Shanghai AI Lab, he worked as a Research Assistant Professor with S-Lab, Nanyang Technological University, Singapore. He was a Postdoctoral Research Fellow in Multimedia Laboratory (MMLab), CUHK. He received his Ph.D. (2014-2018) from Multimedia Laboratory (MMLab) at CUHK, advised by Prof.Dahua Lin. He obtained his B.Eng. (2010-2014) from ACM class of SJTU.",
        links: [
            {
                icon: "webpage",
                link: "https://daibo.info/",
            },
            {
                icon: "github",
                link: "https://github.com/doubledaibo",
            },
            {
                icon: "scholar",
                link: "https://scholar.google.com/citations?user=KNWTvgEAAAAJ&hl=en",
            },
            {
                icon: "twitter",
                link: "https://twitter.com/doubledaibo",
            },
            {
                icon: "email",
                link: "mailto:doubledaibo@gmail.com",
            },
        ],
    },
]


export const members: {
    name: string;
    img: string;
    title: string;
    pi: string[];
    links: { icon: string; link: string; }[];
    keys: string[];
}[] = [
  {
    "name": "Jiaming Xie",
    "img": "https://mmlabassets.github.io/member/jiaming_xie_c.jpeg",
    "title": "Alumni, Ph.D.",
    "pi": [
      "Ping Luo"
    ],
    "links": [],
    "keys": [
      "2017",
      "2023"
    ]
  },
  {
    "name": "Nenglun Chen",
    "img": "https://mmlabassets.github.io/member/nenglun_chen_c.png",
    "title": "Alumni, Ph.D.",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "scholar",
        "link": "https://scholar.google.com/citations?user=UhjTC7AAAAAJ&hl=en"
      }
    ],
    "keys": [
      "2017",
      "2023"
    ]
  },
  {
    "name": "Xingang Pan",
    "img": "https://mmlabassets.github.io/member/xingang_pan_c.jpeg",
    "title": "Alumni, Ph.D.",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "https://xingangpan.github.io/"
      }
    ],
    "keys": [
      "2017",
      "2021"
    ]
  },
  {
    "name": "Wenqi Shao",
    "img": "https://mmlabassets.github.io/member/wenqi_shao_c.jpeg",
    "title": "Alumni, Ph.D.",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "scholar",
        "link": "https://scholar.google.com/citations?user=Bs9mrwwAAAAJ&hl=en"
      }
    ],
    "keys": [
      "2018",
      "2022"
    ]
  },
  {
    "name": "Anran Liu",
    "img": "https://mmlabassets.github.io/member/anran_liu_c.jpeg",
    "title": "Alumni, Ph.D.",
    "pi": [
      "Ping Luo"
    ],
    "links": [],
    "keys": [
      "2019",
      "2023"
    ]
  },
  {
    "name": "Enze Xie",
    "img": "https://mmlabassets.github.io/member/enze_xie_c.png",
    "title": "Alumni, Ph.D.",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "https://xieenze.github.io/"
      }
    ],
    "keys": [
      "2019",
      "2022"
    ]
  },
  {
    "name": "Mingyu Ding",
    "img": "https://mmlabassets.github.io/member/mingyu_ding_c.png",
    "title": "Alumni, Ph.D.",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "https://dingmyu.github.io/"
      }
    ],
    "keys": [
      "2019",
      "2023"
    ]
  },
  {
    "name": "Wenhai Wang",
    "img": "https://mmlabassets.github.io/member/wenhai_wang_c.png",
    "title": "Alumni, RA",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "https://whai362.github.io/"
      }
    ],
    "keys": [
      "2019",
      "2020"
    ]
  },
  {
    "name": "Yuying Ge",
    "img": "https://mmlabassets.github.io/member/yuying_ge_c.jpeg",
    "title": "Alumni, Ph.D.",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "https://geyuying.github.io/"
      }
    ],
    "keys": [
      "2019",
      "2023"
    ]
  },
  {
    "name": "Zhaoyang Zhang",
    "img": "https://mmlabassets.github.io/member/zhaoyang_zhang_c.png",
    "title": "Alumni, Ph.D.",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "scholar",
        "link": "https://scholar.google.com/citations?user=Pf6o7uAAAAAJ&hl=en"
      }
    ],
    "keys": [
      "2019",
      "2023"
    ]
  },
  {
    "name": "Chaofan Tao",
    "img": "https://mmlabassets.github.io/member/chaofan_tao_c.jpeg",
    "title": "Alumni, Ph.D.",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "http://chaofantao.top/"
      }
    ],
    "keys": [
      "2020",
      "2024"
    ]
  },
  {
    "name": "Chongjian GE",
    "img": "https://mmlabassets.github.io/member/chongjian_ge_c.png",
    "title": "Alumni, Ph.D.",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "https://chongjiange.github.io/"
      }
    ],
    "keys": [
      "2020",
      "2024"
    ]
  },
  {
    "name": "Jiannan Wu",
    "img": "https://mmlabassets.github.io/member/jiannan_wu_c.jpeg",
    "title": "Alumni, Ph.D.",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "github",
        "link": "https://github.com/wjn922"
      }
    ],
    "keys": [
      "2020",
      "2024"
    ]
  },
  {
    "name": "Peize Sun",
    "img": "https://mmlabassets.github.io/member/peize_sun_c.png",
    "title": "Alumni, Ph.D.",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "https://peizesun.github.io/"
      }
    ],
    "keys": [
      "2020",
      "2024"
    ]
  },
  {
    "name": "Qiushan Guo",
    "img": "https://mmlabassets.github.io/member/qiushan_guo_c.jpeg",
    "title": "Alumni, Ph.D.",
    "pi": [
      "Ping Luo"
    ],
    "links": [],
    "keys": [
      "2020",
      "2024"
    ]
  },
  {
    "name": "Sheng Jin",
    "img": "https://mmlabassets.github.io/member/sheng_jin_c.png",
    "title": "Alumni, Ph.D.",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "https://jin-s13.github.io/"
      }
    ],
    "keys": [
      "2020",
      "2024"
    ]
  },
  {
    "name": "Teng Wang",
    "img": "https://mmlabassets.github.io/member/teng_wang_c.png",
    "title": "Alumni, Ph.D.",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "https://ttengwang.github.io/"
      }
    ],
    "keys": [
      "2020",
      "2024"
    ]
  },
  {
    "name": "Tianqi Wang",
    "img": "https://mmlabassets.github.io/member/tianqi_wang_c.jpeg",
    "title": "Alumni, Ph.D.",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "github",
        "link": "https://github.com/tianqi-wang1996"
      }
    ],
    "keys": [
      "2020",
      "2024"
    ]
  },
  {
    "name": "Yuanfeng Ji",
    "img": "https://mmlabassets.github.io/member/yuanfeng_ji_c.png",
    "title": "Alumni, Ph.D.",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "https://jiyuanfeng.github.io/"
      }
    ],
    "keys": [
      "2020",
      "2024"
    ]
  },
  {
    "name": "Zhanglin Peng",
    "img": "https://mmlabassets.github.io/member/zhanglin_peng_c.png",
    "title": "Alumni, Ph.D.",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "scholar",
        "link": "https://scholar.google.com/citations?user=78fKbCkAAAAJ&hl=en"
      }
    ],
    "keys": [
      "2020",
      "2024"
    ]
  },
  {
    "name": "Zhouxia Wang",
    "img": "https://mmlabassets.github.io/member/zhouxia_wang_c.png",
    "title": "Alumni, Ph.D.",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "scholar",
        "link": "https://scholar.google.com.hk/citations?user=JWds_bQAAAAJ&hl=en"
      }
    ],
    "keys": [
      "2020",
      "2023"
    ]
  },
  {
    "name": "Peng Xu",
    "img": "https://mmlabassets.github.io/member/peng_xu_c.png",
    "title": "Ph.D. Candidate",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "https://sme.sustech.edu.cn/index/teacher/neiye/id/35.html"
      }
    ],
    "keys": [
      "2021"
    ]
  },
  {
    "name": "Qiang Zhai",
    "img": "https://mmlabassets.github.io/member/qiang_zhai_c.jpeg",
    "title": "Alumni, Visitor",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "github",
        "link": "https://github.com/zhaiqx"
      }
    ],
    "keys": [
      "2021",
      "2022"
    ]
  },
  {
    "name": "Runjian Chen",
    "img": "https://mmlabassets.github.io/member/runjian_chen_c.jpeg",
    "title": "Ph.D. Candidate",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "https://www.rjchen.site"
      }
    ],
    "keys": [
      "2021"
    ]
  },
  {
    "name": "Shoufa Chen",
    "img": "https://mmlabassets.github.io/member/shoufa_chen_c.png",
    "title": "Ph.D. Candidate",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "https://www.shoufachen.com"
      }
    ],
    "keys": [
      "2021"
    ]
  },
  {
    "name": "Yangyang Xu",
    "img": "https://mmlabassets.github.io/member/yangyang_xu_c.jpeg",
    "title": "Alumni, Postdoc Fellow",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "https://cnnlstm.github.io/"
      }
    ],
    "keys": [
      "2021",
      "2023"
    ]
  },
  {
    "name": "Yao Lai",
    "img": "https://mmlabassets.github.io/member/yao_lai_c.png",
    "title": "Ph.D. Candidate",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "https://laiyao1.github.io/"
      }
    ],
    "keys": [
      "2021"
    ]
  },
  {
    "name": "Yao Mu",
    "img": "https://mmlabassets.github.io/member/yao_mu_c.png",
    "title": "Ph.D. Candidate",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "https://yaomarkmu.github.io/"
      }
    ],
    "keys": [
      "2021"
    ]
  },
  {
    "name": "Haibao Yu",
    "img": "https://mmlabassets.github.io/member/haibao_yu_c.jpeg",
    "title": "Ph.D. Candidate",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "dblp",
        "link": "https://dblp.org/pid/246/4643.html"
      }
    ],
    "keys": [
      "2022"
    ]
  },
  {
    "name": "Yizhuo Li",
    "img": "https://mmlabassets.github.io/member/yizhuo_li_c.png",
    "title": "Ph.D. Candidate",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "https://liyz15.github.io/"
      }
    ],
    "keys": [
      "2022"
    ]
  },
  {
    "name": "Yue Yang",
    "img": "https://mmlabassets.github.io/member/yue_yang_c.jpeg",
    "title": "Ph.D. Candidate",
    "pi": [
      "Ping Luo"
    ],
    "links": [],
    "keys": [
      "2022"
    ]
  },
  {
    "name": "Yutao Hu",
    "img": "https://mmlabassets.github.io/member/yutao_hu_c.jpeg",
    "title": "Alumni, Postdoc Fellow",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "scholar",
        "link": "https://scholar.google.com.hk/citations?user=4sXuGXAAAAAJ&hl=zh-CN"
      }
    ],
    "keys": [
      "2022",
      "2023"
    ]
  },
  {
    "name": "Zeyue Xue",
    "img": "https://mmlabassets.github.io/member/zeyue_xue_c.png",
    "title": "Ph.D. Candidate",
    "pi": [
      "Ping Luo"
    ],
    "links": [],
    "keys": [
      "2022"
    ]
  },
  {
    "name": "Zhixuan Liang",
    "img": "https://mmlabassets.github.io/member/zhixuan_liang_c.jpeg",
    "title": "Ph.D. Candidate",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "https://liang-zx.github.io/"
      }
    ],
    "keys": [
      "2022"
    ]
  },
  {
    "name": "Chengyue Wu",
    "img": "https://mmlabassets.github.io/member/chengyue_wu_c.png",
    "title": "Ph.D. Candidate",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "https://hills-code.github.io/"
      }
    ],
    "keys": [
      "2023"
    ]
  },
  {
    "name": "Chonghao Sima",
    "img": "https://mmlabassets.github.io/member/chonghao_sima_c.jpg",
    "title": "Ph.D. Candidate",
    "pi": [
      "Hongyang Li",
      "Ping Luo"
    ],
    "links": [],
    "keys": [
      "2023"
    ]
  },
  {
    "name": "Fanqing Meng",
    "img": "https://mmlabassets.github.io/member/fanqing_meng_c.jpeg",
    "title": "Ph.D. Candidate",
    "pi": [
      "Ping Luo"
    ],
    "links": [],
    "keys": [
      "2023"
    ]
  },
  {
    "name": "Jiahao Wang",
    "img": "https://mmlabassets.github.io/member/jiahao_wang_c.jpeg",
    "title": "Ph.D. Candidate",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "https://www.zhihu.com/people/wang-jia-hao-53-3"
      }
    ],
    "keys": [
      "2023"
    ]
  },
  {
    "name": "Jin Wang",
    "img": "https://mmlabassets.github.io/member/jin_wang_c.png",
    "title": "Ph.D. Candidate",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "https://jinjinw.com/"
      }
    ],
    "keys": [
      "2023"
    ]
  },
  {
    "name": "Li Chen",
    "img": "https://mmlabassets.github.io/member/li_chen_c.jpg",
    "title": "Ph.D. Candidate",
    "pi": [
      "Hongyang Li",
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "https://ilnehc.github.io/"
      }
    ],
    "keys": [
      "2023"
    ]
  },
  {
    "name": "Mengkang Hu",
    "img": "https://mmlabassets.github.io/member/mengkang_hu_c.jpeg",
    "title": "Ph.D. Candidate",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "scholar",
        "link": "https://scholar.google.com.hk/citations?user=FhVRimUAAAAJ&hl=en&oi=ao"
      }
    ],
    "keys": [
      "2023"
    ]
  },
  {
    "name": "Shilong Zhang",
    "img": "https://mmlabassets.github.io/member/shilong_zhang_c.jpeg",
    "title": "Ph.D. Candidate",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "https://jshilong.github.io/"
      }
    ],
    "keys": [
      "2023"
    ]
  },
  {
    "name": "Yuheng Lei",
    "img": "https://mmlabassets.github.io/member/yuheng_lei_c.jpeg",
    "title": "Ph.D. Candidate",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "https://sites.google.com/view/yuhenglei"
      }
    ],
    "keys": [
      "2023"
    ]
  },
  {
    "name": "Jielin Li",
    "img": "https://mmlabassets.github.io/member/jielin_li_c.jpeg",
    "title": "Ph.D. Candidate",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "scholar",
        "link": "https://scholar.google.com/citations?user=z2Tbc6MAAAAJ&hl=zh-CN"
      }
    ],
    "keys": [
      "2024"
    ]
  },
  {
    "name": "Mengzhao Chen",
    "img": "https://mmlabassets.github.io/member/mengzhao_chen_c.jpeg",
    "title": "Ph.D. Candidate",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "https://chenmnz.github.io/"
      }
    ],
    "keys": [
      "2024",
      "2024"
    ]
  },
  {
    "name": "Quanfeng Lu",
    "img": "https://mmlabassets.github.io/member/quanfeng_lu_c.jpeg",
    "title": "Ph.D. Candidate",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "scholar",
        "link": "https://scholar.google.com/citations?user=NlBS3nMAAAAJ&hl"
      },
      {
        "icon": "linkedin",
        "link": "https://www.linkedin.com/in/hflqf888/"
      }
    ],
    "keys": [
      "2024"
    ]
  },
  {
    "name": "Shuo Yang",
    "img": "https://mmlabassets.github.io/member/shuo_yang_c.png",
    "title": "Alumni, Postdoc Fellow",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "https://faculty.hitsz.edu.cn/yangshuo"
      }
    ],
    "keys": [
      "2024",
      "2024"
    ]
  },
  {
    "name": "Tianshuo Yang",
    "img": "https://mmlabassets.github.io/member/tianshuo_yang_c.jpeg",
    "title": "Ph.D. Candidate",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "scholar",
        "link": "https://scholar.google.com/citations?user=9b5dE40AAAAJ&hl"
      },
      {
        "icon": "webpage",
        "link": "https://violinarthur.github.io/"
      }
    ],
    "keys": [
      "2024"
    ]
  },
  {
    "name": "Yatai Ji",
    "img": "https://mmlabassets.github.io/member/yatai_ji_c.jpeg",
    "title": "Ph.D. Candiate",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "https://yataiji.github.io/"
      }
    ],
    "keys": [
      "2024"
    ]
  },
  {
    "name": "Yihang Qiu",
    "img": "https://mmlabassets.github.io/member/yihang_qiu_c.png",
    "title": "Ph.D. Candidate",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "scholar",
        "link": "https://scholar.google.com/citations?user=qgRUOdIAAAAJ"
      }
    ],
    "keys": [
      "2024"
    ]
  },
  {
    "name": "Zhiheng Liu",
    "img": "https://mmlabassets.github.io/member/zhiheng_liu_c.png",
    "title": "Ph.D. Candidate",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "https://johanan528.github.io/"
      }
    ],
    "keys": [
      "2024"
    ]
  },
  {
    "name": "Haotian Liang",
    "img": "https://mmlabassets.github.io/member/haotian_liang_c.jpeg",
    "title": "Ph.D. Candiate",
    "pi": [
      "Ping Luo"
    ],
    "links": [],
    "keys": [
      "2025"
    ]
  },
  {
    "name": "Junsong Chen",
    "img": "https://mmlabassets.github.io/member/junsong_chen_c.jpeg",
    "title": "Ph.D. Candiate",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "https://lawrence-cj.github.io/"
      }
    ],
    "keys": [
      "2025"
    ]
  },
  {
    "name": "Kaixuan Wang",
    "img": "https://mmlabassets.github.io/member/kaixuan_wang_c.jpeg",
    "title": "Ph.D. Candiate",
    "pi": [
      "Ping Luo"
    ],
    "links": [],
    "keys": [
      "2025"
    ]
  },
  {
    "name": "Lingxiao Du",
    "img": "https://mmlabassets.github.io/member/lingxiao_du_c.jpeg",
    "title": "Ph.D. Candiate",
    "pi": [
      "Ping Luo"
    ],
    "links": [],
    "keys": [
      "2025"
    ]
  },
  {
    "name": "Lirui Zhao",
    "img": "https://mmlabassets.github.io/member/lirui_zhao_c.jpeg",
    "title": "Ph.D. Candiate",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "https://liruizhao.com/"
      }
    ],
    "keys": [
      "2025"
    ]
  },
  {
    "name": "Liuao Pei",
    "img": "https://mmlabassets.github.io/member/liuao_pei_c.jpeg",
    "title": "Ph.D. Candiate",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "https://liuaopei.com/"
      }
    ],
    "keys": [
      "2025"
    ]
  },
  {
    "name": "Qingquan Lin",
    "img": "https://mmlabassets.github.io/member/qingquan_lin_c.png",
    "title": "Ph.D. Candiate",
    "pi": [
      "Ping Luo"
    ],
    "links": [],
    "keys": [
      "2025"
    ]
  },
  {
    "name": "Tianxing Chen",
    "img": "https://mmlabassets.github.io/member/tianxing_chen_c.png",
    "title": "Ph.D. Candidate",
    "pi": [
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "https://tianxingchen.github.io/"
      },
      {
        "icon": "scholar",
        "link": "https://scholar.google.com/citations?user=pvS8MH8AAAAJ&hl=en&oi=ao"
      },
      {
        "icon": "github",
        "link": "https://github.com/tianxingchen"
      }
    ],
    "keys": [
      "2025"
    ]
  },
  {
    "name": "Yixuan Pan",
    "img": "https://mmlabassets.github.io/member/yixuan_pan_c.jpg",
    "title": "Ph.D. Candidate",
    "pi": [
      "Hongyang Li",
      "Ping Luo"
    ],
    "links": [
      {
        "icon": "webpage",
        "link": "https://lzpyx.github.io/"
      }
    ],
    "keys": [
      "2025"
    ]
  }
]