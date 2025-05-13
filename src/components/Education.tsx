
import React from "react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology (BTech)",
      institution: "Koneru Lakshmaiah University",
      location: "Vijayawada",
      period: "Present",
      score: "CGPA: 9.5",
      major: "Computer Science Engineering"
    },
    {
      degree: "12th Class",
      institution: "Sri Sai Ram Junior College",
      location: "Ongole",
      period: "Completed",
      score: "Grade: 9.65"
    },
    {
      degree: "10th Class",
      institution: "Sri Sai Olympiad High School",
      location: "Ulavapadu",
      period: "Completed",
      score: "Grade: 9.8"
    }
  ];

  return (
    <section id="education" className="bg-purple-50 dark:bg-gray-800 py-16 transition-colors duration-300">
      <div className="section-container">
        <h2 className="section-title dark:text-white">Education</h2>
        
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary dark:bg-primary rounded-full"></div>
          
          {education.map((item, index) => (
            <div 
              key={index} 
              className={`timeline-item mb-12 pl-12 ${
                index % 2 === 0 ? 'slide-in-from-left' : 'slide-in-from-right'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-circle"></div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover-scale">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{item.degree}</h3>
                    <p className="text-primary dark:text-primary font-medium">{item.institution}, {item.location}</p>
                    {item.major && <p className="text-gray-600 dark:text-gray-300">{item.major}</p>}
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 dark:text-gray-400">{item.period}</p>
                    <p className="text-lg font-semibold text-primary dark:text-primary">{item.score}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
