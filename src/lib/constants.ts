export const SITE_CONFIG = {
  name: 'DEV.ARCHITECT',
  email: 'rahul.mohite.techai@gmail.com',
  location: 'Pune, Maharashtra, India',
  github: 'https://github.com/RahulMohiteDEV',
  linkedin: 'https://www.linkedin.com/in/rahul-mohite-5039162a1/',
  twitter: 'https://twitter.com',
};

export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const STATS = [
  { value: '2+', label: 'Years Coding' },
  { value: '5', label: 'Production Projects' },
  { value: '85%+', label: 'Error Reduction' },
  { value: '99.9%', label: 'System Uptime' },
];

export const SKILLS = {
  frontend: [
    { name: 'React & Next.js', level: 90, icon: 'monitor' },
    { name: 'TypeScript', level: 85, icon: 'code' },
    { name: 'HTML5 & CSS3', level: 95, icon: 'monitor' },
    { name: 'Tailwind CSS & SCSS/SASS', level: 90, icon: 'monitor' },
    
  ],
  backend: [
    { name: 'Node.js & Express', level: 90, icon: 'server' },
    { name: 'REST & GraphQL', level: 80, icon: 'api' },
    { name: 'OAuth & JWT/bcrypt', level: 85, icon: 'Authentication & Authorization' },
  ],
  database: [
    { name: 'MongoDB', level: 85, icon: 'database' },
    { name: 'Redis / SQL', level: 70, icon: 'storage' },
  ],
  devops: [
    { name: 'CI/CD & Actions', level: 80, icon: 'terminal' },
    { name: 'Docker & K8s', level: 75, icon: 'docker' },
    { name: 'AWS & Vercel/Netlify', level: 85, icon: 'cloud ' },
  ],
  ai: [
    { name: 'LLM APIs', level: 75, icon: 'cpu' },
    { name: 'Vector DBs', level: 65, icon: 'data_thresholding' },
      { name: ' LangChain & Prompt Engineering', level: 75, icon: 'code' },
    { name: ' MCP Server & Multi-Agent Systems', level: 65, icon: 'server' },
  ],
};

export const EXPERIENCE = [
  {
    title: 'MERN Full Stack Developer',
    company: 'Satara Biochem',
    period: 'March 2025 – Present',
    achievements: [
      'Architected and deployed a Next.js-based enterprise portal, improving platform load speed by 45%.',
      'Automated biochemical data processing using Node.js and AI, reducing manual entry errors by 92%.',
      'Implemented robust CI/CD workflows using GitHub Actions to ensure 99.9% uptime for internal tools.',
      'Integrated advanced MongoDB aggregation pipelines to handle large datasets for real-time reporting.',
    ],
  },
];

export const PROJECTS = [
 
   {
    title: 'AI Resume Builder',
    description: 'Say goodbye to manual resume formatting! This AI-powered tool simplifies resume building by guiding users through a step-by-step process.',
    tags: ['Next.js', 'AI Engine'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC66M4du_mPWVTDsShNSEQ6O-H_jjto1cfLO6ko07Y9JeOc0jU1UuIXFIFFDnbLSUI2MfTHkpuNhN4DYpCB-et6ZdCHsULfa_fqENQxxmZeOOtUVSleZk6en-TAxmGoMjHAIZJVs2CE3IV-bTkCgafrm7TMWK__EsK5KuY_VdVjWRHwIrdgf84EXMklHPhsyHoLMZiIgUSkCWZtcV3Bfm428_UuLa_3I6l-_mND_NgUzK-Ggs1A7OAy',
    problem: 'Time-consuming resume creation, lack of AI guidance, poor ATS optimization, and limited customization options.',
    solution: 'AI content analysis, real-time suggestions, step-by-step interface, professional templates,Instant preview, instant pdf generation and ATS-friendly formatting.',
    result: '2 hours → 10 minutes, 45% more interviews, 92% ATS pass rate, 4.8/5 user rating',
     liveDemo: 'https://ai-resume-builder-pied-six.vercel.app/',  // Replace with actual URL
    github: 'https://github.com/RahulMohiteDEV/AI_Resume_Builder',  // Replace with actual URL
  },
  {
    title: 'Task Management System',
    description: 'Real-time Kanban board with WebSocket, offline-first architecture, MERN stack + Redux',
    tags: ['MERN Stack', 'Redux'],
    image: '/EMS.png',
    problem: 'No centralized tracking, email/spreadsheet confusion, delayed tasks, reduced productivity, and lack of real-time collaboration.',
    solution: 'Built a real-time Kanban board with WebSocket integration for instant status updates and batch tracking.',
    result: '50+ concurrent users, 70% time reduction, 40% faster delivery, zero data conflicts.',
     liveDemo: 'https://employee-task-management-system-ten.vercel.app/',  // Replace with actual URL
    github: 'https://github.com/RahulMohiteDEV/Employee_Task_Management_system',  // Replace with actual URL
  },
   {
    title: 'Soil Test Generator',
    description: '	Input soil values → generate PDF reports instantly, interactive dashboard',
    tags: ['Next.js', 'AI Engine'],
    image: '/Soil.jpg',
    problem: 'Manual agricultural reporting was taking 4 hours per sample with frequent transcription errors.',
    solution: 'User input interface, automated PDF generation, visualization, recommendations',
    result: '80% time reduction, 100% error elimination, 10x faster processing, 4.9/5 user rating.',
     liveDemo: 'https://soil-report-generator-b12a.vercel.app/',  // Replace with actual URL
    github: 'https://github.com/RahulMohiteDEV/Soil-Report-Generator',  // Replace with actual URL
  },
  
];

export const EDUCATION = [
  {
    degree: 'Master’s in Computer Science',
    institution: 'Tech Institute of Excellence',
    cgpa: '7.23/10',
    period: '2023 – 2025',
    icon: 'school',
  },
  {
    degree: 'Bachelor’s in Computer Science',
    institution: 'Global University of Tech',
    cgpa: '8.76/10',
    period: '2020 – 2023',
    icon: 'history_edu',
  },
];