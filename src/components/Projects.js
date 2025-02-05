import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const projectsData = [
    {
        title: "Muffins or Dogs",
        description: "A full-stack web application built using React, Node.js and uses Flask for backend. It is deployed to fly.io, might take time to connect because of the free plan of the system. Contains computer vision model in the backend that predicts if the picture uploaded is of a muffin or a dog",
        technologies: ["React", "Node.js", "Flask", "Jupyter-notebook"],
        githubLink: "https://github.com/heinohen/muffindogs",
        liveLink: "https://muffindogs.fly.dev/"
    },
    {
        title: "Customer project (ongoing)",
        description: "Capstone project for a logistics company to more accurately calculate freight costs. Project is on-going, started January 2025. No links available to public as it is for customer.",
        technologies: ["React", "Node.js", "Flask", "Jupyter-notebook"],
        githubLink: "https://github.com/username/project-two",
        liveLink: "https://project-two.com"
    },
    {
        title: "NLP project placeholder",
        description: "TODO",
        technologies: ["Google colab", "Node.js", "Flask", "Jupyter-notebook", "Hugging Face"],
        githubLink: "https://github.com/username/project-two",
        liveLink: "https://project-two.com"
    },
];
const Projects = () => {
    return (_jsxs("section", { id: "projects", className: "section", children: [_jsx("h2", { children: "Projects" }), _jsx("div", { className: "projects-container", children: projectsData.map((project, index) => (_jsxs("div", { className: "project-card", children: [_jsxs("h3", { children: [`Project ${index + 1}: `, project.title] }), _jsxs("ul", { children: [_jsxs("li", { children: [_jsx("strong", { children: "Description:" }), project.description] }), _jsxs("li", { children: [_jsx("strong", { children: "Technologies:" }), " ", project.technologies.join(", ")] }), _jsxs("li", { children: [_jsx("strong", { children: "Links" }), ":", _jsxs("ul", { children: [_jsx("li", { children: project.githubLink && (_jsx("a", { href: project.githubLink, target: "_blank", rel: "noopener noreferrer", children: "GitHub" })) }), _jsx("li", { children: project.liveLink && (_jsx("a", { href: project.liveLink, target: "_blank", rel: "noopener noreferrer", children: "Live Demo" })) })] })] })] })] }, index))) })] }));
};
export default Projects;
