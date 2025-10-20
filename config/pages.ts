import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Dinier Ferreto portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Dinier Ferreto key skills that define his professional identity.",
    },
  },
  experience: {
    title: "Experience",
    description: "Highlighting career journey and impactful projects.",
    metadata: {
      title: "Experience",
      description: "Dinier Ferreto experience in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Dinier Ferreto .",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description:
        "Dinier Ferreto open-source contributions and community involvement.",
    },
    
  },
  resume: {
    title: "Resume",
    description: "Dinier Ferreto resume.",
    metadata: {
      title: "Resume",
      description: "Dinier Ferreto resume.",
    },
  },
  career: {
    title: "Career Timeline",
    description: "Professional journey and experience timeline.",
    metadata: {
      title: "Career Timeline",
      description: "Dinier Ferreto professional journey and career timeline.",
    },
  },
    certifications: {
    title: "Certifications",
    description: "A few certifications",
    metadata: {
      title: "Certifications",
      description:
        "Dinier Ferreto Certifications.",
    },
  },
};
