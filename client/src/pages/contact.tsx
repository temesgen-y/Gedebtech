import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/layout";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  Subject: z.string().min(2, "Name must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "Addis Ababa, Ethiopia",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@gedebtech.com",
    href: "mailto:info@gedebtech.com",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+251 928 730 333",
    href: "tel:+251911000000",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon - Fri: 9:00 AM - 6:00 PM (EAT)",
  },
];

import { SEO } from "@/components/seo";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      Subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <Layout>
      <SEO
        title="Contact Us - Software Development Company in Ethiopia | Gedeb Technologies"
        description="Get in touch with Gedeb Technologies for custom software development, web & mobile apps, cloud solutions, and IT services in Ethiopia. Located in Addis Ababa."
        keywords="contact Gedeb Technologies, software development company contact, IT services Ethiopia contact, Addis Ababa IT company"
        url="/contact"
        type="website"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contact Us", url: "/contact" },
        ]}
        localBusiness={{
          name: "Gedeb Technologies",
          address: {
            addressLocality: "Addis Ababa",
            addressRegion: "Addis Ababa",
            addressCountry: "ET",
          },
          telephone: "+251 928 730 333",
          openingHours: ["Mo-Fr 09:00-18:00"],
        }}
        faq={[
          {
            question: "How can I contact Gedeb Technologies?",
            answer: "You can contact us via email at info@gedebtech.com, phone at +251 928 730 333, or fill out the contact form on this page. We're located in Addis Ababa, Ethiopia.",
          },
          {
            question: "What are your business hours?",
            answer: "Our business hours are Monday to Friday, 9:00 AM to 6:00 PM (EAT - East Africa Time).",
          },
          {
            question: "Do you provide services outside Ethiopia?",
            answer: "Yes, while we're based in Ethiopia, we provide software development and IT services to clients internationally.",
          },
        ]}
      />
      <section className="relative py-24 lg:py-32 border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-card to-primary/15 dark:from-primary/15 dark:via-card dark:to-primary/10" />
        <div className="absolute inset-0 animate-gradient-flow opacity-70" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary mb-2">Contact Us</p>
            <h1
              className="font-serif text-3xl lg:text-5xl font-bold mb-4"
              data-testid="text-contact-page-title"
            >
              Let's Start a Conversation
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Have a project in mind or want to learn more about our services?
              We'd love to hear from you. Fill out the form below and our team
              will get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              {isSubmitted ? (
                <Card className="text-center py-12">
                  <CardContent>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="font-serif text-2xl font-semibold mb-4">
                      Thank You for Reaching Out!
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      We've received your message and will get back to you
                      within 24 hours.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="p-6 lg:p-8">
                    <h2 className="font-semibold text-xl mb-6">
                      Send us a message
                    </h2>
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="John Doe"
                                    {...field}
                                    data-testid="input-contact-name"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="john@company.com"
                                    {...field}
                                    data-testid="input-contact-email"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                          control={form.control}
                          name="Subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Subject"
                                  {...field}
                                  data-testid="input-contact-subject"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

<FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company (Optional)</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your Company"
                                  {...field}
                                  data-testid="input-contact-company"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message *</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us about your project or inquiry..."
                                  rows={6}
                                  {...field}
                                  data-testid="input-contact-message"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full sm:w-auto"
                          disabled={mutation.isPending}
                          data-testid="button-contact-submit"
                        >
                          {mutation.isPending ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            "Send Message"
                          )}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="lg:col-span-2">
              <h2 className="font-semibold text-xl mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{info.title}</h4>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Stay connected and follow us on social media for the latest
                  updates and insights.
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-md bg-card border border-border flex items-center justify-center hover:bg-accent transition-colors"
                    aria-label="LinkedIn"
                    data-testid="link-contact-linkedin"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-md bg-card border border-border flex items-center justify-center hover:bg-accent transition-colors"
                    aria-label="Twitter"
                    data-testid="link-contact-twitter"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-md bg-card border border-border flex items-center justify-center hover:bg-accent transition-colors"
                    aria-label="GitHub"
                    data-testid="link-contact-github"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="w-full h-[400px] lg:h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.7746891!3d8.9933954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNTknMzYuMiJOIDM4wrA0NicyOC45IkU!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="GedebTech Office Location"
            data-testid="map-location"
          />
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-card border-t border-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-3">
            <span className="text-foreground">Subscribe Our</span>{" "}
            <span className="text-muted-foreground font-normal">
              Newsletter
            </span>
          </h2>
          <div className="flex items-center justify-center gap-1 mb-4">
            <div className="w-8 h-1 bg-primary rounded-full" />
            <div className="w-8 h-1 bg-slate-800 dark:bg-slate-200 rounded-full" />
          </div>
          <p className="text-muted-foreground mb-8">Get updates.</p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              toast({
                title: "Subscribed!",
                description: "You've been added to our newsletter.",
              });
            }}
          >
            <Input
              type="email"
              placeholder="Enter Email Address"
              className="flex-1 h-12 bg-background"
              required
              data-testid="input-newsletter-email"
            />
            <Button
              type="submit"
              className="h-12 px-8 bg-lime-500 hover:bg-lime-600 text-slate-900 font-semibold uppercase tracking-wide"
              data-testid="button-newsletter-subscribe"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
