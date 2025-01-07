import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import './Project.css'
import { Project as P, projects } from "../data/data";
import { useEffect, useState } from "react";

function Project() {

    const {name} = useParams()
    const [currentProject, setCurrentProject] = useState<P | null>(null);

    useEffect(() => {
        setCurrentProject(projects.find(p => p.title == name) || projects[0]);
    }, [name])

    return (
        <div className='flex flex-col items-center min-h-[100vh] bg-zinc-900 text-white'>
            <Header />
            <div className="w-[60vw]">
                <div className="border mt-12 project-display">
                <p>{currentProject?.title}</p>
                </div>
            </div>
            <div className="mt-auto mb-4 w-full flex flex-col items-center">
                <span className="w-[70vw] border-t-2 mb-6"></span>
                <div className="w-full max-w-[100vw] h-[20vh] overflow-x-scroll">
                    <div className="h-full transition-all ease-out flex flex-row min-w-max">
                        <h2 className="text-center self-center mx-8 font-semibold text-2xl">Personnal<br />projects :</h2>
                        <ProjectCard type="perso" />
                        <h2 className="text-center self-center mx-8 ml-16 font-semibold text-2xl">School<br />projects :</h2>
                        <ProjectCard type="school" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Project;