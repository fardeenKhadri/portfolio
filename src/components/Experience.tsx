import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "AI Developer Intern",
    company: "MantraCare",
    location: "Delhi",
    period: "2025-Present",
    description: [
      "Integrated OpenAI's Realtime API and Gemini 2.0 models for advanced conversational health AI",
      "Developed vector-based movement detection for physical therapy using 3D coordinate processing",
      "Architected and deployed MCP (Model Context Protocol) servers using Docker and FastAPI",
      "Optimized PostgreSQL databases and orchestrated high-frequency health tracker data migrations"
    ],
    type: "Internship",
    color: "primary"
  },
  {
    title: "Software Developer",
    company: "Indian Institute of Science (IISc)",
    location: "Bangalore",
    period: "2024-2025",
    description: [
      "Built VR-based research applications and custom Brachiograph systems",
      "Developed Python-based configuration workflows for real-time data visualization"
    ],
    type: "Internship",
    color: "accent"
  },
  {
    title: "DevOps Engineer",
    company: "Rooman Technologies",
    location: "Bangalore",
    period: "2024-2025",
    description: [
      "Worked with CI/CD pipelines (Docker, Jenkins, GitHub Actions)",
      "Automated deployments and managed Python microservice infrastructure"
    ],
    type: "Contract",
    color: "accent"
  },
  {
    title: "Auditing Intern",
    company: "SVYM",
    location: "Mysore",
    period: "2024",
    description: [
      "Developed and deployed website for social impact reporting",
      "Conducted sustainability audit at SARAGUR hospital"
    ],
    type: "Internship",
    color: "secondary"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            💼 Professional Journey
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey across software development, DevOps, and social impact initiatives
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-accent" />
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-4 h-4 rounded-full ${
                      exp.color === 'primary' ? 'bg-primary' :
                      exp.color === 'accent' ? 'bg-accent' : 'bg-secondary'
                    } border-4 border-background shadow-soft`} />
                  </div>

                  {/* Experience card */}
                  <Card className="flex-1 bg-gradient-card border-0 shadow-card hover:shadow-glow transition-smooth">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Briefcase className="w-4 h-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <Badge variant="outline" className="w-fit">
                            <Calendar className="w-3 h-3 mr-1" />
                            {exp.period}
                          </Badge>
                          <Badge variant="outline" className="w-fit">
                            <MapPin className="w-3 h-3 mr-1" />
                            {exp.location}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Badge 
                        variant={exp.type === 'Full-time' ? 'default' : 'secondary'} 
                        className="mb-4"
                      >
                        {exp.type}
                      </Badge>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;