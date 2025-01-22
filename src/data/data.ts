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
        images: ['/src/assets/SkyFlippy.png', '/src/assets/SkyFlippy2.png'],
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
        images: ["/src/assets/portfolio1.png", "/src/assets/portfolio2.png"],
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
        images: ["/src/assets/wynnpack1.png", "/src/assets/wynnpack2.png"],
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
        title: "Patate",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti ducimus natus eligendi expedita, blablalba blablalba blablalba blablalba blablalba",
        images: ["project3.jpg", "project4.jpg"],
        titleColor: "#3f3f46",
        descColor: "#27272a",
        subTitle1: "Technologies utilisées",
        subText1: "HTML, CSS, JavaScript, React, Next.js",
        subTitle2: "Fonctionnalités",
        subText2: "Site e-commerce responsive, création de composants React, gestion du state avec Redux, API GraphQL",
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

export { projects }