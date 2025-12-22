import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Briefcase, Calendar, MapPin, TrendingUp, Sparkles } from "lucide-react";

const experiences = [
  {
    title: "Software Developer",
    company: "RedMane Technology",
    location: "Remote",
    period: "Jul 2023 – Jul 2025",
    color: "from-emerald-500 to-teal-500",
    achievements: [
      "Engineered secure, serverless Azure Function APIs for the Arkansas Child Welfare Information System (CWIS), independently designing data exchange solutions that ensure strict state-level compliance.",
      "Bridged the gap between technical teams and Business Analysts, translating complex regulatory requirements into precise functional .NET software specifications.",
      "Architected automated testing suites utilizing Playwright for complex frontend workflows and xUnit for backend services, measurably reducing regression cycles.",
      "Drove the strategic refactoring of legacy subsystems within an Agile framework, significantly enhancing code maintainability and system performance for core agency operations."
    ]
  },
  {
    title: "Systems Developer",
    company: "VanDyk Mortgage",
    location: "Remote",
    period: "Apr 2022 – Jul 2023",
    color: "from-cyan-500 to-blue-500",
    achievements: [
      "Engineered custom C#/.NET solutions for the Encompass Loan Origination System, automating complex mortgage workflows to support high-volume nationwide operations.",
      "Solely architected and delivered a full-stack internal HR platform using Next.js and TypeScript, modernizing the entire employee onboarding lifecycle and eliminating manual spreadsheet dependencies.",
      "Designed and implemented the end-to-end data warehousing strategy to automate loan data processing, providing stakeholders with real-time access to business-critical reports.",
      "Served as the primary technical escalation point for Help Desk inquiries, resolving critical defects in proprietary web applications and maintaining web infrastructure."
    ]
  }
];

export function Experience() {
  const { ref, isInView } = useInView();

  return (
    <section id="experience" className="relative px-4 py-32">
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
                  <TrendingUp className="w-4 h-4" />
                  Career Journey
                </span>
                <div className="absolute inset-0 blur-xl bg-cyan-500/20 rounded-full" />
              </div>
            </motion.div>
            <h2 className="text-6xl md:text-7xl font-black relative">
              <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-white bg-clip-text text-transparent">
                Professional Experience
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-emerald-400 to-white bg-clip-text text-transparent blur-2xl opacity-30">
                Professional Experience
              </div>
            </h2>
          </div>

          <div className="relative">
            {/* Gradient connecting line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-cyan-500 to-transparent hidden md:block rounded-full" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.3, duration: 0.8 }}
                  className="relative group"
                >
                  {/* Animated Timeline Dot */}
                  <motion.div 
                    className="absolute left-8 top-8 w-6 h-6 -translate-x-1/2 rounded-full hidden md:block"
                    whileHover={{ scale: 1.5 }}
                  >
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${exp.color}`} />
                    <motion.div 
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${exp.color}`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 0, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: [0.42, 0, 0.58, 1] as const
                      }}
                    />
                  </motion.div>

                  <div className="md:ml-20">
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-all duration-500`}
                      whileHover={{ scale: 1.02 }}
                    />
                    
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <motion.div 
                              className={`p-3 bg-gradient-to-r ${exp.color} rounded-xl shadow-lg`}
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <Briefcase className="w-6 h-6 text-white" />
                            </motion.div>
                            <h3 className="text-3xl font-black text-white">{exp.title}</h3>
                          </div>
                          <p className={`text-2xl font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-3`}>
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap gap-4 text-gray-300 text-sm">
                            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full">
                              <MapPin className="w-4 h-4 text-emerald-400" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full">
                              <Calendar className="w-4 h-4 text-cyan-400" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {exp.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.3 + i * 0.1, duration: 0.5 }}
                            className="flex gap-3 group/item bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-all"
                          >
                            <Sparkles className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                            <p className="text-gray-200 leading-relaxed">{achievement}</p>
                          </motion.div>
                        ))}
                      </div>

                      {/* Corner accents */}
                      <div className={`absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 rounded-tr-2xl opacity-30 bg-gradient-to-r ${exp.color} border-current`} />
                      <div className={`absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 rounded-bl-2xl opacity-30 bg-gradient-to-r ${exp.color} border-current`} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
