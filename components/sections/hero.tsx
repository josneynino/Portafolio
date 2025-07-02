'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin, Sparkles, Code, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

const floatingElements = [
  { icon: Code, delay: 0, x: -100, y: -50 },
  { icon: Palette, delay: 0.5, x: 100, y: -30 },
  { icon: Sparkles, delay: 1, x: -80, y: 50 },
];

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            y: [0, -20, 0],
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-lg"
        />
      </div>

      {/* Floating Icons */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.1, 1],
            x: [element.x, element.x + 20, element.x],
            y: [element.y, element.y - 10, element.y],
          }}
          transition={{
            delay: element.delay,
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute hidden lg:block"
        >
          <div className="p-4 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-white/10">
            <element.icon className="w-6 h-6 text-blue-500" />
          </div>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/80 dark:bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 dark:border-white/10 shadow-lg"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-5 h-5 text-yellow-500" />
            </motion.div>
            <span className="text-lg font-medium text-muted-foreground">
              ¡Hola! Soy
            </span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="heading-primary"
            >
              <span className="block">Josney Alejandro</span>
              <span className="block gradient-text">Niño Gómez</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-3"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground">
                Web Developer Jr.
              </h2>
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span className="text-lg">Ciudad de México, México</span>
              </div>
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            Soy un Desarrollador Web Junior con enfoque en frontend, apasionado por construir interfaces dinámicas, 
            accesibles y modernas utilizando <span className="text-blue-600 font-semibold">React.js</span>, 
            <span className="text-purple-600 font-semibold"> Next.js</span> y 
            <span className="text-blue-800 font-semibold"> Firebase</span>. 
            Disfruto trabajar en proyectos full-stack, donde puedo combinar diseño, lógica y experiencia de usuario.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4"
          >
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center">
                Ver Mi Trabajo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="group relative overflow-hidden border-2 border-border/50 hover:border-blue-500/50 bg-background/50 backdrop-blur-sm px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Contactar</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </motion.div>

          {/* Status Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="pt-8"
          >
            <div className="inline-flex items-center space-x-3 bg-white/80 dark:bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 dark:border-white/10 shadow-lg">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-3 h-3 bg-green-500 rounded-full"
              />
              <span className="text-sm font-medium text-muted-foreground">
                Disponible para nuevas oportunidades
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}