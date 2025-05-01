import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary py-6 px-6 border-t border-accent">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-text text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Zaina Bilquis. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="text-primary-text hover:text-highlight transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/zaina-bilquis-208586331" 
              className="text-primary-text hover:text-highlight transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a 
              href="https://www.instagram.com/zeyyy.naaa_" 
              className="text-primary-text hover:text-highlight transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
