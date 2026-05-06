export interface Project {
  id: number;
  title: string;
  description: string;
  icon: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
  lang: string[];
  summary: string;
  details: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-featured online store with cart, auth, Stripe payments, and an admin dashboard for inventory management.',
    icon: '🛍️',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Full Stack',
    lang: ['React', 'Full Stack'],
    summary: 'Online store with checkout, inventory control, and admin tools.',
    details:
      'Built a complete e-commerce platform with user authentication, product catalog, shopping cart, order processing, Stripe payments, and an admin dashboard for inventory and order management. The application was built with performance, accessibility, and mobile responsiveness in mind.',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'Collaborative kanban board with drag-and-drop, real-time sync, and team workspaces built for productivity.',
    icon: '📋',
    tech: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Frontend',
    lang: ['React'],
    summary: 'Kanban-style task board with realtime collaboration.',
    details:
      'A modern task management app featuring drag-and-drop workflows, real-time updates via Firebase, team workspaces, and responsive UI built with Tailwind CSS. I focused on usability, performance, and smooth interactions for teams of any size.',
  },
  {
    id: 3,
    title: 'Data Analytics Dashboard',
    description:
      'Interactive data visualization with live charts, custom KPIs, and CSV export powered by a Python backend.',
    icon: '📊',
    tech: ['React', 'D3.js', 'Python', 'FastAPI'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Full Stack',
    lang: ['React', 'Full Stack'],
    summary: 'Dashboard with charts, KPIs, and exports.',
    details:
      'Developed an analytics dashboard that surfaces business metrics through interactive visualizations, custom KPI cards, and CSV export. The backend is powered by FastAPI, while the frontend uses D3.js and React for a polished, data-driven interface.',
  },
  {
    id: 4,
    title: 'Mobile Banking App',
    description:
      'A secure cross-platform banking app with biometric login, push alerts, and AI-powered budget tracking.',
    icon: '💳',
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'JWT'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Mobile',
    lang: ['React', 'Mobile'],
    summary: 'Secure banking app with biometrics and alerts.',
    details:
      'Created a cross-platform banking application with biometric authentication, real-time notifications, secure transactions, and personalized budget insights powered by AI. The app prioritizes security, simplicity, and a polished mobile experience.',
  },
  {
    id: 5,
    title: 'CMS & Blog Platform',
    description:
      'A headless CMS built in PHP with custom post types, plugin hooks, and a REST API for decoupled frontends.',
    icon: '✍️',
    tech: ['PHP', 'Laravel', 'MySQL', 'REST API'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Full Stack',
    lang: ['PHP', 'Full Stack'],
    summary: 'Headless CMS with custom post types and REST API.',
    details:
      'Built a customizable CMS with Laravel, including plugin hooks, custom post types, media management, and a REST API for headless frontends. The system was designed for flexibility and extensibility across publishing workflows.',
  },
  {
    id: 6,
    title: 'Inventory System',
    description:
      'Enterprise inventory tracker with barcode scanning, supplier management, and automated low-stock alerts.',
    icon: '📦',
    tech: ['PHP', 'Vue.js', 'MySQL', 'PHPMailer'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Full Stack',
    lang: ['PHP', 'Full Stack'],
    summary: 'Inventory tracker with supply and stock alerts.',
    details:
      'Implemented an enterprise inventory management platform with barcode scanning, supplier profiles, purchase tracking, and automated low-stock notifications. The interface blends Vue.js reactivity with a robust PHP backend.',
  },
  {
    id: 7,
    title: 'Hotel Booking Engine',
    description:
      'PHP-powered booking system with dynamic pricing, availability calendar, and payment gateway integration.',
    icon: '🏨',
    tech: ['PHP', 'jQuery', 'MariaDB', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Full Stack',
    lang: ['PHP'],
    summary: 'Booking engine with pricing and calendar availability.',
    details:
      'Delivered a hotel booking engine with dynamic pricing, calendar availability, room management, and secure payment integrations. The platform is built for hotel operators to efficiently manage reservations and revenue.',
  },
  {
    id: 8,
    title: 'Fitness Tracker',
    description:
      'Mobile app to log workouts, track macros, and chart progress with personalized AI coaching suggestions.',
    icon: '🏋️',
    tech: ['React Native', 'Expo', 'Firebase', 'Redux'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Mobile',
    lang: ['React', 'Mobile'],
    summary: 'Workout tracker with analytics and coaching.',
    details:
      'Built a fitness tracker app that logs workouts, tracks nutrition, charts progress, and provides personalized coaching suggestions. The experience is mobile-first, responsive, and designed to keep users motivated.',
  },
];

export function getProjectById(id: number) {
  return projects.find((project) => project.id === id);
}
