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
    link?: string;
}

const projects: Project[] = [
    {
        id: 1,
        type: "perso",
        title: "SkyFlippy",
        description: "Une application web pour le serveur Minecraft : Hypixel. Elle fournit une interface qui trie les meilleurs objets à revendre sur le bazar du mode de jeu Skyblock.",
        images: ['https://res.cloudinary.com/dxaxfy6sd/image/upload/v1750959000/SkyFlippy_yttqxq.png', 'https://res.cloudinary.com/dxaxfy6sd/image/upload/v1750958543/SkyFlippy2_vwcqfj.png'],
        titleColor: "#634960",
        descColor: "#403244",
        subTitle1: "Technology used",
        subText1: "HTML, CSS avec Tailwind et Typescript avec React.",
        subTitle2: "Fonctionnality",
        subText2: "Basée sur l'API du bazar de Hypixel, elle attribue un score à chaque objet et les trie pour afficher les meilleurs à revendre sur le bazar.",
        textColor: "#fff",
        link: "https://tatouille078.github.io/SkyFlippy/#/"
    },
    {
        id: 2,
        type: "perso",
        title: "Portfolio",
        description: "Une application web pour parler de mes projets et de moi-même. Vous pouvez y trouver mes contact et en apprendre plus sur qui je suis et ce que j'ai réalisé.",
        images: ["https://res.cloudinary.com/dxaxfy6sd/image/upload/v1750958542/portfolio1_xb9rvo.png", "https://res.cloudinary.com/dxaxfy6sd/image/upload/v1750958542/portfolio2_rcayqo.png"],
        titleColor: "#BA9F76",
        descColor: "#A08252",
        subTitle1: "Technology used",
        subText1: "HTML, CSS avec Tailwind et Typescript avec React",
        subTitle2: "About it",
        subText2: "Mon deuxième gros projet d'application web après skyFlippy, j'en suis très fier. Il sera mis à jour à chaque fois que je commence un nouveau projet.",
        textColor: "#000",
    },
    {
        id: 3,
        type: "perso",
        title: "WynnPack",
        description: "Pack de textures 3D pour le serveur Minecraft : Wynncraft. Divers modèles avec de nombreuses touches spéciales via un design innovantes.",
        images: ["https://res.cloudinary.com/dxaxfy6sd/image/upload/v1750958544/wynnpack1_p6pmhj.png", "https://res.cloudinary.com/dxaxfy6sd/image/upload/v1750958544/wynnpack2_dqepdx.png"],
        titleColor: "#475060",
        descColor: "#313342",
        subTitle1: "Technology used",
        subText1: "3D avec Blockbench. Task management avec Google sheets.",
        subTitle2: "About it",
        subText2: "Fait pour le plaisir mais jamais terminé. J'ai abetonné après 33 modèles sur 100, en y ayant consacré environ 80 heures.",
        textColor: "#fff",
    },
    {
        id: 4,
        type: "perso",
        title: "Mario64 Romhack",
        description: "Romhack pour Mario 64. Un jeu complet et accessible avec 100 étoiles était prévu, avec des cartes entièrement personnalisées et une nouvelle histoire.",
        images: ["https://res.cloudinary.com/dxaxfy6sd/image/upload/v1750958540/mario1_nq7hlz.png", "https://res.cloudinary.com/dxaxfy6sd/image/upload/v1750958541/mario2_nkuhsu.png"],
        titleColor: "#495E45",
        descColor: "#313F2F",
        subTitle1: "Technology used",
        subText1: "3D avec blender. Decompiler: SM64 ROM manager",
        subTitle2: "About it",
        subText2: "Commencé il y a un moment, j'y ai passé environ 200 heures. Il n'a pas encore de nom mais je suis très fier du résultat actuel.",
        textColor: "#fff",
    },
    {
        id: 5,
        type: "school",
        title: "AP 1",
        description: "Simulation d'une entreprise de télécommunication mobile. Site web en pur HTML, n'utilisant que Tailwind pour améliorer le CSS. Il a aussi fallu faire de la paperasse.",
        images: ["https://res.cloudinary.com/dxaxfy6sd/image/upload/v1750958249/ap11_qwbzvg.png", "https://res.cloudinary.com/dxaxfy6sd/image/upload/v1750958545/ap12_mkbp0s.png"],
        titleColor: "#098CBE",
        descColor: "#0C2842",
        subTitle1: "Technology used",
        subText1: "HTML, Tailwind CSS.",
        subTitle2: "About it",
        subText2: "Première simulation d'entreprise que j'ai faite, composée principalement de paperasse. Nous étions 4 sur ce projet et avons dû réaliser une présentation orale.",
        textColor: "#fff",
    },
    {
        id: 6,
        type: "school",
        title: "Meal API",
        description: "Un des petits projets de jeu d'API en JavaScript. Exploration sur manière de manipuler et d'utiliser les réponses d'une API. Jeu où il faut choisir la bonne réponse.",
        images: ["https://res.cloudinary.com/dxaxfy6sd/image/upload/v1750958541/meal2_t828yl.png", "https://res.cloudinary.com/dxaxfy6sd/image/upload/v1750958541/meal1_k56xrc.png"],
        titleColor: "#BAD9FF",
        descColor: "#5BA7FF",
        subTitle1: "Technology used",
        subText1: "HTML, Tailwind CSS, Vanilla Javascript",
        subTitle2: "About it",
        subText2: "Ne parlons pas de la partie graphique. C'était à peine fonctionnel aussi.",
        textColor: "#000",
    },
    {
        id: 7,
        type: "school",
        title: "Pokedex",
        description: "Un projets d'API en JavaScript. Exploration de la manière de manipuler et d'utiliser les réponses d'une API. Affiche les Pokémon de la première génération.",
        images: ["https://res.cloudinary.com/dxaxfy6sd/image/upload/v1750958542/pokedex1_sz2ozh.png", "https://res.cloudinary.com/dxaxfy6sd/image/upload/v1750958542/pokedex2_m62lqt.png"],
        titleColor: "#E41A01",
        descColor: "#8F8F8F",
        subTitle1: "Technology used",
        subText1: "HTML, Tailwind CSS, Vanilla Javascript",
        subTitle2: "About it",
        subText2: "Projet très amusant dans l'ensemble, malgré sa petite taille.",
        textColor: "#000",
    }
];

