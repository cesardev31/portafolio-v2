"use client";

import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "CRM para Redes Sociales",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Meta API"],
    description:
      "CRM para gestión de leads provenientes de Meta (Facebook, Instagram, WhatsApp) con integración directa a las APIs de Meta y sistema de comunicación en tiempo real.",
    image: "/placeholder.svg?height=200&width=350",
    link: "#",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Arquitectura de Microservicios",
    tech: ["Node.js", "Express", "Docker", "Kubernetes", "API REST"],
    description:
      "Diseño e implementación de una arquitectura de microservicios con responsabilidades específicas para manejo de datos, comunicaciones y procesamiento de archivos.",
    image: "/placeholder.svg?height=200&width=350",
    link: "#",
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Aplicación Multiplataforma",
    tech: ["Flutter", "React", "ElectronJS", "Firebase"],
    description:
      "Desarrollo de aplicaciones para Android, iOS y escritorio (Windows, macOS, Linux) utilizando Flutter para móviles y React con ElectronJS para escritorio.",
    image: "/placeholder.svg?height=200&width=350",
    link: "#",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Sistema de Gestión Empresarial",
    tech: ["React", "TypeScript", "PostgreSQL", "Kubernetes", "Google Cloud"],
    description:
      "Migración y mejora de un sistema empresarial completo, optimizando el rendimiento y la escalabilidad mediante el uso de Kubernetes en Google Cloud.",
    image: "/placeholder.svg?height=200&width=350",
    link: "#",
    color: "from-purple-500 to-violet-500",
  },
];

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="absolute top-0 left-0 w-20 h-20 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-rose-500/30 to-pink-500/30 dark:from-rose-500/20 dark:to-pink-500/20 rounded-full blur-2xl"></div>
      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-8 flex items-center gap-3">
        <span className="inline-block p-2 bg-gradient-to-r from-rose-600 to-pink-600 rounded-lg text-white">
          <Code className="h-6 w-6" />
        </span>
        Proyectos Destacados
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden h-full border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all duration-300 group bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm">
              <div className="relative overflow-hidden aspect-video">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-80`}
                ></div>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-4 w-full">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-white border-white hover:bg-white/20 hover:text-white"
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Ver proyecto
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-xs bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
