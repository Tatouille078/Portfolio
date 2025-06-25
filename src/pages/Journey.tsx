import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Spiner from "../components/Spiner";
import './Journey.css'

const Journey = () => {

    const [ringScale, setRingScale] = useState(250)
    const spinerRef = useRef(null)

    
    useEffect(() => {
        // goofy ahhh code, but works 😎
        setRingScale(249)
        if (!spinerRef.current) return
        const timer = setTimeout(() => setRingScale(150), 0);
        return () => clearTimeout(timer)
    }, [spinerRef])

    return (
        <>
            <div className="lg:h-screen flex flex-col items-center text-gray-100 bg-gradient-to-tr from-zinc-900 via-zinc-900 via-85% to-zinc-800 relative overflow-hidden">
                <div className="absolute top-1/2">
                    <Spiner count={36} revolution={5} scale={ringScale} className="opacity-75" ref={spinerRef} inversed={true} />
                </div>
                <Header />
                <div className="max-h-[90%] h-full w-[80%]">
                    <div className="h-full grid lg:grid-cols-2 grid-cols-1 items-center justify-center text-center">
                        <div className="relative border lg:w-[90%] w-full h-[80%] flex flex-col justify-center item-center overflow-y-hidden rounded-xl justify-self-center lg:justify-self-start bg-[#141417bc]">
                            <h1 className="absolute inset-0 lg:text-8xl text-7xl z-20 pt-4 pointer-events-none">Studies</h1>
                            <span className="absolute inset-0 journeyFadeCard h-full z-10 pointer-events-none" />
                            <div className="h-full overflow-y-scroll flex flex-col pt-32 px-4 gap-y-10 pb-24">
                                <div className={`w-full flex text-center flex-col`}>
                                    <h3 className="py-1 font-semibold text-xl bg-zinc-700 rounded-t-xl w-full text-white">
                                        BTS SIO - SLAM
                                    </h3>
                                    <h3 className="pb-1 font-semibold text-md bg-zinc-700 w-full text-gray-300">
                                        IPSSI SQY - Grande École Informatique | Since Oct 2024
                                    </h3>
                                    <p className="w-full bg-zinc-800 rounded-b-xl text-gray-200 p-2 py-3">
                                        Currently pursuing a two-year technical degree in IT Services for Organizations, specializing in Software Solutions and Business Applications (SLAM).
                                    </p>
                                </div>
                                <div className={`w-full flex text-center flex-col`}>
                                    <h3 className="py-1 font-semibold text-xl bg-zinc-700 rounded-t-xl w-full text-white">
                                        General Baccalaureate
                                    </h3>
                                    <h3 className="pb-1 font-semibold text-md bg-zinc-700 w-full text-gray-300">
                                        La Queue-Lez-Yvelines | Oct 2023 - Jul 2024
                                    </h3>
                                    <p className="w-full bg-zinc-800 rounded-b-xl text-gray-200 p-2 py-3">
                                        Obtained the French General Baccalaureate as an independent candidate, with a focus on Computer Science (NSI) and Mathematics.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative border lg:w-[90%] w-full h-[80%] flex flex-col justify-center item-center overflow-y-hidden justify-self-center lg:justify-self-end rounded-xl bg-[#141417bc]">
                            <h1 className="absolute inset-0 lg:text-8xl text-7xl z-20 pointer-events-none pt-4">Pro</h1>
                            <span className="absolute inset-0 journeyFadeCard h-full z-10 pointer-events-none" />
                            <div className="h-full overflow-y-scroll flex flex-col pt-32 px-4 gap-y-10 pb-24">
                                <div className={`w-full flex text-center flex-col`}>
                                    <h3 className="py-1 font-semibold text-xl bg-zinc-700 rounded-t-xl w-full text-white">
                                        Polyvalent cook
                                    </h3>
                                    <h3 className="pb-1 font-semibold text-md bg-zinc-700 w-full text-gray-300">
                                        TBJL SAS | Nov 2022 - Jul 2024
                                    </h3>
                                    <p className="w-full bg-zinc-800 rounded-b-xl text-gray-200 p-2 py-3">
                                        I worked as a versatile cook: prepared dishes, helped with order dispatch, and also handled deliveries sometimes. I made sure kitchen operations ran smoothly while staying flexible to meet different needs.
                                    </p>
                                </div>
                                <div className={`w-full flex text-center flex-col`}>
                                    <h3 className="py-1 font-semibold text-xl bg-zinc-700 rounded-t-xl w-full text-white">
                                        Internship - Front-end Developer
                                    </h3>
                                    <h3 className="pb-1 font-semibold text-md bg-zinc-700 w-full text-gray-300">
                                        Fiesta Informatique | Apr 2025 - Jun 2025
                                    </h3>
                                    <p className="w-full bg-zinc-800 rounded-b-xl text-gray-200 p-2 py-3">
                                        I built the front-end architecture of an e-commerce website using React.js. I reorganized the project structure using GitHub Projects and designed the entire website on Figma. I also handled some back-end tasks, such as integrating Stripe for online payments and setting up promo code functionality.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Journey;