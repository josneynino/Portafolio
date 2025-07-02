'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  MessageCircle,
  Calendar,
  Clock,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { toast } from 'sonner';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Por favor ingresa un email válido'),
  subject: z.string().min(5, 'El asunto debe tener al menos 5 caracteres'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jozneydeveloper@gmail.com',
    href: 'mailto:jozneydeveloper@gmail.com',
    color: 'from-blue-500 to-cyan-500',
    description: 'Respondo en 24 horas',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+57 300 123 4567',
    href: 'tel:+573001234567',
    color: 'from-green-500 to-emerald-500',
    description: 'Lun - Vie, 9AM - 6PM',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'México, Ciudad de México',
    href: null,
    color: 'from-purple-500 to-pink-500',
    description: 'GMT-5 (COT)',
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/josney-ni%C3%B1o-5956b1278/',
    color: 'hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20',
    followers: '30+',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/josneynino',
    color: 'hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/20',
    followers: '200+',
  },
];

const quickActions: any[] = [];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form data:', data);
    toast.success('¡Mensaje enviado exitosamente! Te responderé pronto.');
    form.reset();
    setFormSubmitted(true);
    setIsSubmitting(false);
    
    // Reset success state after 5 seconds
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10"></div>
      
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
            className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-6"
          >
            <MessageCircle className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Contacto</span>
          </motion.div>
          
          <h2 className="heading-secondary mb-6">
            Hablemos de tu
            <span className="gradient-text"> Próximo Proyecto</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            ¿Listo para trabajar juntos? Me encantaría conocer más sobre tu proyecto y cómo puedo ayudarte a hacerlo realidad.
          </p>
        </motion.div>

        {/* Quick Actions */}
        {/* Eliminado el bloque de quickActions porque ya no hay acciones rápidas que mostrar */}

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Información de Contacto
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Siempre estoy interesado en nuevas oportunidades y proyectos emocionantes. 
                Ya sea que tengas una pregunta o simplemente quieras saludar, ¡no dudes en contactarme!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  <div className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-muted/50 transition-all duration-300">
                    <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-foreground hover:text-blue-600 transition-colors duration-200 font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                      <p className="text-xs text-muted-foreground mt-1">{info.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-foreground mb-6">
                Sígueme en Redes
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`group relative w-16 h-16 rounded-2xl border-2 border-border transition-all duration-300 flex flex-col items-center justify-center ${social.color}`}
                  >
                    <social.icon className="h-6 w-6 mb-1" />
                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      {social.label}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-6"
            >
              <div className="flex items-center space-x-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-green-500 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-green-800 dark:text-green-200">
                    Disponible para Proyectos
                  </h4>
                  <p className="text-sm text-green-600 dark:text-green-300">
                    Actualmente aceptando nuevos clientes y oportunidades laborales
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="card-enhanced">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Send className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Envíame un Mensaje
                  </h3>
                </div>
              </CardHeader>
              
              <CardContent>
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      ¡Mensaje Enviado!
                    </h4>
                    <p className="text-muted-foreground">
                      Gracias por contactarme. Te responderé dentro de las próximas 24 horas.
                    </p>
                  </motion.div>
                ) : (
                  <form
                    action="https://formspree.io/f/xxxxxxx" // Reemplaza por tu endpoint real de Formspree
                    method="POST"
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-1">Nombre Completo</label>
                        <Input
                          type="text"
                          name="name"
                          placeholder="Tu nombre"
                          required
                          className="focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <Input
                          type="email"
                          name="email"
                          placeholder="tu.email@ejemplo.com"
                          required
                          className="focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Asunto</label>
                      <Input
                        type="text"
                        name="subject"
                        placeholder="¿De qué se trata tu proyecto?"
                        required
                        className="focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Mensaje</label>
                      <Textarea
                        name="message"
                        placeholder="Cuéntame más sobre tu proyecto, objetivos y cómo puedo ayudarte..."
                        required
                        className="min-h-[150px] focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                      Enviar
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Response Time Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 px-6 py-3 rounded-full border border-blue-200 dark:border-blue-800">
            <Clock className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Tiempo de respuesta promedio: 24 horas
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}