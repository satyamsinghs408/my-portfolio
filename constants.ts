
export const METADATA = {
  title: "Portfolio | Satyam Singh",
  description:
    "Full Stack Developer proficient in designing, developing, and deploying scalable web applications using React.js, Node.js, Express.js, and MongoDB.",
  siteUrl: "https://satyamsingh.vercel.app/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "Full Stack Developer",
  "MERN Stack Expert",
  "React.js & Node.js Enthusiast",
  "Scalable System Architect",
];

export const EMAIL = "satyamsinghs408@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/satyam-singh-020178245/",
  github: "https://github.com/satyamsinghs408",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Resume Builder",
    image: "/projects/huminos.jpg",
    blurImage: "/projects/blur/huminos-blur.jpg",
    description: "Interactive resume builder with live preview and PDF export.",
    gradient: ["#000066", "#6699FF"],
    url: "https://github.com/satyamsinghs408/",
    tech: ["react", "next", "typescript", "tailwind", "html", "css"],
  },
  {
    name: "File Converter",
    image: "/projects/dlt-website.jpg",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "Lightweight tool to convert images to PDF using client-side rendering.",
    gradient: ["#245B57", "#004741"],
    url: "https://imgpdfhub.com/",
    tech: ["react", "express", "javascript", "html", "css"],
  },
  {
    name: "IgniteVerse",
    image: "/projects/figgen.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Full-stack test and evaluation platform with real-time analytics.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://igniteverse.in/",
    tech: ["react", "node", "express", "mongodb", "javascript", "tailwind"],
  },
  {
    name: "MeetUp Web App",
    image: "/projects/myokr.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "Event management platform with JWT authentication and role-based access.",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://github.com/satyamsinghs408/",
    tech: ["react", "redux", "node", "express", "javascript", "tailwind"],
  },
];

export const SKILLS = {
  frontend: [
    "html",
    "css",
    "tailwind",
    "react",
    "redux",
    "javascript",
    "typescript",
  ],
  backend: [
    "node",
    "express",
    "mongodb",
  ],
  other: ["git", "github", "postman", "vscode"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2025",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Full Stack Developer",
    size: ItemSize.SMALL,
    subtitle:
      "Full Time @ SmartITBox. Architecting scalability-focused web solutions using Next.js and Microservices.",
    slideImage: "/timeline/smartitbox.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Software Intern",
    size: ItemSize.SMALL,
    subtitle:
      "Internship @ SmartITBox. Contributed to 3+ major client projects and optimized backend performance.",
    slideImage: "/timeline/smartitbox.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Full Stack Certification",
    size: ItemSize.SMALL,
    subtitle:
      "Certified Full Stack Web Developer from EXL. Mastered modern web technologies and best practices.",
    slideImage: "/timeline/exl.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Graduated B.Tech (CSE)",
    size: ItemSize.SMALL,
    subtitle:
      "Completed B.Tech in Computer Science from Babu Banarasi Das University Lucknow UP.",
    slideImage: "/timeline/graduation.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Freelance Developer",
    size: ItemSize.SMALL,
    subtitle:
      "Built diverse web applications for clients, focusing on React and Node.js ecosystems.",
    slideImage: "/timeline/freelance.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "B.Tech Admission",
    size: ItemSize.SMALL,
    subtitle:
      "Started journey in B.Tech (Computer Science & Engineering). Focused on Modern Web development.",
    slideImage: "/timeline/bbdu.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Diploma Completed",
    size: ItemSize.SMALL,
    subtitle:
      "Graduated with Diploma in Computer Science. Built strong foundation in programming basics.",
    slideImage: "/timeline/diploma.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2018",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Polytechnic Diploma",
    size: ItemSize.SMALL,
    subtitle:
      "Enrolled in 3-year Polytechnic Diploma in Computer Science. Started coding journey with C/C++.",
    slideImage: "/timeline/diploma.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-XXXXXXXXX-1";
