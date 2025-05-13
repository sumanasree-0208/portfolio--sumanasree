import React, { useEffect, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { useTheme } from "./theme/ThemeProvider";

// Interface for social links
interface SocialLink {
  name: string;
  url: string;
  icon: JSX.Element;
}

const Contact: React.FC = () => {
  const { theme } = useTheme();

  // Memoized social links
  const socialLinks: SocialLink[] = useMemo(
    () => [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/meda-venkata-sumana-sree-076526255/",
        icon: <Linkedin className="h-5 w-5" />,
      },
      {
        name: "GitHub",
        url: "https://github.com/sumanasree-0208",
        icon: <Github className="h-5 w-5" />,
      },
      {
        name: "Email",
        url: "mailto:sumanasree90140@gmail.com",
        icon: <Mail className="h-5 w-5" />,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/sumanasreemeda/",
        icon: <Instagram className="h-5 w-5" />,
      },
    ],
    []
  );

  // IntersectionObserver for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animation = entry.target.getAttribute("data-animation");
            if (animation) {
              entry.target.classList.add(animation);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animation]");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Theme classes for light/dark mode
  const themeClasses = {
    section: theme === "dark" ? "bg-gray-900 text-white" : "bg-purple-50 text-gray-800",
    card: theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200",
    text: theme === "dark" ? "text-gray-300" : "text-gray-700",
    socialButton: theme === "dark"
      ? "bg-gray-700 hover:bg-gray-600 text-white hover:text-blue-400"
      : "bg-white hover:bg-gray-100 text-gray-800 hover:text-blue-600 shadow-sm hover:shadow-md",
    outlineButton: theme === "dark"
      ? "border-gray-600 text-gray-300 hover:bg-gray-700"
      : "border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  return (
    <section
      id="contact"
      className={`py-16 transition-colors duration-500 ${themeClasses.section}`}
    >
      <div className="section-container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in opacity-0"
          data-animation="animate-fade-in"
        >
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Google Maps Section */}
          <div
            className="lg:col-span-1 animate-slide-in-right opacity-0"
            data-animation="animate-slide-in-right"
          >
            <Card className={themeClasses.card}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Location</h3>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.080515874737!2d79.93733257509906!3d14.058779286353693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cafc8f599c8fb%3A0x4f6bdedbf08e7c4e!2sOld%20Railway%20Station%2C%20Ulavapadu!5e0!3m2!1sen!2sin!4v1731491234567!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ulavapadu Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information Section */}
          <div
            className="lg:col-span-2 animate-slide-in-left opacity-0"
            data-animation="animate-slide-in-left"
          >
            <Card className={themeClasses.card}>
              <CardContent className="p-6 space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <p className={`mb-2 ${themeClasses.text}`}>
                    Feel free to reach out for any queries or opportunities.
                  </p>
                  <p className={`mb-1 ${themeClasses.text}`}>
                    Email: sumanasree90140@gmail.com
                  </p>
                  <p className={`mb-1 ${themeClasses.text}`}>
                    College Email: 2200031315@kluniversity.in
                  </p>
                  <p className={`mb-1 ${themeClasses.text}`}>
                    Phone: +91 9493590140
                  </p>
                  <Button
                    variant="outline"
                    asChild
                    className={`mt-4 hover-scale ${themeClasses.outlineButton}`}
                  >
                    <a
                      href="Sumana Sree Resume(superset).pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View Resume"
                    >
                      View Resume
                    </a>
                  </Button>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center p-3 rounded-full transition-all duration-300 hover:scale-110 ${themeClasses.socialButton}`}
                        aria-label={`Follow on ${link.name}`}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;