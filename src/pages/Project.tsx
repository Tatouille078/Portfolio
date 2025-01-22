import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import './Project.css'
import { Project as P, projects } from "../data/data";
import { useEffect, useState } from "react";

function Project() {

    const { name } = useParams()
    const [currentProject, setCurrentProject] = useState<P | null>(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleTransitioning = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);

        const timeout = setTimeout(() => {
            setIsTransitioning(false);
        }, 1550);

        return () => clearTimeout(timeout);
    }

    useEffect(() => {
        setCurrentProject(projects.find(p => p.title == name) || projects[0]);
    }, [name])

    return (
        <div className='relative flex flex-col items-center min-h-[100vh] bg-gradient-to-tr from-zinc-900 via-zinc-950 via-65% to-zinc-800 text-white overflow-hidden'>
            <span className="introObjectL1" />
            <span className="introObjectL2" />
            <span className="introObjectL3" />
            <span className="introObjectL4" />
            <span className="introObjectR1" />
            <span className="introObjectR2" />
            <span className="introObjectR3" />
            <span className="introObjectR4" />
            <Header />
            <div className="w-[60vw] relative">
                <div className="w-[60vw] h-[60vh] mt-12 flex justify-center items-center">
                    <div className="w-[98%] h-[95%] flex justify-center items-center m-4">
                        <div className="grid grid-cols-3 justify-center gap-y-16 gap-x-4 items-center">
                            <img src={currentProject?.images[0]} alt="" className="rounded-xl w-full" />
                            <div className="col-start-2 col-end-4 flex flex-col text-center items-center">
                                <h2 className="relative text-2xl font-semibold z-10 py-1"
                                    style={{ color: currentProject?.textColor }}
                                >{currentProject?.title}
                                    <span className="absolute inset-0 w-[130%] -translate-x-[11.25%] -z-10 textTrapez translate-y-0.5"
                                        style={{ background: currentProject?.titleColor }}
                                    />
                                </h2>
                                <p className="relative max-w-[60%] text-xl z-10 py-1"
                                    style={{ color: currentProject?.textColor }}
                                >{currentProject?.description}
                                    <span className="absolute inset-0 w-[130%] -translate-x-[11.25%] -z-10 textTrapez"
                                        style={{ background: currentProject?.descColor }}
                                    />
                                </p>
                            </div>
                            <img src={currentProject?.images[1]} alt="" className="rounded-xl" />
                            <div className="flex flex-col text-center items-center">
                                <h2 className="relative text-2xl font-semibold z-10 py-2"
                                    style={{ color: currentProject?.textColor }}
                                >{currentProject?.subTitle1}
                                    <span className="absolute inset-0 w-[130%] -translate-x-[11.25%] -z-10 textTrapez translate-y-0.5"
                                        style={{ background: currentProject?.titleColor }}
                                    />
                                </h2>
                                <p className="relative max-w-[75%] text-xl z-10 py-1"
                                    style={{ color: currentProject?.textColor }}
                                >{currentProject?.subText1}
                                    <span className="absolute inset-0 w-[130%] -translate-x-[11.25%] -z-10 textTrapez"
                                        style={{ background: currentProject?.descColor }}
                                    />
                                </p>
                            </div>
                            <div className="flex flex-col text-center items-center">
                                <h2 className="relative text-2xl font-semibold z-10 py-1"
                                    style={{ color: currentProject?.textColor }}
                                >{currentProject?.subTitle2}
                                    <span className="absolute inset-0 w-[130%] -translate-x-[11.25%] -z-10 textTrapez translate-y-0.5"
                                        style={{ background: currentProject?.titleColor }}
                                    />
                                </h2>
                                <p className="relative max-w-[85%] text-xl z-10 py-0.5"
                                    style={{ color: currentProject?.textColor }}
                                >{currentProject?.subText2}
                                    <span className="absolute inset-0 w-[130%] -translate-x-[11.25%] -z-10 textTrapez"
                                        style={{ background: currentProject?.descColor }}
                                    />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`z-50 ${isTransitioning ? "transitionObject1" : ""}`}></div>
                <div className={`z-50 ${isTransitioning ? "transitionObject2" : ""}`}></div>
                <div className={`z-50 ${isTransitioning ? "transitionObject3" : ""}`}></div>
            </div>
            <div className="mt-auto mb-4 w-full flex flex-col items-center">
                <span className="w-[70vw] border-t-2 border-gray-300 mb-6"></span>
                <div className="w-full max-w-[100vw] h-[20vh] overflow-x-scroll overflow-y-hidden">
                    <div className={`h-full transition-all ease-out flex flex-row min-w-max gap-x-4 ${isTransitioning ? "pointer-events-none" : "pointer-events-auto"}`}>
                        <h2 className="text-center self-center mx-8 font-semibold text-2xl">Personnal<br />projects :</h2>
                        <ProjectCard type="perso" onClick={handleTransitioning} />
                        <h2 className="text-center self-center mx-8 ml-16 font-semibold text-2xl">School<br />projects :</h2>
                        <ProjectCard type="school" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Project;