'use client';

import { motion } from 'framer-motion';
import { Heart, Linkedin, Github, Mail, ArrowUp, Code, Coffee, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/josney-ni%C3%B1o-5956b1278/',
    icon: Linkedin,
    color: 'hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/josneynino',
    icon: Github,
    color: 'hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/20',
  },
  {
    name: 'Email',
    href: 'mailto:jozneydeveloper@gmail.com',
    icon: Mail,
    color: 'hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20',
  },
];

const quickLinks = [
  { name: 'Sobre Mí', href: '#about' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Experiencia', href: '#experience' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Contacto', href: '#contact' },
];

const stats = [
  { label: 'Proyectos', value: '8+' },
  { label: 'Clientes', value: '3+' },
  { label: 'Meses', value: '6+' },
  { label: 'Cafés', value: '500+' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted/30 border-t relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">JN</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Josney Alejandro</h3>
                <p className="text-sm text-muted-foreground">Frontend Developer</p>
              </div>
            </motion.div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Creando experiencias digitales excepcionales con tecnologías web modernas. 
              Especializado en React, Next.js y TypeScript para construir el futuro digital.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-3 bg-white/50 dark:bg-black/20 rounded-xl border border-white/20 dark:border-white/10"
                >
                  <div className="text-lg font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Navegación</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Conecta Conmigo</h4>
            
            <div className="space-y-4">
              <a href="mailto:jozneydeveloper@gmail.com" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-blue-600">
                <Mail className="h-4 w-4" />
                <span>jozneydeveloper@gmail.com</span>
              </a>
              <a href="tel:5651512762" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-green-600">
                <Phone className="h-4 w-4" />
                <span>5651512762</span>
              </a>
            </div>

            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`w-10 h-10 rounded-xl border border-border transition-all duration-300 flex items-center justify-center ${link.color}`}
                >
                  <link.icon className="h-4 w-4" />
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-border/50 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Eliminado el texto de derechos reservados y cualquier texto legal */}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}