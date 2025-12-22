import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Rocket, Calendar, Sparkles, Zap, CircuitBoard } from "lucide-react";

const projects = [
  {
    title: "Diviora",
    role: "Lead Developer",
    period: "Aug 2025 – Present",
    description: "Architecting and evolving a backend-first data integration platform using .NET and JavaScript on Azure, built around event-driven and serverless patterns.",
    achievements: [
      "Engineered a custom streaming pipeline capable of processing gigabyte-scale datasets with minimal memory footprint, ensuring system stability during large file uploads.",
      "Designed a format-agnostic parsing engine that decouples schema logic from the core processor, allowing for the seamless integration of new data formats without refactoring the ingestion pipeline.",
      "Containerized the entire microservices architecture using Docker to ensure consistent execution across environments, and implemented automated CI/CD pipelines via GitHub Actions."
    ],
    tags: ["NestJS", "Azure Service Bus", "Docker", "CI/CD", "Event-Driven", "Microservices"]
  }
];

export function Projects() {
  const { ref, isInView } = useInView();

  return (
    <section id="projects" className="relative px-4 py-32">
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
                <span className="px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full text-pink-400 text-sm font-semibold inline-flex items-center gap-2">
                  <Rocket className="w-4 h-4" />
                  Featured Work
                </span>
                <div className="absolute inset-0 blur-xl bg-pink-500/20 rounded-full" />
              </div>
            </motion.div>
            <h2 className="text-6xl md:text-7xl font-black relative">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-white bg-clip-text text-transparent">
                Projects
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-white bg-clip-text text-transparent blur-2xl opacity-30">
                Projects
              </div>
            </h2>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative group"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-pink-600/30 via-purple-600/30 to-cyan-600/30 rounded-3xl blur-3xl opacity-0 group-hover:opacity-60 transition-all duration-500"
                  whileHover={{ scale: 1.05 }}
                />
                
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 hover:border-pink-500/50 transition-all duration-500">
                  {/* Header with animated gradient */}
                  <div className="relative bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-cyan-600/20 p-10 border-b border-white/10">
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        backgroundSize: "200% 200%"
                      }}
                    />
                    
                    <div className="relative flex items-start justify-between gap-4 flex-wrap">
                      <div className="flex items-center gap-4">
                        <motion.div 
                          className="p-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-2xl shadow-2xl"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Rocket className="w-10 h-10 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="text-4xl font-black text-white mb-2 flex items-center gap-3">
                            {project.title}
                            <motion.span
                              animate={{ 
                                rotate: [0, 10, -10, 0],
                              }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              <Zap className="w-8 h-8 text-yellow-400" />
                            </motion.span>
                          </h3>
                          <p className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                            {project.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                        <Calendar className="w-5 h-5 text-emerald-400" />
                        <span className="font-semibold">{project.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-10">
                    <p className="text-xl text-gray-200 leading-relaxed mb-10 font-medium">
                      {project.description}
                    </p>

                    <div className="space-y-4 mb-10">
                      <div className="flex items-center gap-2 text-pink-400 mb-6">
                        <Sparkles className="w-6 h-6" />
                        <span className="text-xl font-bold">Key Achievements</span>
                      </div>
                      {project.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + i * 0.1, duration: 0.5 }}
                          className="flex gap-4 group/item bg-gradient-to-r from-white/10 to-white/5 p-5 rounded-xl hover:from-white/15 hover:to-white/10 transition-all border border-white/10 hover:border-pink-500/30"
                        >
                          <CircuitBoard className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                          <p className="text-gray-200 leading-relaxed text-lg">{achievement}</p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: index * 0.2 + i * 0.05, duration: 0.3 }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="px-5 py-2.5 bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-cyan-600/20 text-pink-300 rounded-full font-bold border border-pink-500/30 hover:border-pink-400/60 transition-all shadow-lg"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-pink-400/30 rounded-tr-3xl" />
                  <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-cyan-400/30 rounded-bl-3xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
