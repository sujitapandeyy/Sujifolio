export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  category: "FullStack" | "Frontend" | "Backend" | string;
  features: string[];
  challenges: string[];
  screenshots: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "RaktaSewa - Blood Donation Platform",
    description:
      "Website where a recipient can request blood to blood bank as well as search donor based on proximity and blood type. Donor can register and manage their profile, view donation history, and receive notifications for blood donation requests.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&fit=crop",
    tech: ["PHP", "MySQL", "Tailwind"],
    liveUrl: "#",
    githubUrl: "https://github.com/sujitapandeyy/blooddonation",
    category: "FullStack",
    features: [
      "Recipient can request blood from blood banks",
      "Search donors by proximity and blood type",
      "Donor registration and profile management",
      "Donation history tracking",
      "Real-time notifications for blood requests",
    ],
    challenges: [
      "Implementing proximity-based donor search efficiently",
      "Ensuring real-time notification delivery",
      "Handling sensitive health data securely",
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=450&fit=crop",
    ],
  },
  {
    id: 2,
    title: "PairUp Matrimony - Matrimonial Platform",
    description:
      "An intelligent partner suggestions based on personal attributes, family background, interests, and user preferences. The platform also includes features like profile management, search filters, and secure communication channels to facilitate meaningful connections.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop",
    tech: ["Python", "MongoDB", "Tailwind"],
    liveUrl: "#",
    githubUrl: "https://github.com/sujitapandeyy/pairup_matrimony",
    category: "FullStack",
    features: [
      "AI-powered intelligent partner suggestions",
      "Advanced search filters by attributes and preferences",
      "Secure profile management",
      "Private communication channels",
      "Family background matching",
    ],
    challenges: [
      "Building an accurate recommendation algorithm",
      "Ensuring user privacy and data security",
      "Designing intuitive UX for diverse age groups",
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=450&fit=crop",
    ],
  },
  {
    id: 3,
    title: "Job Portal - Job Search Platform",
    description:
      "An online website that connects job seekers with employers or organizations providing access to diverse job opportunities.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=450&fit=crop",
    tech: ["Laravel", "MySQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/sujitapandeyy/laravelJobPortal",
    category: "FullStack",
    features: [
      "Job seeker and employer separate dashboards",
      "Advanced job search and filtering",
      "Resume upload and management",
      "Application tracking system",
      "Email notifications for applications",
    ],
    challenges: [
      "Building a scalable job matching system",
      "Managing large volumes of applications efficiently",
      "Implementing secure file uploads for resumes",
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=450&fit=crop",
    ],
  },
  {
    id: 4,
    title: "Botanic Bazzar – Online Plant Store",
    description:
      "An online plant selling website where a customer can explore varieties of plants. They can add plants to their cart, make purchases, and track their orders. The platform also provides care tips and plant recommendations based on user preferences.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=450&fit=crop",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/sujitapandeyy/BotanicBazzar",
    category: "FullStack",
    features: [
      "Browse and search plant catalog",
      "Shopping cart and checkout flow",
      "Order tracking system",
      "Plant care tips and guides",
      "Personalized plant recommendations",
    ],
    challenges: [
      "Building a smooth cart and checkout experience",
      "Designing an appealing product catalog UI",
      "Implementing recommendation logic without ML libraries",
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&h=450&fit=crop",
    ],
  },
  {
    id: 5,
    title: "Hello Kids – Children's Clothing Store",
    description:
      "An online children's clothing store where customers can browse products, add items to their cart, make purchases, and track their orders.",
    image:
      "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=800&h=450&fit=crop",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/sujitapandeyy/hellokids",
    category: "FullStack",
    features: [
      "Child-friendly product browsing UI",
      "Size guide and age-based filtering",
      "Cart, checkout, and order tracking",
      "Product care and washing tips",
      "Recommendations based on age and preferences",
    ],
    challenges: [
      "Designing a UI appealing to both kids and parents",
      "Handling size variations and inventory management",
      "Building trust with secure payment flow",
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=800&h=450&fit=crop",
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=800&h=450&fit=crop",
    ],
  },
];