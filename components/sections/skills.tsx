'use client';

import { motion } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Database, 
  Globe, 
  Smartphone, 
  GitBranch,
  Zap,
  Shield,
  Layers,
  Settings,
  Cpu,
  Cloud
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
// import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    title: 'Frontend Technologies',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React.js', level: 85, color: 'bg-blue-500' },
      { name: 'Next.js', level: 80, color: 'bg-gray-800' },
      { name: 'HTML5', level: 90, color: 'bg-orange-500' },
      { name: 'CSS3', level: 85, color: 'bg-blue-600' },
      { name: 'Tailwind CSS', level: 85, color: 'bg-cyan-500' },
      { name: 'Styled Components', level: 75, color: 'bg-pink-500' },
    ],
  },
  {
    title: 'Backend & Database',
    icon: Database,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js', level: 75, color: 'bg-green-600' },
      { name: 'Express.js', level: 70, color: 'bg-gray-700' },
      { name: 'Firebase', level: 80, color: 'bg-orange-500' },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: Settings,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Git/GitHub', level: 85, color: 'bg-gray-800' },
      { name: 'Vercel', level: 80, color: 'bg-orange-500' },
      { name: 'Chart.js', level: 75, color: 'bg-blue-600' },
      { name: 'Zustand', level: 70, color: 'bg-purple-500' },
    ],
  },
];

const additionalSkills = [
  { name: 'Figma', icon: Palette, color: 'text-purple-600' },
  { name: 'VS Code', icon: Code, color: 'text-blue-600' },
  { name: 'Terminal CLI', icon: Zap, color: 'text-green-600' },
  { name: 'Atomic Design', icon: Layers, color: 'text-orange-600' },
  { name: 'MVVM Pattern', icon: Cpu, color: 'text-cyan-600' },
  { name: 'APIs REST', icon: Globe, color: 'text-red-600' },
  { name: 'Arquitectura Modular', icon: Shield, color: 'text-yellow-600' },
  { name: 'Metodologías Ágiles', icon: GitBranch, color: 'text-gray-600' },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-transparent to-purple-50/50 dark:from-cyan-900/10 dark:to-purple-900/10"></div>
      
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
            className="inline-flex items-center space-x-2 bg-cyan-100 dark:bg-cyan-900/30 px-4 py-2 rounded-full mb-6"
          >
            <Cpu className="w-4 h-4 text-cyan-600" />
            <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">Habilidades & Expertise</span>
          </motion.div>
          
          <h2 className="heading-secondary mb-6">
            Tecnologías que
            <span className="gradient-text"> Domino</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Un arsenal completo de herramientas y tecnologías para dar vida a ideas innovadoras
          </p>
        </motion.div>

        {/* Skills Categories Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full card-enhanced">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <category.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-blue-600 transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.1 
                      }}
                      viewport={{ once: true }}
                      className="space-y-3"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                          <div className={`w-3 h-3 ${skill.color} rounded-full`} />
                        </div>
                      </div>
                      <div className="relative">
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                            viewport={{ once: true }}
                            className={`h-full ${skill.color} rounded-full`}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Expertise Adicional</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group"
              >
                <Card className="text-center p-6 card-enhanced h-full">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mb-4"
                  >
                    <skill.icon className={`h-8 w-8 ${skill.color} mx-auto group-hover:scale-110 transition-transform duration-300`} />
                  </motion.div>
                  <h4 className="text-sm font-medium text-foreground group-hover:text-blue-600 transition-colors duration-300">
                    {skill.name}
                  </h4>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-50 to-purple-50 dark:from-cyan-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-cyan-200/50 dark:border-cyan-800/50">
            <h3 className="text-2xl font-bold mb-4">Siempre Aprendiendo</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              La tecnología evoluciona constantemente, y yo también. Me mantengo actualizado con las últimas 
              tendencias y mejores prácticas para ofrecer soluciones de vanguardia.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['React.js 18', 'Next.js 14', 'Node.js 20', 'Tailwind CSS 3', 'Firebase 10'].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}