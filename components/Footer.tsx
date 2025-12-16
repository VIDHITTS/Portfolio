import { GENERAL_INFO } from '@/lib/data';

const Footer = () => {
    return (
        <footer className="text-center pb-10 pt-20" id="contact">
            <div className="container">
                <p className="text-lg text-muted-foreground">
                    Have a project in mind?
                </p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 hover:text-primary transition-colors"
                >
                    {GENERAL_INFO.email}
                </a>
            </div>
        </footer>
    );
};

export default Footer;
