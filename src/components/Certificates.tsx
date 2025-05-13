
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      name: "AWS CP",
      url: "https://drive.google.com/file/d/1s69LC-8HCh4mpUJe2xmqvmhBAKyiiHzK/view"
    },
    {
      name: "Salesforce AI Associate",
      url: "https://drive.google.com/file/d/1SecAq_4c7AsVJHrbYu_rCwv_O-XdMT5m/view"
    },
    {
      name: "Oracle Certified Professional",
      url: "https://drive.google.com/file/d/1xEMjPOE56TO_58U0YL1xhQlD_gxDBIpE/view"
    },
    {
      name: "Red Hat",
      url: "https://drive.google.com/file/d/1zRGxMvSElobp4tLyNpOaMmjuCr7RMuRl/view"
    }
  ];

  return (
    <section id="certificates" className="bg-white dark:bg-gray-900 py-16 transition-colors duration-300">
      <div className="section-container">
        <h2 className="section-title dark:text-white">Certificates</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <Card 
              key={index} 
              className="hover:shadow-md transition-all hover-scale dark:bg-gray-800 dark:border-gray-700 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold dark:text-white">{cert.name}</h3>
                  <Button variant="outline" size="sm" asChild className="group">
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Link className="h-4 w-4" />
                      View
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
