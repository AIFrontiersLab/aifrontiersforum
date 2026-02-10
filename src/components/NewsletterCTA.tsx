import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

const NewsletterCTA = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[150px] opacity-10" style={{ background: "hsl(185 80% 55%)" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              Stay Ahead
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Never Miss a <span className="text-gradient-primary">Breakthrough</span>
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Get weekly digests of the most important AI research, curated by experts. No spam,
            unsubscribe anytime.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3.5 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-sans text-sm"
            />
            <button className="bg-gradient-cta text-primary-foreground px-6 py-3.5 rounded-xl font-display font-semibold text-sm glow-primary hover:scale-105 transition-transform flex items-center justify-center gap-2 whitespace-nowrap">
              Subscribe <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Join 50,000+ AI researchers and practitioners
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
