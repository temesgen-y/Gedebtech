import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Layout } from "@/components/layout";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowRight,
  Code2,
  Server,
  Palette,
  Cloud,
  Database,
  Smartphone,
  CheckCircle2,
  Users,
  Clock,
  Shield,
  Zap,
} from "lucide-react";

const talentCategories = [
  {
    id: "frontend",
    icon: Code2,
    title: "Frontend Developers",
    description: "Expert React, Vue, and Angular developers who create stunning user interfaces.",
    skills: ["React", "Vue.js", "Angular", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    id: "backend",
    icon: Server,
    title: "Backend Engineers",
    description: "Experienced developers skilled in building robust APIs and server-side systems.",
    skills: ["Node.js", "Python", "Java", "Go", "PostgreSQL", "MongoDB"],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Developers",
    description: "Specialists in building native and cross-platform mobile applications.",
    skills: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)", "Xamarin"],
  },
  {
    id: "devops",
    icon: Cloud,
    title: "DevOps Engineers",
    description: "Infrastructure experts who streamline deployment and operations.",
    skills: ["AWS", "Azure", "Kubernetes", "Docker", "Terraform", "CI/CD"],
  },
  {
    id: "design",
    icon: Palette,
    title: "UI/UX Designers",
    description: "Creative designers who craft intuitive and beautiful user experiences.",
    skills: ["Figma", "Sketch", "Adobe XD", "User Research", "Prototyping", "Design Systems"],
  },
  {
    id: "data",
    icon: Database,
    title: "Data Engineers",
    description: "Experts in building data pipelines, warehouses, and analytics platforms.",
    skills: ["Spark", "Airflow", "Snowflake", "BigQuery", "Python", "SQL"],
  },
];

const engagementModels = [
  {
    title: "Contract",
    description: "Flexible short-term engagements for specific projects or tasks.",
    features: [
      "Quick onboarding",
      "Hourly or fixed-price options",
      "Scale up or down as needed",
      "No long-term commitment",
    ],
    highlight: false,
  },
  {
    title: "Dedicated Team",
    description: "A fully integrated team working exclusively on your projects.",
    features: [
      "Full-time dedicated resources",
      "Seamless integration with your team",
      "Direct management and control",
      "Long-term partnership",
    ],
    highlight: true,
  },
  {
    title: "Staff Augmentation",
    description: "Extend your existing team with skilled professionals.",
    features: [
      "Fill skill gaps quickly",
      "Retain full control",
      "Cost-effective scaling",
      "Flexible duration",
    ],
    highlight: false,
  },
];

const processSteps = [
  { step: "01", title: "Requirements", description: "Share your project needs and ideal candidate profile" },
  { step: "02", title: "Matching", description: "We identify the best talent from our vetted pool" },
  { step: "03", title: "Interview", description: "Review candidates and conduct technical interviews" },
  { step: "04", title: "Onboard", description: "Quick onboarding and seamless team integration" },
];

const benefits = [
  { icon: Zap, title: "Fast Hiring", description: "Get vetted candidates within 48 hours" },
  { icon: Shield, title: "Quality Assured", description: "All talent goes through rigorous vetting" },
  { icon: Clock, title: "Time Zone Aligned", description: "Work with teams in compatible time zones" },
  { icon: Users, title: "Managed Teams", description: "We handle HR, payroll, and administration" },
];

const serviceOptions = [
  "Custom Software Development",
  "Web Development",
  "Mobile App Development",
  "Cloud Solutions",
  "Data Engineering",
  "UI/UX Design",
  "DevOps Services",
  "Talent Outsourcing",
];

const industryOptions = [
  "Healthcare",
  "Financial Services",
  "Manufacturing",
  "Retail & E-commerce",
  "Government",
  "Education",
  "Technology",
  "Other",
];

export default function HireTalents() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    industry: "",
    howHeard: "",
    roleDetails: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Request Submitted",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        service: "",
        industry: "",
        howHeard: "",
        roleDetails: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="py-16 lg:py-20 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary mb-2">Hire Talents</p>
            <h1 className="font-serif text-3xl lg:text-5xl font-bold mb-6" data-testid="text-hire-page-title">
              Access Top Engineering Talent
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Scale your team with pre-vetted developers, designers, and engineers from 
              Gedeb Technologies. We provide flexible engagement models to match your needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" data-testid="button-hire-contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" asChild>
                <a href="#talent-categories" data-testid="button-browse-talent">
                  Browse Talent Categories
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-1">{benefit.title}</h4>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="talent-categories" className="py-16 lg:py-24 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-4">
              Talent Categories
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Access skilled professionals across all technology disciplines
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {talentCategories.map((category) => (
              <Card
                key={category.id}
                className="hover-elevate transition-all duration-300"
                data-testid={`card-talent-${category.id}`}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{category.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs font-normal">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-4">
              Engagement Models
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the model that best fits your project requirements
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {engagementModels.map((model) => (
              <Card
                key={model.title}
                className={`relative ${model.highlight ? "border-primary" : ""}`}
              >
                {model.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-6 pt-8">
                  <h3 className="font-semibold text-xl mb-2">{model.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    {model.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {model.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button
                      variant={model.highlight ? "default" : "outline"}
                      className="w-full"
                      data-testid={`button-model-${model.title.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg">
              Our streamlined process gets you the right talent quickly
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative text-center">
                <div className="text-4xl font-bold text-primary/20 mb-2">{step.step}</div>
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-4 left-[calc(100%_-_12px)] w-6 text-muted-foreground">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/90 via-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary-foreground mb-4" data-testid="text-hire-form-title">
              Tell Us More About You &<br />What You Are Looking For.
            </h2>
          </div>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="NAME"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    data-testid="input-hire-name"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="EMAIL"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    data-testid="input-hire-email"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger data-testid="select-hire-services">
                      <SelectValue placeholder="SERVICES" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select
                    value={formData.industry}
                    onValueChange={(value) => setFormData({ ...formData, industry: value })}
                  >
                    <SelectTrigger data-testid="select-hire-industry">
                      <SelectValue placeholder="INDUSTRY" />
                    </SelectTrigger>
                    <SelectContent>
                      {industryOptions.map((industry) => (
                        <SelectItem key={industry} value={industry}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Input
                    placeholder="HOW'D YOU HEAR ABOUT US?"
                    value={formData.howHeard}
                    onChange={(e) => setFormData({ ...formData, howHeard: e.target.value })}
                    data-testid="input-hire-source"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="TELL US MORE ABOUT THE ROLE(S) YOU ARE HIRING FOR."
                    value={formData.roleDetails}
                    onChange={(e) => setFormData({ ...formData, roleDetails: e.target.value })}
                    rows={4}
                    className="resize-none"
                    data-testid="textarea-hire-details"
                  />
                </div>
                <div className="text-center">
                  <Button 
                    type="submit" 
                    size="lg"
                    disabled={isSubmitting}
                    data-testid="button-hire-submit"
                  >
                    {isSubmitting ? "Submitting..." : "SUBMIT"}
                    {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
