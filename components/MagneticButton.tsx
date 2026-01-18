'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, ReactElement, cloneElement } from 'react';

interface MagneticButtonProps {
    children: ReactElement;
}

const MagneticButton = ({ children }: MagneticButtonProps) => {
    const magnetic = useRef<HTMLDivElement>(null);

    useGSAP(
        (context, contextSafe) => {
            if (window.innerWidth < 768) return;

            const xTo = gsap.quickTo(magnetic.current, 'x', {
                duration: 1,
                ease: 'elastic.out(1, 0.3)',
            });
            const yTo = gsap.quickTo(magnetic.current, 'y', {
                duration: 1,
                ease: 'elastic.out(1, 0.3)',
            });

            const handleMouseMove = contextSafe?.((e: MouseEvent) => {
                if (!magnetic.current) return;
                const { clientX, clientY } = e;
                const { height, width, left, top } =
                    magnetic.current.getBoundingClientRect();
                const x = clientX - (left + width / 2);
                const y = clientY - (top + height / 2);
                xTo(x * 0.35);
                yTo(y * 0.35);
            }) as any;

            const handleMouseLeave = contextSafe?.(() => {
                xTo(0);
                yTo(0);
            }) as any;

            if (magnetic.current) {
                magnetic.current.addEventListener('mousemove', handleMouseMove);
                magnetic.current.addEventListener(
                    'mouseleave',
                    handleMouseLeave,
                );
            }

            return () => {
                if (magnetic.current) {
                    magnetic.current.removeEventListener(
                        'mousemove',
                        handleMouseMove,
                    );
                    magnetic.current.removeEventListener(
                        'mouseleave',
                        handleMouseLeave,
                    );
                }
            };
        },
        { scope: magnetic },
    );

    return cloneElement(children, { ref: magnetic });
};

export default MagneticButton;
