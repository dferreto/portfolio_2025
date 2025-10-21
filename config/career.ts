import { ValidSkills } from "./constants";

export interface CareerExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const careerExperiences: CareerExperienceInterface[] = [
  {
    id: "Developer-IT-Delfixcr",
    position: "IT Developer",
    company: "Delfixcr",
    location: "Costa Rica",
    startDate: new Date("2025-05-03T12:00:00"), // Junio 3, 2025
    endDate: new Date("2025-10-20"), // Octubre 20, 2025
    description: [
      "Maintain and support the Odoo ERP system, including user assistance and configuration of modules like inventory, sales, invoicing, and accounting.",
      "Develop and troubleshoot custom Python scripts to resolve technical issues and enhance Odoo functionality.",
      "Customize Odoo workflows and reports to adapt the ERP system to specific business processes and improve operational efficiency.",
      "Integrate Odoo with third-party applications and APIs to streamline data exchange and automate business tasks.",
    ],
    achievements: [
      "Led support, customization, and integration efforts for Odoo ERP, improving business process automation and user satisfaction.",
      "Resolved complex issues through Python development, enhancing system reliability and user experience.",
    ],
    skills: ["Odoo", "Accounting", "Python"],
    companyUrl: undefined,
    logo: undefined,
  },
  {
    id: "caldera-port-assistant",
    position: "IT Support Engineer",
    company: "Sociedad Portuaria de Caldera",
    location: "Costa Rica",
    startDate: new Date("2024-12-01T12:00:00"),
    endDate: new Date("2025-05-01"),
    description: [
      "Provide technical support to an average of 30 to 50 users weekly, resolving issues related to operating systems, applications, and connectivity with a maximum response time of 2 hours per case.",
      "Manage and update the inventory of 100 IT equipment, ensuring 100% of technological assets are properly documented and maintenance is tracked.",
      "Participate in 2 to 3 technological projects (such as system migrations or tool implementations), achieving 90% of milestones on schedule and coordinating with interdisciplinary teams for successful execution.",
    ],
    achievements: [
      "Maintained high user satisfaction by delivering timely technical support.",
      "Ensured full documentation and maintenance tracking of all IT assets.",
      "Contributed to successful delivery of multiple tech projects meeting key deadlines.",
    ],
    skills: [
      "Windows Server",
      "Cisco Networking",
      "VirtualBox",
      "Android Studio",
      "Technical Support",
      "Inventory Management",
      "Project Coordination",
    ],
    companyUrl: undefined,
    logo: undefined,
  },

  {
    id: "graduation-project",
    position: "Full Stack Developer | Graduation Project",
    company: "Universidad Técnica Nacional",
    location: "Costa Rica",
    startDate: new Date("2024-01-01T12:00:00"),
    endDate: new Date("2024-05-01"),
    description: [
      "Design, implement, and optimize up to 3 NoSQL databases (MongoDB) monthly, modeling schemas for users, appointments, and professionals, achieving 99.9% availability and response times under 100 ms for critical queries through indexing strategies.",
      "Develop and maintain 5-10 RESTful APIs (Node.js/Express) quarterly, ensuring 100% coverage in JWT authentication, data validation, and CRUD operations, with 99.5% uptime and latency below 200 ms per request.",
    ],
    achievements: [
      "Achieved high availability and performance in critical databases with optimized indexes.",
      "Ensured security and efficiency in RESTful APIs with full coverage of authentication and validation.",
    ],
    skills: ["MongoDB", "Node.js", "express.js", "JWT", "RESTful APIs"],
    companyUrl: undefined,
    logo: undefined,
  },
];
