import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Layout } from "@/components/layout";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Lightbulb,
  Users,
  Shield,
  Zap,
  CheckCircle,
} from "lucide-react";
import { SiFacebook, SiX, SiInstagram, SiLinkedin } from "react-icons/si";
import aboutImage from "@assets/stock_images/modern_professional__e5adbaec.jpg";
import abasImage from "@assets/abas_1768510277033.png";
import masreshaImage from "@assets/Masresha_1768490810808.jpeg";
import teamMale1 from "@assets/stock_images/professional_busines_bff8e031.jpg";
import teamMale2 from "@assets/stock_images/professional_busines_068300ed.jpg";
import teamMale3 from "@assets/stock_images/professional_busines_4b5e2a7c.jpg";
import teamMale4 from "@assets/stock_images/professional_busines_aa4c80bd.jpg";
import teamFemale1 from "@assets/stock_images/professional_busines_27a434e3.jpg";
import teamFemale2 from "@assets/stock_images/professional_busines_753a7f21.jpg";
import teamFemale3 from "@assets/stock_images/professional_busines_5d9f3d95.jpg";
import teamFemale4 from "@assets/stock_images/professional_busines_75a28643.jpg";

import clientLogo1 from "@assets/stock_images/minimal_company_logo_3e7d1518.jpg";
import clientLogo2 from "@assets/stock_images/minimal_company_logo_b3f2aab1.jpg";
import clientLogo3 from "@assets/stock_images/minimal_company_logo_54db3e31.jpg";
import clientLogo4 from "@assets/stock_images/minimal_company_logo_5c4033b1.jpg";
import clientLogo5 from "@assets/stock_images/minimal_company_logo_6bad224a.jpg";
import clientLogo6 from "@assets/stock_images/minimal_company_logo_5e762e41.jpg";
import clientLogo7 from "@assets/stock_images/minimal_company_logo_9b29639c.jpg";
import clientLogo8 from "@assets/stock_images/minimal_company_logo_c00dd014.jpg";
import clientLogo9 from "@assets/stock_images/minimal_company_logo_4defaa03.jpg";
import clientLogo10 from "@assets/stock_images/minimal_company_logo_df22b177.jpg";
import clientLogo11 from "@assets/stock_images/corporate_brand_logo_1ed64967.jpg";
import clientLogo12 from "@assets/stock_images/corporate_brand_logo_07cabb86.jpg";
import clientLogo13 from "@assets/stock_images/corporate_brand_logo_90b397b7.jpg";
import clientLogo14 from "@assets/stock_images/corporate_brand_logo_261bdc3c.jpg";
import clientLogo15 from "@assets/stock_images/corporate_brand_logo_86039522.jpg";
import clientLogo16 from "@assets/stock_images/corporate_brand_logo_b3888a38.jpg";
import globeImage from "@assets/Globe_1768334749487.png";
import bpoImage from "@assets/stock_images/business_team_meetin_f7712fd9.jpg";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace new technologies and creative solutions to solve complex challenges.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work closely with our clients as partners, fostering transparency and trust.",
  },
  {
    icon: Shield,
    title: "Quality",
    description:
      "We deliver excellence in every project, adhering to the highest industry standards.",
  },
  {
    icon: Zap,
    title: "Agility",
    description:
      "We adapt quickly to changing requirements and deliver solutions on time.",
  },
];

