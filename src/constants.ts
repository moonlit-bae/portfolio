import { ProjectType } from "./types/project";

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const linksInfo = [
  { title: "About", path: "#about" },
  { title: "Skills", path: "#skills" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" }
];

export const projectsData: ProjectType[] = [
  {
    imgSrc: "src/assets/ukrify.png",
    imgAlt: "Anime Tracker application banner",
    number: 1,
    title: "AniTrack - Desktop Anime Tracker",
    description:
      "A desktop application powered by the AniList API that lets you keep track of your anime watchlist with precision. Know exactly when the next episode of your favorite ongoing series drops, get notified about schedule changes, and manage your entire watch history from one place. The app syncs with your AniList account, displays airing countdowns, episode release dates, and lets you mark episodes as watched — all without opening a browser.",
    demo: "https://github.com/moonlit-bae",
    github: "https://github.com/moonlit-bae",
    technologies: [
      "Python",
      "PostgreSQL",
      "HTML",
      "React",
      "CSS"
    ],
    ariaLabel: {
      demo: "View AniTrack project on GitHub",
      github: "View AniTrack project source code on GitHub"
    }
  },
  {
    imgSrc: "src/assets/quickquiz1.png",
    imgAlt: "Discord bot project screenshot",
    number: 2,
    title: "SentinelBot - Discord Moderation Bot",
    description:
      "A fully-featured Discord moderation and utility bot built to make server management effortless. SentinelBot handles auto-moderation — catching spam, flagging toxic messages, and issuing warnings automatically. It includes a leveling system that rewards active members, custom welcome messages, role assignment on join, and slash-command support throughout. Server admins can configure every behavior through a clean dashboard without touching a single line of code.",
    demo: "https://github.com/moonlit-bae",
    github: "https://github.com/moonlit-bae",
    technologies: [
      "Node.js",
      "Discord.js",
      "MongoDB",
      "REST API",
      "JavaScript"
    ],
    ariaLabel: {
      demo: "View SentinelBot project on GitHub",
      github: "View SentinelBot project source code on GitHub"
    }
  },
  {
    imgSrc: "src/assets/resumeLight.png",
    imgAlt: "Dev Portfolio project screenshot",
    number: 3,
    title: "DevFolio - Minimal Portfolio Builder",
    description:
      "A web app that lets developers generate a clean, deployable portfolio site in minutes by filling out a structured form — no design skills needed. You input your bio, tech stack, projects, and social links; DevFolio spits out a fully responsive, statically generated site ready to push to GitHub Pages. Under the hood it uses a template engine with theming support, so users can pick from a handful of professionally designed looks without touching CSS.",
    demo: "https://github.com/moonlit-bae",
    github: "https://github.com/moonlit-bae",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Node.js"],
    ariaLabel: {
      demo: "View DevFolio live demo",
      github: "View DevFolio project source code on GitHub"
    }
  },
  {
    imgSrc: "src/assets/portfolio.png",
    imgAlt: "Portfolio website screenshot",
    number: 4,
    title: "Portfolio - recursion",
    description:
      "This portfolio site is a project in itself — a professional hub that showcases my work, skills, and journey as a Full Stack Developer. Built with React and TypeScript, it features smooth animations, a fully responsive layout, dark sections, and a clean typographic design. The fact that you're looking at it right now proves it works.",
    demo: "https://github.com/moonlit-bae",
    github: "https://github.com/moonlit-bae",
    technologies: ["React", "Tailwind CSS", "TypeScript", "Vite"],
    ariaLabel: {
      demo: "View Portfolio live demo",
      github: "View Portfolio project source code on GitHub"
    }
  }
];
