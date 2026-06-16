export interface ProjectMeta {
  id: string;
  name: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  tags: string[];
  repoName: string; // The "owner/repo" string to fetch the README
}

export const projectsMeta: ProjectMeta[] = [
  {
    id: "firn0",
    name: "Firn0",
    description:
      "An esports platform for organizing and participating in tournaments.",
    image: "/api/placeholder/800/400", // We will use a placeholder for now
    githubUrl: "https://github.com/oneil-obidiaso/firn0", // Replace with actual URL
    liveUrl: "https://firn0.com", // Replace with actual URL
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    repoName: "oneil-obidiaso/firn0", // Replace with actual owner/repo
  },
  {
    id: "portfolio",
    name: "Developer Portfolio",
    description:
      "My personal developer portfolio built with Next.js and Tailwind CSS.",
    image: "/api/placeholder/800/400",
    githubUrl: "https://github.com/oneil-obidiaso/oneil_obidiaso_portfolio",
    liveUrl: "https://oneil-obidiaso.vercel.app",
    tags: ["Next.js", "React", "Tailwind CSS"],
    repoName: "oneil-obidiaso/oneil_obidiaso_portfolio",
  },
  {
    id: "portfolio",
    name: "Developer Portfolio",
    description:
      "My personal developer portfolio built with Next.js and Tailwind CSS.",
    image: "/api/placeholder/800/400",
    githubUrl: "https://github.com/oneil-obidiaso/oneil_obidiaso_portfolio",
    liveUrl: "https://oneil-obidiaso.vercel.app",
    tags: ["Next.js", "React", "Tailwind CSS"],
    repoName: "oneil-obidiaso/oneil_obidiaso_portfolio",
  },
  // Add more projects here
];

export const otherProjects = [
  {
    id: "mini-1",
    name: "Terminal Portfolio",
    description: "A command-line inspired portfolio interface built for developers.",
    tags: ["React", "CSS", "Vite"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: "mini-2",
    name: "Weather Dashboard",
    description: "Real-time weather tracking with beautiful dynamic gradients based on time of day.",
    tags: ["Next.js", "API", "Tailwind"],
    githubUrl: "#",
  },
  {
    id: "mini-3",
    name: "Algorithm Visualizer",
    description: "Interactive visualizer for sorting and pathfinding algorithms.",
    tags: ["TypeScript", "Canvas"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: "mini-4",
    name: "Crypto Tracker",
    description: "Lightweight dashboard to track top 50 cryptocurrencies using WebSockets.",
    tags: ["Vue", "WebSockets"],
    githubUrl: "#",
  },
  {
    id: "mini-5",
    name: "Markdown Editor",
    description: "In-browser markdown editor with live preview and syntax highlighting.",
    tags: ["React", "CodeMirror"],
    githubUrl: "#",
    liveUrl: "#"
  }
];
