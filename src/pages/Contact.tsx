import './Contact.css'
import Header from '../components/Header'
import { IoLogoGithub, IoLogoLinkedin, IoIosMail } from 'react-icons/io'
import { RiEarthFill } from "react-icons/ri";

function Contact() {

    return (
        <>
            <div className='flex flex-col items-center min-h-[100vh] bg-zinc-900 text-white'>
                <Header />
                <div className='w-[45vw] flex flex-col items-start h-[70vh] justify-center mt-20'>
                    <h2 className="text-[68px] text-slate-100 fade-contact">How to contact me:</h2>
                    <div className='flex gap-3 justify-start items-center mt-8 text-xl text-black outline-gray-600 outline-4 outline rounded-2xl bg-gray-300 py-[3px] pl-3 pr-6 motion-reduce:animation-none fade-contact-100'>
                        <IoLogoGithub className='text-4xl' />
                        <div className="relative group flex flex-col hover:cursor-pointer items-center">
                            <p className='font-semibold'>Github</p>
                            <span className="absolute border-b-2 border-black top-6 h-0 transition-all w-0 group-hover:w-full"></span>
                        </div>
                    </div>
                    <div className='flex gap-3 justify-start items-center mt-8 text-xl text-[#0A66C2] outline-gray-600 outline-4 outline rounded-2xl bg-gray-300 py-[3px] pl-3 pr-6 motion-reduce:animation-none fade-contact-200'>
                        <IoLogoLinkedin className='text-4xl' />
                        <div className="relative group flex flex-col hover:cursor-pointer items-center">
                            <p className='font-semibold'>Linkedin</p>
                            <span className="absolute border-b-2 border-[#0A66C2] top-6 h-0 transition-all w-0 group-hover:w-full"></span>
                        </div>
                    </div>
                    <div className='flex gap-3 justify-start items-center mt-8 text-xl text-slate-900 outline-gray-600 outline-4 outline rounded-2xl bg-gray-300 py-[3px] pl-3 pr-6 motion-reduce:animation-none fade-contact-300'>
                        <IoIosMail className='text-4xl' />
                        <p className='font-medium flex gap-2'><strong className='font-semibold'>Mail: </strong>loick78.devismes91@gmail.com /
                            <a href="mailto:loick78.devismes91@gmail.com" className="text-blue-800 flex font-semibold">
                                <div className="relative group flex flex-col items-center">
                                    <p className='font-semibold'>Mail me</p>
                                    <span className="absolute border-b-2 border-[#5965ec] top-6 h-0 transition-all w-0 group-hover:w-full"></span>
                                </div>
                            </a>
                        </p>
                    </div>
                    <div className='flex gap-3 justify-start items-center mt-8 pl-3 text-xl motion-reduce:animate-none fade-contact-400'>
                        <RiEarthFill className='text-sky-300 text-4xl' />
                        <p>Western surburbs of Paris, France</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact