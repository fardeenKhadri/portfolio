import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/90" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-glow/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Status Badge */}
          <Badge variant="outline" className="mb-6 border-white/30 text-white hover:bg-white/10 transition-smooth">
            🚀 Available for Opportunities
          </Badge>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent animate-fade-in">
            FARDEEN S KHADRI
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Electronics & Communication Engineer | AI/ML Enthusiast | Prompt Engineer | Software Developer
          </p>

          {/* Professional Summary */}
          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-lg text-white/80 leading-relaxed">
              Currently an AI Developer Intern at MantraCare, ecializing in advanced conversational AI, LLM integration, and health-tech systems.
              Results-driven graduate with expertise in Python, CI/CD, and cloud technologies, passionate about automating and optimizing
              cross-disciplinary innovations.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              asChild
              size="lg"
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-smooth shadow-glow"
            >
              <a href="mailto:fardeeinshakhadrii@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/50 text-white bg-white/10 hover:bg-white/20 transition-smooth"
            >
              <a href="FARDEEN_S_KHADRI_Resume .pdf">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 transition-smooth"
            >
              <a
                href="https://github.com/fardeenKhadri"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
              </a>
            </Button>

            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 transition-smooth"
            >
              <a
                href="https://www.linkedin.com/in/fardeenkhadri/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </Button>

            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 transition-smooth"
            >
              <a href="mailto:fardeeinshakhadrii@gmail.com">
                <Mail className="w-6 h-6" />
              </a>
            </Button>

            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 transition-smooth"
            >
              <a href="tel:+917795163421">
                <Phone className="w-6 h-6" />
              </a>
            </Button>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="w-1 h-8 bg-white/50 rounded-full" />
      </div>
    </section>
  );
};

export default Hero;