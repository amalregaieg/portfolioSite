export interface ExperienceItem {
  id: string;
  position: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string; // e.g. "Present" or "2024"
  isCurrent?: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "tech-lead-impactdev",
    position: "Tech Lead Symfony / Scrum Master / Full-Stack Developer",
    company: "Impactdev",
    location: "Sfax, Tunisie",
    startDate: "Feb 2021",
    endDate: "Present",
    isCurrent: true,
    description: "Technical leadership and full-stack development of business-critical web applications for the healthcare sector, combining Tech Lead, Scrum Master and developer responsibilities.",
    responsibilities: [
      "Provided technical leadership and guidance for the development team.",
      "Designed backend architectures using Symfony and API Platform.",
      "Developed and maintained business web applications for the healthcare sector.",
      "Built REST APIs and integrated third-party services (Stripe, Mercure, JWT).",
      "Conducted code reviews, enforced best practices and improved software quality.",
      "Collaborated with product and business teams in an Agile (Scrum) context.",
      "Taught frameworks and PHP to undergraduate students (labs/tutorials)."
    ],
    technologies: [
      "PHP 8",
      "Symfony",
      "API Platform",
      "MySQL",
      "REST API",
      "Stripe",
      "Mercure",
      "JWT",
      "Agile / Scrum",
      "Git"
    ],
    achievements: [
      "Structured Agile ceremonies and Scrum practices as Scrum Master, improving collaboration between business and technical teams.",
      "Strengthened code quality and maintainability across the team through systematic code review and mentoring."
    ]
  },
  {
    id: "enseignante-isaas",
    position: "Enseignante Experte (University Lecturer)",
    company: "ISAAS",
    location: "Sfax, Tunisie",
    startDate: "Sep 2022",
    endDate: "Aug 2023",
    isCurrent: false,
    description: "Taught web development frameworks and PHP to undergraduate students, and chaired jury panels for end-of-study projects.",
    responsibilities: [
      "Delivered lectures and tutorials on web frameworks for 3rd-year Licence students (1st semester).",
      "Delivered lectures and labs on PHP for 2nd-year Licence students (2nd semester).",
      "Chaired jury panels for end-of-study (graduation) projects."
    ],
    technologies: ["PHP", "Web Frameworks", "Teaching", "Academic Mentoring"]
  },
  {
    id: "php-symfony-minduos",
    position: "Développeuse PHP / Symfony",
    company: "Minduos",
    location: "Sfax, Tunisie",
    startDate: "Dec 2019",
    endDate: "Aug 2020",
    isCurrent: false,
    description: "Development of business management and CRM applications, as well as showcase, e-commerce and e-catalog websites for clients.",
    responsibilities: [
      "Developed business management and CRM applications.",
      "Built showcase websites, e-commerce and e-catalog platforms (WordPress, PrestaShop).",
      "Developed web applications with Laravel and Symfony.",
      "Analyzed client requirements and contributed to technical specifications."
    ],
    technologies: ["PHP", "Symfony", "Laravel", "WordPress", "PrestaShop", "MySQL"]
  },
  {
    id: "php-zend-ict",
    position: "Développeuse PHP / Zend",
    company: "ICT (Innovation Computer Technology)",
    location: "Sfax, Tunisie",
    startDate: "Aug 2018",
    endDate: "Jun 2019",
    isCurrent: false,
    description: "Development and maintenance of business management and CRM applications built on the Zend Framework.",
    responsibilities: [
      "Developed business management and CRM applications.",
      "Analyzed requirements and wrote technical documentation.",
      "Maintained and evolved existing applications."
    ],
    technologies: ["PHP", "Zend Framework", "MySQL"]
  }
];
