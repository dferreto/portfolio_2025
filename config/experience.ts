import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ExperienceInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [
  {
    id: "music-sound",
    companyName: "MusicSound",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Developed a comprehensive music streaming platform with podcast support, serving over 4000+ users with advanced features including user authentication, music playback, playlist management, and podcast streaming.",
    githubLink: "https://github.com/Anarodme/musicsound",
    techStack: [
      "Angular",
      "Node.js",
      "Django",
      "SQL",
      "CSS 3",
      "Typescript",
      "HTML 5",
    ],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-04-30"),
    companyLogoImg: "/experience/musicsound/msc1_logo.png",

    pagesInfoArr: [
      {
        title: "Landing Page & Authentication",
        description:
          "Modern landing page featuring artist showcases (Red Hot Chili Peppers, Michael Jackson, Karol G, Dread Mar-I) with integrated login/registration system",
        imgArr: [
          "/experience/musicsound/msc1.jpg",
          "/experience/musicsound/msc2.jpg",
          "/experience/musicsound/msc3.jpg",
        ],
      },
      {
        title: "User Dashboard & Music Library",
        description:
          "Complete user profile management with music library featuring album browsing, track listings, and playlist creation",
        imgArr: [
          "/experience/musicsound/msc4.jpg",
          "/experience/musicsound/msc5.jpg",
          "/experience/musicsound/msc6.jpg",
        ],
      },
      {
        title: "Podcast Platform & Media Player",
        description:
          "Comprehensive podcast streaming with categorized content (Documentaries, Comedy, Education, Gaming) and advanced media player with playlist functionality",
        imgArr: [
          "/experience/musicsound/msc7.jpg",
          "/experience/musicsound/msc8.jpg",
          "/experience/musicsound/msc9.jpg",
        ],
      },
      {
        title: "Premium Subscription & Payment System",
        description:
          "Premium subscription management with pricing tiers, secure payment processing, and feature comparison between Free and Premium plans",
        imgArr: [
          "/experience/musicsound/msc13.jpg",
          "/experience/musicsound/msc14.jpg",
        ],
      },
      {
        title: "Advanced Music Player & Audio Experience",
        description:
          "High-quality music streaming interface featuring Red Hot Chili Peppers' Blood Sugar album with advanced playback controls, album artwork, and audio progress tracking",
        imgArr: ["/experience/musicsound/msc10.jpg"],
      },
      {
        title: "Podcast Creation & Management Suite",
        description:
          "Complete podcast creation tools including episode editing, metadata management, category selection, cover art upload, and recording studio interface",
        imgArr: [
          "/experience/musicsound/msc11.jpg",
          "/experience/musicsound/msc12.jpg",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "MusicSound represents a full-scale music streaming platform that I architected and developed to compete with industry leaders like Spotify and Apple Music. The platform successfully serves over 4,000 active users with a comprehensive suite of features including music streaming, podcast hosting, premium subscriptions, and social music discovery.",

        "The frontend was built using Angular with TypeScript, creating a responsive and intuitive user interface that adapts seamlessly across desktop and mobile devices. I implemented advanced features such as real-time music playback, dynamic playlist management, premium subscription tiers, and a sophisticated search system that allows users to discover music by artists, albums, or genres.",

        "On the backend, I utilized a hybrid architecture combining Node.js for real-time streaming capabilities and Django for robust data management, user authentication, and payment processing. The SQL database was optimized for high-performance queries, ensuring fast load times even with large music catalogs and user bases, while supporting complex subscription management and billing systems.",

        "The platform includes a comprehensive podcast ecosystem with content categorization, creator tools for podcast management, recording studio capabilities, and advanced playback features. I also implemented a premium subscription model with secure payment processing, tiered access to exclusive content, enhanced streaming quality, and ad-free listening experiences.",
      ],
      bullets: [
        "Architected and developed a full-scale music streaming platform serving 4,000+ active users",
        "Implemented real-time music streaming with advanced playlist and library management",
        "Built comprehensive podcast platform with content creation, recording, and categorization tools",
        "Designed premium subscription system with secure payment processing and tiered access controls",
        "Created responsive UI/UX with multi-device support and premium vs free feature differentiation",
        "Developed hybrid backend architecture using Node.js and Django for optimal performance",
        "Integrated secure user authentication with profile management and subscription billing",
        "Optimized SQL database queries for fast music catalog browsing and search functionality",
        "Created admin dashboard for content management, user analytics, and subscription monitoring",
        "Implemented advanced media player with high-quality audio streaming and playback controls",
        "Built podcast creation suite with upload, editing, recording, and distribution capabilities",
        "Developed payment gateway integration with subscription management and automated billing",
      ],
    },
  },
  {
    id: "magic-hotel",
    companyName: "Magic hotel App",
    type: "Personal Project",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Modern dark-themed landing page showcasing property discovery with search functionality, architectural imagery, and impressive statistics (9,000+ premium products, 2,000+ happy customers, 28+ awards)",
    githubLink: "https://github.com/Anarodme/Magic-Hotel-Website",
    techStack: ["Javascript", "CSS 3", "HTML 5"],
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-04-30"),
    companyLogoImg: "/experience/magic-hotel/app_logo.png",
    pagesInfoArr: [
      {
        title: "Hero Landing Page",
        description:
          "Modern and responsive landing page showcasing featured properties",

        imgArr: ["/experience/magic-hotel/app_1.png"],
      },
      {
        title: "Popular Residencies Section",
        description:
          "Interactive property showcase featuring premium accommodations: Ocean View Suite ($175), Beachfront Villa ($320), Rainforest Retreat ($280), and Golf Terrace Suite ($425) with carousel navigation",
        imgArr: ["/experience/magic-hotel/app_2.png"],
      },

      {
        title: "Our Value",
        description:
          "Interactive value proposition section with expandable accordion features highlighting best interest rates, price stability, and market advantages",
        imgArr: ["/experience/magic-hotel/app_3.png"],
      },
      {
        title: "Contact",
        description:
          "Multi-channel contact hub offering call (2428-8713), chat (8822-4533), video call, and messaging options with modern card design",
        imgArr: ["/experience/magic-hotel/app_4.png"],
      },
      {
        title: "Landing page information web page",
        description:
          "Full-featured hotel booking website with modern design, property discovery, and comprehensive booking system",
        imgArr: ["/experience/magic-hotel/app_5.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The Magic Hotel App represents a sophisticated approach to modern hospitality web design, combining cutting-edge aesthetics with functional property discovery features. Built with a focus on user experience, the website showcases premium accommodations through a carefully crafted dark theme that emphasizes luxury and exclusivity.",
        "The application features a robust property showcase system with interactive carousel navigation, allowing users to explore different accommodation types from oceanfront suites to rainforest retreats. Each property is presented with transparent pricing ranging from $175 to $425, detailed descriptions, and high-quality imagery.",
        "One of the key highlights is the interactive value proposition section, which uses an innovative accordion-style interface to present the company's key benefits including best interest rates, price stability, and market advantages. This approach allows users to explore detailed information without overwhelming the initial view.",
        "The website's architecture emphasizes modern web development practices, utilizing responsive design principles and smooth animations throughout the interface. The multi-channel contact system provides comprehensive communication options including phone, chat, video calls, and messaging for optimal user accessibility.",
      ],
      bullets: [
        "Implemented modern dark theme with carefully selected color palette and orange accents",
        "Developed responsive property discovery system with interactive search functionality",
        "Created dynamic property carousel showcasing 4+ accommodation types with transparent pricing",
        "Built interactive accordion-style value proposition section with smooth animations",
        "Integrated comprehensive contact system with multiple communication channels",
        "Incorporated trusted partner logos (Prologis, American Tower, Equinix, Digital Realty)",
        "Designed mobile-first responsive layout optimized for all device sizes",
        "Implemented smooth micro-interactions and hover effects for enhanced user experience",
        "Applied semantic HTML structure and modern CSS techniques for optimal performance",
      ],
    },
  },
  {
    id: "shopping-market",
    companyName: "Shopping Market",
    type: "Personal Project",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Crafted Builtdesign's vibrant Blogs Website using Netlify CMS and React for engaging content experiences.",
    websiteLink: "https://shopping-market-drab.vercel.app/",
    techStack: ["Javascript", "React", "Tailwind", "HTML 5"],
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-05-01"),
    companyLogoImg: "/experience/shopping-market/web_logo.png",
    pagesInfoArr: [
      {
        title: "Homepage & Hero Section",
        description:
          "Modern green-themed homepage featuring delicious salad promotions, fresh vegetable showcases, and key value propositions including Healthy Food, Home Made, 100% Natural, and Fast Delivery services",
        imgArr: ["/experience/shopping-market/web_1.png"],
      },
      {
        title: "Featured Products Catalog",
        description:
          "Interactive product showcase displaying organic items including Dried Raspberries, Tomato 100%, Whole Tomatoes, and Capsicum, all priced at 100.25$ with selection options and carousel navigation",
        imgArr: ["/experience/shopping-market/web_2.png"],
      },
      {
        title: "Product Categories & Promotions",
        description:
          "Diverse product sections with promotional banners, including fresh fruits, dairy alternatives like Oat milk (100% Whole Oats), and various organic food categories with call-to-action buttons",
        imgArr: ["/experience/shopping-market/web_3.png"],
      },
      {
        title: "Top sell products",
        description: "Diverse sell products sections with their prices ",
        imgArr: ["/experience/shopping-market/web_4.png"],
      },
      {
        title: "Landing information page",
        description: "Diverse information that customers love us. ",
        imgArr: ["/experience/shopping-market/web_5.png"],
      },
      {
        title: "Interactive information page",
        description: "Minimal and user-friendly information page",
        imgArr: ["/experience/shopping-market/web_6.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The Vegetarian Cuisine website represents a comprehensive e-commerce solution designed specifically for health-conscious consumers seeking organic and vegetarian food products. Built with a fresh, nature-inspired green color scheme, the website emphasizes the natural and healthy aspects of vegetarian cuisine through carefully curated visual elements and product presentations.",
        "The application features a robust product catalog system with interactive elements, allowing users to browse through various categories of organic foods, from fresh vegetables and fruits to processed items like dried berries and canned tomatoes. Each product is presented with clear pricing (standardized at 100.25$) and selection options, creating a consistent shopping experience.",
        "One of the key highlights is the comprehensive value proposition section that emphasizes four core pillars: Healthy Food, Home Made quality, 100% Natural ingredients, and Fast Delivery service. This strategic positioning helps build trust with health-conscious consumers who prioritize quality and authenticity in their food choices.",
        "The website's architecture emphasizes user experience through intuitive navigation, prominent search functionality, and clear contact information (+009 000 000). The design incorporates modern e-commerce best practices including wishlist functionality, shopping cart integration, and responsive design principles for optimal performance across all devices.",
      ],
      bullets: [
        "Implemented fresh green color scheme with nature-inspired design elements",
        "Developed comprehensive product catalog with interactive selection options",
        "Created promotional banner system featuring 'Delicious Salad Everyday' campaigns",
        "Built carousel-based product showcase with navigation controls",
        "Integrated shopping cart functionality with wishlist and user account features",
        "Designed four-pillar value proposition (Healthy, Home Made, Natural, Fast Delivery)",
        "Implemented product search functionality with department-based filtering",
        "Applied responsive design principles for mobile and desktop optimization",
        "Incorporated high-quality food photography and appetizing visual presentations",
      ],
    },
  },
  {
    id: "portfolio",
    companyName: "Portfolio",
    type: "Professional",
    category: ["Web Dev", "Frontend", "3D Modeling"],
    shortDescription:
      "Developed a personalized portfolio card using React for a third party, blending interactive design and modern web technologies.",
    githubLink: "http://github.com/Anarodme/mariarodme",
    techStack: ["React", "Javascript", "HTML 5", "CSS 3"],
    startDate: new Date("2024-05-01"),
    endDate: new Date("2024-07-01"),
    companyLogoImg: "/experience/card/portfolio.png",

    pagesInfoArr: [
      {
        title: "Porfolio Views",
        description: "Front and back views of the interactive portfolio",
        imgArr: ["/experience/card/portfolio.png"],
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "This project involved the creation of a custom 3D interactive portfolio card developed for another professional. The goal was to deliver a unique and engaging web-based portfolio using modern frontend technologies.",
        "The card was brought to life as a rotating 3D model, built with Three.js and Blender. Lighting effects and animations were applied to create a visually immersive experience.",
        "As the developer, I integrated interactive elements and embedded personalized links directly into the 3D model surface. The card responds to user input, allowing intuitive rotation and exploration.",
        "The project showcases not only creative and technical skills but also the ability to deliver tailored solutions for a client in need of a standout digital presence.",
      ],

      bullets: [
        "Designed and developed a client-focused portfolio card using React, HTML, JavaScript, and CSS.",
        "Implemented a 3D model using Three.js and Blender, applying lighting and smooth animations.",
        "Integrated interactive components and custom links within the model's structure.",
        "Enabled automatic rotation and user-controlled drag-to-rotate interaction.",
        "Delivered a unique digital portfolio for a third party, combining creativity with technical execution.",
      ],
    },
  },

  {
    id: "acme-dashboard",
    companyName: "Acme Dashboard",
    type: "Personal Project",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Created a dashboard project using NextJs and Tailwind CSS, focusing on UI design and routing implementation.",
    websiteLink:
      "https://dashboard-next-r0f91pg8n-anarodmes-projects.vercel.app/",
    techStack: ["Next.js", "Tailwind CSS"],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-02-15"),
    companyLogoImg: "/experience/acme/hero-desktop.png",
    pagesInfoArr: [
      {
        title: "Dashboard Home",
        description:
          "Main dashboard view with analytics widgets and data visualization",
        imgArr: ["/experience/acme/acme2.png", "/experience/acme/acme3.png"],
      },
      {
        title: "Profile Page",
        description:
          "User profile management interface with customization options",
        imgArr: ["/experience/acme/acme4.png", "/experience/acme/acme5.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "For the 'Acme Dashboard' personal project, I aimed to enhance my UI design skills and deepen my understanding of routing within a NextJS application.",
        "I utilized NextJs and Tailwind CSS to craft an intuitive dashboard interface that provides users with an organized overview of data and functionalities. The UI components were thoughtfully designed to ensure a seamless user experience.",
        "The routing system was meticulously implemented to enable smooth navigation between different sections of the dashboard, simulating real-world use cases.",
        "Through this project, I've gained valuable insights into UI/UX design principles and the implementation of secure and efficient routing in React applications.",
      ],
      bullets: [
        "Created a user-friendly dashboard project using React and Tailwind CSS.",
        "Designed UI components to provide an intuitive and visually pleasing experience.",
        "Focused on implementing a smooth routing system to simulate real-world use cases.",
        "Enhanced my skills in UI design, routing, and component architecture.",
      ],
    },
  },
];

export const featuredExperiences = Experiences.slice(0, 3);
