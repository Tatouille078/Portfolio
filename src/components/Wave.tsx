import React, { useEffect, useRef, useState } from 'react'

type WaveRefProps = {
    posY: number;
    delay: number;
    color: number;
    opa: number;
}

type WaveProps = {
    className?: string;
    side: "left" | "right";
    count?: number;
    layer: number;
}

const Wave: React.FC<WaveProps> = ({ side, count = 16, className = "", layer }) => {

    const waveStyle = useRef<WaveRefProps[]>([]);
    const [isEvent, setEvent] = useState(false);

    useEffect(() => {
        createWave(count);
    }, [])

    const createWave = (count: number) => {
        let positionY = 0;
        let animationDelay = 0;
        let opacity = 1;
        waveStyle.current = []
        for (let i = 0; i < count; i++) {
            let bgColor = Math.random() * 11
            waveStyle.current.push({ posY: positionY, delay: animationDelay, color: bgColor, opa: opacity });
            positionY += 100 / count;
            animationDelay += 75;
            opacity -= 1 / count;
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
                <span key={i} className={`absolute transition-all duration-1000 ${side == "left" ? `waveLayer${layer} left-0` : `waveLayer${layer} right-0`} ${isEvent ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                        height: `${(100 / count) + 0.12}vh`,
                        top: `${w.posY}vh`,
                        animationDelay: `${w.delay + (layer * -150)}ms`,
                        clipPath: `${i % 2 == 0 ? `${side == 'right' ? 'polygon(0 0, 100% 0, 100% 100%, 10% 100%)' : 'polygon(0 0, 100% 0, 90% 100%, 0 100%)' }` : `${side == 'right' ? 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(0 0, 90% 0, 100% 100%, 0 100%)'}`}`,
                        backgroundColor: `hsl(37, ${(w.color * 0.5) + (69 - (layer * 20))}%, ${w.color + (67 - (layer * 12))}%, ${w.opa})`
                    }}
                />
            ))}
        </div>
    )
}

export default Wave;
