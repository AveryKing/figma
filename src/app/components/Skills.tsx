import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Code, Layout, Cloud, Database, TestTube, Zap, Layers } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["C#", "TypeScript", "JavaScript", "SQL", "PHP"],
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Frameworks",
    icon: Layout,
    skills: [".NET", "ASP.NET Core", "React", "Next.js", "NestJS", "Node.js"],
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Azure", "GCP", "Docker", "GitHub Actions", "CI/CD"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Data",
    icon: Database,
    skills: ["SQL Server", "PostgreSQL", "Dapper", "Entity Framework", "TypeORM", "Prisma"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Testing",
    icon: TestTube,
    skills: ["Playwright", "Selenium", "xUnit", "Jest"],
    color: "from-green-500 to-emerald-500"
  }
];

export function Skills() {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="relative px-4 py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <div className="relative">
                <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold inline-flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  Tech Arsenal
                </span>
                <div className="absolute inset-0 blur-xl bg-cyan-500/20 rounded-full" />
              </div>
            </motion.div>
            <h2 className="text-6xl md:text-7xl font-black mb-6 relative">
              <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-white bg-clip-text text-transparent">
                Technical Skills
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-pink-400 to-white bg-clip-text text-transparent blur-2xl opacity-30">
                Technical Skills
              </div>
            </h2>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto font-medium">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="relative group"
                >
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500`}
                    whileHover={{ scale: 1.1 }}
                  />
                  
                  <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500">
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div 
                        className={`p-3 bg-gradient-to-r ${category.color} rounded-xl shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-black text-white">{category.title}</h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: index * 0.1 + i * 0.05, duration: 0.3 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-4 py-2 bg-white/10 text-gray-200 rounded-lg font-semibold border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all cursor-default shadow-lg"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Expertise - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="relative group"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-emerald-600/30 via-cyan-600/30 to-pink-600/30 rounded-3xl blur-2xl"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1] as const
              }}
            />
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/20 hover:border-emerald-500/40 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: [0.42, 0, 0.58, 1] as const
                  }}
                >
                  <Zap className="w-8 h-8 text-yellow-400" />
                </motion.div>
                <h3 className="text-2xl font-black text-white">Additional Expertise</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  "Event-Driven Architecture",
                  "Serverless Computing",
                  "Microservices",
                  "System Design",
                  "API Development",
                  "Data Integration",
                  "Test Automation",
                  "Agile Methodologies"
                ].map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + i * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="px-5 py-2.5 bg-gradient-to-r from-emerald-600/20 via-cyan-600/20 to-pink-600/20 text-emerald-300 rounded-full font-bold border border-emerald-500/30 hover:border-emerald-400/60 transition-all cursor-default shadow-lg"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Decorative corners */}
              <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-emerald-400/30 rounded-tr-2xl" />
              <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-cyan-400/30 rounded-bl-2xl" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
