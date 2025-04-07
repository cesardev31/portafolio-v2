import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 py-8 border-t border-slate-200 dark:border-slate-700/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 dark:text-slate-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} César Andres Pereira Bernal — Todos los
            derechos reservados
          </p>
          <div className="flex space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-violet-600 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20"
            >
              <a
                href="ttps://github.com/cesardev31/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center justify-center"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20"
            >
              <a
                href="https://linkedin.com/in/cesar-andres-pereira-bernal-51b801286"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
