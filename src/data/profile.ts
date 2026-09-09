export interface ProfileData {
  name: string;
  title: string;
  subtitle: string;
  heroDescription: string;
  aboutText: string[];
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  location: string;
  availability: string;
  avatarImage: string;
  highlights: {
    title: string;
    description: string;
    icon: string;
  }[];
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
}

export const profileData: ProfileData = {
  name: "Amal Regaieg",
  title: "Tech Lead Symfony",
  subtitle: "Senior Full-Stack Developer & Scrum Master",
  heroDescription: "I design and build robust, scalable and maintainable web applications and APIs with PHP, Symfony and API Platform — 6+ years of experience, notably in the healthcare sector.",
  aboutText: [
    "I am a web development engineer and Tech Lead Symfony with 6 years of experience designing, developing and maintaining complex web applications, notably in the healthcare sector.",
    "Specialized in PHP 8, Symfony, API Platform and MySQL, I master application architecture, REST API development, third-party integrations (Stripe, Mercure, JWT) and performance optimization.",
    "Certified Scrum Master (SM1), I have taken on technical leadership responsibilities including architecture decisions, code review, developer mentoring and team coordination, while actively supporting Agile collaboration between business and technical teams."
  ],
  email: "amal.regaieg@gmail.com",
  phone: "+216 24 097 563",
  github: "https://github.com/amalregaieg",
  linkedin: "https://www.linkedin.com/in/amal-regaieg/",
  location: "Sfax, Tunisie",
  availability: "Open to Freelance & Tech Lead Opportunities",
  avatarImage: "/images/amal.jpg",
  highlights: [
    {
      title: "Backend Development",
      description: "Robust PHP 8.x development focusing on domain logic, clean OOP patterns, and zero-downtime scalability.",
      icon: "Server"
    },
    {
      title: "Symfony Expertise",
      description: "Mastery of Symfony components and API Platform, Security bundle, Dependency Injection, and Doctrine ORM for complex business applications.",
      icon: "Cpu"
    },
    {
      title: "API Architecture",
      description: "REST API design with API Platform, third-party integrations (Stripe, Mercure, JWT) and performance optimization.",
      icon: "Network"
    },
    {
      title: "Technical Leadership",
      description: "Tech Lead & certified Scrum Master (SM1): architecture decisions, code reviews, developer mentoring and Agile team coordination.",
      icon: "Users"
    }
  ],
  stats: [
    { label: "Experience", value: "6+ Years", subtext: "Web Development & Tech Lead" },
    { label: "Core Stack Focus", value: "PHP 8 / Symfony", subtext: "Backend Specialization" },
    { label: "API Framework", value: "API Platform", subtext: "REST APIs & Integrations" },
    { label: "Certification", value: "Scrum Master SM1", subtext: "Agile Team Leadership" }
  ]
};
