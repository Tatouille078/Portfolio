import { Link, useParams } from "react-router-dom";
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
            <div className="flex flex-col items-center justify-between flex-grow">
                <div className="flex justify-center flex-grow">

                    {/* media is over 768px in w */}
                    <div className="max-w-[1300px] relative hidden md:block ">
                        <div className="h-full flex justify-center items-center">
                            <div className="w-[98%] flex justify-center items-center m-4">
                                <div className="grid grid-cols-3 justify-center gap-y-16 gap-x-4 items-center">
                                    <img src={currentProject?.images[0]} alt="" className="rounded-xl xl:w-full w-[80%]" />
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
                                    <img src={currentProject?.images[1]} alt="" className="rounded-xl xl:w-full w-[80%]" />
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
                                        <br/>
                                        {currentProject?.link ? <Link to={currentProject.link} className="text-[#ffd59e] underline">Website here !</Link> : ""}
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
                            <div className={`z-50 ${isTransitioning ? "transitionObject1" : ""}`}></div>
                            <div className={`z-50 ${isTransitioning ? "transitionObject2" : ""}`}></div>
                            <div className={`z-50 ${isTransitioning ? "transitionObject3" : ""}`}></div>
                        </div>
                    </div>

                    {/* media is under 768px in w */}
                    <div className="relative md:hidden my-auto">
                        <div className="flex flex-col items-center gap-y-8 px-2 mx-2 overflow-y-scroll overflow-x-hidden max-h-[60vh] py-2 rounded-xl border-2"
                            style={{ borderColor: currentProject?.titleColor }}
                        >
                            <img src={currentProject?.images[0]} alt="" className="rounded-xl" />
                            <div className="col-start-2 col-end-4 flex flex-col text-center items-center">
                                <h2 className="relative text-2xl font-semibold z-10 py-1"
                                    style={{ color: currentProject?.textColor }}
                                >{currentProject?.title}
                                    <span className="absolute inset-0 w-[130%] -translate-x-[11.25%] -z-10 textTrapez translate-y-0.5"
                                        style={{ background: currentProject?.titleColor }}
                                    />
                                </h2>
                                <p className="relative max-w-[90%] text-xl z-10 py-1"
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
                        <div className={`z-50 ${isTransitioning ? "transitionObject1" : ""}`} style={{ top: "0px", height: "100%" }}></div>
                        <div className={`z-50 ${isTransitioning ? "transitionObject2" : ""}`} style={{ top: "0px", height: "100%" }}></div>
                        <div className={`z-50 ${isTransitioning ? "transitionObject3" : ""}`} style={{ top: "0px", height: "100%" }}></div>
                    </div>
                </div>
                <div className="mt-0 mb-4 w-full flex flex-col items-center max-h-52">
                    <span className="w-[70vw] border-t-2 border-gray-300 mb-4"></span>
                    <div className="w-full max-w-[100vw] min-h-[190px] overflow-x-scroll overflow-y-hidden">
                        <div className={`h-full transition-all ease-out flex flex-row items-center min-w-max gap-x-4 pr-4 ${isTransitioning ? "pointer-events-none" : "pointer-events-auto"}`}>
                            <h2 className="text-center self-center mx-8 font-semibold text-2xl">Projets<br />personnels :</h2>
                            <ProjectCard type="perso" onClick={handleTransitioning} />
                            <h2 className="text-center self-center mx-8 ml-16 font-semibold text-2xl">Projets<br />d'études :</h2>
                            <ProjectCard type="school" onClick={handleTransitioning} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Project;