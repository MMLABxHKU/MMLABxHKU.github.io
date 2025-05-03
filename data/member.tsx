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
        img: "https://mmlabassets.github.io/member/xihui_liu_c.jpg",
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
        img: "https://mmlabassets.github.io/member/bo_dai_c.jpg",
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
        name: "Chonghao Sima",
        img: "https://mmlabassets.github.io/member/chonghao_sima_c.jpg",
        title: "Ph.D. Candidate",
        pi: ["Hongyang Li", "Ping Luo"],
        links: [
            {
                icon: "webpage",
                link: "xxx",
            },
        ],
        keys: ["2024"],
    },
    {
        name: "Yixuan Pan",
        img: "https://mmlabassets.github.io/member/yixuan_pan_c.jpg",
        title: "Ph.D. Candidate",
        pi: ["Hongyang Li"],
        links: [
            {
                icon: "webpage",
                link: "xxx",
            },
        ],
        keys: ["2024"],
    },
    {
        name: "Li Chen",
        img: "https://mmlabassets.github.io/member/li_chen_c.jpg",
        title: "Ph.D. Candidate",
        pi: ["Hongyang Li"],
        links: [
            {
                icon: "webpage",
                link: "xxx",
            },
        ],
        keys: ["2024"],
    },
]
