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
    title: "Engineering Degree in Computer Multimedia and Web",
    institution: "Institut Supérieur d’Informatique et de Multimédia de Sfax (ISIMS)",
    period: "Higher Education Degree",
    description: "Comprehensive software engineering curriculum focusing on advanced web architectures, object-oriented programming, algorithms, database systems, and software engineering methodologies.",
    skills: ["Software Engineering", "Web Architecture", "Database Systems", "Object-Oriented Design", "Algorithms & Data Structures"]
  },
  {
    id: "scrum-master-sm1",
    type: "certification",
    title: "Scrum Master (PSM I / SM1)",
    institution: "Scrum.org",
    period: "Certified",
    description: "Professional certification validating deep understanding of Agile software development, Scrum framework principles, team facilitation, sprint management, and empirical process control.",
    skills: ["Scrum Framework", "Agile Leadership", "Sprint Planning", "Backlog Refinement", "Empirical Process Control"]
  }
];
