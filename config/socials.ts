import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@dferreto",
    icon: Icons.gitHub,
    link: "https://github.com/dferreto",
  },
  {
    name: "LinkedIn",
    username: "Dinier Ferreto Moraga",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/dferreto/",
  },

  {
    name: "Gmail",
    username: "dferreto",
    icon: Icons.gmail,
    link: "mailto:ferretomoraga22@outlook.com",
  },
];