const team = [
  {
    name: "Abas Usman",
    role: "CEO & Founder",
    initials: "AU",
    image: abasImage,
    imagePosition: "center 30%",
    linkedin: "https://www.linkedin.com/in/abasusman12/",
    twitter: "https://twitter.com/",
  },
  {
    name: "Masresha Yayeh",
    role: "CTO",
    initials: "MY",
    image: masreshaImage,
    imagePosition: "center 35%",
    linkedin: "https://www.linkedin.com/in/masreshay/",
    twitter: "https://twitter.com/",
  },
  {
    name: "Bamlaku Bekele",
    role: "Seniour Software Engineer",
    initials: "DB",
    image: undefined,
    linkedin: "https://linkedin.com/in/",
    twitter: "https://twitter.com/",
  },
  {
    name: "Helen Tesfaye",
    role: "Design Director",
    initials: "HT",
    image: undefined,
    linkedin: "https://linkedin.com/in/",
    twitter: "https://twitter.com/",
  },
  {
    name: "Michael Taye",
    role: "Project Lead",
    initials: "MG",
    image: undefined,
    linkedin: "https://linkedin.com/in/",
    twitter: "https://twitter.com/",
  },
  {
    name: "Rahel Assefa",
    role: "Senior Developer",
    initials: "RA",
    image: undefined,
    linkedin: "https://linkedin.com/in/",
    twitter: "https://twitter.com/",
  },
  {
    name: "Yonas Haile",
    role: "DevOps Lead",
    initials: "YH",
    image: undefined,
    linkedin: "https://linkedin.com/in/",
    twitter: "https://twitter.com/",
  },
  {
    name: "Tigist Alemayehu",
    role: "QA Manager",
    initials: "TA",
    image: undefined,
    linkedin: "https://linkedin.com/in/",
    twitter: "https://twitter.com/",
  },
];

const clientLogos = [
  { src: clientLogo1, alt: "AFIG FUNDS" },
  { src: clientLogo2, alt: "GoodFirms" },
  { src: clientLogo3, alt: "Medafa" },
  { src: clientLogo4, alt: "TwoONE" },
  { src: clientLogo5, alt: "KEYSQUARE" },
  { src: clientLogo6, alt: "AFRICA MEDIA" },
  { src: clientLogo7, alt: "Exelia" },
  { src: clientLogo8, alt: "10.13" },
  { src: clientLogo9, alt: "Ubutix" },
  { src: clientLogo10, alt: "PICKELL GLOBAL" },
  { src: clientLogo11, alt: "MELA" },
  { src: clientLogo12, alt: "Ethiopian Airlines" },
  { src: clientLogo13, alt: "Awash Bank" },
  { src: clientLogo14, alt: "Ethio Telecom" },
  { src: clientLogo15, alt: "Commercial Bank" },
  { src: clientLogo16, alt: "The Nest Hotel" },
];

const testimonials = [
  {
    id: 1,
    quote:
      "GedebTech is one amazing technology company. They're highly intelligent people and still have good people skills, which makes them easy (and fun) to work with. They are the definition of professionalism. SEO, Software Development, Cyber security, and Software as a services(SAS) Provider.",
    client: "The Nest Hotel",
    image: teamMale1,
  },
  {
    id: 2,
    quote:
      "Working with GedebTech transformed our business operations. Their team delivered a custom ERP solution that exceeded our expectations. The attention to detail and commitment to quality is unmatched.",
    client: "Ethiopian Airlines",
    image: teamFemale1,
  },
  {
    id: 3,
    quote:
      "The mobile app they developed for us has revolutionized how we serve our customers. Professional, timely, and always available for support. Highly recommended for any enterprise project.",
    client: "Commercial Bank of Ethiopia",
    image: teamMale2,
  },
  {
    id: 4,
    quote:
      "GedebTech's cybersecurity solutions gave us peace of mind. Their expertise in protecting our digital assets while maintaining seamless user experience is truly remarkable.",
    client: "Ethio Telecom",
    image: teamFemale2,
  },
  {
    id: 5,
    quote:
      "From concept to deployment, the GedebTech team demonstrated exceptional skill and dedication. They don't just build software, they build partnerships that last.",
    client: "Awash Bank",
    image: teamMale3,
  },
];

