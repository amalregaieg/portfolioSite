export interface EducationItem {
  id: string;
  type: 'education' | 'certification';
  title: string;
  institution: string;
  period: string;
  description: string;
  skills: string[];
  credentialId?: string;
  verificationUrl?: string;
}

export const educationData: EducationItem[] = [
  {
    id: "engineering-degree",
    type: "education",
    title: "Diplôme National d'Ingénieur en Informatique et Technologies du Multimédia et du Web",
    institution: "Institut Supérieur d'Informatique et de Multimédia de Sfax (ISIMS)",
    period: "2015 – 2018",
    description: "Engineering degree focused on software engineering, web architecture, database systems and multimedia technologies.",
    skills: ["Software Engineering", "Web Architecture", "Database Systems", "Object-Oriented Design", "Algorithms & Data Structures"]
  },
  {
    id: "licence-multimedia-web",
    type: "education",
    title: "Licence Appliquée en Technologies du Multimédia et du Web",
    institution: "Institut Supérieur d'Informatique et de Multimédia de Sfax (ISIMS)",
    period: "2012 – 2015",
    description: "Applied bachelor's degree covering web and multimedia technologies, programming fundamentals and design.",
    skills: ["Web Development", "Multimedia Technologies", "Programming Fundamentals", "UI Design"]
  },
  {
    id: "baccalaureat-informatique",
    type: "education",
    title: "Baccalauréat en Informatique",
    institution: "Lycée Majida Boulila, Sfax",
    period: "2012",
    description: "High school diploma with a specialization in computer science.",
    skills: ["Computer Science Fundamentals", "Algorithmic Thinking"]
  },
  {
    id: "scrum-master-sm1",
    type: "certification",
    title: "Scrum Master (SM1)",
    institution: "Certified Agile Credential",
    period: "Certified",
    description: "Professional certification validating understanding of Agile software development, the Scrum framework, team facilitation and sprint management.",
    skills: ["Scrum Framework", "Agile Leadership", "Sprint Planning", "Team Facilitation"]
  }
];
