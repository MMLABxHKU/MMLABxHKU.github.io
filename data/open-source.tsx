export const open_source_categories: { category: string; years: string[]; }[] = [
    {
        category: "Hightlight",
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
}[] = [
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
            "Project", "2024", "Hightlight"
        ],
        pis: ["Ping Luo"],
        githubstars: "https://img.shields.io/github/stars/deepseek-ai/Janus?style=social",
        img: "https://mmlabassets.github.io/open-source/Janus.png",
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
            "Project", "2024", "Hightlight"
        ],
        pis: ["Ping Luo"],
        githubstars: "https://img.shields.io/github/stars/FoundationVision/LlamaGen?style=social",
        img: "https://mmlabassets.github.io/open-source/LlamaGen.png",
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
                url: "https://arxiv.org/pdf/2312.03641",
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
        img: "https://mmlabassets.github.io/open-source/MotionCtrl.png",
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
            "Project", "2023", "Hightlight"
        ],
        pis: ["Ping Luo"],
        githubstars: "https://img.shields.io/github/stars/PixArt-alpha/PixArt-alpha?style=social",
        img: "https://mmlabassets.github.io/open-source/PixartAlpha.png",
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
        img: "https://mmlabassets.github.io/open-source/OmniQuant.png",
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
        img: "https://mmlabassets.github.io/open-source/LVLM-eHub.png",
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
        img: "https://mmlabassets.github.io/open-source/EmbodiedGPT.png",
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
        img: "https://mmlabassets.github.io/open-source/DiffusionDet.png",
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
                url: "https://arxiv.org/pdf/2206.08023",
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
        img: "https://mmlabassets.github.io/open-source/AMOS.png",
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
        img: "https://mmlabassets.github.io/open-source/AdaptFormer.png",
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
        img: "https://mmlabassets.github.io/open-source/SegFormer.png",
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
                url: "https://arxiv.org/pdf/2102.12122",
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
        img: "https://mmlabassets.github.io/open-source/PVT.png",
    },
    {
        title: "Sparse R-CNN: End-to-End Object Detection with Learnable Proposals",
        description: "SegFormer is a simple, efficient and powerful semantic segmentation method.",
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
        img: "https://mmlabassets.github.io/open-source/SparseRCNN.jpeg",
    },
]
