
import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["C", "Java"]
    },
    {
      category: "Full Stack",
      skills: ["MERN Stack"]
    },
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      category: "Database",
      skills: ["SQL", "MongoDB", "PostgreSQL"]
    },
    {
      category: "Communication",
      skills: ["English", "Telugu", "Hindi"]
    }
  ];

  return (
    <section id="skills" className="bg-white dark:bg-gray-900 py-16 transition-colors duration-300">
      <div className="section-container">
        <h2 className="section-title dark:text-white">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="skill-item bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg border border-gray-100 dark:border-gray-700 hover-scale"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary dark:text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-primary dark:text-purple-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
