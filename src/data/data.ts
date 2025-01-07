export type Project = {
    id: number;
    type: "school" | "perso";
    title: string;
    description: string;
    images: string[];
    subTitle1?: string;
    subText1?: string;
    subTitle2?: string;
    subText2?: string;
}

const projects: Project[] = [
    {
        id: 1,
        type: "perso",
        title: "Ciel",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti ducimus natus eligendi expedita, blablalba blablalba blablalba blablalba blablalba",
        images: ["project1.jpg", "project2.jpg"],
        subTitle1: "Technologies utilisées",
        subText1: "HTML, CSS, JavaScript, React",
        subTitle2: "Fonctionnalités",
        subText2: "Site e-commerce responsive, création de composants React, gestion du state avec Redux"
    },
    {
        id: 2,
        type: "perso",
        title: "Projet de fin d'étude",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti ducimus natus eligendi expedita, blablalba blablalba blablalba blablalba blablalba",
        images: ["project3.jpg", "project4.jpg"],
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
        subTitle1: "Technologies utilisées",
        subText1: "HTML, CSS, JavaScript, React, Next.js",
        subTitle2: "Fonctionnalités",
        subText2: "Site e-commerce responsive, création de composants React, gestion du state avec Redux, API GraphQL"
    }
];

export { projects }