const milestones = [
  {
    year: "2014",
    title: "Company Founded",
    description: "Gedeb Technologies established in Addis Ababa",
  },
  {
    year: "2016",
    title: "First Enterprise Client",
    description: "Secured major government contract",
  },
  {
    year: "2018",
    title: "Regional Expansion",
    description: "Opened offices across East Africa",
  },
  {
    year: "2020",
    title: "Cloud Certification",
    description: "Achieved AWS and Azure partnerships",
  },
  {
    year: "2022",
    title: "100+ Team Members",
    description: "Grew to over 100 talented professionals",
  },
  {
    year: "2024",
    title: "Global Reach",
    description: "Serving clients across 15+ countries",
  },
];

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold">
            What Our Client's Say
          </h2>
        </div>
        <div className="relative">
          <div className="flex items-center justify-center gap-8">
            <button
              onClick={goToPrevious}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors shrink-0"
              aria-label="Previous testimonial"
              data-testid="button-testimonial-prev"
            >
              <ArrowRight className="h-5 w-5 rotate-180" />
            </button>
            <div className="text-center max-w-2xl min-h-[250px] flex flex-col items-center justify-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-lg overflow-hidden border-2 border-primary/20 bg-card transition-all duration-500">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.client}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 transition-opacity duration-500">
                {currentTestimonial.quote}
              </p>
              <p className="font-semibold text-foreground">
                {currentTestimonial.client}
              </p>
            </div>
            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors shrink-0"
              aria-label="Next testimonial"
              data-testid="button-testimonial-next"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-border"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                data-testid={`button-testimonial-dot-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { SEO } from "@/components/seo";

