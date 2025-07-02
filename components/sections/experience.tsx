'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2, Briefcase, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    title: 'Programador Web',
    company: 'finzo-web',
    location: 'Ciudad de México, México (Remoto)',
    period: 'Feb 2025 - Presente',
    duration: '6 meses',
    description: [
      'Me encargué del diseño y desarrollo completo de Finzo, una aplicación web de finanzas personales construida con React.js, TypeScript y Firebase',
      'Implementé funcionalidades como autenticación de usuarios, registro de ingresos y gastos, visualización de datos mediante gráficas (Chart.js)',
      'Agregué soporte para múltiples monedas detectadas automáticamente por IP',
      'Apliqué una arquitectura modular (MVVM), usando Zustand para el manejo del estado',
      'Desplegué la aplicación en Vercel con optimizaciones de rendimiento',
    ],
    technologies: ['React.js', 'TypeScript', 'Firebase', 'Chart.js', 'Zustand', 'Vercel'],
    achievements: [
      'Desarrollo completo de aplicación de finanzas personales',
      'Implementación de autenticación y gestión de datos',
      'Integración de múltiples monedas automáticamente',
    ],
    type: 'freelance',
    color: 'from-blue-500 to-cyan-500',
  },
];

const stats = [
  { label: 'Meses de Experiencia', value: '6+', icon: Calendar },
  { label: 'Proyectos Completados', value: '8+', icon: Briefcase },
  { label: 'Tecnologías Dominadas', value: '10+', icon: TrendingUp },
  { label: 'Clientes Satisfechos', value: '3+', icon: Building2 },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-blue-50/50 dark:from-green-900/10 dark:to-blue-900/10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full mb-6"
          >
            <Briefcase className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-600 dark:text-green-400">Experiencia Profesional</span>
          </motion.div>
          
          <h2 className="heading-secondary mb-6">
            Mi Trayectoria
            <span className="gradient-text"> Profesional</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Un recorrido por mi crecimiento y evolución en el desarrollo frontend
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white/80 dark:bg-black/20 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-white/10"
            >
              <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title + experience.company}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${experience.color} rounded-full border-4 border-background shadow-lg hidden md:block z-10`}
                />
                
                <div className="md:ml-16">
                  <Card className="card-enhanced group hover:shadow-xl transition-all duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${experience.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
                    
                    <CardHeader className="relative z-10">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3">
                            <h3 className="text-xl font-bold text-foreground group-hover:text-blue-600 transition-colors duration-300">
                              {experience.title}
                            </h3>
                            <Badge 
                              variant={experience.type === 'freelance' ? 'secondary' : 'default'}
                              className="text-xs"
                            >
                              {experience.type === 'freelance' ? 'Freelance' : 'Tiempo Completo'}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Building2 className="h-4 w-4" />
                            <span className="font-medium">{experience.company}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col lg:items-end gap-2">
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{experience.period}</span>
                            <span className="text-xs bg-muted px-2 py-1 rounded">
                              {experience.duration}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6 relative z-10">
                      {/* Description */}
                      <ul className="space-y-3">
                        {experience.description.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-3 text-muted-foreground"
                          >
                            <span className={`w-2 h-2 bg-gradient-to-r ${experience.color} rounded-full mt-2 flex-shrink-0`} />
                            <span className="leading-relaxed">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                      
                      {/* Achievements */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-foreground">Logros Destacados:</h4>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                          {experience.achievements.map((achievement, achIndex) => (
                            <motion.div
                              key={achIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: achIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="text-xs bg-muted/50 px-3 py-2 rounded-lg text-muted-foreground"
                            >
                              {achievement}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Technologies */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-foreground">Tecnologías Utilizadas:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                              viewport={{ once: true }}
                            >
                              <Badge 
                                variant="outline" 
                                className="text-xs hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}