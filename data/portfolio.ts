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
    title: "Aptech",
    role: "Student/Trainee",
    date: "Past",
    description: "Foundational software engineering and IT studies.",
  },
  {
    title: "Cybite Academy",
    role: "Tutor",
    date: "Past",
    description: "Taught UI/UX and Frontend Development to upcoming designers and developers.",
  },
  {
    title: "Middlesex",
    role: "Student",
    date: "Current",
    description: "Advancing knowledge and building larger scale products.",
  },
];

export const contact = {
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  resume: "/resume.pdf"
};
