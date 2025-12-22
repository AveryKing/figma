import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Mail, Phone, Globe, Github, Linkedin, Send, MapPin, Zap } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "avery@averyk.dev",
    href: "mailto:avery@averyk.dev",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "269-214-8032",
    href: "tel:269-214-8032",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: Globe,
    label: "Website",
    value: "averyk.dev",
    href: "https://averyk.dev",
    color: "from-purple-500 to-pink-500"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    value: "averyking1",
    href: "https://github.com/averyking1",
    color: "from-gray-600 to-gray-800"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://linkedin.com/in/averyking1",
    color: "from-blue-600 to-blue-800"
  }
];

export function Contact() {
  const { ref, isInView } = useInView();

  return (
    <section id="contact" className="relative px-4 py-32">
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
                  <Zap className="w-4 h-4" />
                  Let's Connect
                </span>
                <div className="absolute inset-0 blur-xl bg-pink-500/20 rounded-full" />
              </div>
            </motion.div>
            <h2 className="text-6xl md:text-7xl font-black mb-6 relative">
              <span className="bg-gradient-to-r from-pink-400 via-cyan-400 to-white bg-clip-text text-transparent">
                Get in Touch
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-cyan-400 to-white bg-clip-text text-transparent blur-2xl opacity-30">
                Get in Touch
              </div>
            </h2>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto font-medium">
              I'm always open to discussing new opportunities, interesting projects, or potential collaborations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 text-emerald-400 mb-6">
                <Send className="w-6 h-6" />
                <h3 className="text-2xl font-black">Contact Information</h3>
              </div>
              
              {contactMethods.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    className="group relative block"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-r ${contact.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-300`}
                    />
                    <div className="relative flex items-center gap-4 p-5 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-white/40 transition-all">
                      <motion.div 
                        className={`p-4 bg-gradient-to-r ${contact.color} rounded-xl shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <p className="text-gray-400 text-sm font-semibold">{contact.label}</p>
                        <p className="text-white font-bold text-lg">{contact.value}</p>
                      </div>
                    </div>
                  </motion.a>
                );
              })}

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="relative"
              >
                <div className="flex items-center gap-4 p-5 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20">
                  <div className="p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-semibold">Location</p>
                    <p className="text-white font-bold text-lg">Peoria, IL</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Social Links & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-6"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-3xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all">
                  <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-2">
                    Follow Me
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      ⭐
                    </motion.span>
                  </h3>
                  <p className="text-gray-300 mb-6 font-medium">
                    Connect with me on social media to stay updated with my latest projects and thoughts.
                  </p>
                  
                  <div className="space-y-3">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                          whileHover={{ scale: 1.02, x: 5 }}
                          className="group/link relative flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 border border-white/20 hover:border-white/40 transition-all"
                        >
                          <div className={`p-3 bg-gradient-to-r ${social.color} rounded-lg shadow-lg`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-white font-bold flex-1">{social.label}</span>
                          <Send className="w-4 h-4 text-gray-400 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* CTA Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="relative group"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-pink-600/30 via-orange-600/30 to-emerald-600/30 rounded-3xl blur-2xl"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: [0.42, 0, 0.58, 1] as const
                  }}
                />
                <div className="relative bg-gradient-to-br from-pink-600/20 via-orange-600/20 to-emerald-600/20 backdrop-blur-xl rounded-3xl p-8 border border-pink-500/30 hover:border-pink-500/50 transition-all">
                  <h3 className="text-2xl font-black text-white mb-3">Available for Opportunities</h3>
                  <p className="text-gray-200 mb-6 font-medium leading-relaxed">
                    Currently open to full-time positions and consulting projects in software engineering.
                  </p>
                  <motion.a
                    href="mailto:avery@averyk.dev"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(236, 72, 153, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-600 via-orange-600 to-emerald-600 rounded-xl text-white font-black text-lg hover:from-pink-500 hover:via-orange-500 hover:to-emerald-500 transition-all shadow-lg"
                  >
                    <Mail className="w-6 h-6" />
                    Send a Message
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-center pt-12 border-t border-white/10"
          >
            <p className="text-gray-400 font-medium">
              © {new Date().getFullYear()} Avery King. Crafted with{" "}
              <span className="text-pink-400">❤</span> using React, Motion & Tailwind CSS.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
