import { useEffect, useRef, useState } from 'react';
import './Home.css';
import Header from '../components/Header';
import { IoIosArrowDown, IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import ProjectCard from '../components/ProjectCard';
import Wave from '../components/Wave';
import { Link } from 'react-router-dom';
import KnowledgeCard from '../components/KnowledgeCard';

function Home() {

    const nameRef = useRef<HTMLHeadingElement | null>(null);
    const [isTextEvent, setTextEvent] = useState(false);
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    useEffect(() => {
        const nameElement = nameRef.current;

        if (!nameElement) return;

        const dataValue = nameElement.getAttribute("data-value") || "";
        let iteration = 0;

        const interval = setInterval(() => {
            nameElement.innerHTML = dataValue
                .split("")
                .map((_: string, index: number) => {
                    if (iteration >= letters.length) {
                        clearInterval(interval);
                    }
                    if (index < iteration) {
                        return dataValue[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");
            iteration += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTextEvent(true);
        }, 1200);

        return () => clearTimeout(timeout);
    }, []);

    const inHorizontalRef = useRef(false);

    const handleMouseEnter = () => {
        // console.log('Mouse entered');
        inHorizontalRef.current = true;
    };

    const handleMouseLeave = () => {
        // console.log('Mouse left');
        inHorizontalRef.current = false;
    };

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isDesktop = window.innerWidth >= 1024 && !isTouchDevice;

    return (
        <>
            <div className='flex flex-col items-center text-gray-100 bg-gradient-to-tr from-zinc-900 via-zinc-950 via-25% to-zinc-800'>
                <section className='flex flex-col items-center overflow-hidden'>
                    <Wave side='left' count={24} className='' layer={3} />
                    <Wave side='right' count={24} className='' layer={3} />
                    <Wave side='left' count={24} className='' layer={2} />
                    <Wave side='right' count={24} className='' layer={2} />
                    <Wave side='left' count={24} className='' layer={1} />
                    <Wave side='right' count={24} className='' layer={1} />
                    <Wave side='left' count={24} className='' layer={0} />
                    <Wave side='right' count={24} className='' layer={0} />
                    <Header />
                    <div className='mt-[27vh] md:mb-[31vh] mb-[25vh] flex flex-col items-center group'>
                        <h1 className={`font-monospace mb-8 transition-all duration-1000 xl:text-[6.5rem] lg:text-8xl md:text-7xl text-6xl mix-blend-difference ${isTextEvent ? 'translate-y-0' : 'motion-reduce:translate-y-0 translate-y-20'}`} data-value="Bienvenue!" ref={nameRef}></h1>
                        <h6 className={`lg:text-3xl md:text-2xl text-xl w-[90%] text-gray-300 text-center flex-wrap transition-all duration-1000 ${isTextEvent ? 'opacity-100 translate-y-0' : 'opacity-0 motion-reduce:opacity-100 motion-reduce:translate-y-0 translate-y-40'}`}>Je m'appelle Loïck DEVISMES, <br /> Je suis un developpeur web et jeux vidéo.</h6>
                    </div>
                    <div className="relative mb-20 w-5">
                        <IoIosArrowDown className='arrowDown arrow1 opacity-0 motion-reduce:opacity-100 motion-reduce:animate-none' />
                        <IoIosArrowDown className='top-3 arrowDown arrow2 opacity-0 motion-reduce:opacity-100 motion-reduce:animate-none' />
                        <IoIosArrowDown className='top-6 arrowDown arrow3 opacity-0 motion-reduce:opacity-100 motion-reduce:animate-none' />
                    </div>
                </section>
                <section className='flex flex-col pt-12 lg:pt-[7vh] xl:pt-[15vh] lg:justify-center items-center w-full overflow-hidden lg:min-h-[100vh] min-h-[2000px]'>
                    <div className='lg:grid lg:grid-cols-[7fr_4fr] max-w-[100vw] px-[2%] lg:px-4 xl:gap-[3vw] h-[72vh] flex-grow items-center'>
                        <div className='flex sm:items-start flex-col sm:pr-4 items-center lg:min-h-[750px]'>
                            <h2 className='md:text-[68px] fade-left text-5xl lg:mt-6'>Mes projets</h2>
                            <h3 className='text-2xl text-gray-200 mt-4 lg:mt-8 fade-left'>Projets personnel:</h3>
                            <div className='sm:w-[660px] lg:w-auto lg:h-[185px] lg:max-w-[58vw] lg:min-w-[95%] h-[380px] mt-2 lg:overflow-x-auto lg:overflow-y-hidden overflow-y-scroll'>
                                <div onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className='lg:h-full h-[26vh] lg:min-w-max lg:flex lg:flex-row transition-all ease-out grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4'
                                >
                                    <ProjectCard type='perso' />
                                </div>
                            </div>
                            <h3 className={`text-2xl text-gray-200 mt-8 ${isDesktop ? "fade-left" : ""}`}>Projets d'étude:</h3>
                            <div className='sm:w-[660px] lg:w-auto lg:h-[185px] lg:max-w-[58vw] lg:min-w-[95%] h-[380px] mt-2 lg:overflow-x-auto lg:overflow-y-hidden overflow-y-scroll'>
                                <div onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className='lg:h-full h-[26vh] lg:min-w-max lg:flex lg:flex-row transition-all ease-out grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4'
                                >
                                    <ProjectCard type='school' />
                                </div>
                            </div>
                            <Link to='/project/SkyFlippy' className='relative flex py-2 mt-8 text-xl group'>
                                <div className='relative gap-3 flex justify-start items-center group cursor-pointer'>
                                    <div className='relative flex justify-center'>
                                        <p className='relative font-semibold text-black z-10'>Voir mes projets en détails</p>
                                        <span className="absolute border-b-2 border-[#18181b] top-6 h-0 transition-all w-0 group-hover:w-full z-10" />
                                    </div>
                                </div>
                                <span className='absolute transitionContact3 inset-0 h-full duration-300 lg:w-[120vw] group-hover:w-[230vw] w-[380%] lg:group-hover:w-[160vw] xl:w-[70vw] xl:group-hover:w-[80vw]' />
                            </Link>
                        </div>
                        <div className='flex lg:items-end flex-col lg:pl-4 items-center lg:mt-0 mt-36 lg:min-h-[750px] min-h-[950px]'>
                            <h2 className='xl:text-[68px] fade-right lg:text-6xl text-5xl lg:mt-6'>Compétences</h2>
                            <h3 className='text-2xl text-gray-200 mt-6 fade-right lg:mt-8'>Langues & Librairies:</h3>
                            <div className={`w-full h-[300px] mt-2 flex flex-wrap justify-center lg:justify-end gap-2 px-2 text-zinc-200 ${isDesktop ? "fade-right" : ""}`}>
                                <KnowledgeCard type='language' />
                            </div>
                            <h3 className={`text-2xl text-gray-200 lg:mt-6 mt-24 ${isDesktop ? 'fade-project-right' : ''}`}>Outils:</h3>
                            <div className='w-full h-[300px] mt-2 flex flex-wrap justify-center lg:justify-end gap-2 px-2 fade-project-right'>
                                <KnowledgeCard type='tool'/>
                            </div>
                        </div>
                    </div>
                    <div className='relative top-[4vh] w-5'>
                        <IoIosArrowDown className='arrowDown arrow1 motion-reduce:animate-none lg:visible hidden' />
                        <IoIosArrowDown className='top-3 arrowDown arrow2 motion-reduce:animate-none lg:visible hidden' />
                        <IoIosArrowDown className='top-6 arrowDown arrow3 motion-reduce:animate-none lg:visible hidden' />
                    </div>
                </section>
                <div className='relative md:w-auto'>
                    <div className='sky transition-all xl:block hidden sky-animation' />
                    <section className='flex flex-col justify-center items-center'>
                        <div className='lg:w-[75vw] w-full grid lg:grid-cols-2 mb-20 gap-28 lg:gap-0 pt-20 lg:pt-0'>
                            <div className="lg:mr-14 flex flex-col transition-all duration-1000">
                                <h2 className="self-center lg:text-[60px] xl:text-[68px] text-[50px] mb-8 motion-reduce:animate-none motion-reduce:opacity-100 fade-left">Qui suis-je?</h2>
                                <p className='text-gray-300 text-xl text-center motion-reduce:animate-none motion-reduce:opacity-100 fade-left px-4 lg:px-0'>J'ai 21 ans et j'étudie le développement web. <br /> Je vis dans la banlieue parisienne. <br /> Je fais des applications web et j'explore <br /> le développements de jeux vidéo sur mon temps libre </p>
                                <div className='relative z-10 flex justify-center items-center mt-8 text-lg text-white py-[2px] px-4'>
                                    <div className="relative group gap-3 flex hover:cursor-pointer justify-center items-center">
                                        <IoLogoLinkedin className='text-3xl mix-blend-difference' />
                                        <p className='font-semibold mix-blend-difference group-hover:underline transition-all'>Linkedin</p>
                                        <span className="absolute h-10 headerHover1 transition-all w-[120%] group-hover:w-[140%] -translate-x-6 duration-[350ms] -z-10"></span>
                                        <span className="absolute h-10 headerHover2 transition-all w-[120%] group-hover:w-[140%] duration-[250ms] -z-10"></span>
                                        <span className="absolute h-10 headerHover3 transition-all w-[120%] group-hover:w-[140%] translate-x-6 -z-10"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:ml-14 flex flex-col transition-all duration-1000">
                                <h2 className="lg:text-[60px] xl:text-[68px] text-[50px] text-gray-900 mx-auto self-center outline-4 outline rounded-2xl bg-gray-300 mb-8 px-8 motion-reduce:animation-none fade-right outline-gray-600">Développeur</h2>
                                <p className='text-gray-300 text-xl text-center motion-reduce:animation-none fade-right'>J'ai débuté en développement web <br /> et l'ai maitrisé grâce aux études. <br /> à côté des études, j'explore de nouvelle frontières <br /> pour mes futures projets.</p>
                                <div className='relative z-10 flex justify-center items-center mt-8 text-lg text-white py-[2px] px-4'>
                                    <div className="relative group gap-3 flex hover:cursor-pointer justify-center items-center">
                                        <IoLogoGithub className='text-3xl mix-blend-difference' />
                                        <p className='font-semibold mix-blend-difference group-hover:underline transition-all'>Github</p>
                                        <span className="absolute h-10 headerHover1 transition-all w-[120%] group-hover:w-[140%] -translate-x-6 duration-[350ms] -z-10"></span>
                                        <span className="absolute h-10 headerHover2 transition-all w-[120%] group-hover:w-[140%] duration-[250ms] -z-10"></span>
                                        <span className="absolute h-10 headerHover3 transition-all w-[120%] group-hover:w-[140%] translate-x-6 -z-10"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative top-[21vh] w-5'>
                            <IoIosArrowDown className='arrowDown arrow1 motion-reduce:animate-none lg:visible hidden' />
                            <IoIosArrowDown className='top-3 arrowDown arrow2 motion-reduce:animate-none lg:visible hidden' />
                            <IoIosArrowDown className='top-6 arrowDown arrow3 motion-reduce:animate-none lg:visible hidden' />
                        </div>
                    </section>
                    <section className='relative'>
                        <div className='sky transition-all xl:hidden sky-animation-mobile' />
                        <div className='w-full'>
                            <div className='flex flex-col items-center xl:pt-40 pt-16 min-h-[100vh] isolate pb-24 xl:pb-0'>
                                <h2 className='text-7xl mb-4 py-2 motion-reduce:animation-none fade-in'>Traits</h2>
                                <div className='relative w-[70vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:mt-40 lg:mt-24 mt-16'>
                                    <div className='flex flex-col gap-4 md:border-r-2 border-b-2 md:border-b-0 border-gray-300 md:pr-4 pb-8 text-center md:text-start md:pb-0 motion-reduce:animation-none fade-in'>
                                        <h3 className='text-4xl text-gray-100 font-medium'>Creative</h3>
                                        <p className='text-lg text-gray-200 fade-in'>Je suis attiré par toutes formes d'art, apprenant et expérimentant sans cesse pour adopter une approche qui m'est propre. Du design visuel à la narration, j'aborde chaque médium comme une opportunité de repousser les limites et de donner vie à de nouvelles idées.</p>
                                    </div>
                                    <div className='flex flex-col gap-4 text-center motion-reduce:animation-none fade-in pb-3'>
                                        <h3 className='text-4xl text-gray-100 font-medium'>Passionated</h3>
                                        <p className='text-lg text-gray-200 fade-in'>Depuis l'enfance, je partageais mon temps entre les jeux vidéo et l'école. La vie n'a pas toujours été facile, mais le jeu était ma bulle pour traverser ces moments. Cette passion s'est peu à peu transformée en ambition professionnelle, me poussant à me lancer dans le développement pour concrétiser ce rêve d'enfant.</p>
                                    </div>
                                    <div className='flex flex-col gap-4 text-center lg:text-end lg:border-l-2 border-t-2 lg:border-t-0 border-gray-300 lg:pl-4 pt-8 lg:pt-0 motion-reduce:animation-none fade-in md:col-span-2 lg:col-span-1'>
                                        <h3 className='text-4xl text-gray-100 font-medium'>Ambitious</h3>
                                        <p className='text-lg text-gray-200'>Je cherche toujours à atteindre de nouveaux sommets, en quête constante d'occasions de grandir et de m'améliorer. Que ce soit en relevant des défis ou en explorant des terrains inconnus, j'aborde chaque projet avec détermination et l'envie de me surpasser.</p>
                                    </div>
                                    <span className='absolute inset-0 left-[8%] lg:w-[86%] radialGradient lg:scale-125 xl:scale-150 scale-110 -z-10 fade-in' />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Home