import { Mail, MapPin, Github, ExternalLink, ChevronDown, Sparkles, Code2 } from "lucide-react";
import { motion } from "motion/react";

const floatingAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: [0.42, 0, 0.58, 1] as const
  }
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1] as const
          }}
          className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/30 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1] as const,
            delay: 1
          }}
          className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/30 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1] as const,
            delay: 2
          }}
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px]" 
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={floatingAnimation}
            className="absolute top-20 left-10 text-emerald-400/20"
          >
            <Code2 size={40} />
          </motion.div>
          <motion.div
            animate={{
              y: [0, -30, 0],
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1] as const,
                delay: 0.5
              }
            }}
            className="absolute top-32 right-20 text-cyan-400/20"
          >
            <Sparkles size={32} />
          </motion.div>
          <motion.div
            animate={{
              y: [0, -25, 0],
              transition: {
                duration: 5,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1] as const,
                delay: 1
              }
            }}
            className="absolute bottom-40 left-1/4 text-pink-400/20"
          >
            <Sparkles size={28} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <motion.div 
            className="inline-block mb-8"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: [0.42, 0, 0.58, 1] as const
            }}
          >
            <span className="px-6 py-3 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-pink-500/10 backdrop-blur-sm border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-semibold shadow-lg shadow-emerald-500/20">
              Software Engineer
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-7xl md:text-9xl font-black mb-6 relative">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
              Avery King
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent blur-2xl opacity-30">
              Avery King
            </div>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-2xl md:text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
              .NET & JavaScript Specialist
            </span>
          </p>
          <div className="flex items-center justify-center gap-2 text-lg text-gray-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Cloud Architecture • Azure & GCP</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed"
        >
          Crafting <span className="text-emerald-400 font-semibold">secure, mission-critical applications</span> for GovTech and FinTech.
          <br />
          Transforming complex requirements into <span className="text-cyan-400 font-semibold">scalable cloud-native solutions</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-6 text-gray-400 mb-12"
        >
          <motion.a
            href="mailto:avery@averyk.dev"
            className="flex items-center gap-2 hover:text-emerald-400 transition-colors group"
            whileHover={{ scale: 1.05 }}
          >
            <Mail className="w-5 h-5 group-hover:animate-pulse" />
            <span>avery@averyk.dev</span>
          </motion.a>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>Peoria, IL</span>
          </div>
          <motion.a
            href="https://github.com/averyking1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-emerald-400 transition-colors group"
            whileHover={{ scale: 1.05 }}
          >
            <Github className="w-5 h-5 group-hover:animate-pulse" />
            <span>averyking1</span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(16, 185, 129, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-full overflow-hidden shadow-lg shadow-emerald-500/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center justify-center gap-2 font-bold text-lg">
              Let's Connect
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </motion.a>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white/5 backdrop-blur-sm rounded-full border-2 border-emerald-500/30 hover:bg-white/10 hover:border-emerald-400/50 transition-all font-bold text-lg"
          >
            View My Work
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: [0.42, 0, 0.58, 1] as const
            }}
          >
            <ChevronDown className="w-8 h-8 text-emerald-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
