export const open_source_categories: { category: string; years: string[]; }[] = [
    {
        category: "Highlight",
        years: [
            "Project",
            "Dataset",
        ],
    },
    {
        category: "Project",
        years: [
            "2025",
            "2024",
            "2023",
            "2022",
            "2021",
            "2020",
        ],
    },
    {
        category: "Dataset",
        years: [
            "2025",
            "2024",
            "2023",
            "2022",
        ],
    },
]



export const open_sources: { 
    title: string; 
    description: string; 
    tags: string[]; 
    links: { website: string; url: string; }[]; 
    keys: string[];
    pis: string[];
    githubstars: string;
    img: string;
    id: string;
}[] = [
    {
        title: "UniVLA: Learning to Act Anywhere with Task-centric Latent Actions",
        description: "UniVLA is a unified vision-language-action framework that enables policy learning across different environments. By deriving task-centric latent actions in an unsupervised manner, UniVLA can leverage data from arbitrary embodiments and perspectives without action labels. After large-scale pretraining from videos, UniVLA develops a cross-embodiment generalist policy that can be readily deployed across various robots by learning an action decoding with minimal cost.",
        tags: [
            "Cross-embodiment"
        ],
        links: [
            {
                website: "Paper",
                url: "https://arxiv.org/abs/2505.06111",
            },
            {
                website: "Github",
                url: "https://github.com/OpenDriveLab/UniVLA",
            },
        ],
        keys :[
            "Project", "2025", "Highlight"
        ],
        pis: ["Hongyang Li"],
        githubstars: "https://img.shields.io/github/stars/OpenDriveLab/UniVLA?style=social",
        img: "https://mmlabassets.github.io/open-source/odl_univla.jpg",
        id: "UniVLA",
    },
    {
        title: "UniAD: Planning-oriented Autonomous Driving",
        description: "UniAD is a Unified Autonomous Driving algorithm framework following a planning-oriented philosophy. Instead of standalone modular design and multi-task learning, we cast a series of tasks, including perception, prediction and planning tasks hierarchically.",
        tags: [
            "End-to-end", "Autonomous Driving"
        ],
        links: [
            {
                website: "Paper",
                url: "https://openaccess.thecvf.com/content/CVPR2023/html/Hu_Planning-Oriented_Autonomous_Driving_CVPR_2023_paper.html",
            },
            {
                website: "Github",
                url: "https://github.com/OpenDriveLab/UniAD",
            },
            {
                website: "Video",
                url: "https://www.youtube.com/watch?v=cyrxJJ_nnaQ",
            },
            {
                website: "Slides",
                url: "https://opendrivelab.github.io/UniAD_plenary_talk_slides.pdf",
            },
        ],
        keys :[
            "Project", "2023", "Highlight"
        ],
        pis: ["Hongyang Li"],
        githubstars: "https://img.shields.io/github/stars/OpenDriveLab/UniAD?style=social",
        img: "https://mmlabassets.github.io/open-source/odl_uniad.jpg",
        id: "UniAD",
    },
    {
        title: "AgiBot-World: The Large-scale Manipulation Platform for Scalable and Intelligent Embodied Systems",
        description: "AgiBot World Colosseo is a full-stack large-scale robot learning platform curated for advancing bimanual manipulation in scalable and intelligent embodied systems. It is accompanied by foundation models, benchmarks, and an ecosystem to democratize access to high-quality robot data for the academic community and the industry, paving the path towards the 'ImageNet Moment' for Embodied AI.",
        tags: [
            "Manipulation"
        ],
        links: [
            {
                website: "Blog",
                url: "https://opendrivelab.com/blog/agibot-world/",
            },
            {
                website: "Paper",
                url: "https://arxiv.org/abs/2503.06669",
            },
            {
                website: "Github",
                url: "https://github.com/OpenDriveLab/AgiBot-World",
            },
        ],
        keys :[
            "Dataset", "2024", "Highlight"
        ],
        pis: ["Hongyang Li"],
        githubstars: "https://img.shields.io/github/stars/OpenDriveLab/AgiBot-World?style=social",
        img: "https://mmlabassets.github.io/open-source/odl_agibotworld.jpg",
        id: "AgiBot-World",
    },
    {
        title: "OpenDV",
        description: "The largest driving video dataset to date, containing more than 1700 hours of real-world driving videos.",
        tags: [
            "Autonomous Driving", "World Model"
        ],
        links: [
            {
                website: "Github",
                url: "https://github.com/OpenDriveLab/DriveAGI/tree/main/opendv",
            },
        ],
        keys :[
            "Dataset", "2024", "Highlight"
        ],
        pis: ["Hongyang Li"],
        githubstars: "https://img.shields.io/github/stars/OpenDriveLab/DriveAGI?style=social",
        img: "https://mmlabassets.github.io/open-source/odl_opendv.jpg",
        id: "OpenDV",
    },
    {
        title: "DriveLM: Driving with Graph Visual Question Answering",
        description: "Facilitating the Perception, Prediction, Planning, Behavior, Motion tasks with human-written reasoning logic as a connection in between.",
        tags: [
            "Language", "Planning"
        ],
        links: [
            {
                website: "Github",
                url: "https://github.com/OpenDriveLab/DriveLM",
            },
            {
                website: "Page",
                url: "https://opendrivelab.com/DriveLM/",
            },
        ],
        keys :[
            "Dataset", "2024", "Highlight"
        ],
        pis: ["Hongyang Li"],
        githubstars: "https://img.shields.io/github/stars/OpenDriveLab/DriveLM?style=social",
        img: "https://mmlabassets.github.io/open-source/odl_drivelm.jpg",
        id: "DriveLM",
    },
    {
        title: "OpenScene: 3D Occupancy Prediction Benchmark in Autonomous Driving",
        description: "OpenScene is a compact redistribution of the large-scale nuPlan dataset, retaining only relevant annotations and sensor data at 2Hz. This reduces the dataset size by a factor of >10. We cover a wide span of over 120 hours, and provide additional occupancy labels collected in various cities, from Boston, Pittsburgh, Las Vegas to Singapore.",
        tags: [
            "Occupancy"
        ],
        links: [
            {
                website: "Github",
                url: "https://github.com/OpenDriveLab/OpenScene",
            },
        ],
        keys :[
            "Dataset", "2023"
        ],
        pis: ["Hongyang Li"],
        githubstars: "https://img.shields.io/github/stars/OpenDriveLab/OpenScene?style=social",
        img: "https://mmlabassets.github.io/open-source/odl_openscene.jpg",
        id: "OpenScene",
    },
    {
        title: "OpenLane-V2: The First Perception and Reasoning Benchmark for Road Driving",
        description: "The objective of the presented dataset is to advance research in understanding the structure of road scenes by examining the relationship between perceived entities, such as traffic elements and lanes. Leveraging existing datasets, OpenLane-V2 consists of 2,000 annotated road scenes that describe traffic elements and their correlation to the lanes.",
        tags: [
            "Topology Recognition", "3D Lane Detection", "Traffic Element Recognition"
        ],
        links: [
            {
                website: "Github",
                url: "https://github.com/OpenDriveLab/OpenLane-V2",
            },
        ],
        keys :[
            "Dataset", "2023"
        ],
        pis: ["Hongyang Li"],
        githubstars: "https://img.shields.io/github/stars/OpenDriveLab/OpenLane-V2?style=social",
        img: "https://mmlabassets.github.io/open-source/odl_openlanev2.jpg",
        id: "OpenLane-V2",
    },
    {
        title: "OpenLane: Large-scale Realistic 3D Lane Dataset",
        description: "OpenLane is the first real-world and the largest scaled 3D lane dataset to date. Our dataset collects valuable contents from public perception dataset, providing lane and closest-in-path object(CIPO) annotations for 1000 segments. In short, OpenLane owns 200K frames and over 880K carefully annotated lanes.",
        tags: [
            "3D Lane Detection"
        ],
        links: [
            {
                website: "Github",
                url: "https://github.com/OpenDriveLab/OpenLane",
            },
        ],
        keys :[
            "Dataset", "2022"
        ],
        pis: ["Hongyang Li"],
        githubstars: "https://img.shields.io/github/stars/OpenDriveLab/OpenLane?style=social",
        img: "https://mmlabassets.github.io/open-source/odl_openlane.jpg",
        id: "OpenLane",
    },
    {
        title: "Janus: Decoupling Visual Encoding for Unified Multimodal Understanding and Generation",
        description: "Janus is a novel autoregressive framework that unifies multimodal understanding and generation.",
        tags: [
            "Autoregressive Model"
        ],
        links: [
            {
                website: "Paper",
                url: "https://arxiv.org/abs/2410.13848",
            },
            {
                website: "Github",
                url: "https://github.com/deepseek-ai/Janus",
            },
        ],
        keys :[
            "Project", "2024", "Highlight"
        ],
        pis: ["Ping Luo"],
        githubstars: "https://img.shields.io/github/stars/deepseek-ai/Janus?style=social",
        img: "https://mmlabassets.github.io/open-source/Janus.jpg",
        id: "Janus",
    },
    {
        title: "Autoregressive Model Beats Diffusion: Llama for Scalable Image Generation",
        description: "Vanilla autoregressive models without inductive biases on visual signals can achieve state-of-the-art image generation performance if scaling properly.",
        tags: [
            "Autoregressive Model", "Image Generation"
        ],
        links: [
            {
                website: "Paper",
                url: "https://arxiv.org/abs/2406.06525",
            },
            {
                website: "Github",
                url: "https://github.com/FoundationVision/LlamaGen",
            },
            {
                website: "Page",
                url: "https://peizesun.github.io/llamagen/",
            },
        ],
        keys :[
            "Project", "2024", "Highlight"
        ],
        pis: ["Ping Luo"],
        githubstars: "https://img.shields.io/github/stars/FoundationVision/LlamaGen?style=social",
        img: "https://mmlabassets.github.io/open-source/LlamaGen.jpg",
        id: "LlamaGen",
    },
    {
        title: "MotionCtrl: A Unified and Flexible Motion Controller for Video Generation",
        description: "MotionCtrl can Independently control complex camera motion and object motion of generated videos, with only a unified model.",
        tags: [
            "Video Generation"
        ],
        links: [
            {
                website: "Paper",
                url: "https://arxiv.org/abs/2312.03641",
            },
            {
                website: "Github",
                url: "https://github.com/TencentARC/MotionCtrl",
            },
            {
                website: "Page",
                url: "https://wzhouxiff.github.io/projects/MotionCtrl/",
            },
        ],
        keys :[
            "Project", "2022"
        ],
        pis: ["Ping Luo"],
        githubstars: "https://img.shields.io/github/stars/TencentARC/MotionCtrl?style=social",
        img: "https://mmlabassets.github.io/open-source/MotionCtrl.jpg",
        id: "MotionCtrl",
    },
    {
        title: "PixArt-α: Fast Training of Diffusion Transformer for Photorealistic Text-to-Image Synthesis",
        description: "PixArt-α is a Transformer-based T2I diffusion model whose image generation quality is competitive with state-of-the-art image generators.",
        tags: [
            "Diffusion Transformer",
        ],
        links: [
            {
                website: "Paper",
                url: "https://arxiv.org/abs/2310.00426",
            },
            {
                website: "GitHub",
                url: "https://github.com/PixArt-alpha/PixArt-alpha",
            },
        ],
        keys :[
            "Project", "2023", "Highlight"
        ],
        pis: ["Ping Luo"],
        githubstars: "https://img.shields.io/github/stars/PixArt-alpha/PixArt-alpha?style=social",
        img: "https://mmlabassets.github.io/open-source/PixartAlpha.jpg",
        id: "PixArt",
    },
    {
        title: "OmniQuant: Omnidirectionally Calibrated Quantization for Large Language Models",
        description: "OmniQuant is a simple and powerful quantization technique for LLMs.",
        tags: [
            "LLM Quantization"
        ],
        links: [
            {
                website: "Paper",
                url: "https://arxiv.org/abs/2308.13137",
            },
            {
                website: "GitHub",
                url: "https://github.com/OpenGVLab/OmniQuant",
            },
        ],
        keys :[
            "Project", "2023"
        ],
        pis: ["Ping Luo"],
        githubstars: "https://img.shields.io/github/stars/OpenGVLab/OmniQuant?style=social",
        img: "https://mmlabassets.github.io/open-source/OmniQuant.jpg",
        id: "OmniQuant",
    },
    {
        title: "LVLM-eHub: A Comprehensive Evaluation Benchmark for Large Vision-Language Models",
        description: "LVLM-eHub is a comprehensive evaluation benchmark for publicly available large multimodal models (LVLM).",
        tags: [
            "Large Vision-Language Models", "Benchmark"
        ],
        links: [
            {
                website: "Paper",
                url: "https://arxiv.org/abs/2306.09265",
            },
            {
                website: "Github",
                url: "https://github.com/OpenGVLab/Multi-Modality-Arena",
            },
        ],
        keys :[
            "Dataset", "2023"
        ],
        pis: ["Ping Luo"],
        githubstars: "https://img.shields.io/github/stars/OpenGVLab/Multi-Modality-Arena?style=social",
        img: "https://mmlabassets.github.io/open-source/LVLM-eHub.jpg",
        id: "LVLM",
    },
    {
        title: "EmbodiedGPT: Vision-Language Pre-Training via Embodied Chain of Thought",
        description: "A large-scale end-to-end multi-model foundation model for embodied AI.",
        tags: [
            "Embodied AI"
        ],
        links: [
            {
                website: "Paper",
                url: "https://arxiv.org/abs/2305.15021",
            },
            {
                website: "Github",
                url: "https://github.com/EmbodiedGPT/EmbodiedGPT_Pytorch",
            },
            {
                website: "Dataset",
                url: "https://github.com/EmbodiedGPT/EgoCOT_Dataset",
            },
        ],
        keys :[
            "Project", "2023"
        ],
        pis: ["Ping Luo"],
        githubstars: "https://img.shields.io/github/stars/EmbodiedGPT/EmbodiedGPT_Pytorch?style=social",
        img: "https://mmlabassets.github.io/open-source/EmbodiedGPT.jpg",
        id: "EmbodiedGPT",
    },
    {
        title: "DiffusionDet: Diffusion Model for Object Detection",
        description: "DiffusionDet is the first work of diffusion model for object detection.",
        tags: [
            "Object Detection", "Diffusion Model",
        ],
        links: [
            {
                website: "Paper",
                url: "https://arxiv.org/abs/2211.09788",
            },
            {
                website: "GitHub",
                url: "https://github.com/ShoufaChen/DiffusionDet",
            },
        ],
        keys :[
            "Project", "2022"
        ],
        pis: ["Ping Luo"],
        githubstars: "https://img.shields.io/github/stars/ShoufaChen/DiffusionDet?style=social",
        img: "https://mmlabassets.github.io/open-source/DiffusionDet.jpg",
        id: "DiffusionDet",
    },
    {
        title: "AMOS: A Large-Scale Abdominal Multi-Organ Benchmark for Versatile Medical Image Segmentation",
        description: "AMOS is a large-scale abdominal segmentation, and captioning dataset.",
        tags: [
            "Medical Image Segmentation", "Dataset"
        ],
        links: [
            {
                website: "Paper",
                url: "https://arxiv.org/abs/2206.08023",
            },
            {
                website: "Information",
                url: "https://amos22.grand-challenge.org/",
            },
            {
                website: "Page",
                url: "https://era-ai-biomed.github.io/amos/",
            },
        ],
        keys :[
            "Dataset", "2022"
        ],
        pis: ["Ping Luo"],
        githubstars: "",
        img: "https://mmlabassets.github.io/open-source/AMOS.jpg",
        id: "AMOS",
    },
    {
        title: "AdaptFormer: Adapting Vision Transformers for Scalable Visual Recognition",
        description: "Adapt Vision Transformers to downstream tasks by fine-tuning less than 2% parameters.",
        tags: [
            "Vision Transformers"
        ],
        links: [
            {
                website: "Paper",
                url: "https://arxiv.org/abs/2205.13535",
            },
            {
                website: "GitHub",
                url: "https://github.com/ShoufaChen/AdaptFormer",
            },
            {
                website: "Page",
                url: "https://www.shoufachen.com/adaptformer-page/",
            },
        ],
        keys :[
            "Project", "2022"
        ],
        pis: ["Ping Luo"],
        githubstars: "https://img.shields.io/github/stars/ShoufaChen/AdaptFormer?style=social",
        img: "https://mmlabassets.github.io/open-source/AdaptFormer.jpg",
        id: "AdaptFormer",
    },
    {
        title: "SegFormer: Simple and Efficient Design for Semantic Segmentation with Transformers",
        description: "SegFormer is a simple, efficient and powerful semantic segmentation method.",
        tags: [
            "Semantic Segmentation"
        ],
        links: [
            {
                website: "Paper",
                url: "https://arxiv.org/abs/2105.15203",
            },
            {
                website: "GitHub",
                url: "https://github.com/NVlabs/SegFormer",
            },
            {
                website: "Video",
                url: "https://www.youtube.com/watch?v=J0MoRQzZe8U&ab_channel=ZhidingYu",
            },
        ],
        keys :[
            "Project", "2021"
        ],
        pis: ["Ping Luo"],
        githubstars: "https://img.shields.io/github/stars/NVlabs/SegFormer?style=social",
        img: "https://mmlabassets.github.io/open-source/SegFormer.jpg",
        id: "SegFormer",
    },
    {
        title: "Pyramid Vision Transformer: A Versatile Backbone for Dense Prediction without Convolutions",
        description: "Pyramid Vision Transformer (PVT) is a pure Transformer backbone for dense prediction tasks, such as object detection and semantic segmentation.",
        tags: [
            "Vision Transformer"
        ],
        links: [
            {
                website: "Paper",
                url: "https://arxiv.org/abs/2102.12122",
            },
            {
                website: "GitHub",
                url: "https://github.com/whai362/PVT",
            },
        ],
        keys :[
            "Project", "2021"
        ],
        pis: ["Ping Luo"],
        githubstars: "https://img.shields.io/github/stars/whai362/PVT?style=social",
        img: "https://mmlabassets.github.io/open-source/PVT.jpg",
        id: "Pyramid",
    },
    {
        title: "Sparse R-CNN: End-to-End Object Detection with Learnable Proposals",
        description: "Sparse R-CNN is a purely sparse method for object detection in images, which demonstrates its accuracy, run-time and training convergence performance on par with the wellestablished detector.",
        tags: [
            "Semantic Segmentation"
        ],
        links: [
            {
                website: "Paper",
                url: "https://arxiv.org/abs/2011.12450",
            },
            {
                website: "GitHub",
                url: "https://github.com/PeizeSun/SparseR-CNN",
            },
        ],
        keys :[
            "Project", "2020"
        ],
        pis: ["Ping Luo"],
        githubstars: "https://img.shields.io/github/stars/PeizeSun/SparseR-CNN?style=social",
        img: "https://mmlabassets.github.io/open-source/SparseRCNN.jpg",
        id: "Sparse",
    },
    
]
