import { motion } from "framer-motion";
import { BookOpen, Users, Calendar, Microscope, Award, Globe } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Paper Repository",
    desc: "Access thousands of peer-reviewed AI research papers with AI-powered summaries and citation graphs.",
  },
  {
    icon: Users,
    title: "Expert Network",
    desc: "Connect with leading AI researchers, engineers, and thought leaders from top institutions worldwide.",
  },
  {
    icon: Calendar,
    title: "Global Events",
    desc: "Live-streamed conferences, workshops, and hackathons featuring breakthroughs in real time.",
  },
  {
    icon: Microscope,
    title: "Lab Spotlight",
    desc: "Behind-the-scenes looks at research labs from DeepMind, OpenAI, Meta FAIR, and more.",
  },
  {
    icon: Award,
    title: "Innovation Awards",
    desc: "Annual recognition program celebrating the most impactful AI breakthroughs and contributors.",
  },
  {
    icon: Globe,
    title: "Open Datasets",
    desc: "Curated collection of open datasets for benchmarking, training, and reproducible research.",
  },
];

const FeaturesGrid = () => {
  return (
    <section id="community" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3 block">
            Platform Features
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Built for <span className="text-gradient-primary">Researchers</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need to stay at the cutting edge of AI innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative bg-gradient-card rounded-xl p-7 border border-border hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feat.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{feat.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
