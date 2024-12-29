import { useEffect, useRef, useState } from 'react';
import './Home.css';
import Header from '../components/Header';
import { IoIosArrowDown, IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

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

    const disableScroll = () => {
        document.body.style.overflow = "hidden";
    };

    const enableScroll = () => {
        document.body.style.overflow = "";
    };

    const handleWheel = (event: WheelEvent) => {
        if (isScrolling.current) return;

        scrollDirection.current = event.deltaY > 0 ? "down" : "up";
        isScrolling.current = true;

        const scrollAmount = window.innerHeight;
        const currentScroll = window.scrollY;

        window.scrollTo({
            top: scrollDirection.current === "down" ? currentScroll + scrollAmount : currentScroll - scrollAmount,
            behavior: "smooth",
        });

        setTimeout(() => {
            isScrolling.current = false;
        }, 500);
    };

    useEffect(() => {
        disableScroll();
        window.addEventListener("wheel", handleWheel);

        return () => {
            enableScroll();
            window.removeEventListener("wheel", handleWheel);
        };
    }, []);

    return (
        <>
            <div className='flex flex-col items-center text-slate-100'>
                <section className='flex flex-col items-center bg-zinc-900'>
                    <Header />
                    <div className='w-[30vw] mt-[27vh] mb-[293px]'>
                        <h1 className={`font-monospace hithere text-[6.5rem] mb-4 transition-all duration-1000 ${isTextEvent ? 'translate-y-0' : 'motion-reduce:translate-y-0 translate-y-20'}`} data-value="Hi there," ref={nameRef}>Hi there,</h1>
                        <h6 className={`text-3xl text-gray-300 flex-wrap transition-all duration-1000 ${isTextEvent ? 'opacity-100 translate-y-0' : 'opacity-0 motion-reduce:opacity-100 motion-reduce:translate-y-0 translate-y-40'}`}>My name is Loïck Devismes, <br /> I'm a web and game developper</h6>
                    </div>
                    <div className="relative mb-20 w-5">
                        <IoIosArrowDown className='arrowDown arrow1 opacity-0 motion-reduce:opacity-100 motion-reduce:animate-none' />
                        <IoIosArrowDown className='top-3 arrowDown arrow2 opacity-0 motion-reduce:opacity-100 motion-reduce:animate-none' />
                        <IoIosArrowDown className='top-6 arrowDown arrow3 opacity-0 motion-reduce:opacity-100 motion-reduce:animate-none' />
                    </div>
                </section>
                <section className='flex flex-col justify-center items-center bg-zinc-900'>
                    <div className='w-[70vw] grid grid-cols-2 mb-20'>
                        <div className="mr-16 flex flex-col transition-all duration-1000">
                            <h2 className="self-center text-[68px] mb-8 motion-reduce:animate-none motion-reduce:opacity-100 fade-right">Who Am I?</h2>
                            <p className='text-gray-300 text-xl text-center motion-reduce:animate-none motion-reduce:opacity-100 fade-right'>I'm 21 and studying in web developpement. <br /> Currently living in the western surburbs of Paris. <br /> Making web applications and exploring <br /> game developpement on my free time.</p>
                            <div className='flex gap-3 justify-center underline items-center mt-8 text-lg text-[#0A66C2] outline-gray-600 outline-4 outline rounded-2xl bg-gray-300 py-[2px] px-4 mx-auto motion-reduce:animate-none motion-reduce:opacity-100 fade-right'>
                                <IoLogoLinkedin className='text-3xl' />
                                <p className='font-semibold'>My linkedin</p>
                            </div>
                        </div>
                        <div className="ml-16 flex flex-col transition-all duration-1000">
                            <h2 className="text-[68px] text-gray-900 mx-auto self-center outline-4 outline rounded-2xl bg-gray-300 mb-8 px-8 motion-reduce:animation-none fade-left outline-gray-600">Developper</h2>
                            <p className='text-gray-300 text-xl text-center motion-reduce:animation-none fade-left'>Starting my journey in web development <br /> and mastering this field with the help of studies. <br /> Besides studying, I'm also diving into game <br /> development for my futur projects.</p>
                            <div className='flex gap-3 justify-center underline items-center mt-8 text-lg text-black outline-gray-600 outline-4 outline rounded-2xl bg-gray-300 py-[2px] px-4 mx-auto motion-reduce:animation-none fade-left'>
                                <IoLogoGithub className='text-3xl' />
                                <p className='font-semibold'>My Github</p>
                            </div>
                        </div>
                    </div>
                    <div className='relative top-[21vh] w-5'>
                        <IoIosArrowDown className='arrowDown arrow1 motion-reduce:animate-none' />
                        <IoIosArrowDown className='top-3 arrowDown arrow2 motion-reduce:animate-none' />
                        <IoIosArrowDown className='top-6 arrowDown arrow3 motion-reduce:animate-none' />
                    </div>
                </section>
                <section className='bg-zinc-900'>
                    <div className='w-full relative'>
                        <div className='sky transition-all'></div>
                        <div className='flex flex-col items-center pt-52 min-h-[100vh] isolate'>
                            <h2 className='text-7xl mb-4 py-2 motion-reduce:animation-none fade-in'>Traits</h2>
                            <div className='w-[70vw] grid grid-cols-3 gap-8 mt-40'>
                                <div className='flex flex-col gap-4 border-r-2 border-gray-300 pr-4 motion-reduce:animation-none fade-in'>
                                    <h3 className='text-4xl text-gray-100 font-medium'>Creative</h3>
                                    <p className='text-lg text-gray-200'>I'm drawn to all forms of art, constantly learning and experimenting to take my own unique approach. From visual design to storytelling, I embrace each medium as an opportunity to push boundaries and bring fresh ideas to life.</p>
                                </div>
                                <div className='flex flex-col gap-4 text-center motion-reduce:animation-none fade-in pb-3'>
                                    <h3 className='text-4xl text-gray-100 font-medium'>Passionated</h3>
                                    <p className='text-lg text-gray-200'>Since childhood, I was balancing my time between video games and school. Life was harsh at times but gaming was my bubble to pass through it. This passion eventually grew into a career ambition, inspiring me to pursue development and turn my childhood dream into a reality.</p>
                                </div>
                                <div className='flex flex-col gap-4 text-end border-l-2 border-gray-300 pl-4 motion-reduce:animation-none fade-in'>
                                    <h3 className='text-4xl text-gray-100 font-medium'>Ambitious</h3>
                                    <p className='text-lg text-gray-200'>I'm always striving to reach new heights, constantly seeking opportunities to <br /> grow and improve. Whether tackling challenges or exploring unexplored territories, I approach every endeavor with determination and a drive to excel.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home