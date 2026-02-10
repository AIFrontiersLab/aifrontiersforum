import { motion } from "framer-motion";
import { ArrowUpRight, Clock, TrendingUp, Flame } from "lucide-react";

const trends = [
  {
    tag: "Breaking",
    icon: Flame,
    title: "GPT-5 Architecture Leaked: Multi-Modal Reasoning at Scale",
    summary: "New reports suggest a hybrid mixture-of-experts model with native vision, audio, and code execution capabilities built into the core architecture.",
    date: "Feb 10, 2026",
    readTime: "8 min",
    category: "Large Language Models",
  },
  {
    tag: "Trending",
    icon: TrendingUp,
    title: "DeepMind's AlphaFold 4 Solves Protein Interaction Networks",
    summary: "A leap beyond single protein prediction — AlphaFold 4 models entire molecular interaction networks with 98% accuracy.",
    date: "Feb 8, 2026",
    readTime: "6 min",
    category: "AI for Science",
  },
  {
    tag: "Trending",
    icon: TrendingUp,
    title: "Open-Source AI Agents Surpass Commercial Tools in Benchmarks",
    summary: "Community-driven autonomous agents now outperform proprietary solutions on SWE-bench and WebArena, signaling a shift in the ecosystem.",
    date: "Feb 7, 2026",
    readTime: "5 min",
    category: "Autonomous Agents",
  },
  {
    tag: "Breaking",
    icon: Flame,
    title: "EU AI Act Phase 2: Mandatory Transparency for Foundation Models",
    summary: "New regulations require all foundation model providers to disclose training data sources, evaluation results, and energy consumption metrics.",
    date: "Feb 6, 2026",
    readTime: "7 min",
    category: "AI Safety & Policy",
  },
];

const TrendingSection = () => {
  return (
    <section id="trends" className="py-24 bg-gradient-hero relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3 block">
              Latest & Greatest
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Trending <span className="text-gradient-primary">Now</span>
            </h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-1 text-sm text-primary hover:underline">
            View all articles <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {trends.map((trend, i) => (
            <motion.article
              key={trend.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-500 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${
                  trend.tag === "Breaking"
                    ? "bg-primary/10 text-primary"
                    : "bg-accent/10 text-accent"
                }`}>
                  <trend.icon className="h-3 w-3" /> {trend.tag}
                </span>
                <span className="text-xs text-muted-foreground">{trend.category}</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {trend.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{trend.summary}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>{trend.date}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {trend.readTime}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
