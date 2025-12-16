'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_STACK } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react';
import {
    SiJavascript,
    SiTypescript,
    SiPython,
    SiHtml5,
    SiCss3,
    SiReact,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiMysql,
    SiPrisma,
    SiFastapi,
    SiScikitlearn,
} from 'react-icons/si';
import { FaBrain, FaDatabase } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Map skill names to their icons
const skillIcons: { [key: string]: any } = {
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,
    Python: SiPython,
    HTML: SiHtml5,
    CSS: SiCss3,
    React: SiReact,
    'Tailwind CSS': SiTailwindcss,
    'Node.js': SiNodedotjs,
    'Express.js': SiExpress,
    FastAPI: SiFastapi,
    MongoDB: SiMongodb,
    MySQL: SiMysql,
    'Prisma ORM': SiPrisma,
    NumPy: FaDatabase,
    Pandas: FaDatabase,
    'Scikit-learn': SiScikitlearn,
    'Machine Learning': FaBrain,
};

// Category names mapping
const categoryNames: { [key: string]: string } = {
    languages: 'Languages',
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    dataTools: 'Data & ML',
};

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            });

            gsap.set('.skill-card', { opacity: 0, y: 50 });
            gsap.set('.category-title', { opacity: 0, x: -50 });

            tl.to('.category-title', {
                x: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power3.out',
            }).to(
                '.skill-card',
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.03,
                    ease: 'back.out(1.5)',
                },
                '-=0.4',
            );
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section id="my-stack" ref={containerRef} className="py-section">
            <div className="container">
                <SectionTitle title="My Stack" />

                <div className="mt-12 space-y-8">
                    {Object.entries(MY_STACK).map(([categoryKey, skills]) => (
                        <div key={categoryKey}>
                            <h3 className="category-title text-xl font-anton text-primary mb-5 uppercase tracking-wider">
                                {categoryNames[categoryKey]}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill) => {
                                    const IconComponent =
                                        skillIcons[skill.name] || FaDatabase;
                                    return (
                                        <div
                                            key={skill.name}
                                            className="skill-card group relative px-5 py-3.5 bg-white/5 border border-white/10 rounded-lg flex items-center gap-3 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
                                        >
                                            <IconComponent className="w-6 h-6 flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                                            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
                                                {skill.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
