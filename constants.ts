
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
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/",
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
    name: "IgniteVerse",
    image: "/projects/figgen.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Full-stack test and evaluation platform with real-time analytics.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://github.com/",
    tech: ["react", "node", "express", "mongodb", "javascript", "tailwind"],
  },
  {
    name: "MeetUp Web App",
    image: "/projects/myokr.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "Event management platform with JWT authentication and role-based access.",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://github.com/",
    tech: ["react", "redux", "node", "express", "javascript", "tailwind"],
  },
  {
    name: "Image to PDF Converter",
    image: "/projects/dlt-website.jpg",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "Lightweight tool to convert images to PDF using client-side rendering.",
    gradient: ["#245B57", "#004741"],
    url: "https://github.com/",
    tech: ["react", "express", "javascript", "html", "css"],
  },
  {
    name: "Resume Builder",
    image: "/projects/huminos.jpg",
    blurImage: "/projects/blur/huminos-blur.jpg",
    description: "Interactive resume builder with live preview and PDF export.",
    gradient: ["#000066", "#6699FF"],
    url: "https://github.com/",
    tech: ["react", "next", "typescript", "tailwind", "html", "css"],
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
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Frontend Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Frontend Engineer @ DLT Labs. Working on Design Systems and Web3.",
    slideImage: "/timeline/dlt-website.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2020",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Freelance UI Engineer @ Huminos. Redesigned the marketing website.",
    slideImage: "/timeline/huminos-website.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Multimedia Head",
    size: ItemSize.SMALL,
    subtitle:
      "Multimedia Head @ Software Incubator (SDC-SI). Led a team of 10+ designers.",
    slideImage: "/timeline/si-head.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2019",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Student Member",
    size: ItemSize.SMALL,
    subtitle:
      "Student Member @ Software Incubator (SDC-SI). Learned Graphics and Web Dev.",
    slideImage: "/timeline/si-start.jpg",
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
    title: "Collage",
    size: ItemSize.SMALL,
    subtitle: "B.Tech in CS from AKGEC, Ghaziabad.",
    slideImage: "/timeline/akgec.svg",
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
