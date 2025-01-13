import React, { useEffect, useRef, useState } from 'react'

type WaveRefProps = {
    posY: number;
    delay: number;
    color: number;
}

type WaveProps = {
    className?: string;
    side: "left" | "right";
    count?: number;
}

const Wave: React.FC<WaveProps> = ({ side, count = 16, className = "" }) => {

    const waveStyle = useRef<WaveRefProps[]>([]);
    const [isEvent, setEvent] = useState(false);

    useEffect(() => {
        createWave(count);
    }, [])

    const createWave = (count: number) => {
        let positionY = 0;
        let animationDelay = 0;
        waveStyle.current = []
        for (let i = 0; i < count; i++) {
            let bgColor = Math.random() * 15
            waveStyle.current.push({ posY: positionY, delay: animationDelay, color: bgColor });
            positionY += 100 / count;
            animationDelay += 75;
        }
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setEvent(true);
        }, 1300);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={`${className} ${side == "right" ? "flex justify-end" : "flex justify-start"}`}>
            {waveStyle.current.map((w, i) => (
                <span key={i} className={`absolute bg-[#c77d3e] transition-all w-[3vw] duration-1000 ${side == "left" ? 'leftSide left-0' : 'rightSide right-0'} ${isEvent ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                        height: `${(100 / count) + 0.15}vh`,
                        top: `${w.posY}vh`,
                        animationDelay: `${w.delay}ms`,
                        clipPath: `${i % 2 == 0 ? `${side == 'right' ? 'polygon(0 0, 100% 0, 100% 100%, 10% 100%)' : 'polygon(0 0, 100% 0, 90% 100%, 0 100%)' }` : `${side == 'right' ? 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(0 0, 90% 0, 100% 100%, 0 100%)'}`}`,
                        backgroundColor: `hsl(34, ${(w.color * 0.5) + 69}%, ${w.color + 67}%)`
                    }}
                />
            ))}
        </div>
    )
}

export default Wave;
