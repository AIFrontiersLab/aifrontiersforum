import { motion } from "framer-motion";
import { ArrowRight, Cpu, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0 animate-grid-flow"
          style={{
            backgroundImage: `linear-gradient(hsl(185 80% 55% / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(185 80% 55% / 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            height: "200%",
          }}
        />
      </div>

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-[100px] opacity-20"
        style={{ background: "hsl(185 80% 55%)" }}
      />
      <motion.div
        animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full blur-[80px] opacity-15"
        style={{ background: "hsl(260 60% 60%)" }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <div className="flex items-center gap-2 glass-panel px-4 py-2 rounded-full">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium text-muted-foreground tracking-wider uppercase">
              Pioneering the Future of Intelligence
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6"
        >
          <span className="text-foreground">Where AI</span>
          <br />
          <span className="text-gradient-primary glow-text">Innovation</span>
          <br />
          <span className="text-foreground">Meets Vision</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10 leading-relaxed"
        >
          Join a global community of researchers, engineers, and visionaries pushing the boundaries
          of artificial intelligence. Explore cutting-edge research, share breakthroughs, and shape
          the future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-gradient-cta text-primary-foreground px-8 py-4 rounded-xl font-display font-semibold text-lg glow-primary hover:scale-105 transition-transform flex items-center justify-center gap-2">
            Explore Research <ArrowRight className="h-5 w-5" />
          </button>
          <button className="glass-panel px-8 py-4 rounded-xl font-display font-semibold text-lg text-foreground hover:border-primary/40 transition-colors flex items-center justify-center gap-2">
            <Cpu className="h-5 w-5 text-primary" /> View Innovations
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: "2,400+", label: "Research Papers" },
            { value: "180+", label: "AI Models" },
            { value: "50K+", label: "Community Members" },
            { value: "95+", label: "Countries" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl md:text-3xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
