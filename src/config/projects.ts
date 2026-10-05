export interface ProjectStats {
  contributors: number;
  issues: number;
  stars: number;
  forks: number;
}

export interface Project {
  id: string;
  title: string;
  repoName: string;
  repoUrl: string;
  scope?: string;
  description?: string;
  result?: string;
  cardDescription: string;
  stats: ProjectStats;
  hasDetailedSection?: boolean;
}

export const projects: Project[] = [
  {
    id: "mediping-ai",
    title: "MediPing AI",
    repoName: "jayantsingh213/MediPingAI",
    repoUrl: "https://github.com/jayantsingh213/MediPingAI",
    scope: "A smart, location-based medicine discovery platform designed to simplify access to essential medicines.",
    description: "Developed a web-based solution using React.js, Node.js, MongoDB, Socket.io, and Google Maps API to help users discover medicine availability and nearby pharmacies.",
    result: "Designed a technology-driven approach to reduce the time and effort required to locate essential medicines.",
    cardDescription: "MediPing AI is a web-based platform that helps users quickly find medicines available at nearby pharmacies. Users can search for a medicine, receive real-time availability updates from registered p…",
    stats: {
      contributors: 1,
      issues: 0,
      stars: 0,
      forks: 0,
    },
    hasDetailedSection: true,
  },
  {
    id: "electranet",
    title: "ElectraNet",
    repoName: "jayantsingh213/ElectraNet",
    repoUrl: "https://github.com/jayantsingh213/ElectraNet",
    scope: "An interactive election intelligence platform designed to simplify election processes and promote informed participation.",
    description: "Developed an intelligent election assistant and interactive dashboard that helps users understand election procedures, important timelines, and step-by-step voting processes.",
    result: "Created a centralized digital platform that makes election-related information more accessible, understandable, and easier to navigate.",
    cardDescription: "ElectraNet is an intelligent assistant designed to simplify and demystify the election process for everyone. It helps users understand how elections work, key timelines, and step-by-step procedures…",
    stats: {
      contributors: 1,
      issues: 0,
      stars: 0,
      forks: 0,
    },
    hasDetailedSection: true,
  },
  {
    id: "streako",
    title: "Streako",
    repoName: "jayantsingh213/Streako",
    repoUrl: "https://github.com/jayantsingh213/Streako",
    scope: "A productivity and study planning platform designed to help students build consistent learning habits.",
    description: "Conceptualized a web application using React.js, Tailwind CSS, Framer Motion, and Node.js, with features such as Pomodoro timers, task management, calendar scheduling, and productivity analytics.",
    result: "Developed a structured product concept that combines time management, habit tracking, and performance insights in one place.",
    cardDescription: "Streako is a simple yet powerful habit-tracking platform designed to help you stay consistent, build discipline, and turn small daily actions into long-term success. Track your progress, maintain s…",
    stats: {
      contributors: 1,
      issues: 0,
      stars: 0,
      forks: 0,
    },
    hasDetailedSection: true,
  },
  {
    id: "cityjan",
    title: "CITYJAN",
    repoName: "jayantsingh213/CITYJAN",
    repoUrl: "https://github.com/jayantsingh213/CITYJAN",
    cardDescription: "Contribute to jayantsingh213/CITYJAN development by creating an account on GitHub.",
    stats: {
      contributors: 1,
      issues: 0,
      stars: 0,
      forks: 0,
    },
    hasDetailedSection: false,
  },
];
