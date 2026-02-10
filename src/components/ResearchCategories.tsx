import { motion } from "framer-motion";
import {
  Brain,
  Eye,
  MessageSquare,
  Bot,
  Network,
  Shield,
  Dna,
  Atom,
} from "lucide-react";

const categories = [
  { icon: Brain, title: "Neural Architecture", desc: "Transformer models, attention mechanisms, and next-gen architectures", color: "text-primary" },
  { icon: Eye, title: "Computer Vision", desc: "Object detection, image generation, and visual understanding", color: "text-primary" },
  { icon: MessageSquare, title: "Natural Language", desc: "LLMs, reasoning, multimodal understanding, and language generation", color: "text-accent" },
  { icon: Bot, title: "Autonomous Agents", desc: "Self-improving systems, tool use, and agentic workflows", color: "text-primary" },
  { icon: Network, title: "Federated Learning", desc: "Privacy-preserving ML, distributed training, and edge intelligence", color: "text-accent" },
  { icon: Shield, title: "AI Safety", desc: "Alignment research, interpretability, and responsible AI development", color: "text-primary" },
  { icon: Dna, title: "AI for Science", desc: "Drug discovery, protein folding, climate modeling, and materials science", color: "text-accent" },
  { icon: Atom, title: "Quantum ML", desc: "Quantum computing meets machine learning for exponential speedups", color: "text-primary" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ResearchCategories = () => {
  return (
    <section id="research" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3 block">
            Research Domains
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Explore the <span className="text-gradient-primary">Frontiers</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Dive deep into the most impactful areas of AI research shaping our world.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={item}
              className="group bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-500 cursor-pointer hover:glow-primary"
            >
              <cat.icon className={`h-8 w-8 ${cat.color} mb-4 group-hover:scale-110 transition-transform duration-300`} />
              <h3 className="font-display font-semibold text-foreground mb-2">{cat.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchCategories;
