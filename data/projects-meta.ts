export interface ProjectMeta {
  id: string;
  name: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  repoName?: string;
  details?: {
    overview: string;
    features: string[];
    technicalHighlights: string[];
    gallery: string[];
  };
}

export const featuredProjects: any[] = [
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
  {
    name: "Esports BT Case Study",
    description:
      "A comprehensive data mining and visual analytics study on esports tournaments, leveraging K-Means clustering to uncover prize...",
    image: "/images/bi-case-study/cover.png",
    tags: [
      "Data Mining",
      "Tableau",
      "Orange",
      "K-Means Clustering",
      "Business Intelligence",
      "Academic BI Project"
    ],
    githubUrl: "",
    details: {
      overview:
        "A comprehensive data mining and visual analytics study on the esports tournament ecosystem (2014-2019). The project leverages K-Means clustering to categorize tournaments and uncover prize distribution trends, providing actionable intelligence for organizers, sponsors, and investors.",
      features: [
        "Analyzed regional patterns and yearly trends in esports prize distributions.",
        "Categorized tournaments into low, medium, and high-tier using K-Means clustering.",
        "Verified clustering models using silhouette analysis for data cohesion.",
        "Formulated actionable business intelligence strategies for event planning, sponsorship allocation, and competitive analysis.",
      ],
      technicalHighlights: [
        "Data Mining & Machine Learning (K-Means Clustering, Silhouette Analysis)",
        "Data Visualization & Analytics (Tableau, Orange)",
        "Business Intelligence & Strategic Consulting",
      ],
      gallery: [
        "/images/bi-case-study/workflow.png",
        "/images/bi-case-study/countries-bar.png",
        "/images/bi-case-study/prize-trend.png",
        "/images/bi-case-study/silhouette.png",
        "/images/bi-case-study/dashboard-1.png",
        "/images/bi-case-study/dashboard-2.png",
        "/images/bi-case-study/prize-dist-box.png",
        "/images/bi-case-study/prize-vs-tourney-scatter.png",
      ],
    },
  },
];

export const otherProjects: any[] = [
  // {
  //   id: "mini-1",
  //   name: "Terminal Portfolio",
  //   description:
  //     "A command-line inspired portfolio interface built for developers.",
  //   tags: ["React", "CSS", "Vite"],
  //   githubUrl: "#",
  //   liveUrl: "#",
  // },
  {
    repo: "Rock-Paper-Scissors",
  },
  {
    repo: "cybite-landing-page",
  },
];
