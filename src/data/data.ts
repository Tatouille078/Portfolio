export type Project = {
    id: number;
    type: "school" | "perso";
    title: string;
    description: string;
    images: string[];
    titleColor: string;
    descColor: string;
    subTitle1?: string;
    subText1?: string;
    subTitle2?: string;
    subText2?: string;
    textColor: string;
}

const projects: Project[] = [
    {
        id: 1,
        type: "perso",
        title: "SkyFlippy",
        description: "A web app for the Minecraft sever: Hypixel. It prodigate an interface that sort the best items to flip on the bazaar of the skyblock gamemode.",
        images: ['/src/assets/project/SkyFlippy.png', '/src/assets/project/SkyFlippy2.png'],
        titleColor: "#634960",
        descColor: "#403244",
        subTitle1: "Technology used",
        subText1: "HTML, CSS with Tailwind and Typescript with React",
        subTitle2: "Fonctionnality",
        subText2: "Based on the bazaar Hypixel API, It gives each items a score and sort it to expose the best ones to flip on the bazaar.",
        textColor: "#fff",
    },
    {
        id: 2,
        type: "perso",
        title: "Portfolio",
        description: "A web app to post about my project and myself. Here you can get my contact information and know more about who am I and what work have I done.",
        images: ["/src/assets/project/portfolio1.png", "/src/assets/project/portfolio2.png"],
        titleColor: "#f0ca99",
        descColor: "#AD8B62",
        subTitle1: "Technology used",
        subText1: "HTML, CSS with Tailwind and Typescript with React",
        subTitle2: "About it",
        subText2: "My second big web app project after skyFlippy, very proud of it. It will be actualised everytime I start a new project.",
        textColor: "#000",
    },
    {
        id: 3,
        type: "perso",
        title: "WynnPack",
        description: "3D texture pack for the Minecraft server: Wynncraft. Various custom models to enhance gameplay with many special touch through innovativ design and animation.",
        images: ["/src/assets/project/wynnpack1.png", "/src/assets/project/wynnpack2.png"],
        titleColor: "#475060",
        descColor: "#313342",
        subTitle1: "Technologies utilisées",
        subText1: "3D with Blockbench. Task management with Google sheets.",
        subTitle2: "About it",
        subText2: "Made for fun but never finished it. I gave up at 33 models out of 100 and put about 80h into it.",
        textColor: "#fff",
    },
    {
        id: 4,
        type: "perso",
        title: "Mario64_Romhack",
        description: "Romhack for mario 64. A complete casual game with 100 stars was planned with fully customised maps and a new story with creative concept.",
        images: ["/src/assets/project/mario1.png", "/src/assets/project/mario2.png"],
        titleColor: "#495E45",
        descColor: "#313F2F",
        subTitle1: "Technology used",
        subText1: "3D with blender. Decompiler: SM64 ROM manager",
        subTitle2: "About it",
        subText2: "Started a while ago, put about 200h into it. It has currently no name but i'm very proud with what it came up to.",
        textColor: "#fff",
    },
    {
        id: 5,
        type: "school",
        title: "Carrot",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti ducimus natus eligendi expedita, blablalba blablalba blablalba blablalba blablalba",
        images: ["project3.jpg", "project4.jpg"],
        titleColor: "#3f3f46",
        descColor: "#27272a",
        subTitle1: "Technologies utilisées",
        subText1: "HTML, CSS, JavaScript, React, Next.js",
        subTitle2: "Fonctionnalités",
        subText2: "Site e-commerce responsive, création de composants React, gestion du state avec Redux, API GraphQL",
        textColor: "#fff",
    }
];

export type knowledges = {
    id: number;
    type: string;
    name: string;
    icon: string;
}

const knowledges: knowledges[] = [
    {
        id: 1,
        type: "language",
        name: "CSS",
        icon: "./src/assets/icons/CSS.png",
    },
    {
        id: 2,
        type: "language",
        name: "HTML5",
        icon: "./src/assets/icons/HTML.png",
    },
    {
        id: 3,
        type: "language",
        name: "Javascript",
        icon: "./src/assets/icons/javascript.png",
    },
    {
        id: 4,
        type: "language",
        name: "Python",
        icon: "./src/assets/icons/python.png",
    },
    {
        id: 5,
        type: "language",
        name: "Tailwind",
        icon: "./src/assets/icons/Tailwind.png",
    },
    {
        id: 6,
        type: "language",
        name: "C++",
        icon: "./src/assets/icons/Cpp.png",
    },
    {
        id: 7,
        type: "language",
        name: "React",
        icon: "./src/assets/icons/React.png",
    },
    {
        id: 8,
        type: "tool",
        name: "Blender",
        icon: "./src/assets/icons/blender.png",
    },
    {
        id: 9,
        type: "tool",
        name: "Godot (W.I.P)",
        icon: "./src/assets/icons/godot.png",
    },
]

export { projects, knowledges }