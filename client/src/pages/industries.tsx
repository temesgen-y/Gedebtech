import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import healthcareImage from "@assets/stock_images/healthcare_technolog_056fcaff.jpg";
import financeImage from "@assets/stock_images/financial_technology_07b0834a.jpg";
import manufacturingImage from "@assets/stock_images/manufacturing_indust_dc60077c.jpg";
import ecommerceImage from "@assets/stock_images/e-commerce_retail_te_4dec67f7.jpg";
import educationImage from "@assets/stock_images/education_technology_36fbdebb.jpg";
import project1Image from "@assets/stock_images/software_development_59558925.jpg";
import logoImage from "@assets/g-logo_1768092260483.png";

const industries = [
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    description: "Digital health solutions that improve patient outcomes and streamline healthcare delivery.",
    image: healthcareImage,
    solutions: [
      "Telemedicine platforms",
      "Electronic Health Records (EHR)",
      "Medical device integration",
      "Healthcare analytics",
      "Patient engagement apps",
      "Clinical trial management",
    ],
    challenge: "Navigate complex regulatory requirements while delivering intuitive user experiences.",
  },
  {
    id: "fintech",
    name: "Financial Services & Fintech",
    description: "Innovative technology solutions for banks, insurance companies, and financial institutions.",
    image: financeImage,
    solutions: [
      "Digital banking platforms",
      "Payment processing systems",
      "Fraud detection & prevention",
      "Regulatory compliance tools",
      "Wealth management apps",
      "Insurance claim automation",
    ],
    challenge: "Ensure security and compliance while enabling seamless digital experiences.",
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Industrial",
    description: "Industry 4.0 solutions that optimize operations and drive efficiency across the production lifecycle.",
    image: manufacturingImage,
    solutions: [
      "IoT-enabled monitoring",
      "Predictive maintenance",
      "Supply chain optimization",
      "Quality control systems",
      "Inventory management",
      "Factory automation",
    ],
    challenge: "Integrate legacy systems with modern IoT infrastructure for real-time insights.",
  },
  {
    id: "retail",
    name: "Retail & E-Commerce",
    description: "Omnichannel solutions that enhance customer experience and drive sales growth.",
    image: ecommerceImage,
    solutions: [
      "E-commerce platforms",
      "Point of sale systems",
      "Inventory management",
      "Customer loyalty programs",
      "Order fulfillment",
      "Personalization engines",
    ],
    challenge: "Deliver seamless shopping experiences across all channels and devices.",
  },
  {
    id: "education",
    name: "Education & E-Learning",
    description: "Digital learning platforms that make education accessible and engaging for all learners.",
    image: educationImage,
    solutions: [
      "Learning management systems",
      "Virtual classrooms",
      "Assessment platforms",
      "Student information systems",
      "Corporate training",
      "Certification management",
    ],
    challenge: "Create engaging learning experiences that adapt to diverse learning styles.",
  },
  {
    id: "government",
    name: "Government & Public Sector",
    description: "Digital transformation solutions for government agencies and public institutions.",
    image: project1Image,
    solutions: [
      "Citizen services portals",
      "Document management",
      "Case management systems",
      "Public records access",
      "Compliance automation",
      "Data analytics platforms",
    ],
    challenge: "Modernize legacy systems while ensuring security and accessibility.",
  },
];

export default function Industries() {
  return (
    <Layout>
      <section className="py-16 lg:py-20 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary mb-2">Industries</p>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoImage} 
                alt="wODEBTech Solutions" 
                className="h-12 w-auto"
              />
              <h1 className="font-serif text-3xl lg:text-5xl font-bold" data-testid="text-industries-page-title">
                Industry-Specific Solutions
              </h1>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We bring deep domain expertise across key industry verticals, delivering solutions 
              that address the unique challenges and opportunities in each sector.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {industries.map((industry, index) => (
              <div
                key={industry.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                data-testid={`industry-section-${industry.id}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative aspect-video rounded-md overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="font-serif text-2xl lg:text-3xl font-semibold mb-4">
                    {industry.name}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {industry.description}
                  </p>
                  <div className="bg-card rounded-md p-4 mb-6 border border-border">
                    <p className="text-sm font-medium mb-1">Key Challenge:</p>
                    <p className="text-muted-foreground text-sm">{industry.challenge}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {industry.solutions.map((solution) => (
                      <div key={solution} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        <span>{solution}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact">
                    <Button variant="outline" data-testid={`button-industry-${industry.id}-contact`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-primary-foreground mb-4">
            Don't See Your Industry?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            We work with clients across many sectors. Contact us to discuss how we can help 
            with your specific industry needs.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" data-testid="button-industries-contact">
              Contact Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
