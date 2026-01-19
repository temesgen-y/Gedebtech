import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layout } from "@/components/layout";
import { ArrowRight, ExternalLink } from "lucide-react";
import project1Image from "@assets/stock_images/software_development_59558925.jpg";
import project2Image from "@assets/stock_images/software_development_ab03b504.jpg";
import project3Image from "@assets/stock_images/software_development_4f574943.jpg";
import healthcareImage from "@assets/stock_images/healthcare_technolog_056fcaff.jpg";
import financeImage from "@assets/stock_images/financial_technology_07b0834a.jpg";
import manufacturingImage from "@assets/stock_images/manufacturing_indust_dc60077c.jpg";
import ecommerceImage from "@assets/stock_images/e-commerce_retail_te_4dec67f7.jpg";
import educationImage from "@assets/stock_images/education_technology_36fbdebb.jpg";

const categories = ["All", "Enterprise", "Healthcare", "Fintech", "E-Commerce", "Education"];

const projects = [
  {
    id: "1",
    title: "Enterprise Resource Planning System",
    description: "A comprehensive ERP solution for a multinational corporation, integrating finance, HR, inventory, and CRM modules.",
    category: "Enterprise",
    image: project1Image,
    techStack: ["React", "Node.js", "PostgreSQL", "Redis"],
    challenge: "Integrate legacy systems with modern cloud infrastructure",
    solution: "Built microservices architecture with gradual migration path",
  },
  {
    id: "2",
    title: "Healthcare Management Platform",
    description: "Digital health platform connecting patients with healthcare providers, featuring telemedicine and electronic health records.",
    category: "Healthcare",
    image: healthcareImage,
    techStack: ["Next.js", "Python", "AWS", "MongoDB"],
    challenge: "Ensure HIPAA compliance while maintaining user experience",
    solution: "Implemented end-to-end encryption with intuitive interfaces",
  },
  {
    id: "3",
    title: "Digital Banking Solution",
    description: "Mobile-first banking platform with real-time transactions, account management, and financial analytics.",
    category: "Fintech",
    image: financeImage,
    techStack: ["React Native", "Go", "PostgreSQL", "Kubernetes"],
    challenge: "Handle high transaction volumes with zero downtime",
    solution: "Designed distributed system with automatic failover",
  },
  {
    id: "4",
    title: "B2B Marketplace Platform",
    description: "Multi-vendor marketplace connecting manufacturers with retailers, featuring real-time inventory and order management.",
    category: "E-Commerce",
    image: ecommerceImage,
    techStack: ["Vue.js", "Node.js", "Elasticsearch", "Docker"],
    challenge: "Scale to handle thousands of concurrent transactions",
    solution: "Implemented event-driven architecture with caching layers",
  },
  {
    id: "5",
    title: "Smart Factory Dashboard",
    description: "IoT-enabled monitoring system for manufacturing facilities, providing real-time insights and predictive maintenance.",
    category: "Enterprise",
    image: manufacturingImage,
    techStack: ["React", "Python", "TimescaleDB", "MQTT"],
    challenge: "Process millions of sensor readings in real-time",
    solution: "Built streaming data pipeline with time-series optimization",
  },
  {
    id: "6",
    title: "Online Learning Platform",
    description: "E-learning platform with interactive courses, progress tracking, and certification management for corporate training.",
    category: "Education",
    image: educationImage,
    techStack: ["Next.js", "Django", "PostgreSQL", "S3"],
    challenge: "Support various content types with low latency",
    solution: "CDN-backed delivery with adaptive streaming",
  },
  {
    id: "7",
    title: "Supply Chain Analytics",
    description: "Real-time analytics platform for supply chain optimization, featuring demand forecasting and logistics management.",
    category: "Enterprise",
    image: project2Image,
    techStack: ["React", "Scala", "Spark", "Cassandra"],
    challenge: "Analyze petabytes of historical data for predictions",
    solution: "Implemented ML models on distributed computing cluster",
  },
  {
    id: "8",
    title: "Insurance Claims Platform",
    description: "Automated claims processing system with AI-powered fraud detection and streamlined approval workflows.",
    category: "Fintech",
    image: project3Image,
    techStack: ["Angular", "Java", "Oracle", "TensorFlow"],
    challenge: "Reduce claims processing time while improving accuracy",
    solution: "Developed intelligent document processing pipeline",
  },
];

import { SEO } from "@/components/seo";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <Layout>
      <SEO
        title="Our Projects & Portfolio - Software Development in Ethiopia | Gedeb Technologies"
        description="Explore our portfolio of successful software development projects in Ethiopia. Custom software, web & mobile apps, ERP systems, and cloud solutions delivered to clients across industries."
        keywords="Gedeb Technologies projects, software development portfolio Ethiopia, IT projects Ethiopia, web development projects, mobile app projects Ethiopia"
        url="/projects"
        type="website"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Projects", url: "/projects" },
        ]}
      />
      <section className="py-16 lg:py-20 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary mb-2">Our Work</p>
            <h1 className="font-serif text-3xl lg:text-5xl font-bold mb-4" data-testid="text-projects-page-title">
              Case Studies & Projects
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Explore our portfolio of successful projects across various industries. 
              Each case study highlights the challenges we solved and the impact we delivered.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                data-testid={`button-filter-${category.toLowerCase()}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden hover-elevate transition-all duration-300"
                data-testid={`card-project-${project.id}`}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <Button size="sm" variant="secondary" className="gap-1">
                      View Details
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-5">
                  <Badge variant="secondary" className="mb-3 text-xs">
                    {project.category}
                  </Badge>
                  <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs font-normal">
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 3 && (
                      <Badge variant="outline" className="text-xs font-normal">
                        +{project.techStack.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-primary-foreground mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your ideas to life with our expertise and innovative approach.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" data-testid="button-projects-contact">
              Start a Conversation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
