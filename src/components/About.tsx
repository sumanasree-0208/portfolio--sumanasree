
import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "./theme/ThemeProvider";

const About = () => {
  const { theme } = useTheme();
  const hobbies = [
    "Listening to music",
    "Watching old movies"
  ];
  
  useEffect(() => {
    // Animation effect for elements when they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section 
      id="about" 
      className={`py-16 transition-colors duration-500 ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="section-container">
        <h2 className={`section-title ${theme === "dark" ? "text-white" : ""}`}>
          About Me
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <p className={`mb-8 text-lg transition-colors duration-300 animate-on-scroll opacity-0 ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}>
            I'm a Computer Science Engineering (CSE) student at Koneru Lakshmaiah University, passionate about technology
            and software development. With a strong foundation in MERN stack and various programming languages,
            I'm enthusiastic about creating solutions that make a difference.
          </p>
          
          <div className="mb-10 animate-on-scroll opacity-0" style={{ animationDelay: "200ms" }}>
            <h3 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-white" : ""}`}>
              Academic Background
            </h3>
            <p className={`transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}>
              I'm pursuing my Bachelor of Technology (BTech) in Computer Science Engineering,
              focusing on building a strong technical foundation and practical skills.
            </p>
          </div>
          
          <div className="animate-on-scroll opacity-0" style={{ animationDelay: "400ms" }}>
            <h3 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-white" : ""}`}>
              Hobbies & Interests
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hobbies.map((hobby, index) => (
                <Card 
                  key={index} 
                  className={`hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 ${
                    theme === "dark" ? "bg-gray-800 border-gray-700" : "hover:shadow-md"
                  }`}
                >
                  <CardContent className="p-4">
                    <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
                      {hobby}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
