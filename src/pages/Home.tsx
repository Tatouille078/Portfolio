import { useEffect, useRef, useState } from 'react';
import './Home.css';
import Header from '../components/Header';
import { IoIosArrowDown, IoLogoGithub, IoLogoLinkedin, IoLogoCss3, IoLogoHtml5, IoLogoPython } from "react-icons/io";
import { RiTailwindCssFill, RiReactjsFill } from "react-icons/ri";
import { FaJs } from "react-icons/fa";
import { SiCplusplus, SiGodotengine } from "react-icons/si";
import ProjectCard from '../components/ProjectCard';
import Wave from '../components/Wave';
import { Link } from 'react-router-dom';

function Home() {

    const nameRef = useRef<HTMLElement | null>(null);
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
                .map((letter: string, index: number) => {
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

    const scrollDirection = useRef<"down" | "up" | null>(null);
    const isScrolling = useRef(false);
    const inHorizontalRef = useRef(false);

    const handleWheel = (event: WheelEvent) => {
        if (isScrolling.current) return;

        scrollDirection.current = event.deltaY > 0 ? "down" : "up";

        if (inHorizontalRef.current === true) {
            return;
        };

        isScrolling.current = true;

        const scrollAmount = window.innerHeight;
        const currentScroll = window.scrollY;

        window.scrollTo({
            top: scrollDirection.current === "down" ? currentScroll + scrollAmount : currentScroll - scrollAmount,
            behavior: "smooth",
        });

        setTimeout(() => {
            isScrolling.current = false;
        }, 550);
    };

    const disableScroll = () => {
        document.body.style.overflow = "hidden";
    };

    const enableScroll = () => {
        document.body.style.overflow = "";
    };

    const handleMouseEnter = () => {
        // console.log('Mouse entered');
        inHorizontalRef.current = true;
    };

    const handleMouseLeave = () => {
        // console.log('Mouse left');
        inHorizontalRef.current = false;
    };

    const isDesktop = window.matchMedia("(min-width: 768px)").matches && !("ontouchstart" in window);

    useEffect(() => {

        if (isDesktop) {
            disableScroll();
            window.addEventListener("wheel", handleWheel);
        };

        return () => {
            enableScroll();
            window.removeEventListener("wheel", handleWheel);

        };
    }, []);

    return (
        <>
            <div className='flex flex-col items-center text-gray-100 bg-gradient-to-tr from-zinc-900 via-zinc-950 via-25%% to-zinc-800'>
                <section className='flex flex-col items-center overflow-hidden'>
                    <Wave side='left' count={24} className='' />
                    <Wave side='right' count={24} className='' />
                    <Header />
                    <div className='mt-[27vh] md:mb-[31vh] mb-[25vh] flex flex-col items-center group'>
                        <h1 className={`font-monospace mb-8 transition-all duration-1000 xl:text-[6.5rem] lg:text-8xl text-6xl mix-blend-difference ${isTextEvent ? 'translate-y-0' : 'motion-reduce:translate-y-0 translate-y-20'}`} data-value="Hi there!" ref={nameRef}>Hi there!</h1>
                        <h6 className={`lg:text-3xl text-xl w-[80%] text-gray-300 text-center flex-wrap transition-all duration-1000 ${isTextEvent ? 'opacity-100 translate-y-0' : 'opacity-0 motion-reduce:opacity-100 motion-reduce:translate-y-0 translate-y-40'}`}>My name is Loïck Devismes, <br /> I'm a web and game developper.</h6>
                    </div>
                    <div className="relative mb-20 w-5">
                        <IoIosArrowDown className='arrowDown arrow1 opacity-0 motion-reduce:opacity-100 motion-reduce:animate-none' />
                        <IoIosArrowDown className='top-3 arrowDown arrow2 opacity-0 motion-reduce:opacity-100 motion-reduce:animate-none' />
                        <IoIosArrowDown className='top-6 arrowDown arrow3 opacity-0 motion-reduce:opacity-100 motion-reduce:animate-none' />
                    </div>
                </section>
                <section className='flex flex-col pt-12 xl:pt-0 lg:pt-[10vh] lg:justify-center items-center w-full overflow-hidden lg:min-h-[100vh] min-h-[220vh]'>
                    <div className='lg:grid lg:grid-cols-[3fr_2fr] max-w-[100vw] px-[2%] lg:px-2 xl:px-0 h-[72vh]'>
                        <div className='flex sm:items-start flex-col sm:pr-4 items-center '>
                            <h2 className='md:text-[68px] fade-left text-5xl lg:mt-6'>My projects</h2>
                            <h3 className='text-2xl text-gray-200 mt-4 lg:mt-8 fade-left'>Personnal projects :</h3>
                            <div className='sm:w-[660px] lg:max-w-[59vw] lg:h-[185px] h-[380px] mt-2 lg:overflow-x-auto lg:overflow-y-hidden overflow-y-scroll'>
                                <div
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className='lg:h-full h-[26vh] lg:min-w-max lg:flex lg:flex-row transition-all ease-out grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4'
                                >
                                    <ProjectCard type='perso' />
                                </div>
                            </div>
                            <h3 className={`text-2xl text-gray-200 mt-8 ${isDesktop ? "fade-left" : ""}`}>School projects :</h3>
                            <div className='sm:w-[660px] lg:max-w-[59vw] h-[185px] mt-2 overflow-x-auto'>
                                <div /* onMouseEnter={handleMouseEnter} TO REACTIVATE WHEN MORE THAN 3
                                    onMouseLeave={handleMouseLeave} */
                                    className='h-full transition-all ease-out flex flex-row min-w-max lg:mr-0 mr-5'>
                                    <ProjectCard type='school' />
                                </div>
                            </div>
                            <Link to='/project/SkyFlippy' className='relative flex py-2 mt-8 text-xl group'>
                                <div className='relative gap-3 flex justify-start items-center group cursor-pointer'>
                                    <div className='relative flex justify-center'>
                                        <p className='relative font-semibold text-black z-10'>See my project in details</p>
                                        <span className="absolute border-b-2 border-[#18181b] top-6 h-0 transition-all w-0 group-hover:w-full z-10" />
                                    </div>
                                </div>
                                <span className='absolute transitionContact3 inset-0 h-full duration-300 lg:w-[120vw] group-hover:w-[230vw] w-[380%] lg:group-hover:w-[160vw] xl:w-[70vw] xl:group-hover:w-[70vw]' />
                            </Link>
                        </div>
                        <div className='flex lg:items-end flex-col lg:pl-4 items-center lg:mt-0 mt-36'>
                            <h2 className='xl:text-[68px] fade-right lg:text-6xl text-5xl lg:mt-6'>Knowledge</h2>
                            <h3 className='text-2xl text-gray-200 mt-6 fade-right lg:mt-8'>Language & library :</h3>
                            <div className={`w-full h-[29vh] mt-2 flex flex-wrap justify-center lg:justify-end gap-2 px-2 text-zinc-200 ${isDesktop ? "fade-right" : ""}`}>
                                <div className='xlw-[9rem] w-[30%] xl:h-[9vh] h-24 bg-zinc-700 rounded-xl flex flex-col justify-center items-center text-center gap-2'>
                                    <IoLogoCss3 className='text-4xl text-[#26A3D8]' />
                                    <p>CSS</p>
                                </div>
                                <div className='xlw-[9rem] w-[30%] xl:h-[9vh] h-24 bg-zinc-700 rounded-xl flex flex-col justify-center items-center text-center gap-2'>
                                    <IoLogoHtml5 className='text-4xl text-[#E86025]' />
                                    <p>HTML</p>
                                </div>
                                <div className='xlw-[9rem] w-[30%] xl:h-[9vh] h-24 bg-zinc-700 rounded-xl flex flex-col justify-center items-center text-center gap-2'>
                                    <FaJs className='text-4xl text-[#F7DF1E]' />
                                    <p>Javascript</p>
                                </div>
                                <div className='xlw-[9rem] w-[30%] xl:h-[9vh] h-24 bg-zinc-700 rounded-xl flex flex-col justify-center items-center text-center gap-2'>
                                    <RiReactjsFill className='text-4xl text-[#5CD3F5]' />
                                    <p>React</p>
                                </div>
                                <div className='xlw-[9rem] w-[30%] xl:h-[9vh] h-24 bg-zinc-700 rounded-xl flex flex-col justify-center items-center text-center gap-2'>
                                    <RiTailwindCssFill className='text-4xl text-[#38BDF7]' />
                                    <p>Tailwind CSS</p>
                                </div>
                                <div className='xlw-[9rem] w-[30%] xl:h-[9vh] h-24 bg-zinc-700 rounded-xl flex flex-col justify-center items-center text-center gap-2'>
                                    <IoLogoPython className='text-4xl' />
                                    <p>Python</p>
                                </div>
                                <div className='xlw-[9rem] w-[30%] xl:h-[9vh] h-24 bg-zinc-700 rounded-xl flex flex-col justify-center items-center text-center gap-2'>
                                    <SiCplusplus className='text-4xl text-[#5867B7]' />
                                    <p>C++ (W.I.P)</p>
                                </div>
                            </div>
                            <h3 className={`text-2xl text-gray-200 lg:mt-6 mt-24 ${isDesktop ? 'fade-project-right' : ''}`}>Tools :</h3>
                            <div className='w-full h-[19vh] mt-2 flex flex-wrap justify-center lg:justify-end gap-2 px-2 fade-project-right'>
                                <div className='xlw-[9rem] w-[30%] xl:h-[9vh] h-24 bg-zinc-700 rounded-xl flex flex-col justify-center items-center text-center gap-2'>
                                    <IoLogoGithub className='text-4xl text-black' />
                                    <p>Github</p>
                                </div>
                                <div className='xlw-[9rem] w-[30%] xl:h-[9vh] h-24 bg-zinc-700 rounded-xl flex flex-col justify-center items-center text-center gap-2'>
                                    <SiGodotengine className='text-4xl text-[#56a4db]' />
                                    <p>Godot (W.I.P)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative top-[4vh] w-5'>
                        <IoIosArrowDown className='arrowDown arrow1 motion-reduce:animate-none lg:visible hidden' />
                        <IoIosArrowDown className='top-3 arrowDown arrow2 motion-reduce:animate-none lg:visible hidden' />
                        <IoIosArrowDown className='top-6 arrowDown arrow3 motion-reduce:animate-none lg:visible hidden' />
                    </div>
                </section>
                <div className='relative md:w-auto w-[80%]'>
                    <div className='sky transition-all' />
                    <section className='flex flex-col justify-center items-center hidden'>
                        <div className='w-[70vw] grid md:grid-cols-2 mb-20'>
                            <div className="mr-16 flex flex-col transition-all duration-1000">
                                <h2 className="self-center text-[68px] mb-8 motion-reduce:animate-none motion-reduce:opacity-100 fade-left">Who Am I?</h2>
                                <p className='text-gray-300 text-xl text-center motion-reduce:animate-none motion-reduce:opacity-100 fade-left'>I'm 21 and studying in web developpement. <br /> Currently living in the western surburbs of Paris. <br /> Making web applications and exploring <br /> game developpement on my free time.</p>
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
                            <div className="ml-16 flex flex-col transition-all duration-1000">
                                <h2 className="text-[68px] text-gray-900 mx-auto self-center outline-4 outline rounded-2xl bg-gray-300 mb-8 px-8 motion-reduce:animation-none fade-right outline-gray-600">Developper</h2>
                                <p className='text-gray-300 text-xl text-center motion-reduce:animation-none fade-right'>Starting my journey in web development <br /> and mastering this field with the help of studies. <br /> Besides studying, I'm also diving into game <br /> development for my future projects.</p>
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
                            <IoIosArrowDown className='arrowDown arrow1 motion-reduce:animate-none' />
                            <IoIosArrowDown className='top-3 arrowDown arrow2 motion-reduce:animate-none' />
                            <IoIosArrowDown className='top-6 arrowDown arrow3 motion-reduce:animate-none' />
                        </div>
                    </section>
                    <section className='relative hidden'>
                        <div className='w-full'>
                            <div className='flex flex-col items-center pt-52 min-h-[100vh] isolate'>
                                <h2 className='text-7xl mb-4 py-2 motion-reduce:animation-none fade-in'>Traits</h2>
                                <div className='relative w-[70vw] grid grid-cols-3 gap-8 mt-40'>
                                    <div className='flex flex-col gap-4 border-r-2 border-gray-300 pr-4 motion-reduce:animation-none fade-in'>
                                        <h3 className='text-4xl text-gray-100 font-medium'>Creative</h3>
                                        <p className='text-lg text-gray-200 fade-in'>I'm drawn to all forms of art, constantly learning and experimenting to take my own unique approach. From visual design to storytelling, I embrace each medium as an opportunity to push boundaries and bring fresh ideas to life.</p>
                                    </div>
                                    <div className='flex flex-col gap-4 text-center motion-reduce:animation-none fade-in pb-3'>
                                        <h3 className='text-4xl text-gray-100 font-medium'>Passionated</h3>
                                        <p className='text-lg text-gray-200 fade-in'>Since childhood, I was balancing my time between video games and school. Life was harsh at times but gaming was my bubble to pass through it. This passion eventually grew into a career ambition, inspiring me to pursue development and turn my childhood dream into a reality.</p>
                                    </div>
                                    <div className='flex flex-col gap-4 text-end border-l-2 border-gray-300 pl-4 motion-reduce:animation-none fade-in'>
                                        <h3 className='text-4xl text-gray-100 font-medium'>Ambitious</h3>
                                        <p className='text-lg text-gray-200 fade-in'>I'm always striving to reach new heights, constantly seeking opportunities to <br /> grow and improve. Whether tackling challenges or exploring unexplored territories, I approach every endeavor with determination and a drive to excel.</p>
                                    </div>
                                    <span className='absolute inset-0 w-full radialGradient scale-150 -z-10 fade-in' />
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