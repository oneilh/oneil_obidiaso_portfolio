import { IconType } from "react-icons";
import { 
  SiReact, SiNextdotjs, SiJavascript, SiHtml5, SiCss, SiTypescript, 
  SiTailwindcss, SiFigma, SiPostgresql, SiBootstrap, SiFirebase, 
  SiSupabase, SiPrisma, SiGit, SiGithub, SiVercel 
} from "react-icons/si";
import { FiDatabase } from "react-icons/fi";
import { RiRobot2Line } from "react-icons/ri";

export const skills = {
  frontend: [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "JavaScript", icon: SiJavascript },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Figma", icon: SiFigma },
    { name: "SQL", icon: SiPostgresql },
    { name: "Bootstrap", icon: SiBootstrap },
  ],
  baas: [
    { name: "Firebase", icon: SiFirebase },
    { name: "Supabase", icon: SiSupabase },
    { name: "Neon", icon: FiDatabase },
  ],
  tools: [
    { name: "Prisma", icon: SiPrisma },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Vercel", icon: SiVercel },
    { name: "AI", icon: RiRobot2Line },
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
