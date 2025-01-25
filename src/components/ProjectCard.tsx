import React from "react";
import { projects } from "../data/data";
import { useLocation, useNavigate } from "react-router-dom";

type ProjectCardProps = {
    type: "school" | "perso";
    onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ type, onClick }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (e: React.MouseEvent, projectTitle: string) => {
        if (onClick) onClick();

        setTimeout(() => {
            navigate(`/project/${projectTitle}`);
        }, 980);
    };

    return (
        <>
            {projects
                .filter(project => project.type === type)
                .map(project => {
                    const isCurrentPage = location.pathname === `/project/${project.title}`;

                    return (
                        <div
                            key={project.id}
                            className={`w-72 flex text-center flex-col cursor-pointer ${isCurrentPage ? "opacity-75 cursor-default" : ""}`}
                            onClick={isCurrentPage ? undefined : (e) => handleClick(e, project.title)}
                        >
                            <h3 className="py-1 font-semibold text-xl bg-zinc-700 rounded-t-xl w-full text-white"
                                style={{ 
                                    background: project.titleColor,
                                    color: project.textColor
                                }}
                            >
                                {project.title}
                            </h3>
                            <p className="w-full bg-zinc-800 rounded-b-xl p-1"
                                style={{ 
                                    background: project.descColor,
                                    color: project.textColor
                                }}
                            >
                                {project.description}
                            </p>
                        </div>
                    );
                })}
        </>
    );
};

export default ProjectCard;