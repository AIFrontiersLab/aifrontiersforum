import { Github, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="AI Innovators Forum" className="h-9 w-auto" />
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The global platform for AI research, innovation, and collaboration.
            </p>
          </div>

          {[
            { title: "Research", links: ["Papers", "Models", "Datasets", "Benchmarks"] },
            { title: "Community", links: ["Events", "Forum", "Blog", "Newsletter"] },
            { title: "Company", links: ["About", "Careers", "Contact", "Press"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-semibold text-foreground text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 AI Innovators Forum. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
