import { ForwardedRef, forwardRef, useEffect, useRef } from 'react'

type SpinerRefProps = {
    opa: number;
    color: number;
    ring: number;
    angle: number;
}

type SpinerProps = {
    className?: string;
    count?: number;
    revolution?: number;
    scale?: number;
    inversed?: boolean;
}

const Spiner = forwardRef<HTMLDivElement, SpinerProps>(({ className = "", count = 12, revolution = 3, scale = 150, inversed = false }, ref?: ForwardedRef<HTMLDivElement | null>) => {

    const spinerStyle = useRef<SpinerRefProps[]>([]);

    useEffect(() => {
        createSpiner(count, revolution);
    }, [])

    const createSpiner = (count: number, revolution: number) => {
        let opacity = 1;
        let revo = 0;
        let offset: number = 0;
        spinerStyle.current = []
        for (let j = 0; j < revolution; j++) {
            for (let i = 0; i < count; i++) {
                let bgColor = Math.random() * 11
                let rotation = ((360 / count) * i) + (offset)
                spinerStyle.current.push({ opa: opacity, color: bgColor, ring: revo, angle: rotation })
            }
            revo += 1;
            offset += 180 / count
        }
    }

    return (
        <div className={`${className} relative flex items-center justify-center`} ref={ref}>
            {Array.from({ length: revolution }).map((_, ringIndex) => (
                <div key={ringIndex} className="flex justify-center items-center">
                    {spinerStyle.current
                        .filter((s) => s.ring === ringIndex)
                        .map((s, i) => (
                            <span
                                key={i}
                                className={`absolute transition-all duration-[5000ms] ring-animation-${s.ring}`}
                                style={{
                                    zIndex: `${inversed ? 5 - s.ring : 5 + s.ring}`,
                                    width: `${(scale * 2.75) + (scale * (s.ring / 2.7))}px`,
                                    height: `${inversed ? ((scale * 1.55) - (s.ring * 30)) / 1.15 : ((scale * 1.55) + (s.ring * 30)) / 1.15}px`,
                                    transform: `rotate(${s.angle}deg) translate(${inversed ? `-${(scale * (count / 5.5)) - ((scale / 1.2) * s.ring)}` : `${(scale * (count / 5.5)) - ((scale / 1.2) * s.ring)}`}px)`,
                                    clipPath: `${s.ring % 2 === 0 ? "polygon(0 0, 100% 0, 90% 100%, 0 100%)" : "polygon(0 0, 90% 0, 100% 100%, 0 100%)"}`,
                                    backgroundColor: `hsl(37, ${(s.color * 0.5) + (69 - (s.ring * 20))}%, ${s.color + (67 - (s.ring * 12))}%, ${s.opa})`
                                }}
                            />
                        ))}
                </div>
            ))}
        </div>
    );
})

export default Spiner;