export type Knowledges = {
    id: number;
    type: string;
    name: string;
    icon: string;
}

const knowledges: Knowledges[] = [
    {
        id: 1,
        type: "language",
        name: "CSS",
        icon: "https://res.cloudinary.com/dxaxfy6sd/image/upload/v1750967130/CSS_ii9wvk.png",
    },
    {
        id: 2,
        type: "language",
        name: "HTML5",
        icon: "https://res.cloudinary.com/dxaxfy6sd/image/upload/v1750967132/HTML_omxfok.png",
    },
    {
        id: 3,
        type: "language",
        name: "Javascript",
        icon: "https://res.cloudinary.com/dxaxfy6sd/image/upload/v1750967132/javascript_wbhcve.png",
    },
    {
        id: 4,
        type: "language",
        name: "Python",
        icon: "https://res.cloudinary.com/dxaxfy6sd/image/upload/v1750967133/python_izppr5.png",
    },
    {
        id: 5,
        type: "language",
        name: "Tailwind",
        icon: "https://res.cloudinary.com/dxaxfy6sd/image/upload/v1750967134/Tailwind_tqzrfs.png",
    },
    {
        id: 6,
        type: "language",
        name: "C++",
        icon: "https://res.cloudinary.com/dxaxfy6sd/image/upload/v1750967131/Cpp_h9fru1.png",
    },
    {
        id: 7,
        type: "language",
        name: "React",
        icon: "https://res.cloudinary.com/dxaxfy6sd/image/upload/v1750967133/React_vnq3nw.png",
    },
    {
        id: 8,
        type: "tool",
        name: "Blender",
        icon: "https://res.cloudinary.com/dxaxfy6sd/image/upload/v1750967131/blender_x8gx7l.png",
    },
    {
        id: 9,
        type: "tool",
        name: "Godot",
        icon: "https://res.cloudinary.com/dxaxfy6sd/image/upload/v1750967132/godot_vuxrpk.png",
    },
]

export { projects, knowledges }