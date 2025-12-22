import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { GraduationCap, Award, BookOpen, TrendingUp } from "lucide-react";

const education = [
  {
    degree: "Software Engineering",
    school: "Thinkful",
    type: "Certificate",
    icon: Award,
    color: "from-emerald-500 to-teal-500"
  },
  {
    degree: "Computer Science",
    school: "Western Michigan University",
    type: "Studies",
    icon: BookOpen,
    color: "from-cyan-500 to-blue-500"
  }
];

export function Education() {
  const { ref, isInView } = useInView();

  return (
    <section id="education" className="relative px-4 py-32">
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
                <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm font-semibold inline-flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  Learning Path
                </span>
                <div className="absolute inset-0 blur-xl bg-purple-500/20 rounded-full" />
              </div>
            </motion.div>
            <h2 className="text-6xl md:text-7xl font-black relative">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-white bg-clip-text text-transparent">
                Education
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-white bg-clip-text text-transparent blur-2xl opacity-30">
                Education
              </div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative group"
                >
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-r ${edu.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500`}
                    whileHover={{ scale: 1.05 }}
                  />
                  
                  <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className={`p-4 bg-gradient-to-r ${edu.color} rounded-2xl shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 font-semibold mb-3 border border-white/20">
                          {edu.type}
                        </div>
                        <h3 className="text-2xl font-black text-white mb-3">{edu.degree}</h3>
                        <p className={`text-xl font-bold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                          {edu.school}
                        </p>
                      </div>
                    </div>

                    {/* Corner accent */}
                    <div className={`absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 rounded-br-2xl opacity-30 bg-gradient-to-r ${edu.color} border-current`} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Continuous Learning highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative group"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-pink-600/30 via-purple-600/30 to-emerald-600/30 rounded-3xl blur-2xl"
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
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/20 hover:border-pink-500/40 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: [0.42, 0, 0.58, 1] as const
                  }}
                >
                  <TrendingUp className="w-8 h-8 text-pink-400" />
                </motion.div>
                <h3 className="text-2xl font-black text-white">Continuous Learning</h3>
              </div>
              <p className="text-gray-200 leading-relaxed text-lg font-medium">
                Committed to staying current with emerging technologies and best practices through continuous 
                professional development, hands-on project work, and active engagement with the developer community.
                Always exploring new patterns, frameworks, and architectures to deliver cutting-edge solutions.
              </p>

              {/* Decorative corners */}
              <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-pink-400/30 rounded-tr-2xl" />
              <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-purple-400/30 rounded-bl-2xl" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
