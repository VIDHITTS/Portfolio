'use client';
import { useRouter } from 'next/navigation';
import { GENERAL_INFO } from '@/lib/data';
import Link from 'next/link';

const MENU_LINKS = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'About',
        url: '/#about-me',
    },
    {
        name: 'Skills',
        url: '/#my-stack',
    },
    {
        name: 'Projects',
        url: '/#selected-projects',
    },
    {
        name: 'Education',
        url: '/#my-experience',
    },
    {
        name: 'Contact',
        url: '/#contact',
    },
];

const Navbar = () => {
    const router = useRouter();

    return (
        <nav className="fixed top-2 left-1/2 -translate-x-1/2 z-[4] w-[95%] max-w-5xl">
            <div className="bg-black/10 backdrop-blur-2xl border border-white/5 shadow-lg shadow-black/20 rounded-full px-6 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo/Name */}
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            className="text-lg font-anton text-primary hover:text-primary/80 transition-all duration-300 tracking-wider"
                        >
                            {GENERAL_INFO.name}
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-1">
                        {MENU_LINKS.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => router.push(link.url)}
                                className="px-4 py-1.5 text-foreground/80 hover:text-primary hover:bg-white/5 rounded-full transition-all duration-300 text-sm font-medium"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    {/* Contact Button */}
                    <div className="flex items-center">
                        <a
                            href={`mailto:${GENERAL_INFO.email}`}
                            className="hidden md:inline-flex px-5 py-1.5 bg-primary/10 hover:bg-primary hover:text-black text-primary border border-primary/30 rounded-full transition-all duration-300 text-sm font-medium backdrop-blur-sm"
                        >
                            Get in Touch
                        </a>

                        {/* Mobile Contact */}
                        <a
                            href={`mailto:${GENERAL_INFO.email}`}
                            className="md:hidden text-primary hover:text-primary/80 text-sm font-medium"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
