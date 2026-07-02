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
  { value: '3', label: 'Production Projects' },
  { value: '90%+', label: 'Error Reduction' },
  { value: '99.9%', label: 'System Uptime' },
];

export const SKILLS = {
  frontend: [
    { name: 'React & Next.js', level: 95, icon: 'monitor' },
    { name: 'TypeScript', level: 85, icon: 'code' },
  ],
  backend: [
    { name: 'Node.js & Express', level: 90, icon: 'server' },
    { name: 'REST & GraphQL', level: 80, icon: 'api' },
  ],
  database: [
    { name: 'MongoDB', level: 85, icon: 'database' },
    { name: 'Redis / SQL', level: 70, icon: 'storage' },
  ],
  devops: [
    { name: 'CI/CD & Actions', level: 80, icon: 'terminal' },
    { name: 'Docker & K8s', level: 75, icon: 'docker' },
  ],
  ai: [
    { name: 'LLM APIs', level: 75, icon: 'cpu' },
    { name: 'Vector DBs', level: 65, icon: 'data_thresholding' },
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
    description: 'AI-integrated portal that parses raw lab data and generates formatted PDF reports instantly.',
    tags: ['Next.js', 'AI Engine'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC66M4du_mPWVTDsShNSEQ6O-H_jjto1cfLO6ko07Y9JeOc0jU1UuIXFIFFDnbLSUI2MfTHkpuNhN4DYpCB-et6ZdCHsULfa_fqENQxxmZeOOtUVSleZk6en-TAxmGoMjHAIZJVs2CE3IV-bTkCgafrm7TMWK__EsK5KuY_VdVjWRHwIrdgf84EXMklHPhsyHoLMZiIgUSkCWZtcV3Bfm428_UuLa_3I6l-_mND_NgUzK-Ggs1A7OAy',
    problem: 'Manual agricultural reporting was taking 48 hours per sample with frequent transcription errors.',
    solution: 'Developed an AI-integrated portal that parses raw lab data and generates formatted PDF reports instantly.',
    result: '80% reduction in processing time and 100% elimination of manual entry errors.',
     liveDemo: 'https://ai-resume-builder-pied-six.vercel.app/',  // Replace with actual URL
    github: 'https://github.com/RahulMohiteDEV/AI_Resume_Builder',  // Replace with actual URL
  },
  {
    title: 'Task Management System',
    description: 'Real-time Kanban board with WebSocket integration for instant status updates and batch tracking.',
    tags: ['MERN Stack', 'Redux'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEetsrc7Ph2Ppa1xNyxtQoCs5snOKEIf_WmZefY_G2soEkSk2YAdGKFJSylxRuV01OYFzz9qokO3HFe0F8kNDkq0FYv-gl2pKmqQHVWDkeLkCuoXuehHMh0RJ2LvZbgT5anbX-Z99U6jyux0wUWAiODioGcffHmMz4Py4-ny39FnA1ijiSuKkIUkW4XSUExXeeHwZm3dyCKkm-84XNQZJ7T2v6urLHLTBA_mvRyeTLwA4CX8NNLQxF',
    problem: 'Teams lacked a centralized way to track concurrent chemical testing batches across laboratories.',
    solution: 'Built a real-time Kanban board with WebSocket integration for instant status updates and batch tracking.',
    result: 'Streamlined collaboration for 50+ concurrent users with zero data conflicts.',
     liveDemo: 'https://employee-task-management-system-ten.vercel.app/',  // Replace with actual URL
    github: 'https://github.com/RahulMohiteDEV/Employee_Task_Management_system',  // Replace with actual URL
  },
   {
    title: 'Soil Test Generator',
    description: 'AI-integrated portal that parses raw lab data and generates formatted PDF reports instantly.',
    tags: ['Next.js', 'AI Engine'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC66M4du_mPWVTDsShNSEQ6O-H_jjto1cfLO6ko07Y9JeOc0jU1UuIXFIFFDnbLSUI2MfTHkpuNhN4DYpCB-et6ZdCHsULfa_fqENQxxmZeOOtUVSleZk6en-TAxmGoMjHAIZJVs2CE3IV-bTkCgafrm7TMWK__EsK5KuY_VdVjWRHwIrdgf84EXMklHPhsyHoLMZiIgUSkCWZtcV3Bfm428_UuLa_3I6l-_mND_NgUzK-Ggs1A7OAy',
    problem: 'Manual agricultural reporting was taking 48 hours per sample with frequent transcription errors.',
    solution: 'Developed an AI-integrated portal that parses raw lab data and generates formatted PDF reports instantly.',
    result: '80% reduction in processing time and 100% elimination of manual entry errors.',
     liveDemo: 'https://soil-report-generator-b12a.vercel.app/',  // Replace with actual URL
    github: 'https://github.com/RahulMohiteDEV/Soil-Report-Generator',  // Replace with actual URL
  },
    {
    title: 'AI Resume Builder',
    description: 'AI-integrated portal that parses raw lab data and generates formatted PDF reports instantly.',
    tags: ['Next.js', 'AI Engine'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC66M4du_mPWVTDsShNSEQ6O-H_jjto1cfLO6ko07Y9JeOc0jU1UuIXFIFFDnbLSUI2MfTHkpuNhN4DYpCB-et6ZdCHsULfa_fqENQxxmZeOOtUVSleZk6en-TAxmGoMjHAIZJVs2CE3IV-bTkCgafrm7TMWK__EsK5KuY_VdVjWRHwIrdgf84EXMklHPhsyHoLMZiIgUSkCWZtcV3Bfm428_UuLa_3I6l-_mND_NgUzK-Ggs1A7OAy',
    problem: 'Manual agricultural reporting was taking 48 hours per sample with frequent transcription errors.',
    solution: 'Developed an AI-integrated portal that parses raw lab data and generates formatted PDF reports instantly.',
    result: '80% reduction in processing time and 100% elimination of manual entry errors.',
     liveDemo: 'https://ai-resume-builder-pied-six.vercel.app/',  // Replace with actual URL
    github: 'https://github.com/RahulMohiteDEV/AI_Resume_Builder',  // Replace with actual URL
  },
];

export const EDUCATION = [
  {
    degree: 'Master of Computer Science',
    institution: 'Tech Institute of Excellence',
    cgpa: '3.9/4.0',
    period: '2021 – 2023',
    icon: 'school',
  },
  {
    degree: 'B.S. in Computer Science',
    institution: 'Global University of Tech',
    cgpa: '3.8/4.0',
    period: '2017 – 2021',
    icon: 'history_edu',
  },
];