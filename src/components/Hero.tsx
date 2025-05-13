import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone } from "lucide-react";

const Hero: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Bounce effect for image
  useEffect(() => {
    if (imageRef.current) {
      setTimeout(() => {
        imageRef.current?.classList.add("animate-bounce");
      }, 1500);
    }
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll" data-animation="slide-in-from-left">
            <p className="text-primary dark:text-primary font-medium mb-2 animate-fade-in">
              Hello, I'm
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 dark:text-white animate-on-scroll"
              data-animation="fade-in"
            >
              Meda Venkata Sumana Sree
            </h1>
            <p
              className="text-xl text-gray-600 dark:text-gray-300 mb-6 animate-on-scroll"
              data-animation="fade-in"
            >
              Computer Science Engineering Student
            </p>
            <div className="space-y-3 mb-6">
              <div
                className="flex items-center animate-on-scroll slide-in-from-left"
                style={{ animationDelay: "0.2s" }}
              >
                <MapPin className="h-5 w-5 text-primary dark:text-primary mr-2" />
                <span className="text-gray-600 dark:text-gray-300">
                  Old railway road, Ulavapdu, Nellore dist.
                </span>
              </div>
              <div
                className="flex items-center animate-on-scroll slide-in-from-left"
                style={{ animationDelay: "0.3s" }}
              >
                <Mail className="h-5 w-5 text-primary dark:text-primary mr-2" />
                <span className="text-gray-600 dark:text-gray-300">
                  sumanasree90140@gmail.com
                </span>
              </div>
              <div
                className="flex items-center animate-on-scroll slide-in-from-left"
                style={{ animationDelay: "0.4s" }}
              >
                <Phone className="h-5 w-5 text-primary dark:text-primary mr-2" />
                <span className="text-gray-600 dark:text-gray-300">
                  +91 9493590140
                </span>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <Button
                asChild
                className="animate-on-scroll slide-in-from-left hover-scale"
                style={{ animationDelay: "0.5s" }}
              >
                <a href="#contact">Contact Me</a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="animate-on-scroll slide-in-from-left hover-scale"
                style={{ animationDelay: "0.6s" }}
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="animate-on-scroll slide-in-from-left hover-scale"
                style={{ animationDelay: "0.7s" }}
              >
                <a
                  href="Sumana Sree Resume(superset).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </a>
              </Button>
            </div>
          </div>

          <div
            ref={imageRef}
            className="flex justify-center md:justify-end animate-on-scroll pulse-slow"
            data-animation="fade-in"
          >
            <div className="rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl h-64 w-64 md:h-80 md:w-80 hover-scale">
              <img
                src="WhatsApp Image 2025-05-13 at 09.51.50_ad0ba6db.jpg"
                alt="Meda Venkata Sumana Sree"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;