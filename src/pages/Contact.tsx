import './Contact.css'
import Header from '../components/Header'
import { IoLogoGithub, IoLogoLinkedin, IoIosMail } from 'react-icons/io'
import { RiEarthFill } from "react-icons/ri";
import { useState } from 'react';

function Contact() {

    const [showTooltip, setShowTooltip] = useState(false);

    const handleCopyToClipboard = async (email: string) => {
        try {
            await navigator.clipboard.writeText(email);
            setShowTooltip(true);
            setTimeout(() => setShowTooltip(false), 1500);
        } catch (error) {
            console.error("Failed to copy email:", error);
        }
    };

    return (
        <>
            <div className='flex flex-col items-center min-h-[100vh] bg-gradient-to-tr from-zinc-900 via-zinc-900 via-65% to-zinc-800  text-white overflow-hidden'>
                <Header />
                <div className='lg:w-[40vw] md:w-[50vw] w-[64vw] pr-4 sm:pr-0 flex flex-col items-start h-[70vh] justify-center mt-20 text-[#18181b]'>
                    <div className='relative group md:h-32 flex items-center'>
                        <h2 className="relative md:text-6xl text-4xl z-10">How to <br/>contact me:</h2>
                        <span className='absolute transitionContact1 transition-all inset-0 h-full duration-[500ms] w-[135vw] group-hover:w-[155vw] lg:group-hover:w-[145vw] xl:w-[100vw] xl:group-hover:w-[110vw]' />
                    </div>
                    <div className='relative sm:flex gap-3 justify-start py-2 items-center mt-8 text-xl group hidden'>
                        <IoIosMail className='relative z-10 text-4xl bg-' />
                        <strong className='relative z-10 font-semibold'>Mail: </strong>
                        <div className="relative group flex flex-col items-center">
                            <button
                                onClick={() => handleCopyToClipboard('loick78.devismes91@gmail.com')}
                                className="relative z-10 font-semibold"
                            >
                                loick78.devismes91@gmail.com
                            </button>
                            <span className="absolute border-b-2 border-[#18181b] top-6 h-0 transition-all w-0 group-hover:w-full z-10" />
                            <div className={`absolute top-[-2rem] bg-gray-800 text-white text-xs rounded px-2 py-1 transition-all ${showTooltip ? "opacity-100" : "opacity-0"}`}>
                                Copied to clipboard!
                            </div>
                        </div>
                        <span className='absolute transitionContact2-1 inset-0 h-full duration-[400ms] lg:w-[140vw] group-hover:w-[180vw] w-[160vw] lg:group-hover:w-[150vw] xl:w-[95vw] xl:group-hover:w-[105vw]' />
                    </div>
                    <div className='relative flex py-2 mt-8 text-xl group'>
                        <div className='relative gap-3 flex justify-start items-center group cursor-pointer'>
                            <IoLogoLinkedin className='relative text-4xl z-10' />
                            <div className='relative flex justify-center'>
                                <p className='relative font-semibold z-10'>Linkedin</p>
                                <span className="absolute border-b-2 border-[#18181b] top-6 h-0 transition-all w-0 group-hover:w-full z-10" />
                            </div>
                        </div>
                        <span className='absolute transitionContact2-2 inset-0 h-full duration-[400ms] lg:w-[140vw] group-hover:w-[180vw] w-[160vw] lg:group-hover:w-[150vw] xl:w-[95vw] xl:group-hover:w-[105vw]' />
                    </div>
                    <div className='relative flex py-2 mt-8 text-xl group'>
                        <div className='relative gap-3 flex justify-start items-center group cursor-pointer'>
                            <IoLogoGithub className='relative text-4xl z-10' />
                            <div className='relative flex justify-center'>
                                <p className='relative font-semibold z-10'>Github</p>
                                <span className="absolute border-b-2 border-[#18181b] top-6 h-0 transition-all w-0 group-hover:w-full z-10" />
                            </div>
                        </div>
                        <span className='absolute transitionContact2-3 inset-0 h-full duration-[400ms] lg:w-[140vw] group-hover:w-[180vw] w-[160vw] lg:group-hover:w-[150vw] xl:w-[95vw] xl:group-hover:w-[105vw]' />
                    </div>
                    <div className='relative flex gap-3 justify-start items-center mt-8 py-1 pl-0.5 text-lg group'>
                        <RiEarthFill className='relative text-5xl w-12 z-10 lg:text-3xl' />
                        <p className='relative z-10'>Western surburbs of Paris, France</p>
                        <span className='absolute transitionContact3 inset-0 h-full duration-300 lg:w-[150vw] group-hover:w-[230vw] w-[210vw] lg:group-hover:w-[160vw] xl:w-[90vw] xl:group-hover:w-[100vw]' />
                    </div>
                </div>
            </div >
        </>
    )
}

export default Contact