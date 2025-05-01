import { motion } from "framer-motion";
import { FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  const contacts = [
    {
      id: 1,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/zaina-bilquis-208586331",
      icon: <FaLinkedinIn className="text-2xl" />
    },
    {
      id: 2,
      name: "Instagram",
      url: "https://www.instagram.com/zeyyy.naaa_",
      icon: <FaInstagram className="text-2xl" />
    },
    {
      id: 3,
      name: "Email",
      url: "mailto:zainabilquis06@gmail.com",
      icon: <FaEnvelope className="text-2xl" />
    }
  ];

  return (
    <section id="contact" className="py-16 px-6 bg-secondary">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold font-heading text-primary-text mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        
        <div className="max-w-2xl mx-auto bg-primary p-8 rounded-lg shadow-lg">
          <motion.p 
            className="text-center text-primary-text mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </motion.p>
          
          <div className="flex justify-center space-x-6">
            {contacts.map((contact, index) => (
              <motion.a 
                key={contact.id}
                href={contact.url}
                className="flex flex-col items-center text-primary-text hover:text-highlight transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-2">
                  {contact.icon}
                </div>
                <span>{contact.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
