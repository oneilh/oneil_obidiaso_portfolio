import { IconType } from "react-icons";
import { 
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, 
  SiTailwindcss, SiFigma, SiPostgresql, SiFirebase, 
  SiSupabase, SiPrisma, SiGithub, SiVercel
} from "react-icons/si";
import { RiRobot2Line } from "react-icons/ri";
import { FiPieChart, FiBarChart2, FiActivity, FiDatabase } from "react-icons/fi";

export const skills = {
  frontend: [
    { name: "Next.js", icon: SiNextdotjs, color: "group-hover:text-black dark:group-hover:text-white", context: "Built Firn0 & Outsy" },
    { name: "React", icon: SiReact, color: "group-hover:text-[#61DAFB]", context: "Core component architecture" },
    { name: "TypeScript", icon: SiTypescript, color: "group-hover:text-[#3178C6]", context: "Type-safe applications" },
    { name: "JavaScript", icon: SiJavascript, color: "group-hover:text-[#F7DF1E]", context: "Dynamic interactions" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "group-hover:text-[#06B6D4]", context: "Rapid, responsive UI" },
    { name: "Figma", icon: SiFigma, color: "group-hover:text-[#F24E1E]", context: "Prototyping & UX design" },
  ],
  baas: [
    { name: "Supabase", icon: SiSupabase, color: "group-hover:text-[#3ECF8E]", context: "Open source BaaS" },
    { name: "Firebase", icon: SiFirebase, color: "group-hover:text-[#FFCA28]", context: "Real-time databases & Auth" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "group-hover:text-[#4169E1]", context: "Relational data modeling" },
  ],
  tools: [
    { name: "Prisma", icon: SiPrisma, color: "group-hover:text-black dark:group-hover:text-white", context: "Type-safe database ORM" },
    { name: "Git & GitHub", icon: SiGithub, color: "group-hover:text-[#181717] dark:group-hover:text-white", context: "Version control & CI/CD" },
    { name: "Vercel", icon: SiVercel, color: "group-hover:text-black dark:group-hover:text-white", context: "Seamless deployments" },
    { name: "AI Agents & LLMs", icon: RiRobot2Line, color: "group-hover:text-[#8B5CF6]", context: "Automated workflows & tools" },
  ],
  data: [
    { name: "Tableau", icon: FiActivity, color: "group-hover:text-[#E97627]", context: "Data visualization" },
    { name: "Orange", icon: FiPieChart, color: "group-hover:text-[#F39C12]", context: "Visual data mining" },
    { name: "Data Mining", icon: FiDatabase, color: "group-hover:text-[#3498DB]", context: "Actionable business insights" },
  ],
};

export const startups = [
  {
    name: "Firn0",
    status: "MVP",
    description: "Placeholder description for Firn0.",
  },
  {
    name: "Outsy",
    status: "Building",
    description: "Placeholder description for Outsy.",
  },
  {
    name: "Scanly",
    status: "Designing",
    description: "Placeholder description for Scanly.",
  },
];

export const timeline = [
  {
    title: "Cybite Academy",
    role: "UI/UX & Frontend Tutor",
    date: "2023 — Aug 2025",
    description: "Taught UI/UX design principles and frontend development to upcoming designers and developers, mentoring them through hands-on projects.",
  },
  {
    title: "Freelance Software Engineer",
    role: "Independent",
    date: "2024",
    description: "Designed and developed custom web applications and landing pages for various clients, focusing on clean UX and scalable frontend architecture.",
  },
];

export const contact = {
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  resume: "/resume.pdf"
};
