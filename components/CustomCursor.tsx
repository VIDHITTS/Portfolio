'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';
import React, { useRef } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useGSAP(
        (context, contextSafe) => {
            if (window.innerWidth < 768) return;

            const moveCursor = contextSafe?.((e: MouseEvent) => {
                gsap.to(cursorRef.current, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.2, // smoother lag
                    ease: 'power2.out',
                });
            });

            const handleMouseEnter = (e: MouseEvent) => {
                const target = e.target as HTMLElement;
                if (
                    target.tagName.toLowerCase() === 'a' ||
                    target.tagName.toLowerCase() === 'button' ||
                    target.closest('a') ||
                    target.closest('button')
                ) {
                    gsap.to(cursorRef.current, {
                        scale: 1.5,
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderWidth: 0,
                        duration: 0.3,
                    });
                }
            };

            const handleMouseLeave = () => {
                gsap.to(cursorRef.current, {
                    scale: 1,
                    backgroundColor: 'transparent',
                    borderWidth: '1px',
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    duration: 0.3,
                });
            };

            window.addEventListener('mousemove', moveCursor as any);
            window.addEventListener('mousedown', () =>
                gsap.to(cursorRef.current, { scale: 0.8, duration: 0.1 }),
            );
            window.addEventListener('mouseup', () =>
                gsap.to(cursorRef.current, { scale: 1, duration: 0.1 }),
            );

            // Add hover listeners to clickable elements
            const clickables = document.querySelectorAll('a, button');
            clickables.forEach((el) => {
                el.addEventListener('mouseenter', handleMouseEnter as any);
                el.addEventListener('mouseleave', handleMouseLeave as any);
            });

            return () => {
                window.removeEventListener('mousemove', moveCursor as any);
                clickables.forEach((el) => {
                    el.removeEventListener('mouseenter', handleMouseEnter as any);
                    el.removeEventListener('mouseleave', handleMouseLeave as any);
                });
            };
        },
        { scope: cursorRef, dependencies: [pathname] },
    );

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/50 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block mix-blend-difference"
        />
    );
};

export default CustomCursor;
