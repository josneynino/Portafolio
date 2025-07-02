'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, Eye, GitFork } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Finzo App Web',
    description: 'Aplicación web financiera moderna construida con TypeScript. Plataforma completa para gestión financiera personal con interfaz intuitiva y funcionalidades avanzadas.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['TypeScript', 'React.js', 'Tailwind CSS', 'Node.js'],
    githubUrl: 'https://github.com/josneynino/Finzo-app-web',
    liveUrl: 'https://finzo-app-web.vercel.app',
    featured: true,
    stats: { stars: 12, forks: 3, views: 450 },
    category: 'Full Stack',
  },
  {
    title: 'Glow Up Digital',
    description: 'Plataforma digital para servicios de belleza y bienestar. Aplicación web responsiva con sistema de citas y gestión de servicios.',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['TypeScript', 'React.js', 'CSS3', 'HTML5'],
    githubUrl: 'https://github.com/josneynino/glow-up-digital',
    liveUrl: 'https://glow-up-digital.vercel.app',
    featured: true,
    stats: { stars: 8, forks: 2, views: 320 },
    category: 'Frontend',
  },
  {
    title: 'Fuego Corte',
    description: 'Aplicación web para servicios de corte y estilismo. Interfaz moderna para agendar citas y gestionar servicios de peluquería.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['TypeScript', 'React.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/josneynino/Fuego-Corte',
    liveUrl: 'https://fuego-corte.vercel.app',
    featured: false,
    stats: { stars: 6, forks: 1, views: 280 },
    category: 'Frontend',
  },
  {
    title: 'Softory',
    description: 'Plataforma de gestión de inventario y ventas. Sistema completo para pequeñas y medianas empresas con dashboard intuitivo.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['TypeScript', 'React.js', 'Node.js', 'Express.js'],
    githubUrl: 'https://github.com/josneynino/softory',
    liveUrl: 'https://softory.vercel.app',
    featured: false,
    stats: { stars: 10, forks: 2, views: 380 },
    category: 'Full Stack',
  },
  {
    title: 'Draco Studio',
    description: 'Sitio web para estudio creativo y servicios de diseño. Landing page moderna con portafolio de trabajos y servicios ofrecidos.',
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    githubUrl: 'https://github.com/josneynino/draco-stiudio',
    liveUrl: 'https://draco-studio.vercel.app',
    featured: false,
    stats: { stars: 5, forks: 1, views: 200 },
    category: 'Frontend',
  },
  {
    title: 'Portfolio Personal',
    description: 'Sitio web de portafolio personal moderno y responsivo construido con Next.js y TypeScript. Incluye modo oscuro, animaciones suaves y rendimiento optimizado.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    githubUrl: 'https://github.com/josneynino',
    liveUrl: 'https://josney-portfolio.vercel.app',
    featured: false,
    stats: { stars: 8, forks: 2, views: 300 },
    category: 'Frontend',
  },
  {
    title: 'Tenis World Pereira',
    description: 'Desarrollé una tienda online profesional especializada en artículos deportivos para tenis, pádel y running, enfocada en ofrecer una experiencia de compra rápida, moderna y segura. Implementado en Shopify con gestión de inventario, pagos en línea y visualización optimizada para móviles.',
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Shopify', 'Liquid', 'HTML/CSS', 'Responsive Design', 'eCommerce'],
    githubUrl: 'https://github.com/josneynino',
    liveUrl: 'https://tenisworldpereira.com',
    featured: true,
    stats: { stars: 18, forks: 5, views: 650 },
    category: 'eCommerce',
  },
];

const categories = ['Todos', 'Frontend', 'Full Stack', 'eCommerce'];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-blue-50/50 dark:from-purple-900/10 dark:to-blue-900/10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
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
            className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full mb-6"
          >
            <Star className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Proyectos Destacados</span>
          </motion.div>
          
          <h2 className="heading-secondary mb-6">
            Mis Últimos
            <span className="gradient-text"> Trabajos</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades y experiencia en desarrollo web
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {projects.filter(project => project.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="overflow-hidden card-enhanced">
                <div className="grid lg:grid-cols-2 h-full">
                  <div className="relative overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 lg:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Project Stats Overlay */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute bottom-4 left-4 flex space-x-4 text-white"
                    >
                      <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded">
                        <Star className="w-4 h-4" />
                        <span className="text-sm">{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded">
                        <GitFork className="w-4 h-4" />
                        <span className="text-sm">{project.stats.forks}</span>
                      </div>
                      <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm">{project.stats.views}</span>
                      </div>
                    </motion.div>
                    
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                      Destacado
                    </Badge>
                    <Badge variant="secondary" className="absolute top-4 right-4">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-col p-8">
                    <CardHeader className="p-0 mb-6">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-blue-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </CardHeader>
                    
                    <CardContent className="p-0 flex-1 space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <Badge variant="outline" className="text-xs hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                    
                    <CardFooter className="p-0 pt-6 gap-4">
                      <Button variant="outline" size="sm" asChild className="group/btn">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2"
                        >
                          <Github className="h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-200" />
                          <span>Código</span>
                        </a>
                      </Button>
                      
                      <Button size="sm" asChild className="group/btn bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2"
                        >
                          <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-200" />
                          <span>Ver Demo</span>
                        </a>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Otros Proyectos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(project => !project.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="overflow-hidden card-enhanced h-full">
                  <div className="relative overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Badge variant="secondary" className="absolute top-3 right-3">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-col p-6">
                    <CardHeader className="p-0 mb-4">
                      <h4 className="text-lg font-semibold text-foreground group-hover:text-blue-600 transition-colors duration-300">
                        {project.title}
                      </h4>
                    </CardHeader>
                    
                    <CardContent className="p-0 flex-1 space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3" />
                          <span>{project.stats.stars}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <GitFork className="w-3 h-3" />
                          <span>{project.stats.forks}</span>
                        </div>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="p-0 pt-4 gap-2">
                      <Button variant="ghost" size="sm" asChild className="flex-1">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      
                      <Button variant="ghost" size="sm" asChild className="flex-1">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200/50 dark:border-blue-800/50">
            <h3 className="text-2xl font-bold mb-4">¿Interesado en colaborar?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Siempre estoy abierto a discutir nuevos proyectos, ideas creativas o oportunidades para formar parte de tu visión.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Hablemos
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}