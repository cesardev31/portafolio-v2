import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="absolute top-0 left-0 w-20 h-20 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 dark:from-violet-500/20 dark:to-fuchsia-500/20 rounded-full blur-2xl"></div>
      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-8 flex items-center gap-3">
        <span className="inline-block p-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-lg text-white">
          <Briefcase className="h-6 w-6" />
        </span>
        Sobre Mí
      </h2>
      <div className="bg-white/70 dark:bg-slate-800/50 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700/50 p-8 backdrop-blur-sm">
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
          Full Stack Developer con sólida experiencia en tecnologías como
          JavaScript, React, React Native, Angular, TypeScript, Node.js,
          Express, NestJS, Python, Go, PostgreSQL, MongoDB, Redis, Docker,
          Kubernetes, Google Cloud (GCloud), AWS, CI/CD con GitHub Actions, y
          Flutter.
        </p>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mt-4">
          Recientemente, he profundizado en el uso de Kubernetes para la gestión
          y orquestación de contenedores en arquitecturas de microservicios,
          mejorando la eficiencia en despliegues y la resolución de errores.
          También he trabajado con Nginx para la configuración de servidores y
          balanceo de carga, y estoy explorando nuevas herramientas en el
          ecosistema cloud.
        </p>
      </div>
    </motion.section>
  );
}
