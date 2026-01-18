import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layout } from "@/components/layout";
import {
  Code2,
  Globe,
  Smartphone,
  Cloud,
  Database,
  Shield,
  ArrowRight,
  CheckCircle2,
  Users,
  Briefcase,
  Award,
  TrendingUp,
  UserCheck,
  LifeBuoy,
  UsersRound,
  ListChecks,
  CodeXml,
  Headphones,
  Monitor,
  Share2,
  HelpCircle,
  FileText,
  Building2,
  Zap,
  Maximize2,
  ShieldCheck,
} from "lucide-react";
import heroImage from "@assets/stock_images/modern_tech_team_col_9054465a.jpg";
import healthcareImage from "@assets/stock_images/healthcare_technolog_056fcaff.jpg";
import financeImage from "@assets/stock_images/financial_technology_07b0834a.jpg";
import manufacturingImage from "@assets/stock_images/manufacturing_indust_dc60077c.jpg";
import ecommerceImage from "@assets/stock_images/e-commerce_retail_te_4dec67f7.jpg";
import project1Image from "@assets/stock_images/software_development_59558925.jpg";
import project2Image from "@assets/stock_images/software_development_ab03b504.jpg";
import project3Image from "@assets/stock_images/software_development_4f574943.jpg";
import wavesImage from "@assets/Waves_1768344222494.png";
import analyticsImage from "@assets/stock_images/business_analytics_d_43dbedd1.jpg";
import globeImage from "@assets/Globe_1768348705069.png";
import techDevicesImage from "@assets/work_Together_1768486605369.png";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Tailored solutions designed to meet your unique business requirements with cutting-edge technologies.",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description:
      "Scalable, responsive web applications built with modern frameworks and best practices.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android platforms.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Cloud-native architecture, migration, and optimization services for AWS, Azure, and GCP.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "End-to-end data solutions including pipelines, warehousing, and analytics platforms.",
  },
  {
    icon: Shield,
    title: "DevOps & Security",
    description:
      "CI/CD implementation, infrastructure automation, and security-first development practices.",
  },
  {
    icon: UserCheck,
    title: "Talent & resource Outsourcing",
    description:
      "Our talent outsourcing services provide businesses with access to top-tier IT professionals, ready to support projects and operations with seamless integration into your existing teams.",
  },
  {
    icon: LifeBuoy,
    title: "Maintenance and Support",
    description:
      "We provide comprehensive maintenance and support services, ensuring that your software solutions run smoothly and remain up-to-date. Our proactive approach minimizes downtime and enhances system reliability.",
  },
];

const industries = [
  {
    name: "Healthcare",
    image: healthcareImage,
    description: "Digital health solutions and medical software",
  },
  {
    name: "Financial Services",
    image: financeImage,
    description: "Fintech and banking technology platforms",
  },
  {
    name: "Manufacturing",
    image: manufacturingImage,
    description: "Industry 4.0 and automation systems",
  },
  {
    name: "E-Commerce",
    image: ecommerceImage,
    description: "Retail technology and marketplace platforms",
  },
];

const featuredProjects = [
  {
    title: "Enterprise Resource Planning",
    category: "Enterprise Software",
    image: project1Image,
    techStack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Healthcare Management Platform",
    category: "Healthcare",
    image: project2Image,
    techStack: ["Next.js", "Python", "AWS"],
  },
  {
    title: "E-Commerce Marketplace",
    category: "Retail",
    image: project3Image,
    techStack: ["Vue.js", "Go", "MongoDB"],
  },
];

const stats = [
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Briefcase, value: "200+", label: "Projects Delivered" },
  { icon: Users, value: "50+", label: "Team Members" },
  { icon: TrendingUp, value: "98%", label: "Client Satisfaction" },
];

