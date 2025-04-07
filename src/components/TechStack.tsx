"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Code, Server, Database, Cloud } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Tech stack organized by category
const techStack = {
  frontend: [
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Angular",
    "HTML",
    "CSS",
    "Tailwind",
  ],
  backend: ["Node.js", "Express", "NestJS", "Python", "Go", "Fiber"],
  database: ["PostgreSQL", "MongoDB", "Redis"],
  devops: [
    "Git",
    "GitHub",
    "Docker",
    "Kubernetes",
    "GitHub Actions",
    "Google Cloud",
    "AWS",
    "Nginx",
    "Bash",
  ],
};

// Tech Category Component
interface TechCategoryProps {
  title: string;
  icon: React.ReactNode;
  items: string[];
  isVisible: boolean;
  fullWidth?: boolean;
  color: string;
}

function TechCategory({
  title,
  icon,
  items,
  isVisible,
  fullWidth = false,
  color,
}: TechCategoryProps) {
  return (
    <motion.div
      className={fullWidth ? "col-span-full" : "col-span-1"}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`bg-white/50 dark:bg-slate-800/50 rounded-xl p-4 h-full border border-slate-200 dark:border-slate-700/50 backdrop-blur-sm`}
      >
        <div className="flex items-center gap-2 mb-3">
          <div
            className={`p-1.5 bg-gradient-to-r ${color} rounded-md text-white`}
          >
            {icon}
          </div>
          <h3 className="font-medium text-slate-800 dark:text-slate-200">
            {title}
          </h3>
        </div>
        <div
          className={`grid ${
            fullWidth
              ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
              : "grid-cols-1"
          } gap-2`}
        >
          {items.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-slate-700/50 rounded-lg shadow-sm p-3 text-center text-sm text-slate-700 dark:text-slate-300 font-medium border border-slate-200 dark:border-slate-600/50"
              whileHover={{
                scale: 1.03,
                backgroundColor: "#f8fafc",
                color: "#1e293b",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  const [, setActiveTab] = useState("all");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="absolute top-0 right-0 w-20 h-20 translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-full blur-2xl"></div>
      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-8 flex items-center gap-3">
        <span className="inline-block p-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white">
          <Cpu className="h-6 w-6" />
        </span>
        Stack Tecnológico
      </h2>

      <div className="bg-white/70 dark:bg-slate-800/50 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700/50 p-8 backdrop-blur-sm">
        <Tabs
          defaultValue="all"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <TabsList className="grid grid-cols-5 mb-8 bg-slate-100/80 dark:bg-slate-700/50">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-violet-600 dark:data-[state=active]:text-violet-400"
            >
              Todos
            </TabsTrigger>
            <TabsTrigger
              value="frontend"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-cyan-600 dark:data-[state=active]:text-cyan-400"
            >
              Frontend
            </TabsTrigger>
            <TabsTrigger
              value="backend"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-emerald-600 dark:data-[state=active]:text-emerald-400"
            >
              Backend
            </TabsTrigger>
            <TabsTrigger
              value="database"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-amber-600 dark:data-[state=active]:text-amber-400"
            >
              Bases de Datos
            </TabsTrigger>
            <TabsTrigger
              value="devops"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-rose-600 dark:data-[state=active]:text-rose-400"
            >
              DevOps
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <TechCategory
                title="Frontend"
                icon={<Code className="h-5 w-5" />}
                items={techStack.frontend}
                isVisible={true}
                color="from-cyan-600 to-blue-600"
              />
              <TechCategory
                title="Backend"
                icon={<Server className="h-5 w-5" />}
                items={techStack.backend}
                isVisible={true}
                color="from-emerald-600 to-green-600"
              />
              <TechCategory
                title="Bases de Datos"
                icon={<Database className="h-5 w-5" />}
                items={techStack.database}
                isVisible={true}
                color="from-amber-600 to-orange-600"
              />
              <TechCategory
                title="DevOps"
                icon={<Cloud className="h-5 w-5" />}
                items={techStack.devops}
                isVisible={true}
                color="from-rose-600 to-pink-600"
              />
            </div>
          </TabsContent>

          <TabsContent value="frontend" className="mt-0">
            <TechCategory
              title="Frontend"
              icon={<Code className="h-5 w-5" />}
              items={techStack.frontend}
              isVisible={true}
              fullWidth
              color="from-cyan-600 to-blue-600"
            />
          </TabsContent>

          <TabsContent value="backend" className="mt-0">
            <TechCategory
              title="Backend"
              icon={<Server className="h-5 w-5" />}
              items={techStack.backend}
              isVisible={true}
              fullWidth
              color="from-emerald-600 to-green-600"
            />
          </TabsContent>

          <TabsContent value="database" className="mt-0">
            <TechCategory
              title="Bases de Datos"
              icon={<Database className="h-5 w-5" />}
              items={techStack.database}
              isVisible={true}
              fullWidth
              color="from-amber-600 to-orange-600"
            />
          </TabsContent>

          <TabsContent value="devops" className="mt-0">
            <TechCategory
              title="DevOps"
              icon={<Cloud className="h-5 w-5" />}
              items={techStack.devops}
              isVisible={true}
              fullWidth
              color="from-rose-600 to-pink-600"
            />
          </TabsContent>
        </Tabs>
      </div>
    </motion.section>
  );
}
