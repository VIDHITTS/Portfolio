import { IProject } from '@/types';

export const GENERAL_INFO = {
    name: 'Vidhit T S',
    phone: '+917829898984',
    email: 'vidhit.ts@adypu.edu.in',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Vidhit, I am reaching out to you because...',

    professionalSummary: `Full Stack Developer with experience in modern web technologies. Former vice-captain with a track record of leading successful projects. Specializing in building responsive and scalable applications.`,
};

export const SOCIAL_LINKS = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vidhitts/' },
    { name: 'Github', url: 'https://github.com/VIDHITTS' },
    { name: 'CodeChef', url: 'https://www.codechef.com/users/vidhit_ts' },
    { name: 'Codeforces', url: 'https://codeforces.com/profile/vidhit_ts' },
    { name: 'Leetcode', url: 'https://leetcode.com/vidhit_ts' },
];

export const MY_STACK = {
    languages: [
        {
            name: 'JavaScript',
            category: 'Languages',
        },
        {
            name: 'TypeScript',
            category: 'Languages',
        },
        {
            name: 'Python',
            category: 'Languages',
        },
        {
            name: 'HTML',
            category: 'Languages',
        },
        {
            name: 'CSS',
            category: 'Languages',
        },
    ],
    frontend: [
        {
            name: 'React',
            category: 'Frontend',
        },
        {
            name: 'Tailwind CSS',
            category: 'Frontend',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            category: 'Backend',
        },
        {
            name: 'Express.js',
            category: 'Backend',
        },
        {
            name: 'FastAPI',
            category: 'Backend',
        },
    ],
    database: [
        {
            name: 'MongoDB',
            category: 'Database',
        },
        {
            name: 'MySQL',
            category: 'Database',
        },
        {
            name: 'Prisma ORM',
            category: 'Database',
        },
    ],
    dataTools: [
        {
            name: 'NumPy',
            category: 'Data Tools',
        },
        {
            name: 'Pandas',
            category: 'Data Tools',
        },
        {
            name: 'Scikit-learn',
            category: 'Data Tools',
        },
        {
            name: 'Machine Learning',
            category: 'Data Tools',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'OmniScript',
        slug: 'omniscript',
        liveUrl: '',
        sourceCode: 'https://github.com/VIDHITTS/OmniScript',
        year: 2026,
        description: `
      Building OmniScript, a full-stack, intelligence-driven document platform that allows users to ingest any form of media (PDFs, text, YouTube videos, web pages, audio, images) and seamlessly interact with it. By leveraging agentic orchestration and modern Retrieval-Augmented Generation (RAG), it transforms stagnant files into a dynamic, queryable knowledge base. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>Deep Ingestion: Upload files and run robust background workers to semantically chunk, contextually enrich, and embed text.</li>
        <li>Advanced Retrieval: High-performance Hybrid Search pipeline (PostgreSQL pgvector + BM25 Full-Text) combined with Reciprocal Rank Fusion (RRF) and Cohere Cross-Encoder reranking.</li>
        <li>Agentic Interactions: Talk seamlessly to documents using a streaming chat interface that cites its sources and evaluates relevance.</li>
        <li>Secure Workspaces: Isolated knowledge vaults with membership management and real-time collaboration.</li>
        <li>Auto-Generated Artifacts: Instantly create summaries, flashcards, mind maps, and study guides.</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Frontend: Next.js 15, React, Tailwind CSS, shadcn/ui</li>
        <li>Backend API: Node.js, Express, TypeScript, Zod</li>
        <li>Database: PostgreSQL 16 (pgvector, pg_trgm), Prisma ORM</li>
        <li>Queue & Cache: BullMQ, Redis</li>
        <li>AI/LLMs: Groq, OpenAI, Cohere</li>
      </ul>
      `,
        role: `
      Full-Stack AI Developer <br/>
      <ul>
        <li>Architecture & Engineering: Designing the complex ingestion pipeline and multi-modal knowledge graph</li>
        <li>AI Integration: Building the modern RAG pipeline with Contextual retrieval, HyDE, and CRAG grading</li>
        <li>Search System: Implementing Vector similarity (pgvector) and Full-Text (tsvector) mapped with RRF</li>
      </ul>
      `,
        techStack: [
            'Next.js 15',
            'Node.js',
            'PostgreSQL',
            'Redis',
            'BullMQ',
            'pgvector',
            'RAG',
            'Tailwind CSS'
        ],
        thumbnail: '',
        longThumbnail: '',
        images: [],
    },
    {
        title: 'YogaFlow',
        slug: 'yogaflow',
        liveUrl: 'https://yoga-app-eight-kappa.vercel.app',
        sourceCode: 'https://github.com/VIDHITTS/Yoga-App.git',
        year: 2026,
        description: `
      Built YogaFlow, an AI-powered yoga wellness chatbot leveraging RAG (Retrieval-Augmented Generation) architecture for intelligent, context-aware responses with seamless source attribution. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>RAG architecture for context-aware knowledge retrieval</li>
        <li>Real-time safety detection and smart safety pivots</li>
        <li>Personalized yoga recommendations and guidance</li>
        <li>Secure query logging and conversation history</li>
        <li>Contextual LLM responses with source attribution</li>
        <li>Vector-based semantic search using Pinecone</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Full-stack AI platform with React frontend and Node.js backend</li>
        <li>Pinecone vector database for efficient knowledge retrieval</li>
        <li>MongoDB for persistent storage and user data</li>
        <li>Transformers.js embeddings for semantic understanding</li>
        <li>LLM integration for intelligent response generation</li>
      </ul>
      `,
        role: `
      Full-Stack AI Developer <br/>
      <ul>
        <li>Backend: Built RAG pipeline with Pinecone and LLM integration</li>
        <li>Frontend: Created interactive chat interface with React</li>
        <li>Safety: Implemented real-time safety detection and smart pivots</li>
        <li>Embeddings: Integrated Transformers.js for semantic search</li>
        <li>Database: Designed MongoDB schema for query logging</li>
      </ul>
      `,
        techStack: [
            'React',
            'Node.js',
            'Pinecone',
            'MongoDB',
            'Transformers.js',
            'LLM',
            'RAG',
        ],
        thumbnail: '/projects/images/yogaflow-1.png',
        longThumbnail: '/projects/images/yogaflow-1.png',
        images: [
            '/projects/images/yogaflow-1.png',
        ],
    },
    {
        title: 'Business Segmenter',
        slug: 'businesssegmenter',
        liveUrl:
            'https://business-segmentergit-mer9ifjsappyjyd3au4gwen.streamlit.app/',
        sourceCode: 'https://github.com/VIDHITTS/Business-Segmenter.git',
        year: 2025,
        description: `
      Built Business Segmenter using Python, Streamlit, and scikit-learn, implementing automated K-Means clustering and Apriori market basket analysis for data-driven customer insights and optimized product bundling strategies. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>Automated K-Means clustering for customer segmentation</li>
        <li>Apriori market basket analysis for product bundling</li>
        <li>Interactive visualizations for data insights</li>
        <li>Real-time customer segmentation</li>
        <li>Campaign generation with smart parameter automation</li>
        <li>Responsive dashboard for actionable business intelligence</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Developed analytics platform for real-time segmentation</li>
        <li>Implemented robust data processing pipelines</li>
        <li>Created interactive visualizations for business insights</li>
        <li>Built smart parameter automation for campaign generation</li>
      </ul>
      `,
        role: `
      Full-Stack ML Developer <br/>
      <ul>
        <li>Backend: Implemented K-Means clustering and Apriori algorithms</li>
        <li>Frontend: Built interactive dashboard using Streamlit</li>
        <li>Data Processing: Created robust pipelines for customer data</li>
        <li>ML Models: Developed automated segmentation system</li>
        <li>Visualization: Implemented interactive charts and graphs</li>
      </ul>
      `,
        techStack: [
            'Python',
            'Streamlit',
            'scikit-learn',
            'K-Means',
            'Apriori',
            'Pandas',
            'NumPy',
        ],
        thumbnail: '/projects/images/businees-segmenter-1.png',
        longThumbnail: '/projects/images/businees-segmenter-1.png',
        images: [
            '/projects/images/businees-segmenter-1.png',
            '/projects/images/businees-segmenter-2.png',
            '/projects/images/businees-segmenter-3.png',
        ],
    },
    {
        title: 'App Success Predictor',
        slug: 'appsuccesspredictor',
        techStack: [
            'Python',
            'scikit-learn',
            'Streamlit',
            'Pandas',
            'Machine Learning',
        ],
        thumbnail: '/projects/images/app-success-2.png',
        longThumbnail: '/projects/images/app-success-2.png',
        images: [
            '/projects/images/app-success-1.png',
            '/projects/images/app-success-2.png',
        ],
        liveUrl: 'https://frontend-model.netlify.app',
        sourceCode:
            'https://github.com/VIDHITTS/Google-play-store-analysis.git',
        year: 2025,
        description: `Built App Success Predictor using Python, scikit-learn, and Streamlit, implementing machine learning models to predict app success with 85% accuracy. Features real-time predictions and comprehensive analytics. <br/><br/>
        
        Developed a robust ML platform for forecasting app performance. Features dynamic input processing, instant success probability scoring, and actionable insights for developers.`,
        role: `As the ML developer, I:<br/>
        - Built predictive models with 85% accuracy using scikit-learn.<br/>
        - Implemented data processing pipelines with Pandas.<br/>
        - Created interactive dashboard using Streamlit.<br/>
        - Developed real-time prediction system.<br/>
        - Designed intuitive UI for data visualization.`,
    },
    {
        title: 'Lets Collab',
        slug: 'letscollab',
        techStack: [
            'React',
            'Node.js',
            'Prisma',
            'Excalidraw',
            'JWT',
            'WebSockets',
        ],
        thumbnail: '/projects/images/lets-collab-1.png',
        longThumbnail: '/projects/images/lets-collab-1.png',
        images: [
            '/projects/images/lets-collab-1.png',
            '/projects/images/lets-collab-2.png',
            '/projects/images/lets-collab-3.png',
            '/projects/images/lets-collab-4.png',
        ],
        liveUrl: 'https://let-s-collab.vercel.app',
        sourceCode: 'https://github.com/IronwallxR5/Let-s_Collab.git',
        year: 2025,
        description: `Built Let's Collab using React, Node.js, and Prisma, implementing live Excalidraw whiteboard integration, secure authentication, and real-time synchronization for an interactive, smooth, and intuitive collaborative user experience. <br/><br/>
        
        Developed a robust full-stack web platform for real-time visual brainstorming and idea sharing with team collaboration. Features secure JWT auth, workspace management, and a sleek, developer-friendly, modern interactive UI.`,
        role: `As the full-stack developer, I:<br/>
        - Built the entire platform using React, Node.js, and Prisma.<br/>
        - Integrated live Excalidraw whiteboard for real-time collaboration.<br/>
        - Implemented secure JWT authentication and authorization system.<br/>
        - Developed real-time synchronization using WebSockets.<br/>
        - Created workspace management system for team collaboration.<br/>
        - Designed modern, developer-friendly interactive UI.`,
    },
    {
        title: 'Snapcode',
        slug: 'snapcode',
        techStack: ['React', 'FastAPI', 'SQLAlchemy', 'Python'],
        thumbnail: '/projects/images/snapcode-1.png',
        longThumbnail: '/projects/images/snapcode-1.png',
        images: [
            '/projects/images/snapcode-1.png',
            '/projects/images/snapcode-2.png',
            '/projects/images/snapcode-3.png',
        ],
        sourceCode: 'https://github.com/VIDHITTS/SnapCode.git',
        liveUrl: 'https://snapcode-tan.vercel.app',
        year: 2024,
        description: `Built Snapcode using React, FastAPI, and SQLAlchemy, implementing real-time code collaboration, robust data processing, and seamless database management for an interactive and intuitive developer experience. <br/><br/>
        
        Developed a full-stack platform for code sharing and collaboration. Features secure authentication, real-time code editing, and a modern UI designed for developers.`,
        role: `As the full-stack developer, I:<br/>
        - Built the platform using React and FastAPI.<br/>
        - Implemented real-time code collaboration features.<br/>
        - Created robust data processing pipelines.<br/>
        - Integrated SQLAlchemy for database management.<br/>
        - Designed modern, developer-friendly UI.`,
    },
    {
        title: 'Quiz App',
        slug: 'quizapp',
        techStack: ['React', 'Node.js', 'Express.js', 'Prisma'],
        thumbnail: '/projects/images/quiz-app-1.png',
        longThumbnail: '/projects/images/quiz-app-1.png',
        images: [
            '/projects/images/quiz-app-1.png',
            '/projects/images/quiz-app-2.png',
            '/projects/images/quiz-app-3.png',
        ],
        sourceCode: 'https://github.com/VIDHITTS/Quiz-app.git',
        liveUrl: 'https://quiz-app-beta-pearl.vercel.app',
        year: 2024,
        description: `Built Quiz App using React, Node.js, Express.js, and Prisma, implementing real-time quiz functionality, secure authentication, and robust database management for an interactive and engaging user experience. <br/><br/>
        
        Developed a full-stack quiz platform with real-time scoring and progress tracking. Features secure user authentication, question management, and a modern responsive UI.`,
        role: `As the full-stack developer, I:<br/>
        - Built the quiz platform using React and Node.js.<br/>
        - Implemented Express.js backend with RESTful APIs.<br/>
        - Integrated Prisma ORM for database management.<br/>
        - Created real-time quiz functionality and scoring system.<br/>
        - Designed intuitive and responsive UI.`,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Bachelor of Technology (AI ML)',
        company: 'Newton School of Technology (ADYPU), Pune',
        duration: 'Grade: 9.16 CGPA',
    },
    {
        title: 'Intermediate',
        company: 'Jain College, Bangalore',
        duration: 'Grade: 92.8%',
    },
    {
        title: 'Matriculation',
        company: 'Achieve School Of Education, Bangalore',
        duration: 'Grade: 90.4%',
    },
];
