
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<null | number>(null);

  const projects = [
    {
      title: "Hospital Management System",
      type: "PFSD",
      description: "A comprehensive hospital management system to streamline administrative tasks and improve patient care.",
      details: "This hospital management system is designed to digitize and streamline hospital operations. It includes modules for patient registration, appointment scheduling, doctor management, billing, pharmacy, and laboratory management. The system was built using Python Full Stack Development with Django framework, PostgreSQL database, HTML/CSS for frontend, and deployed on AWS.",
      githubLink: "https://github.com/sumanasree-0208"
    },
    {
      title: "Online Job Portal",
      type: "MERN",
      description: "A full-stack job portal built using MongoDB, Express, React, and Node.js stack.",
      details: "This job portal connects employers with job seekers. It includes features such as job posting, job search with filters, user profiles, application tracking, resume uploads, and an admin dashboard. The application was built using the MERN stack (MongoDB, Express, React, Node.js) with additional libraries like Redux for state management and JWT for authentication.",
      githubLink: "https://github.com/sumanasree-0208/online-job-portal/tree/master"
    },
    {
      title: "Time Table Management System for Student",
      type: "EP",
      description: "An efficient system for managing and optimizing student timetables and schedules.",
      details: "This time table management system helps educational institutions create and manage class schedules efficiently. It includes features like clash detection, resource allocation, teacher availability management, and automated timetable generation. The system was developed using Enterprise Programming principles with Java, Spring Boot, and MySQL database.",
      githubLink: "https://github.com/sumanasree-0208"
    },
    {
      title: "Indian Constitution Awareness",
      type: "JFSD",
      description: "An educational platform to promote awareness about the Indian Constitution.",
      details: "This educational platform aims to increase awareness about the Indian Constitution among citizens. It includes interactive learning modules, quizzes, important articles and amendments explanations, landmark judgments, and a forum for discussions. The application was developed using Java Full Stack Development with Spring Boot backend and Angular frontend.",
      githubLink: "https://github.com/sumanasree-0208/indian_constitution"
    }
  ];

  const handleOpenDetails = (index: number) => {
    setSelectedProject(index);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="bg-purple-50 dark:bg-gray-800 py-16 transition-colors duration-300">
      <div className="section-container">
        <h2 className="section-title dark:text-white">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-xl transition-all hover-scale dark:bg-gray-700 dark:border-gray-600"
            >
              <div className="h-3 bg-primary" />
              <CardContent className="p-6">
                <span className="inline-block px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs font-medium mb-3">
                  {project.type}
                </span>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <Button onClick={() => handleOpenDetails(index)} size="sm" variant="outline" className="group">
                  Learn More
                  <ExternalLink className="ml-2 h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={selectedProject !== null} onOpenChange={() => handleCloseDetails()}>
        {selectedProject !== null && (
          <DialogContent className="sm:max-w-[500px] dark:bg-gray-800 dark:text-white">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-primary dark:text-primary">{projects[selectedProject].title}</DialogTitle>
              <span className="inline-block px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs font-medium mt-2">
                {projects[selectedProject].type}
              </span>
            </DialogHeader>
            <DialogDescription className="text-foreground dark:text-gray-300">
              {projects[selectedProject].details}
            </DialogDescription>
            <DialogFooter>
              <Button 
                onClick={() => window.open(projects[selectedProject].githubLink, '_blank')}
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default Projects;
