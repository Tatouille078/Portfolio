import React from "react";
import { projects } from "../data/data";
import { Link } from "react-router-dom";

type ProjectCardProps = {
    type: "school" | "perso";
}

const ProjectCard: React.FC<ProjectCardProps> = ({ type }) => {

    return (
        <>
            {projects.filter(project => project.type == type).map(project => (
                <Link to={`/project/${project.title}`} key={project.id} className='w-72 flex text-center flex-col mx-2'>
                    <h3 className='py-1 font-semibold text-xl bg-zinc-700 rounded-t-xl w-full'>{project.title}</h3>
                    <p className='w-full bg-zinc-800 rounded-b-xl py-1'>{project.description}</p>
                </Link>
            ))}
        </>
    );
};

export default ProjectCard;