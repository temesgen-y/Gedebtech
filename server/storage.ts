import { type User, type InsertUser, type InsertContact, type ContactMessage, type BlogPost, type JobListing, type Project } from "@shared/schema";
import { randomUUID } from "crypto";

const blogPostsData: BlogPost[] = [
  {
    id: "1",
    title: "Microservices Architecture: When and How to Adopt",
    excerpt: "Explore the benefits and challenges of transitioning from monolithic to microservices architecture, with practical strategies for a successful migration.",
    category: "Engineering",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    slug: "microservices-architecture-adoption",
  },
  {
    id: "2",
    title: "Building Scalable Cloud-Native Applications with Kubernetes",
    excerpt: "A comprehensive guide to designing and deploying cloud-native applications using Kubernetes, covering best practices and common pitfalls.",
    category: "Cloud",
    date: "Dec 10, 2024",
    readTime: "12 min read",
    slug: "kubernetes-cloud-native-apps",
  },
  {
    id: "3",
    title: "The Future of AI in Enterprise Software Development",
    excerpt: "How artificial intelligence is transforming the way we build software, from code generation to automated testing and deployment.",
    category: "Technology",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    slug: "ai-enterprise-software",
  },
  {
    id: "4",
    title: "Design Systems: Creating Consistent User Experiences",
    excerpt: "Learn how to build and maintain a robust design system that ensures consistency across all your digital products and platforms.",
    category: "Design",
    date: "Nov 28, 2024",
    readTime: "10 min read",
    slug: "design-systems-guide",
  },
  {
    id: "5",
    title: "Serverless Computing: Benefits and Trade-offs",
    excerpt: "An in-depth analysis of serverless architecture, examining when it makes sense and what considerations you should keep in mind.",
    category: "Cloud",
    date: "Nov 20, 2024",
    readTime: "9 min read",
    slug: "serverless-computing-analysis",
  },
  {
    id: "6",
    title: "Digital Transformation in Healthcare: Trends and Challenges",
    excerpt: "Exploring the latest technology trends shaping the healthcare industry and how organizations can navigate digital transformation.",
    category: "Industry",
    date: "Nov 15, 2024",
    readTime: "7 min read",
    slug: "healthcare-digital-transformation",
  },
];

const jobListingsData: JobListing[] = [
  {
    id: "1",
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Addis Ababa (Hybrid)",
    type: "Full-time",
    description: "Join our engineering team to build scalable web applications using React, Node.js, and cloud technologies.",
  },
  {
    id: "2",
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Addis Ababa (Hybrid)",
    type: "Full-time",
    description: "Help us build and maintain our cloud infrastructure, CI/CD pipelines, and monitoring systems.",
  },
  {
    id: "3",
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Create beautiful, intuitive user experiences for our enterprise software products.",
  },
  {
    id: "4",
    title: "Project Manager",
    department: "Delivery",
    location: "Addis Ababa",
    type: "Full-time",
    description: "Lead cross-functional teams to deliver complex software projects on time and within budget.",
  },
  {
    id: "5",
    title: "Mobile Developer (React Native)",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build cross-platform mobile applications for iOS and Android using React Native.",
  },
  {
    id: "6",
    title: "QA Engineer",
    department: "Quality",
    location: "Addis Ababa (Hybrid)",
    type: "Full-time",
    description: "Ensure the quality of our software through manual and automated testing strategies.",
  },
];

const projectsData: Project[] = [
  {
    id: "1",
    title: "Enterprise Resource Planning System",
    description: "A comprehensive ERP solution for a multinational corporation, integrating finance, HR, inventory, and CRM modules.",
    category: "Enterprise",
    techStack: ["React", "Node.js", "PostgreSQL", "Redis"],
    image: "/stock_images/software_development_59558925.jpg",
  },
  {
    id: "2",
    title: "Healthcare Management Platform",
    description: "Digital health platform connecting patients with healthcare providers, featuring telemedicine and electronic health records.",
    category: "Healthcare",
    techStack: ["Next.js", "Python", "AWS", "MongoDB"],
    image: "/stock_images/healthcare_technolog_056fcaff.jpg",
  },
  {
    id: "3",
    title: "Digital Banking Solution",
    description: "Mobile-first banking platform with real-time transactions, account management, and financial analytics.",
    category: "Fintech",
    techStack: ["React Native", "Go", "PostgreSQL", "Kubernetes"],
    image: "/stock_images/financial_technology_07b0834a.jpg",
  },
  {
    id: "4",
    title: "B2B Marketplace Platform",
    description: "Multi-vendor marketplace connecting manufacturers with retailers, featuring real-time inventory and order management.",
    category: "E-Commerce",
    techStack: ["Vue.js", "Node.js", "Elasticsearch", "Docker"],
    image: "/stock_images/e-commerce_retail_te_4dec67f7.jpg",
  },
  {
    id: "5",
    title: "Smart Factory Dashboard",
    description: "IoT-enabled monitoring system for manufacturing facilities, providing real-time insights and predictive maintenance.",
    category: "Enterprise",
    techStack: ["React", "Python", "TimescaleDB", "MQTT"],
    image: "/stock_images/manufacturing_indust_dc60077c.jpg",
  },
  {
    id: "6",
    title: "Online Learning Platform",
    description: "E-learning platform with interactive courses, progress tracking, and certification management for corporate training.",
    category: "Education",
    techStack: ["Next.js", "Django", "PostgreSQL", "S3"],
    image: "/stock_images/education_technology_36fbdebb.jpg",
  },
];

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactMessage(data: InsertContact): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  getJobListings(): Promise<JobListing[]>;
  getProjects(): Promise<Project[]>;
  getProjectById(id: string): Promise<Project | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactMessage(data: InsertContact): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = {
      ...data,
      company: data.company ?? null,
      id,
      createdAt: new Date(),
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values()).sort((a, b) => {
      const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return dateB - dateA;
    });
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return blogPostsData;
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return blogPostsData.find((post) => post.slug === slug);
  }

  async getJobListings(): Promise<JobListing[]> {
    return jobListingsData;
  }

  async getProjects(): Promise<Project[]> {
    return projectsData;
  }

  async getProjectById(id: string): Promise<Project | undefined> {
    return projectsData.find((project) => project.id === id);
  }
}

export const storage = new MemStorage();