export default function Home() {
  return (
    <Layout>
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div
          className="absolute -inset-20 bg-cover bg-center opacity-80 animate-waves-1"
          style={{ backgroundImage: `url(${wavesImage})` }}
        />
        <div
          className="absolute -inset-20 bg-cover bg-center opacity-50 animate-waves-2"
          style={{
            backgroundImage: `url(${wavesImage})`,
            transform: "scaleX(-1)",
          }}
        />
        <div
          className="absolute -inset-20 bg-cover bg-center opacity-40 animate-waves-3"
          style={{
            backgroundImage: `url(${wavesImage})`,
            transform: "scaleY(-1)",
          }}
        />
        <div className="absolute inset-0 bg-primary/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <Badge
              variant="secondary"
              className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm"
            >
              Enterprise Software Solutions
            </Badge>
            <h1
              className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              data-testid="text-hero-title"
            >
              Building Tomorrow's
              <span className="text-primary-foreground"> Technology</span> Today
            </h1>
            <p className="text-lg lg:text-xl text-white/80 mb-8 leading-relaxed">
              Gedeb Technologies delivers innovative, scalable software
              solutions that drive digital transformation for enterprises,
              governments, and startups worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="backdrop-blur-md"
                  data-testid="button-hero-contact"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/hire-talents">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white backdrop-blur-md hover:bg-white/20"
                  data-testid="button-hero-hire"
                >
                  Hire Talents
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={analyticsImage}
                alt="Business Analytics Dashboard"
                className="rounded-md w-full aspect-[4/3] object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                About Gedeb
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
                Accelerating Growth with BPO
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Gedeb Technologies is a trusted Business Process Outsourcing
                (BPO) partner, helping organizations streamline operations and
                enhance efficiency. We specialize in providing top-tier customer
                support, data management, IT services, and back-office
                solutions, enabling businesses to focus on their core
                competencies while we handle the rest.
              </p>
              <Link href="/about">
                <Button size="lg" data-testid="button-home-about-us">
                  About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge
                variant="outline"
                className="mb-6 text-primary border-primary/30"
              >
                <Zap className="h-3 w-3 mr-1" />
                Gedeb Technology
              </Badge>
              <h2 className="font-serif text-3xl lg:text-5xl font-bold mb-6">
                We Build{" "}
                <span className="text-primary italic">Quality First</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We're your technology partners in Addis Ababa. We build custom
                software solutions that help your business grow and succeed.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" data-testid="button-start-project">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    data-testid="button-our-services-link"
                  >
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <Card className="hover-elevate">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center shrink-0">
                    <Zap className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Fast & Reliable</h3>
                    <p className="text-sm text-muted-foreground">
                      We deliver quality solutions on time, every time. No
                      delays, no excuses.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover-elevate">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Quality First</h3>
                    <p className="text-sm text-muted-foreground">
                      We don't cut corners. Every project gets the attention it
                      deserves.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover-elevate">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Global Network</h3>
                    <p className="text-sm text-muted-foreground">
                      Access our extensive network of experts. We outsource from
                      our big network to bring you the best talent.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative flex items-center justify-center">
              <img
                src={globeImage}
                alt="Global Network"
                className="w-full max-w-sm mx-auto aspect-square object-contain animate-spin-slow"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
                Empowering Growth,{" "}
                <span className="text-primary italic">
                  Bridging Global Gaps
                </span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Gedeb Technologies, our mission goes beyond traditional
                software solutions. We are dedicated to creating impactful
                opportunities by drastically reducing unemployment across
                Ethiopia, while delivering exceptional, cost-effective services
                to businesses worldwide.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With a base in Addis Ababa and representation globally, our
                mission is twofold: driving sustainable growth across Ethiopia
                by creating jobs and connecting businesses globally through
                superior technology services. Together, we aim to build a future
                where innovation and talent from Ethiopia help power the global
                economy.
              </p>
              <Link href="/contact">
                <Button size="lg" data-testid="button-book-consultation">
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2
              className="font-serif text-3xl lg:text-4xl font-semibold mb-4"
              data-testid="text-services-title"
            >
              Our Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive technology services tailored to accelerate your
              business growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group hover-elevate transition-all duration-300"
                data-testid={`card-service-${service.title.toLowerCase().replace(/\s/g, "-")}`}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                data-testid="button-view-all-services"
              >
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <Badge
              variant="outline"
              className="mb-4 text-primary border-primary/30"
            >
              Why Choose Us
            </Badge>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-4">
              Reasons to Work With Us
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We bring together expertise, innovation, and dedication to help
              your business thrive in the digital age
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
                  <Award className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="font-semibold">Practically Experienced</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                From management and communication to technology and finance,
                we've assembled top professionals dedicated to propelling your
                business forward.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">Trusted Partners</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our company is established to promote sustainable business
                development by offering an integrated service to our clients.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <UserCheck className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">Qualified Professionals</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our team is made up of young and talented professionals with
                outstanding academic background, who have diverse skills in
                their respective fields.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">Promoting Digital Jobs</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our impact outsourcing amenities are built to help ambitious
                organizations achieve more with talented Pro talent from Africa.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
                  <Globe className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="font-semibold">International Expertise</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We provide our customers with a complete full cycle of
                consulting services and tailored solutions specific to their
                needs.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
                  <LifeBuoy className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="font-semibold">Responsive Actions</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our business center is created to encourage entrepreneurship in
                our society through a variety of services to assist our clients.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
                  <Zap className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="font-semibold">Innovation Focus</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We work with entrepreneurs and companies that make a significant
                difference to our society through innovative solutions.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
                  <Users className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="font-semibold">Empowering Women</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We actively support and empower women entrepreneurs, fostering
                diversity and inclusion in the business ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden min-h-[480px] w-full">
        <div className="absolute inset-0 w-full bg-gradient-to-br from-[#0f1a2e] via-[#152238] to-[#1a2d4a]" />
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 right-0 h-full">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-px bg-gradient-to-t from-cyan-400/40 to-transparent"
                style={{
                  left: `${i * 3.5}%`,
                  height: `${15 + (i % 4) * 18}%`,
                  bottom: 0,
                }}
              >
                <div className="absolute top-0 w-1.5 h-1.5 -ml-0.5 rounded-full bg-cyan-400 shadow-[0_0_6px_2px_rgba(34,211,238,0.4)]" />
              </div>
            ))}
          </div>
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={`dot-${i}`}
                className="absolute w-1 h-1 rounded-full bg-cyan-400/60"
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${30 + (i % 3) * 15}%`,
                }}
              />
            ))}
          </div>
        </div>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L0,100 L40,100 Q45,100 48,90 Q52,78 55,65 Q58,50 52,38 Q46,25 50,12 Q52,5 48,0 L0,0 Z"
            fill="hsl(var(--background))"
          />
        </svg>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] h-full flex items-center justify-center lg:justify-end pr-4 lg:pr-12 z-0">
          <img
            src={techDevicesImage}
            alt="Technology Solutions"
            className="w-full max-w-lg drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] transform translate-x-8"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="lg:w-1/2 lg:pr-8">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-foreground italic leading-tight">
              Let's Work
              <br />
              Together
            </h2>
            <p className="text-muted-foreground mb-8 text-base lg:text-lg leading-relaxed">
              Do you know what it takes to grow your business online? Do you
              want to?
            </p>
            <div className="space-y-1 mb-8">
              <p className="text-2xl lg:text-3xl font-bold text-foreground">
                +251 928730333
              </p>
              <p className="text-xl font-semibold text-foreground"></p>
              <p className="text-primary font-medium">info@gedebtech.com</p>
            </div>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 hover:from-rose-500 hover:via-pink-500 hover:to-purple-500 text-white rounded-full px-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                data-testid="button-get-in-touch"
              >
                GET IN TOUCH
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Unlocking Growth Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1f3c] via-[#2d2a4a] to-[#8b3d3d]" />

        {/* Dotted Sphere Decoration */}
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-30">
          <div className="relative w-full h-full">
            {[...Array(12)].map((_, ring) => (
              <div
                key={ring}
                className="absolute rounded-full border border-dashed border-orange-400/40"
                style={{
                  width: `${(ring + 1) * 20}px`,
                  height: `${(ring + 1) * 20}px`,
                  bottom: `${ring * 8}px`,
                  left: `${-ring * 4}px`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-wider uppercase">
              <span className="text-white">Unlocking Growth Through</span>
              <br />
              <span className="text-orange-400">Premier Global Talent</span>
              <span className="text-white"> Placement</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Scalability */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-full border border-orange-400/50 flex items-center justify-center mb-4">
                <Maximize2 className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-orange-400 font-semibold text-lg mb-3 uppercase tracking-wide">
                Scalability
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our flexible talent scales with your needs, through rapid growth
                or challenges.
              </p>
            </div>

            {/* Global Presence */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-full border border-orange-400/50 flex items-center justify-center mb-4">
                <Globe className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-orange-400 font-semibold text-lg mb-3 uppercase tracking-wide">
                Global Presence
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We provide seamless global services using our worldwide talent
                and infrastructure.
              </p>
            </div>

            {/* Rapid Onboarding */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-full border border-orange-400/50 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-orange-400 font-semibold text-lg mb-3 uppercase tracking-wide">
                Rapid Onboarding
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our streamlined onboarding ensures minimal disruption and a
                fast, efficient transition.
              </p>
            </div>

            {/* ISO Certified */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-full border border-orange-400/50 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-orange-400 font-semibold text-lg mb-3 uppercase tracking-wide">
                ISO Certified
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                ISO 9001 & ISO 27001 certified. Delivering global talent with
                proven quality and security.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2
              className="font-serif text-3xl lg:text-4xl font-semibold mb-4 text-primary"
              data-testid="text-engagement-title"
            >
              Our Engagement Models
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              className="group hover-elevate transition-all duration-300"
              data-testid="card-engagement-extended-team"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <UsersRound className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Extended Team</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Efficiently scale your core engineering team to meet business
                  demands with flexibility and precision.
                </p>
                <Link href="/hire-talents">
                  <Button
                    className="w-full"
                    data-testid="button-learn-extended-team"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card
              className="group hover-elevate transition-all duration-300"
              data-testid="card-engagement-managed-team"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <ListChecks className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Managed Team</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Delegate critical parts of your product development to a
                  self-sufficient, fully integrated engineering team aligned
                  with your organization's workflow.
                </p>
                <Link href="/hire-talents">
                  <Button
                    className="w-full"
                    data-testid="button-learn-managed-team"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card
              className="group hover-elevate transition-all duration-300"
              data-testid="card-engagement-custom-solution"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <CodeXml className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">
                  Custom Solution Development
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Resolve complex business challenges with end-to-end,
                  innovative software solutions tailored to your specific needs.
                </p>
                <Link href="/services">
                  <Button
                    className="w-full"
                    data-testid="button-learn-custom-solution"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2
              className="font-serif text-3xl lg:text-4xl font-semibold mb-4"
              data-testid="text-industries-title"
            >
              Industries We Serve
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Deep domain expertise across key industry verticals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {industries.map((industry, index) => (
              <div
                key={industry.name}
                className="group relative overflow-hidden rounded-md aspect-[16/9]"
                data-testid={`card-industry-${industry.name.toLowerCase().replace(/\s/g, "-")}`}
              >
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-semibold text-xl text-white mb-1">
                    {industry.name}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/industries">
              <Button
                variant="outline"
                size="lg"
                data-testid="button-view-all-industries"
              >
                Explore All Industries
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2
              className="font-serif text-3xl lg:text-4xl font-semibold mb-4"
              data-testid="text-projects-title"
            >
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Showcasing our latest work and successful client partnerships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Card
                key={project.title}
                className="group overflow-hidden hover-elevate transition-all duration-300"
                data-testid={`card-project-${project.title.toLowerCase().replace(/\s/g, "-")}`}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
                <CardContent className="p-5">
                  <Badge variant="secondary" className="mb-3 text-xs">
                    {project.category}
                  </Badge>
                  <h3 className="font-semibold text-lg mb-3">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/projects">
              <Button
                variant="outline"
                size="lg"
                data-testid="button-view-all-projects"
              >
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center"
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s/g, "-")}`}
              >
                <stat.icon className="h-8 w-8 text-primary-foreground/80 mx-auto mb-3" />
                <div className="font-serif text-3xl lg:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-card via-background to-card">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="font-serif text-3xl lg:text-4xl font-semibold mb-4"
            data-testid="text-cta-title"
          >
            Ready to Transform Your Business?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how Gedeb Technologies can help you achieve your
            technology goals. Our team of experts is ready to partner with you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" data-testid="button-cta-contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                data-testid="button-cta-services"
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
