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
                <div className='w-[45vw] flex flex-col items-start h-[70vh] justify-center mt-20 text-[#18181b]'>
                    <div className='relative group'>
                        <h2 className="relative text-[68px] z-10">How to contact me:</h2>
                        <span className='absolute transitionContact1 transition-all inset-0 h-full duration-[500ms] group-hover:w-[1850px]' />
                    </div>
                    <div className='relative flex gap-3 justify-start py-2 items-center mt-8 text-xl group'>
                        <IoIosMail className='relative z-10 text-4xl' />
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
                        <p className='z-10 font-semibold'>/</p>
                        <a href="mailto:loick78.devismes91@gmail.com" className="flex font-semibold">
                            <div className="relative group flex flex-col items-center">
                                <p className='relative z-10 font-semibold'>Mail me</p>
                                <span className="absolute border-b-2 border-[#18181b] top-6 h-0 transition-all w-0 group-hover:w-full z-10" />
                            </div>
                        </a>
                        <span className='absolute transitionContact2-1 inset-0 h-full duration-[400ms] group-hover:w-[1800px]' />
                    </div>
                    <div className='relative flex py-2 mt-8 text-xl group'>
                        <div className='relative gap-3 flex justify-start items-center group cursor-pointer'>
                            <IoLogoLinkedin className='relative text-4xl z-10' />
                            <div className='relative flex justify-center'>
                                <p className='relative font-semibold z-10'>Linkedin</p>
                                <span className="absolute border-b-2 border-[#18181b] top-6 h-0 transition-all w-0 group-hover:w-full z-10" />
                            </div>
                        </div>
                        <span className='absolute transitionContact2-2 inset-0 h-full duration-[400ms] group-hover:w-[1800px]' />
                    </div>
                    <div className='relative flex py-2 mt-8 text-xl group'>
                        <div className='relative gap-3 flex justify-start items-center group cursor-pointer'>
                            <IoLogoGithub className='relative text-4xl z-10' />
                            <div className='relative flex justify-center'>
                                <p className='relative font-semibold z-10'>Github</p>
                                <span className="absolute border-b-2 border-[#18181b] top-6 h-0 transition-all w-0 group-hover:w-full z-10" />
                            </div>
                        </div>
                        <span className='absolute transitionContact2-3 inset-0 h-full duration-[400ms] group-hover:w-[1800px]' />
                    </div>
                    <div className='relative flex gap-3 justify-start items-center mt-8 py-1 pl-0.5 text-lg group'>
                        <RiEarthFill className='relative z-10 text-3xl' />
                        <p className='relative z-10'>Western surburbs of Paris, France</p>
                        <span className='absolute transitionContact3 inset-0 h-full duration-300 w-[1700px] group-hover:w-[1800px]' />
                    </div>
                </div>
            </div >
        </>
    )
}

export default Contact