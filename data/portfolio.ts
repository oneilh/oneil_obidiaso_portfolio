import { IconType } from "react-icons";
import { 
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, 
  SiTailwindcss, SiFigma, SiPostgresql, SiFirebase, 
  SiSupabase, SiPrisma, SiGithub, SiVercel 
} from "react-icons/si";
import { RiRobot2Line } from "react-icons/ri";

export const skills = {
  frontend: [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React", icon: SiReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Figma", icon: SiFigma },
  ],
  baas: [
    { name: "Supabase", icon: SiSupabase },
    { name: "Firebase", icon: SiFirebase },
    { name: "PostgreSQL", icon: SiPostgresql },
  ],
  tools: [
    { name: "Prisma", icon: SiPrisma },
    { name: "Git & GitHub", icon: SiGithub },
    { name: "Vercel", icon: SiVercel },
    { name: "AI Agents & LLMs", icon: RiRobot2Line },
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
