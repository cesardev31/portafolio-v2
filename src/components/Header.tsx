import { motion } from "framer-motion";
import { Github, Linkedin, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

export default function Header() {
  return (
    <>
      <Helmet>
        <title>César Pereira | Full Stack Developer</title>
        <meta
          name="description"
          content="Portfolio profesional de César Andres Pereira Bernal, Full Stack Developer especializado en React, Node.js, y tecnologías cloud."
        />
        {/* Add preconnect for external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </Helmet>
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.15),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(45,212,191,0.2),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-cyan-600 dark:from-violet-400 dark:to-cyan-400 mb-4">
                Cesar Andres Pereira Bernal
              </h1>
              <div className="text-2xl md:text-3xl font-medium text-slate-700 dark:text-slate-300 mb-6">
                Full Stack Developer
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
                Especializado en desarrollo backend, arquitectura de
                microservicios, infraestructura en la nube y despliegues
                modernos con Kubernetes.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 border-0 text-white"
                >
                  <Mail className="h-5 w-5" />
                  Contactar
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-violet-500 dark:border-violet-400 text-violet-600 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20"
                >
                  <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Download className="h-5 w-5" />
                    Descargar CV
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center space-x-4 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-12 w-12 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:bg-violet-50 dark:hover:bg-violet-900/20 border-violet-200 dark:border-violet-800"
              >
                <a
                  href="https://github.com/cesardev31"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex items-center justify-center"
                >
                  <Github className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-12 w-12 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:bg-cyan-50 dark:hover:bg-cyan-900/20 border-cyan-200 dark:border-cyan-800"
              >
                <a
                  href="https://linkedin.com/in/cesar-andres-pereira-bernal-51b801286"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center"
                >
                  <Linkedin className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
