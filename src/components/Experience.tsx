import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Desarrollador de Software",
    company: "MINIBARES SAS",
    location: "Bogotá, Colombia",
    period: "Marzo 2024 – Actualidad",
    description: [
      "Solución de errores en micro servicios construidos en JavaScript (legacy), TypeScript, Python y Go, aplicando principios de arquitectura Clean para mejorar rendimiento y escalabilidad.",
      "Resolución de fallos en una aplicación móvil desarrollada en React Native, implementando mejoras continuas para garantizar una experiencia de usuario fluida y eficiente.",
      "Refactorización de una aplicación web, migrando de Angular 7 a React con Vite, optimizando la estructura del código y facilitando nuevas funcionalidades.",
      "Gestión de infraestructura en Kubernetes sobre Google Cloud, asegurando la disponibilidad y el rendimiento óptimo de las aplicaciones en un entorno de microservicios.",
      "Administración de bases de datos relacionales con PostgreSQL, garantizando integridad y eficiencia en el manejo de datos críticos para el negocio.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "Go",
      "Kubernetes",
      "Google Cloud",
      "PostgreSQL",
    ],
    color: "from-purple-600 to-indigo-600",
  },
  {
    title: "Full Stack Developer",
    company: "Idealidad",
    location: "Bogotá, Colombia",
    period: "Junio 2022 – Marzo 2024",
    description: [
      "Desarrollar Un CRM de ventas de clientes potenciales de la red social Meta Capturando los leads, Messinger, Instagram y WhatsApp.",
      "Desarrollar una arquitectura de micro-servicios con responsabilidades específicas, incluyendo la conexión con Meta, manejo de archivos binarios, integración con WhatsApp Web y gestión de comunicaciones cliente-servidor mediante sockets y API REST.",
      "Para la administración de licencias, incluyendo cuentas de administradores y vendedores, se desarrolló una interfaz en Angular que consume APIs dedicadas a la gestión de estos usuarios.",
      "Se desarrollaron aplicaciones para clientes administradores y vendedores en las plataformas Android e iOS utilizando Flutter. Para las plataformas de escritorio, se optó por React, compilando posteriormente con ElectronJS.",
    ],
    technologies: [
      "React",
      "Angular",
      "Flutter",
      "ElectronJS",
      "Node.js",
      "Microservicios",
      "API REST",
      "Sockets",
    ],
    color: "from-emerald-600 to-teal-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export default function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="absolute top-0 left-0 w-20 h-20 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-emerald-500/30 to-green-500/30 dark:from-emerald-500/20 dark:to-green-500/20 rounded-full blur-2xl"></div>
      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-8 flex items-center gap-3">
        <span className="inline-block p-2 bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg text-white">
          <Briefcase className="h-6 w-6" />
        </span>
        Experiencia Profesional
      </h2>

      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experiences.map((exp, i) => (
          <motion.div key={i} variants={itemVariants}>
            <Card className="overflow-hidden border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm">
              <div className="p-0">
                <div
                  className={`p-6 border-l-4 bg-gradient-to-r ${exp.color} border-0`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {exp.title}
                      </h3>
                      <p className="text-white/90">
                        {exp.company} • {exp.location}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className="text-sm font-medium py-1.5 px-3 self-start md:self-center bg-white/20 text-white border-white/30"
                    >
                      {exp.period}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1 mb-4">
                    {exp.description.map((item, index) => (
                      <li key={index} className="text-sm md:text-base">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
