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
                                        IPSSI SQY - Grande École Informatique | Depuis Oct 2024
                                    </h3>
                                    <p className="w-full bg-zinc-800 rounded-b-xl text-gray-200 p-2 py-3">
                                        Actuellement en BTS Services Informatiques aux Organisations, option Solutions Logicielles et Applications Métiers (SLAM).                                    </p>
                                </div>
                                <div className={`w-full flex text-center flex-col`}>
                                    <h3 className="py-1 font-semibold text-xl bg-zinc-700 rounded-t-xl w-full text-white">
                                        Baccalaureat général
                                    </h3>
                                    <h3 className="pb-1 font-semibold text-md bg-zinc-700 w-full text-gray-300">
                                        La Queue-Lez-Yvelines | Oct 2023 - Juil 2024
                                    </h3>
                                    <p className="w-full bg-zinc-800 rounded-b-xl text-gray-200 p-2 py-3">
                                        Obtention du Baccalauréat Général en candidat libre, avec spécialités Numérique et Sciences Informatiques (NSI) et Mathématiques.                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative border lg:w-[90%] w-full h-[80%] flex flex-col justify-center item-center overflow-y-hidden justify-self-center lg:justify-self-end rounded-xl bg-[#141417bc]">
                            <h1 className="absolute inset-0 lg:text-8xl text-7xl z-20 pointer-events-none pt-4">Pro</h1>
                            <span className="absolute inset-0 journeyFadeCard h-full z-10 pointer-events-none" />
                            <div className="h-full overflow-y-scroll flex flex-col pt-32 px-4 gap-y-10 pb-24">
                                <div className={`w-full flex text-center flex-col`}>
                                    <h3 className="py-1 font-semibold text-xl bg-zinc-700 rounded-t-xl w-full text-white">
                                        Cuisinier polyvalent
                                    </h3>
                                    <h3 className="pb-1 font-semibold text-md bg-zinc-700 w-full text-gray-300">
                                        TBJL SAS | Nov 2022 - Juil 2024
                                    </h3>
                                    <p className="w-full bg-zinc-800 rounded-b-xl text-gray-200 p-2 py-3">
                                        J'ai travaillé comme cuisinier polyvalent : préparation des plats, aide à l'envoi des commandes, et parfois en livraison. Je veillais au bon fonctionnement de la cuisine tout en restant flexible selon les besoins.                                    </p>
                                </div>
                                <div className={`w-full flex text-center flex-col`}>
                                    <h3 className="py-1 font-semibold text-xl bg-zinc-700 rounded-t-xl w-full text-white">
                                        Stage - Front-end Developpeur
                                    </h3>
                                    <h3 className="pb-1 font-semibold text-md bg-zinc-700 w-full text-gray-300">
                                        Fiesta Informatique | Avr 2025 - Juin 2025
                                    </h3>
                                    <p className="w-full bg-zinc-800 rounded-b-xl text-gray-200 p-2 py-3">
                                        J'ai développé l'architecture front-end d'un site e-commerce avec React.js. J'ai réorganisé la structure du projet via GitHub Projects et conçu l'ensemble du site sur Figma. J'ai aussi géré certaines tâches back-end, comme l'intégration de Stripe pour les paiements en ligne et la mise en place des codes promo.
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