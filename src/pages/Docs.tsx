import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/Header';
import Spiner from '../components/Spiner';
import { CiLink } from "react-icons/ci";

const Docs: React.FC = () => {

    const [ringScale, setRingScale] = useState(102)
    const spinerRef = useRef(null)

    useEffect(() => {
        // goofy ahhh code, but works 😎
        setRingScale(101)
        if (!spinerRef.current) return
        const timer = setTimeout(() => setRingScale(100), 0);
        return () => clearTimeout(timer)
    }, [spinerRef])

    return (
        <div className="lg:h-screen flex flex-col items-center text-gray-100 bg-gradient-to-tr from-zinc-900 via-zinc-900 via-85% to-zinc-800 relative overflow-hidden">
            <div className="absolute lg:top-1/2 top-1/4 -left-[450px]">
                <Spiner count={35} revolution={5} scale={ringScale} className="opacity-75" ref={spinerRef} />
            </div>
            <div className="absolute lg:top-1/2 top-3/4 -right-[450px]">
                <Spiner count={35} revolution={5} scale={ringScale} className="opacity-75" ref={spinerRef} />
            </div>
            <Header />
            <div className="max-h-[90%] h-full w-[80%]">
                <div className="h-full grid lg:grid-cols-2 grid-cols-1 items-center justify-center text-center">
                    <div className="relative border lg:w-[90%] w-full h-[80%] flex flex-col justify-center item-center overflow-y-hidden rounded-xl justify-self-center lg:justify-self-start bg-[#141417bc]">
                        <h1 className="absolute inset-0 lg:text-8xl text-7xl z-20 pt-4 pointer-events-none">Docs</h1>
                        <span className="absolute inset-0 journeyFadeCard h-full z-10 pointer-events-none" />
                        <div className="h-full overflow-y-scroll flex flex-col pt-32 px-4 gap-y-10 pb-24">
                            <div className={`w-full flex text-center flex-col`}>
                                <h3 className="py-1 font-semibold text-xl bg-zinc-700 rounded-t-xl w-full text-white">
                                    TP PHP
                                </h3>
                                <h3 className="pb-1 font-semibold text-md bg-zinc-700 w-full text-gray-300">
                                    La documentation du projet php
                                </h3>
                                <div className='relative bg-zinc-800 rounded-b-xl z-10 flex justify-center items-center py-4 text-lg text-white px-4'>
                                    <a href='src\assets\docs\Comment_faire_un_git_revert.pdf' download className="relative group gap-3 flex hover:cursor-pointer justify-center items-center">
                                        <CiLink className='text-3xl mix-blend-difference' />
                                        <p className='font-semibold mix-blend-difference group-hover:underline transition-all'>Télécharger la doc</p>
                                        <span className="absolute h-10 headerHover1 transition-all w-[120%] group-hover:w-[140%] -translate-x-6 duration-[350ms] -z-10"></span>
                                        <span className="absolute h-10 headerHover2 transition-all w-[118%] group-hover:w-[135%] duration-[250ms] -z-10"></span>
                                        <span className="absolute h-10 headerHover3 transition-all w-[120%] group-hover:w-[140%] translate-x-6 -z-10"></span>
                                    </a>
                                </div>
                            </div>
                            <div className={`w-full flex text-center flex-col`}>
                                <h3 className="py-1 font-semibold text-xl bg-zinc-700 rounded-t-xl w-full text-white">
                                    Git revert
                                </h3>
                                <h3 className="pb-1 font-semibold text-md bg-zinc-700 w-full text-gray-300">
                                    Documentation pour faire un git revert clean
                                </h3>
                                <div className='relative bg-zinc-800 rounded-b-xl z-10 flex justify-center items-center py-4 text-lg text-white px-4'>
                                    <a href='src\assets\docs\Comment_faire_un_git_revert.pdf' download className="relative group gap-3 flex hover:cursor-pointer justify-center items-center">
                                        <CiLink className='text-3xl mix-blend-difference' />
                                        <p className='font-semibold mix-blend-difference group-hover:underline transition-all'>Télécharger la doc</p>
                                        <span className="absolute h-10 headerHover1 transition-all w-[120%] group-hover:w-[140%] -translate-x-6 duration-[350ms] -z-10"></span>
                                        <span className="absolute h-10 headerHover2 transition-all w-[118%] group-hover:w-[135%] duration-[250ms] -z-10"></span>
                                        <span className="absolute h-10 headerHover3 transition-all w-[120%] group-hover:w-[140%] translate-x-6 -z-10"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative border lg:w-[90%] w-full h-[80%] flex flex-col justify-center item-center overflow-y-hidden justify-self-center lg:justify-self-end rounded-xl bg-[#141417bc]">
                        <h1 className="absolute inset-0 lg:text-8xl text-7xl z-20 pointer-events-none pt-4">Autre</h1>
                        <span className="absolute inset-0 journeyFadeCard h-full z-10 pointer-events-none" />
                        <div className="h-full overflow-y-scroll flex flex-col pt-32 px-4 gap-y-10 pb-24">
                            <div className={`w-full flex text-center flex-col`}>
                                <h3 className="py-1 font-semibold text-xl bg-zinc-700 rounded-t-xl w-full text-white">
                                    Frameworks Javascript
                                </h3>
                                <h3 className="pb-1 font-semibold text-md bg-zinc-700 w-full text-gray-300">
                                    Veille technologique
                                </h3>
                                <p className="w-full bg-zinc-800 text-gray-200 p-2 py-3">
                                    Réalisation d'une veille technologique sur les frameworks JavaScript modernes afin d'analyser les tendances, comparer les performances et évaluer leur pertinence dans les pratiques actuelles de développement web.
                                </p>
                                <div className='relative bg-zinc-800 rounded-b-xl z-10 flex justify-center items-center py-4 text-lg text-white px-4'>
                                    <a href='https://www.canva.com/design/DAGgyzRf77Y/WhTqRbKboujylblMyHpVNg/edit?utm_content=DAGgyzRf77Y&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' target='_blank' className="relative group gap-3 flex hover:cursor-pointer justify-center items-center">
                                        <CiLink className='text-3xl mix-blend-difference' />
                                        <p className='font-semibold mix-blend-difference group-hover:underline transition-all'>Regarder le diaporama</p>
                                        <span className="absolute h-10 headerHover1 transition-all w-[120%] group-hover:w-[140%] -translate-x-6 duration-[350ms] -z-10"></span>
                                        <span className="absolute h-10 headerHover2 transition-all w-[118%] group-hover:w-[135%] duration-[250ms] -z-10"></span>
                                        <span className="absolute h-10 headerHover3 transition-all w-[120%] group-hover:w-[140%] translate-x-6 -z-10"></span>
                                    </a>
                                </div>
                            </div>
                            <div className={`w-full flex text-center flex-col`}>
                                <h3 className="py-2 font-semibold text-xl bg-zinc-700 rounded-t-xl w-full text-white">
                                    Tableau de synthèse
                                </h3>
                                <div className='relative bg-zinc-800 rounded-b-xl z-10 flex justify-center items-center py-4 text-lg text-white px-4'>
                                    <a href='src\assets\docs\Tableau_de_synthese.pdf' download className="relative group gap-3 flex hover:cursor-pointer justify-center items-center">
                                        <CiLink className='text-3xl mix-blend-difference' />
                                        <p className='font-semibold mix-blend-difference group-hover:underline transition-all'>Le télécharger</p>
                                        <span className="absolute h-10 headerHover1 transition-all w-[120%] group-hover:w-[140%] -translate-x-6 duration-[350ms] -z-10"></span>
                                        <span className="absolute h-10 headerHover2 transition-all w-[118%] group-hover:w-[135%] duration-[250ms] -z-10"></span>
                                        <span className="absolute h-10 headerHover3 transition-all w-[120%] group-hover:w-[140%] translate-x-6 -z-10"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Docs;