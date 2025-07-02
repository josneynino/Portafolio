'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Rocket, Users, Award, Coffee, Heart, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const highlights = [
  {
    icon: Code,
    title: 'Código Limpio',
    description: 'Escribo código mantenible, escalable y bien documentado siguiendo las mejores prácticas.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'Enfoque UI/UX',
    description: 'Creo interfaces hermosas e intuitivas que brindan experiencias de usuario excepcionales.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Rocket,
    title: 'Rendimiento',
    description: 'Optimizo aplicaciones para velocidad, accesibilidad y visibilidad en motores de búsqueda.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Users,
    title: 'Colaboración',
    description: 'Trabajo efectivamente con equipos multifuncionales usando metodologías Ágiles.',
    color: 'from-green-500 to-emerald-500',
  },
];

const technologies = [
  { name: 'React', level: 95, color: 'bg-blue-500' },
  { name: 'Next.js', level: 90, color: 'bg-gray-800' },
  { name: 'TypeScript', level: 88, color: 'bg-blue-600' },
  { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
  { name: 'Tailwind CSS', level: 92, color: 'bg-cyan-500' },
  { name: 'Node.js', level: 80, color: 'bg-green-600' },
  { name: 'MongoDB', level: 75, color: 'bg-green-500' },
  { name: 'PostgreSQL', level: 70, color: 'bg-blue-700' },
];

const stats = [
  { icon: Award, label: 'Meses de Experiencia', value: '6+' },
  { icon: Code, label: 'Proyectos Completados', value: '8+' },
  { icon: Coffee, label: 'Tazas de Café', value: '500+' },
  { icon: Heart, label: 'Clientes Satisfechos', value: '3+' },
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-6"
          >
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Sobre Mí</span>
          </motion.div>
          
          <h2 className="heading-secondary mb-6">
            Desarrollador Apasionado por la
            <span className="gradient-text"> Excelencia</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Transformo ideas en experiencias digitales que marcan la diferencia
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Animated Background */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"
              />
              
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 mx-auto rounded-3xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-72 h-72 rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img 
                    src="/assets/foto.png" 
                    alt="Josney Alejandro Niño Gómez" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 mt-8 max-w-md mx-auto lg:mx-0"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-white/80 dark:bg-black/20 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-white/10"
                >
                  <stat.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Creando el Futuro Digital
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Con más de <span className="text-blue-600 font-semibold">6 meses de experiencia</span> en 
                  desarrollo web, me especializo en crear aplicaciones frontend modernas y responsivas 
                  utilizando React.js y Next.js.
                </p>
                <p>
                  Soy un Desarrollador Web Junior con enfoque en frontend, apasionado por construir interfaces 
                  dinámicas, accesibles y modernas utilizando React.js, y con experiencia en el desarrollo 
                  backend usando Node.js y Firebase.
                </p>
                <p>
                  Disfruto trabajar en proyectos full-stack, donde puedo combinar diseño, lógica y experiencia 
                  de usuario. Me gusta aprender nuevas tecnologías, seguir buenas prácticas de código y 
                  colaborar en equipos ágiles.
                </p>
              </div>
            </div>

            {/* Technology Progress Bars */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">Tecnologías Principales</h4>
              <div className="space-y-3">
                {technologies.slice(0, 6).map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{tech.name}</span>
                      <span className="text-sm text-muted-foreground">{tech.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full ${tech.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full card-enhanced relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <CardContent className="p-6 text-center space-y-4 relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 bg-gradient-to-br ${highlight.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg`}
                  >
                    <highlight.icon className="h-7 w-7 text-white" />
                  </motion.div>
                  <h4 className="text-lg font-semibold text-foreground">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}