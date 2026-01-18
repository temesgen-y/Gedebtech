import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layout } from "@/components/layout";
import {
  ArrowRight,
  MapPin,
  Briefcase,
  Clock,
  Heart,
  Coffee,
  GraduationCap,
  Laptop,
  Users,
  Globe,
  TrendingUp,
  Zap,
} from "lucide-react";
import careerHeroImage from "@assets/stock_images/professional_busines_6192e80e.jpg";

const benefits = [
  {
    icon: Heart,
    title: "Attractive Compensation",
    description:
      "We offer a competitive compensation package with opportunities for career development.",
  },
  {
    icon: GraduationCap,
    title: "Diverse Workplace",
    description:
      "We are passionate about creating a diverse workplace that values differences and promotes inclusivity",
  },
  {
    icon: Laptop,
    title: "Remote Work",
    description: "Flexible work-from-home options and hybrid arrangements",
  },
  {
    icon: Coffee,
    title: "Work Life Balance",
    description:
      "We understand that a work life balance is important to our employees’ health and provide a generous time off package.",
  },
  {
    icon: Users,
    title: "Team Events",
    description: "Regular team outings, retreats, and social activities",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Clear career paths and mentorship programs",
  },
  {
    icon: TrendingUp,
    title: "Global Impact",
    description:
      "Join a team that works on solutions with a global reach. Your work at Mereb will impact clients and communities around the world.",
  },
  {
    icon: Users,
    title: "Learning and Development",
    description:
      "We are committed to helping each individual reach their full potential and offer both hands on training and external learning opportunities.",
  },

  {
    icon: Laptop,
    title: "Innovative Projects",
    description:
      "Be a part of groundbreaking projects that challenge the status quo and push the boundaries of technology. At wODEB, your creativity and expertise will be at the forefront of every project.",
  },
];

const jobListings = [
  {
    id: "1",
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Addis Ababa (Hybrid)",
    type: "Full-time",
    description:
      "Join our engineering team to build scalable web applications using React, Node.js, and cloud technologies.",
  },
  {
    id: "2",
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Addis Ababa (Hybrid)",
    type: "Full-time",
    description:
      "Help us build and maintain our cloud infrastructure, CI/CD pipelines, and monitoring systems.",
  },
  {
    id: "3",
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description:
      "Create beautiful, intuitive user experiences for our enterprise software products.",
  },
  {
    id: "4",
    title: "Project Manager",
    department: "Delivery",
    location: "Addis Ababa",
    type: "Full-time",
    description:
      "Lead cross-functional teams to deliver complex software projects on time and within budget.",
  },
  {
    id: "5",
    title: "Mobile Developer (React Native)",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Build cross-platform mobile applications for iOS and Android using React Native.",
  },
  {
    id: "6",
    title: "QA Engineer",
    department: "Quality",
    location: "Addis Ababa (Hybrid)",
    type: "Full-time",
    description:
      "Ensure the quality of our software through manual and automated testing strategies.",
  },
];

const values = [
  {
    icon: Zap,
    title: "Innovation First",
    description: "We embrace new ideas and technologies",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "We succeed together as a team",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Our work reaches clients worldwide",
  },
];

export default function Careers() {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 bg-slate-800 dark:bg-slate-900 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 dark:from-slate-800 dark:via-slate-900 dark:to-black" />
            <div className="relative px-6 lg:px-12 py-12 lg:py-16 pb-24 lg:pb-28">
              <div className="bg-gray-200 dark:bg-gray-700 p-6 lg:p-8 max-w-lg">
                <p className="text-sm font-bold text-primary uppercase tracking-wide mb-3">
                  Careers
                </p>
                <h1
                  className="font-serif text-2xl lg:text-3xl font-bold mb-4 leading-tight"
                  data-testid="text-careers-page-title"
                >
                  <span className="text-primary">
                    wODEBTech is the catalyst
                  </span>{" "}
                  <span className="text-slate-900 dark:text-slate-100">
                    to transform your career
                  </span>
                </h1>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  wODEBTech provides the right opportunity to amplify your
                  unique talents and learn and grow in a vibrant, diverse, and
                  inclusive workplace. Start your journey now!
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[400px]">
            <img
              src={careerHeroImage}
              alt="Career opportunities"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-slate-800/30 dark:to-slate-900/30" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 lg:h-20 overflow-hidden">
          <svg
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 80L1440 80L1440 0L0 80Z"
              className="fill-sky-200 dark:fill-sky-900/50"
            />
            <path d="M0 80L1440 80L1440 20L0 80Z" className="fill-card" />
          </svg>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-4">
              Our Culture & Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center hover-elevate">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button size="lg" asChild>
              <a href="#openings" data-testid="button-view-openings">
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-background border-b border-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
            From entry level to intermediate or experienced-level, wODEBTech offers a wide range of positions 
            relevant to your experience. We are committed to creating a work environment where people stay informed, 
            productive and connected to the company's culture. We are proud to be an equal opportunity and an 
            inclusive employer that is a leader in non-discrimination based on race, ethnicity, religion, disability, 
            sexual orientation, age, or gender identity.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-4">
              Why Work at wODEB Technologies?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We offer a comprehensive benefits package designed to support your
              well-being and growth.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="hover-elevate">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="openings" className="py-16 lg:py-24 bg-card scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-4">
              Open Positions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Find your next opportunity with wODEB Technologies
            </p>
          </div>
          <div className="space-y-4">
            {jobListings.map((job) => (
              <Card
                key={job.id}
                className="hover-elevate transition-all duration-300"
                data-testid={`card-job-${job.id}`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg">{job.title}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {job.type}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>
                    <Link href="/contact">
                      <Button
                        variant="outline"
                        data-testid={`button-apply-${job.id}`}
                      >
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
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
            Don't See the Right Role?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for exceptional talent. Send us your resume and
            we'll reach out when we have a position that matches your skills.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              data-testid="button-careers-general-application"
            >
              Submit General Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
