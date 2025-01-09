export type Project = {
    id: number;
    type: "school" | "perso";
    title: string;
    description: string;
    images: string[];
    colorBg: string;
    colorBorder: string;
    subTitle1?: string;
    subText1?: string;
    subTitle2?: string;
    subText2?: string;
}

const projects: Project[] = [
    {
        id: 1,
        type: "perso",
        title: "SkyFlippy",
        description: "A web app for the minecraft sever: Hypixel. It prodigate an interface that sort the best items to flip on the bazaar of the skyblock gamemode.",
        images: ['/src/assets/SkyFlippy.png', '/src/assets/SkyFlippy2.png'],
        colorBg: "FFF",
        colorBorder: "FFF",
        subTitle1: "Technology used",
        subText1: "this web App based from the Hypixel API has been created using HTML, CSS and the library TailwindCSS. for javascript I'm using the React library.",
        subTitle2: "Fonctionnality",
        subText2: "Based on the bazaar Hypixel API, Skyflippy gives each items available a score with explanation and sort it to expose the best ones to flip on the bazaar in-game."
    },
    {
        id: 2,
        type: "perso",
        title: "Projet de fin d'étude",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti ducimus natus eligendi expedita, blablalba blablalba blablalba blablalba blablalba",
        images: ["project3.jpg", "project4.jpg"],
        colorBg: "FFF",
        colorBorder: "FFF",
        subTitle1: "Technologies utilisées",
        subText1: "HTML, CSS, JavaScript, React, Next.js",
        subTitle2: "Fonctionnalités",
        subText2: "Site e-commerce responsive, création de composants React, gestion du state avec Redux, API GraphQL"
    },
    {
        id: 3,
        type: "perso",
        title: "Projet de fin d'étude",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti ducimus natus eligendi expedita, blablalba blablalba blablalba blablalba blablalba",
        images: ["project3.jpg", "project4.jpg"],
        colorBg: "FFF",
        colorBorder: "FFF",
        subTitle1: "Technologies utilisées",
        subText1: "HTML, CSS, JavaScript, React, Next.js",
        subTitle2: "Fonctionnalités",
        subText2: "Site e-commerce responsive, création de composants React, gestion du state avec Redux, API GraphQL"
    },
    {
        id: 4,
        type: "perso",
        title: "Projet de fin d'étude",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti ducimus natus eligendi expedita, blablalba blablalba blablalba blablalba blablalba",
        images: ["project3.jpg", "project4.jpg"],
        colorBg: "FFF",
        colorBorder: "FFF",
        subTitle1: "Technologies utilisées",
        subText1: "HTML, CSS, JavaScript, React, Next.js",
        subTitle2: "Fonctionnalités",
        subText2: "Site e-commerce responsive, création de composants React, gestion du state avec Redux, API GraphQL"
    },
    {
        id: 5,
        type: "school",
        title: "Projet de fin d'étude",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti ducimus natus eligendi expedita, blablalba blablalba blablalba blablalba blablalba",
        images: ["project3.jpg", "project4.jpg"],
        colorBg: "FFF",
        colorBorder: "FFF",
        subTitle1: "Technologies utilisées",
        subText1: "HTML, CSS, JavaScript, React, Next.js",
        subTitle2: "Fonctionnalités",
        subText2: "Site e-commerce responsive, création de composants React, gestion du state avec Redux, API GraphQL"
    }
];

export { projects }