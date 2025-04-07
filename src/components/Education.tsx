import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    degree: "Desarrollo Web",
    institution: "Platzi",
    period: "2022",
    description:
      "Formación en desarrollo web frontend y backend con tecnologías modernas.",
    color: "from-red-500 to-rose-500",
  },
  {
    degree: "Ecommerce con MEAN STACK",
    institution: "Udemy",
    period: "2023",
    description:
      "Creación de tienda online profesional utilizando MongoDB, Express, Angular y Node.js.",
    color: "from-blue-500 to-sky-500",
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

export default function Education() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="absolute top-0 right-0 w-20 h-20 translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-amber-500/30 to-orange-500/30 dark:from-amber-500/20 dark:to-orange-500/20 rounded-full blur-2xl"></div>
      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-8 flex items-center gap-3">
        <span className="inline-block p-2 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg text-white">
          <GraduationCap className="h-6 w-6" />
        </span>
        Educación
      </h2>

      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {education.map((edu, i) => (
          <motion.div key={i} variants={itemVariants}>
            <Card className="overflow-hidden border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm">
              <div className="p-0">
                <div className={`p-6 bg-gradient-to-r ${edu.color}`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-white/90">{edu.institution}</p>
                    </div>
                    <Badge
                      variant="outline"
                      className="text-sm font-medium py-1.5 px-3 self-start md:self-center bg-white/20 text-white border-white/30"
                    >
                      {edu.period}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base">
                    {edu.description}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
