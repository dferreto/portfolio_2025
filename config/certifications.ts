export interface certificationsInterface {
  repo: string;
  certificationDescription: string;
  repoOwner: string;
  link: string;
}

export const certificationsUnsorted: certificationsInterface[] = [
  {
    repo: "Python Essentials ",
    certificationDescription: "Python Essentials 1",
    repoOwner: "Cisco",
    link: "https://www.credly.com/badges/1a683e07-8aa9-4827-8261-35f082b73917/linked_in_profile", // enlace referencial al curso base
  },
  {
    repo: "Data Science",
    certificationDescription: "Introduction to Data Science",
    repoOwner: "Cisco",
    link: "https://www.credly.com/badges/398522f7-f124-4de3-8567-c7d29bc972ed", // ejemplo referencial
  },
  {
    repo: "Networking Academy Learn-A-Thon 2023",
    certificationDescription: "Networking Academy Learn-A-Thon 2023",
    repoOwner: "Cisco",
    link: "https://www.credly.com/badges/e8a17f1d-fc53-4075-a18a-bb4a8a880372", // ejemplo referencial
  },
  {
    repo: "CCNA: Switching Essentials",
    certificationDescription:
      "CCNA: Switching, Routing, and Wireless Essentials",
    repoOwner: "Cisco",
    link: "https://www.credly.com/badges/252bb9f9-c4e1-4409-ab21-3848e4d298ae", // ejemplo referencial
  },
  {
    repo: "CCNA: Enterprise Networking",
    certificationDescription: "CCNA: Enterprise Networking, Security, and Automation",
    repoOwner: "Microsoft",
    link: "https://www.credly.com/badges/a10ff650-0f5b-42d0-8e74-9fdde18d3bb5", // ejemplo referencial
  },
  {
    repo: "EF SET English ",
    certificationDescription:
      "EF SET English Certificate 52/100 (B2 Upper Intermediate)",
    repoOwner: "EF SET",
    link: "https://cert.efset.org/en/7vvZ3f", // ejemplo referencial
  },
];

export const featuredCertifications: certificationsInterface[] =
  certificationsUnsorted.slice(0, 3);
