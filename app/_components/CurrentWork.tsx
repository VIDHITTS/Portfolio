'use client';
import SectionTitle from '@/components/SectionTitle';
import TransitionLink from '@/components/TransitionLink';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CurrentWork = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    toggleActions: 'play none none reverse',
                },
            });

            tl.fromTo(
                '.current-work-item',
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="current-work">
            <div className="container" ref={containerRef}>
                <SectionTitle title="CURRENTLY WORKING ON" />

                <div className="current-work-item p-8 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-background/50 to-primary/5 hover:border-primary/50 transition-colors duration-500 flex flex-col xl:flex-row gap-10 xl:gap-20">
                    <div className="flex-1">
                        <p className="text-xl text-primary font-bold tracking-widest uppercase mb-2">
                            OmniScript
                        </p>
                        <h2 className="text-5xl md:text-[60px] font-anton leading-none mb-6">
                            The AI-Powered Knowledge Operating System
                        </h2>
                        
                        <p className="text-lg text-muted-foreground mb-6">
                            OmniScript is a full-stack, intelligence-driven document platform that allows you to ingest any form of media (PDFs, text, YouTube videos, web pages, audio, images) and seamlessly interact with it. By leveraging agentic orchestration and modern Retrieval-Augmented Generation (RAG), it transforms stagnant files into a dynamic, queryable knowledge base.
                        </p>

                        <div className="flex flex-col gap-3 text-muted-foreground mb-8 text-base">
                            <p>✨ <strong>Agentic Interactions:</strong> Talk seamlessly to your documents using a streaming chat interface that cites its sources, evaluates relevance, and navigates document hierarchies intelligently.</p>
                            <p>🔎 <strong>Advanced Retrieval:</strong> High-performance Hybrid Search pipeline (PostgreSQL pgvector + BM25 Full-Text) combined with Reciprocal Rank Fusion (RRF) and Cohere Cross-Encoder reranking.</p>
                            <p>⚙️ <strong>Deep Ingestion:</strong> Robust background workers to semantically chunk, contextually enrich, and embed text using HyDE and Corrective RAG (CRAG) grading.</p>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 text-sm uppercase font-bold tracking-wider mb-8">
                            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full">Next.js 15</span>
                            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full">Node.js</span>
                            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full">PostgreSQL/pgvector</span>
                            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full">Prisma ORM</span>
                            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full">BullMQ / Redis</span>
                            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full">Cohere / OpenAI</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 w-full xl:w-[300px]">
                        <div className="bg-black/40 border border-white/5 p-6 rounded-2xl">
                            <p className="font-anton text-2xl mb-4">Quick Links</p>
                            <div className="flex flex-col gap-4">
                                <a 
                                    href="https://github.com/VIDHITTS/OmniScript"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 group text-primary font-bold uppercase tracking-wider hover:text-white transition-colors"
                                >
                                    GitHub Repository
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                                    >
                                        <path d="M15 3h6v6"></path>
                                        <path d="M10 14 21 3"></path>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    </svg>
                                </a>
                                
                                <TransitionLink 
                                    href="/projects/omniscript"
                                    className="inline-flex items-center gap-2 group text-white font-bold uppercase tracking-wider hover:text-primary transition-colors mt-2"
                                >
                                    Full Project Details
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="group-hover:translate-x-1 transition-transform"
                                    >
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </TransitionLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CurrentWork;
