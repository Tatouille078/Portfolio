import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import './Project.css'
import { Project as P, projects } from "../data/data";
import { useEffect, useState } from "react";

function Project() {

    const { name } = useParams()
    const [currentProject, setCurrentProject] = useState<P | null>(null);

    useEffect(() => {
        setCurrentProject(projects.find(p => p.title == name) || projects[0]);
    }, [name])

    return (
        <div className='flex flex-col items-center min-h-[100vh] bg-zinc-900 text-white overflow-hidden'>
            <Header />
            <div className="w-[60vw] relative">
                <div className="border w-[60vw] h-[60vh] mt-12 overflow-hidden flex justify-center items-center">
                    <div className="w-[98%] h-[95%] flex justify-center items-center overflow-hidden m-4">
                        <div className="grid grid-cols-3 justify-center gap-y-16 gap-x-4 items-center">
                            <img src={currentProject?.images[0]} alt="" className="rounded-xl w-full" />
                            <div className="col-start-2 col-end-4 flex flex-col text-center items-center">
                                <h2 className="text-2xl font-semibold">{currentProject?.title}</h2>
                                <p className="max-w-[60%] text-xl">{currentProject?.description}</p>
                            </div>
                            <img src={currentProject?.images[1]} alt="" className="rounded-xl" />
                            <div className="flex flex-col text-center items-center">
                                <h2 className="text-2xl font-semibold">{currentProject?.subTitle1}</h2>
                                <p className="max-w-[95%] text-xl">{currentProject?.subText1}</p>
                            </div>
                            <div className="flex flex-col text-center items-center">
                                <h2 className="text-2xl font-semibold">{currentProject?.subTitle2}</h2>
                                <p className="max-w-[95%] text-xl">{currentProject?.subText2}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transitionObject1"></div>
                <div className="transitionObject2"></div>
                <div className="transitionObject3"></div>
            </div>
            <div className="mt-auto mb-4 w-full flex flex-col items-center">
                <span className="w-[70vw] border-t-2 border-gray-300 mb-6"></span>
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