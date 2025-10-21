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
  endDate: Date | "Present"; 
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr:  PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [
  {
    id: "api-pokemon",
    companyName: "Api Pokemon Mobile",
    type: "Personal Project",
    category: [ "Full Stack", "UI/UX", "Mobile Dev"],
    shortDescription:
      "Users can filter Pokémon by generation or type, and explore individual details such as stats, abilities, and evolutions."
,
    githubLink: "https://github.com/dferreto/exam01-moviles2",
    techStack: [
      "Kotlin",
      "Ruby",
      "JavaScript",
      "Typescript",
      "React Native"
    ],
    startDate: new Date("2024-02-19"),
    endDate: new Date("2024-03-03"),
    companyLogoImg: "/experience/pokemonApp/pokemon-image.jpg",

    pagesInfoArr: [
      {
        title: "Landing App",
        description:
          "Main landing screen of the Pokémon Mobile App showcasing the official logo, generation-based filtering navigation (First to Fifth Gen), and a dynamic list of Pokémon cards. Each card displays the Pokémon's name and image, offering an intuitive interface for browsing and selecting individual Pokémon for further detail.",
        imgArr: [
          "/experience/pokemonApp/inicio.jpeg",
          "/experience/pokemonApp/different season.jpeg",
        ],
      },
      {
        title: "Pokémon Info Screen",
        description:
          "Detailed information screen for individual Pokémon. This view displays the selected Pokémon's sprite, name, Pokédex code, height, and weight. It also categorizes the Pokémon by its types (e.g., Fighting, Steel) and lists available movements. The UI is clean and segmented with consistent styling and responsive components, offering users a structured overview of each Pokémon's attributes.",
        imgArr: [
          "/experience/pokemonApp/infoPokemon.jpeg",
        ],
      },
      
    ],
    descriptionDetails: {
      paragraphs: [
         "Api Pokémon Mobile is an Android application developed in Kotlin, designed to offer users a smooth and visually engaging experience while exploring the vast Pokémon universe through full integration with the PokéAPI. This project was conceived as an intensive practice in native mobile development, combining REST API consumption, responsive design, modern architecture patterns, and a user-centered design approach.",

  "From the main screen, users can access an interactive catalog displaying a dynamic list of Pokémon, each accompanied by its official image, name, and Pokédex number. The navigation system allows easy exploration of individual Pokémon details, including base stats, types, abilities, and evolutions. The app also includes key features such as real-time search by name or number, making it easy to quickly find any Pokémon of interest.",

  "On a technical level, the app makes extensive use of mobile development best practices, including the use of ViewModels to manage state, efficient data consumption using Retrofit, and image handling via Glide. The UI design follows Material Design principles and adapts responsively to different screen sizes, ensuring a consistent experience across phones and tablets.",

  "The project also incorporates features such as error handling for network failures, visual loading states to improve perceived performance, and local caching to enable faster navigation between views. All of this makes Api Pokémon Mobile not just an educational tool for learning modern mobile development, but also a functional app that showcases real-world capabilities for building scalable and maintainable products.",
      ],
      bullets: [
        "Developed a native Android app using Kotlin, fully integrated with the PokéAPI.",
  "Implemented a dynamic and searchable Pokédex catalog with real-time filtering by name or ID.",
  "Designed individual Pokémon detail views displaying stats, types, abilities, and evolutions.",
  "Applied modern architecture patterns using ViewModel for state management and clean UI logic.",
  "Used Retrofit for efficient API communication and Glide for optimized image loading.",
  "Followed Material Design principles to ensure a consistent and responsive user interface.",
  "Included error handling for network failures and implemented visual loading states.",
  "Enabled local data caching to improve performance and provide smoother navigation.",
  "Optimized for mobile and tablet screens, ensuring responsiveness across multiple devices.",
  "Demonstrated real-world app development skills with a focus on scalability and maintainability.",
      ],
    },
  },
  {
    id: "api-rickandmorty",
    companyName: "Rick and Morty App",
    type: "Personal Project",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Web application built with Angular that consumes the Rick and Morty API to display characters, episodes, and locations, featuring routing, pagination, and dynamic search.",
    githubLink: "https://github.com/dferreto/lab07-RickAndMorty",
    techStack: ["Typescript", "SCSS", "HTML 5", "Angular"],
    startDate: new Date("2024-07-15"),
    endDate: new Date("2024-07-29"),
    companyLogoImg: "/experience/api-rickAndmorty/rickLogo.png",
    pagesInfoArr: [
      {
        title: "Character loading screen",
        description:
          "Displays a dynamic list of characters from the Rick and Morty API, including their images, names, species, gender, and status, all in a clean card-based layout.",

        imgArr: ["/experience/api-rickAndmorty/landing.png"],
      },
      {
        title: "Episodes loading screen",
        description:
          "Episodes loading screen displaying a list of Rick and Morty episodes with interactive filtering and carousel navigation for easy browsing.",
         imgArr: ["/experience/api-rickAndmorty/episodes.png",
          "/experience/api-rickAndmorty/filterEpisodes.png"
         ],
      },
      
    ],
    descriptionDetails: {
      paragraphs: [
        "The Rick and Morty App is a web project developed using Angular, designed to provide fans of the show an interactive experience exploring characters, episodes, and locations through the official Rick and Morty API.",
      "This application features a modern, responsive design that ensures usability across devices and incorporates best practices in web development such as modular components, state management, and efficient API consumption.",
      "Users can navigate through comprehensive lists with pagination, apply dynamic search filters, and explore detailed views for each character, episode, and location, all while enjoying smooth animations and intuitive UI patterns.",
      "The project showcases proficiency in TypeScript, SCSS styling, Angular routing, and component-driven architecture, demonstrating the ability to build scalable, maintainable front-end applications."
      ],
      bullets: [
        "Implemented Angular application consuming Rick and Morty API for dynamic data display",
      "Designed clean and responsive UI with card-based layouts for characters and episodes",
      "Developed pagination and filtering mechanisms to handle large datasets efficiently",
      "Integrated routing for seamless navigation between characters, episodes, and locations",
      "Utilized SCSS for modular and maintainable styling with theming support",
      "Ensured cross-device responsiveness and accessibility best practices",
      "Applied Angular best practices including component-driven architecture and state management",
      "Incorporated smooth animations and interactive UI elements for enhanced user experience"
      ],
    },
  },

  

  
];

export const featuredExperiences = Experiences.slice(0, 3);
