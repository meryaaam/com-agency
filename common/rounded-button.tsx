import React, { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import Magnetic from './magnetic';
import { Link } from '@nextui-org/link';

interface RoundedButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    backgroundColor?: string;
}

export default function RoundedButton({ children, backgroundColor = "#5EA2EF", ...attributes }: RoundedButtonProps) {
    const circle = useRef<HTMLDivElement>(null);
    const timeline = useRef<gsap.core.Timeline | null>(null);
    let timeoutId: NodeJS.Timeout | null = null;

    useEffect(() => {
        timeline.current = gsap.timeline({ paused: true })
            .to(circle.current, { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" }, "enter")
            .to(circle.current, { top: "-150%", width: "125%", duration: 0.25 }, "exit");
    }, []);

    const manageMouseEnter = () => {
        if (timeoutId) clearTimeout(timeoutId);
        timeline.current?.tweenFromTo('enter', 'exit');
    };

    const manageMouseLeave = () => {
        timeoutId = setTimeout(() => {
            timeline.current?.play();
        }, 300);
    };

    return (
        <Magnetic>
            <div
                 style={{
                  borderRadius: "50%",
                  border: "1px solid rgb(136, 136, 136)",
                  cursor: "pointer",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "60px 45px",
                  overflow: "hidden",
              }}
                
                onMouseEnter={manageMouseEnter}
                onMouseLeave={manageMouseLeave}
                {...attributes}
            >
                {children}
                <div ref={circle} style={{
                        backgroundColor: backgroundColor,
                        width: "100%",
                        height: "150%",
                        position: "absolute",
                        borderRadius: "50%",
                        top: "100%",
                        color:'#fff'
                        
                    }}></div>
            </div>

            
        </Magnetic>
    );
}
