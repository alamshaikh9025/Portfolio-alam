import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    gowdri,
    tailwindcss,
    threads,
    typescript,
    bluesquare,
    portfolio,
    rockstar,
    meme,
    airbnb,
    notes
} from "../assets/icons";



export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Software Tester",
        company_name: "Blue Squares",
        icon: bluesquare,
        iconBg: "#accbe1", 
        date: "March 2019 - May 2019",
        points: [
            "Throughout my internship in software testing, I acquired invaluable expertise in diverse domains such as the software testing process and its lifecycle, manual testing for web apps, automation of web applications, and mobile app testing",
            "Developed and Automated Test scripts for the company website.",
            "Became proficient in Selenium Framework",
        ],
    },
    {
        title: "Front-end-dev(Intern)",
        company_name: "Gowri Software Solutions",
        icon: gowdri,
        iconBg: "#fbc3bc",
        date: "July 2022 - Sep 2022",
        points: [
            "Worked on Organization website pages to develop, modify and handle them.",
            "Worked on with technologies like HTML, CSS , JavaScript , React and Mongo DB.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Did react state management and learned and implemented functionalities on website.",
        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: "tel:+91 9738700451",

    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/alamshaikh9025',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/alamshaikh/',
    }
];

export const projects = [
    {
        iconUrl: portfolio,
        theme: 'btn-back-red',
        name: 'Portfolio',
        description: 'A portfolio made using React and Three.JS for 3D animations.',
        link: 'https://github.com/alamshaikh9025/Portfolio-alam',
    },
    {
        iconUrl: rockstar,
        theme: 'btn-back-green',
        name: 'Rockstar clone',
        description: 'Created a replica of the popular gaming website Rockstar webpage to learn and understand react.',
        link: 'https://github.com/alamshaikh9025/rockstar-clone',
    },
    {
        iconUrl: meme,
        theme: 'btn-back-blue',
        name: 'Meme generator',
        description: 'Designed and built a  website for creating custom meme images online.',
        link: 'https://github.com/alamshaikh9025/meme-generator',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Zolve',
        description: 'Built a webpage for Graph generation of stackoverflow data with api fetch handling',
        link: 'https://github.com/alamshaikh9025/zolve-task',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Greendzine',
        description: 'Developed a web of simple data display and search function implimentation from local data .',
        link: 'https://github.com/alamshaikh9025/greendzine',
    },
    {
        iconUrl: airbnb,
        theme: 'btn-back-yellow',
        name: 'Air BnB Clone',
        description: 'Created a simple AIR BNB clone to learn react and use some of its functionalities.',
        link: 'https://github.com/alamshaikh9025/AIRBNB-CLONE',
    },
    {
        iconUrl: notes,
        theme: 'btn-back-yellow',
        name: 'Athena ',
        description: 'An App created as a project to share notes online .',
        link: 'https://github.com/alamshaikh9025/Athena_main',
    }
];
