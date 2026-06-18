export interface ProjectMeta {
  id: string;
  name: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  repoName: string;
  details?: {
    overview: string;
    features: string[];
    technicalHighlights: string[];
    gallery: string[];
  };
}

export const featuredProjects = [
  {
    repo: "event_planner",
    // Optional overrides
    // name: "Custom Event Planner",
    // description: "A custom description",
    // image: "https://my-custom-image.png"
  },
  {
    repo: "space_tourism",
  },
];

export const otherProjects = [
  {
    id: "mini-1",
    name: "Terminal Portfolio",
    description:
      "A command-line inspired portfolio interface built for developers.",
    tags: ["React", "CSS", "Vite"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "mini-2",
    name: "Weather Dashboard",
    description:
      "Real-time weather tracking with beautiful dynamic gradients based on time of day.",
    tags: ["Next.js", "API", "Tailwind"],
    githubUrl: "#",
  },
  {
    id: "mini-3",
    name: "Algorithm Visualizer",
    description:
      "Interactive visualizer for sorting and pathfinding algorithms.",
    tags: ["TypeScript", "Canvas"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "mini-4",
    name: "Crypto Tracker",
    description:
      "Lightweight dashboard to track top 50 cryptocurrencies using WebSockets.",
    tags: ["Vue", "WebSockets"],
    githubUrl: "#",
  },
  {
    id: "mini-5",
    name: "Markdown Editor",
    description:
      "In-browser markdown editor with live preview and syntax highlighting.",
    tags: ["React", "CodeMirror"],
    githubUrl: "#",
    liveUrl: "#",
  },
];
