"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 dark:from-violet-500/5 dark:to-cyan-500/5 rounded-3xl"></div>
      <div className="relative p-8 md:p-12">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6">
          ¿Interesado en trabajar juntos?
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
          Estoy abierto a nuevas oportunidades y colaboraciones. No dudes en
          contactarme para discutir cómo puedo ayudar en tu próximo proyecto.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 border-0"
          >
            <a
              href="mailto:cesarandresdev@gmail.com"
              className="flex items-center gap-2"
            >
              <Mail className="h-5 w-5" />
              Enviar mensaje
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 border-violet-500 dark:border-violet-400 text-violet-600 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20"
          >
            <a
              href="https://linkedin.com/in/cesar-andres-pereira-bernal-51b801286"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Linkedin className="h-5 w-5" />
              Conectar en LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
