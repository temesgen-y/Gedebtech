import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout";
import {
  Code2,
  Globe,
  Smartphone,
  Cloud,
  Database,
  Shield,
  Cpu,
  Layers,
  ArrowRight,
  CheckCircle2,
  Users,
} from "lucide-react";
<h2>Elevate your business with our diverse BPO services – where quality meets affordability.</h2>
const services = [

  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description:
      "Leverage artificial intelligence and machine learning to automate processes and gain valuable insights from your data.",
    features: [
      "Predictive analytics models",
      "Natural language processing",
      "Computer vision solutions",
      "AI-powered automation",
    ],
  },

  {
    icon: Cpu,
    title: "BPO -Business Process Outsourcing",
    description:
      "Our organization provides Offshore outsourcing, Onshore outsourcing, Nearshore outsourcing, and Hybrid outsourcing services to help businesses achieve their goals.",
    features: [
      "Finance & Accounting (F&A) Outsourcing",
      "Human Resources Outsourcing (HRO)",
      "Healthcare BPO",
      "Sales & Marketing Support",
      "Information Technology Enabled Services (ITES)"
    ],
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "We build bespoke software solutions tailored to your unique business needs, from initial concept through deployment and maintenance.",
    features: [
      "Requirements analysis and system design",
      "Agile development methodology",
      "Quality assurance and testing",
      "Ongoing support and maintenance",
    ],
  },

  {
    icon: Globe,
    title: "Web Application Development",
    description:
      "Modern, scalable web applications built with the latest frameworks and technologies to deliver exceptional user experiences.",
    features: [
      "Responsive and accessible design",
      "Progressive Web Apps (PWA)",
      "Single Page Applications (SPA)",
      "Enterprise web portals",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications that provide seamless experiences across iOS and Android devices.",
    features: [
      "iOS and Android native development",
      "React Native and Flutter solutions",
      "App Store optimization",
      "Push notifications and analytics",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions & Migration",
    description:
      "Cloud-native architecture design, migration strategies, and optimization services across major cloud platforms.",
    features: [
      "AWS, Azure, and GCP expertise",
      "Cloud migration and modernization",
      "Serverless architecture",
      "Cost optimization strategies",
    ],
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    description:
      "End-to-end data solutions including ETL pipelines, data warehousing, and business intelligence platforms.",
    features: [
      "Data pipeline development",
      "Data warehouse design",
      "Business intelligence dashboards",
      "Machine learning integration",
    ],
  },
  {
    icon: Shield,
    title: "DevOps & Security",
    description:
      "Streamline your development workflow with CI/CD implementation, infrastructure automation, and security-first practices.",
    features: [
      "CI/CD pipeline setup",
      "Infrastructure as Code (IaC)",
      "Security audits and compliance",
      "24/7 monitoring and alerting",
    ],
  },

  {
    icon: Layers,
    title: "API Development & Integration",
    description:
      "Design, develop, and integrate robust APIs to connect your systems and enable seamless data exchange.",
    features: [
      "RESTful and GraphQL APIs",
      "Third-party integrations",
      "API gateway implementation",
      "Microservices architecture",
    ],
  },
];

import { SEO } from "@/components/seo";

export default function Services() {
  return (
    <Layout>
      <SEO
        title="IT Services & Solutions in Ethiopia - Gedeb Technologies"
        description="Comprehensive technology solutions in Ethiopia: custom software development, web & mobile apps, cloud migration, ERP systems, and digital transformation services."
        keywords="IT services Ethiopia, software development services, web development services Ethiopia, mobile app development services, cloud solutions Ethiopia, ERP implementation Ethiopia, digital transformation services"
        url="/services"
        type="service"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
        service={{
          name: "IT Services & Solutions",
          description: "Comprehensive technology solutions including custom software development, web & mobile apps, cloud migration, and ERP systems.",
          provider: "Gedeb Technologies",
          areaServed: "Ethiopia",
          serviceType: "Software Development, Web Development, Mobile App Development, Cloud Solutions, ERP Systems",
        }}
        faq={[
          {
            question: "What IT services does Gedeb Technologies offer?",
            answer: "We offer custom software development, web & mobile app development, cloud solutions, ERP systems, SaaS applications, and digital transformation services.",
          },
          {
            question: "Where is Gedeb Technologies located?",
            answer: "Gedeb Technologies is located in Addis Ababa, Ethiopia, serving clients across the country and internationally.",
          },
          {
            question: "What industries do you serve?",
            answer: "We serve healthcare, finance, manufacturing, retail, education, and government sectors with industry-specific solutions.",
          },
        ]}
      />
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1
            className="font-serif text-3xl lg:text-5xl font-bold mb-4"
            data-testid="text-services-page-title"
          >
            Revolutionize Your Business{" "}
            <span className="text-primary">with Gedeb Technologies</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Elevate your business with our diverse BPO services – where quality
            meets affordability.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary mb-2">
              Our Services
            </p>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold mb-4">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From custom software development to cloud migration, we offer a
              full spectrum of technology services designed to accelerate your
              digital transformation journey.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold">
              Our <span className="text-primary">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card
                key={service.title}
                className="hover-elevate transition-all duration-300"
                data-testid={`card-service-detail-${service.title.toLowerCase().replace(/\s/g, "-")}`}
              >
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl lg:text-2xl mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise To You Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-8">
                Our <span className="text-primary">Promise</span> To You
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Tailored Solutions for Your Growth
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our solutions are designed to evolve with your business,
                      ensuring continuous growth and efficiency.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      End-to-End Expertise
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      From customer support and software development to data
                      management and outsourcing, we deliver seamless,
                      high-quality services designed to elevate your business.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Client-Focused Approach
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Your success is our priority. We take the time to
                      understand your goals and work tirelessly to help you
                      achieve them.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Graphic */}
            <div className="flex items-center justify-center">
              <div className="relative">
                {/* Connecting Lines */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 400"
                >
                  <line
                    x1="200"
                    y1="60"
                    x2="340"
                    y2="100"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    opacity="0.3"
                  />
                  <line
                    x1="340"
                    y1="200"
                    x2="340"
                    y2="100"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    opacity="0.3"
                  />
                  <line
                    x1="340"
                    y1="200"
                    x2="340"
                    y2="300"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    opacity="0.3"
                  />
                  <line
                    x1="200"
                    y1="340"
                    x2="340"
                    y2="300"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    opacity="0.3"
                  />
                  <line
                    x1="60"
                    y1="200"
                    x2="60"
                    y2="100"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    opacity="0.3"
                  />
                  <line
                    x1="200"
                    y1="60"
                    x2="60"
                    y2="100"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    opacity="0.3"
                  />
                </svg>

                {/* Center Circle */}
                <div className="w-64 h-64 rounded-full bg-primary flex items-center justify-center relative z-10">
                  <div className="text-center text-primary-foreground px-8">
                    <p className="font-bold text-lg uppercase tracking-wide">
                      Trusted Experts,
                    </p>
                    <p className="font-bold text-lg uppercase tracking-wide">
                      Guaranteed
                    </p>
                    <p className="font-bold text-lg uppercase tracking-wide">
                      Results
                    </p>
                  </div>
                </div>

                {/* Outer Ring */}
                <div className="absolute inset-0 w-64 h-64 rounded-full border-2 border-primary/20 scale-125" />

                {/* Corner Icons */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div className="absolute top-1/2 -right-16 -translate-y-1/2 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div className="absolute top-1/2 -left-16 -translate-y-1/2 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-primary-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Our team of experts can help you design and implement a solution
            tailored to your specific requirements.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              data-testid="button-services-contact"
            >
              Discuss Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
