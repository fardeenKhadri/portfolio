import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Cloud, Brain, Cpu, Database, Shield } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Python", level: 95, color: "primary" },
      { name: "C/C++", level: 90, color: "accent" },
      { name: "JavaScript", level: 85, color: "primary" },
      { name: "Rust", level: 75, color: "accent" },
      { name: "SQL", level: 80, color: "primary" }
    ]
  },
    {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: [
      { name: "TensorFlow", level: 90, color: "primary" },
      { name: "PyTorch", level: 85, color: "accent" },
      { name: "OpenCV", level: 92, color: "primary" },
      { name: "HuggingFace", level: 88, color: "accent" },
      { name: "Scikit-learn", level: 85, color: "primary" }
    ]
  },
    {
    title: "Frameworks & Libraries",
    icon: Database,
    skills: [
      { name: "Flask", level: 90, color: "primary" },
      { name: "Pandas", level: 88, color: "accent" },
      { name: "NumPy", level: 90, color: "primary" },
      { name: "Selenium", level: 85, color: "accent" },
      { name: "REST APIs", level: 87, color: "primary" }
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      { name: "Docker", level: 90, color: "primary" },
      { name: "Jenkins", level: 85, color: "accent" },
      { name: "GitHub Actions", level: 88, color: "primary" },
      { name: "AWS", level: 80, color: "accent" },
      { name: "Azure", level: 75, color: "primary" }
    ]
  },

  {
    title: "IoT & Embedded",
    icon: Cpu,
    skills: [
      { name: "Arduino IDE", level: 95, color: "primary" },
      { name: "ESP-IDF", level: 90, color: "accent" },
      { name: "MicroPython", level: 85, color: "primary" },
      { name: "PlatformIO", level: 88, color: "accent" },
      { name: "Assembly", level: 80, color: "primary" }
    ]
  },

  {
    title: "Operating Systems",
    icon: Shield,
    skills: [
      { name: "Ubuntu", level: 90, color: "primary" },
      { name: "Kali Linux", level: 85, color: "accent" },
      { name: "Red Hat", level: 80, color: "primary" },
      { name: "Fedora", level: 82, color: "accent" },
      { name: "Windows", level: 88, color: "primary" }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            🛠 Technical Expertise
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical skills across software development, DevOps, AI/ML, and embedded systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="group bg-gradient-card border-0 shadow-card hover:shadow-glow transition-smooth"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-accent">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-sm">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className={`h-2 ${
                            skill.color === 'primary' 
                              ? '[&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-primary-glow' 
                              : '[&>div]:bg-gradient-to-r [&>div]:from-accent [&>div]:to-primary'
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certifications Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "AI for India (Government of India, 2022)",
              "Programming in Python (HRT Tech Solutions, 2023)",
              "DevOps & Cloud Fundamentals (Rooman Technologies, 2025)"
            ].map((cert, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-sm hover:bg-primary/10 transition-smooth"
              >
                🏆 {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;