export default function About() {
  return (
    <Layout>
      <SEO
        title="About Us - Leading IT Company in Ethiopia | Gedeb Technologies"
        description="Learn about Gedeb Technologies, a premier software development company in Ethiopia. Our team delivers innovative IT solutions, custom software, and digital transformation services in Addis Ababa."
        keywords="about Gedeb Technologies, IT company Ethiopia, software development team Ethiopia, technology company Addis Ababa, IT solutions provider Ethiopia"
        url="/about"
        type="organization"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" },
        ]}
        organization={{
          name: "Gedeb Technologies",
          url: "https://gedebtech.com",
          logo: "https://gedebtech.com/favicon.png",
          sameAs: [
            "https://www.linkedin.com/company/gedeb-technologies",
            "https://twitter.com/gedebtech",
            "https://www.facebook.com/gedebtechnologies",
          ],
        }}
      />
      <section className="py-12 lg:py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-serif text-2xl lg:text-3xl font-bold text-primary-foreground mb-3">
            About Us – Best Ethiopia BPO Services Provider
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm text-primary-foreground/80">
            <Link
              href="/"
              className="hover:text-primary-foreground transition-colors"
            >
              Home
            </Link>
            <span>›</span>
            <span>About Us – Best Ethiopia BPO Services Provider</span>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-primary mb-2">About Us</p>
              <h1
                className="font-serif text-3xl lg:text-5xl font-bold mb-6"
                data-testid="text-about-page-title"
              >
                Driving Digital Innovation Since 2014
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Gedeb Technologies is a leading software development company
                based in Ethiopia, delivering world-class technology solutions
                to clients across the globe. Our team of skilled engineers,
                designers, and strategists work together to transform businesses
                through innovative software.
              </p>
              <Link href="/contact">
                <Button size="lg" data-testid="button-about-contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src={aboutImage}
                alt="Gedeb Technologies Team"
                className="rounded-md w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={bpoImage}
                alt="BPO Excellence"
                className="rounded-md w-full aspect-[4/3] object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                About Gedeb
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
                Driving Business Growth with BPO Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Gedeb Technologies is a trusted Business Process Outsourcing
                (BPO) partner, helping businesses streamline operations and
                boost efficiency. We specialize in customer support, back-office
                management, data processing, and IT-enabled services, allowing
                companies to focus on growth while we handle the rest.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our expertise extends beyond borders, with a presence in Addis
                Ababa, Ethiopia, allowing us to serve international clients with
                seamless BPO solutions. By leveraging cutting-edge technology
                and industry best practices, we enable businesses to focus on
                their core objectives while we handle operational complexities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
            Revolutionize Your Business{" "}
            <span className="text-primary">with Gedeb Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Elevate your business with our diverse BPO services – where quality
            meets affordability.
          </p>
        </div>
      </section>

      <section className="py-12 bg-background overflow-hidden">
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center mx-8 shrink-0"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                <img
                  src={globeImage}
                  alt="Global Network"
                  className="w-full h-full object-contain animate-spin-slow"
                />
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
                Empowering Growth,{" "}
                <span className="text-primary">Bridging Global Gaps</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Gedeb Technologies, our mission goes beyond traditional
                software solutions. We are dedicated to creating impactful
                opportunities by drastically reducing unemployment across
                Ethiopia, while delivering exceptional, cost-effective services
                to businesses worldwide.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
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

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-8">
                Our <span className="text-primary">Promise</span> To You
              </h2>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg">
                      Tailored Solutions for Your Growth
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-7">
                    Our solutions are designed to evolve with your business,
                    ensuring continuous growth and efficiency.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg">
                      End-to-End Expertise
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-7">
                    From customer support and software development to data
                    management and outsourcing, we deliver seamless,
                    high-quality services designed to elevate your business.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg">
                      Client-Focused Approach
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-7">
                    Your success is our priority. We take the time to understand
                    your goals and work tirelessly to help you achieve them.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-primary/20 flex items-center justify-center bg-primary/5">
                  <div className="w-48 h-48 lg:w-60 lg:h-60 rounded-full border-2 border-primary flex items-center justify-center bg-primary text-primary-foreground text-center p-6">
                    <div>
                      <p className="font-bold text-lg lg:text-xl mb-1">
                        TRUSTED EXPERTS,
                      </p>
                      <p className="font-bold text-lg lg:text-xl">
                        GUARANTEED RESULTS
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div className="absolute top-1/2 -left-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Users className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="absolute top-1/2 -right-2 w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center">
                  <Target className="h-4 w-4 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            <Card className="hover-elevate">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-3">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower organizations worldwide with innovative technology
                  solutions that drive growth, efficiency, and competitive
                  advantage. We are committed to delivering exceptional software
                  that makes a real difference.
                </p>
              </CardContent>
            </Card>
            <Card className="hover-elevate">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-3">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become Africa's premier technology partner, recognized
                  globally for excellence in software development and digital
                  innovation. We aspire to lead the continent's tech
                  transformation.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="hover-elevate text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
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
              Our Leadership Team
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {team.map((member) => (
              <Card
                key={member.name}
                className="hover-elevate overflow-hidden"
                data-testid={`team-member-${member.name.toLowerCase().replace(/\s/g, "-")}`}
              >
                <CardContent className="p-6 text-center">
                  <Avatar
                    className="mx-auto mb-4 border-2 border-border"
                    style={{
                      width: member.imageSize || 160,
                      height: member.imageSize || 160,
                    }}
                  >
                    <AvatarImage
                      src={member.image}
                      alt={member.name}
                      className="object-cover"
                      style={{
                        objectPosition: member.imagePosition || "center 30%",
                      }}
                    />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h4 className="font-semibold text-lg">{member.name}</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    {member.role}
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${member.name} Facebook`}
                      data-testid={`link-facebook-${member.name.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      <SiFacebook className="h-4 w-4" />
                    </a>
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${member.name} Twitter`}
                      data-testid={`link-twitter-${member.name.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      <SiX className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${member.name} Instagram`}
                      data-testid={`link-instagram-${member.name.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      <SiInstagram className="h-4 w-4" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                      data-testid={`link-linkedin-${member.name.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      <SiLinkedin className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground text-lg">
              Key milestones in our growth story
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-start gap-6 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 md:-translate-x-1/2 mt-1.5" />
                  <div
                    className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                  >
                    <span className="text-primary font-semibold">
                      {milestone.year}
                    </span>
                    <h4 className="font-semibold text-lg mt-1">
                      {milestone.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-primary-foreground mb-4">
            Join Our Team
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our growing
            team. Explore career opportunities at Gedeb Technologies.
          </p>
          <Link href="/careers">
            <Button
              size="lg"
              variant="secondary"
              data-testid="button-about-careers"
            >
              View Open Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
