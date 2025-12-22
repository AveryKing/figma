import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Sparkles, Code2, Zap, Award } from "lucide-react";

const highlights = [
  {
    icon: Award,
    number: "3+",
    label: "Years Experience",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: Code2,
    number: "2",
    label: "Key Industries",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: Zap,
    number: "100%",
    label: "Cloud Native",
    color: "from-pink-500 to-rose-500"
  }
];

export function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="relative px-4 py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <div className="relative">
                <span className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-semibold inline-flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  About Me
                </span>
                <div className="absolute inset-0 blur-xl bg-emerald-500/20 rounded-full" />
              </div>
            </motion.div>
            <h2 className="text-6xl md:text-7xl font-black mb-6 relative">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-white bg-clip-text text-transparent">
                Building the Future
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-white bg-clip-text text-transparent blur-2xl opacity-30">
                Building the Future
              </div>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative group"
                >
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-all`}
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-10 h-10 text-emerald-400 mb-4" />
                    </motion.div>
                    <div className={`text-5xl font-black mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.number}
                    </div>
                    <div className="text-gray-300 font-medium">{item.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-cyan-600/20 to-pink-600/20 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20 hover:border-emerald-500/40 transition-all">
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-gray-200">
                  I'm a Software Engineer with <span className="text-white font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">3+ years of professional experience</span> designing 
                  and delivering secure, mission-critical systems in <span className="text-emerald-400 font-bold">GovTech and FinTech</span>, 
                  with a strong focus on backend and platform development in the .NET ecosystem and modern JavaScript frameworks.
                </p>

                <p className="text-gray-200">
                  I build <span className="text-white font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">scalable, cloud-native systems on Azure and GCP</span> and work across 
                  the full stack, from architecting APIs and data systems to delivering React-based user interfaces. I've contributed 
                  to large, high-volume platforms supporting state agencies and nationwide mortgage operations, with an emphasis on 
                  system modernization, automated testing, and long-term maintainability.
                </p>

                <p className="text-gray-200">
                  I translate complex business requirements into clear, scalable technical solutions and take ownership from 
                  <span className="text-white font-bold"> design through deployment</span>.
                </p>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-emerald-400/30 rounded-tr-2xl" />
              <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-cyan-400/30 rounded-bl-2xl" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
