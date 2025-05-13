
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Meda Venkata Sumana Sree</h3>
            <p className="text-gray-400">Computer Science Engineering Student</p>
          </div>
          
          <div>
            <p className="text-gray-400">
              © {currentYear} All Rights Reserved
            </p>
            <p>Developed by{" "}
              <a href="https://indivar.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">
                Bolisetty Indivar
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
