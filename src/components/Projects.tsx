import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Lightbulb } from "lucide-react";
import { sourceMapsEnabled } from "process";

const projects = [
  {
    title: "PySummarizer",
    description: "Python NLP library for PDF summarization using extractive/abstractive methods, integrated with Flask and transformers.",
    tech: ["Python", "RAG", "NLP", "HuggingFace", "Flask", "PDF Parsing"],
    category: "AI/ML",
    featured: true,
    sourceLink: "https://github.com/fardeenKhadri/pysuma.git"
  },
  {
    title: "Optical Device for Intelligent Navigation",
    description: "Smart glasses for visually impaired individuals using ESP32-CAM, voice assistant, and AI-based scene interpretation.",
    tech: ["ESP32-CAM", "Image Processing", "Audio Streaming", "Flask"],
    category: "IoT/Embedded",
    featured: true,
    sourceLink: "https://github.com/fardeenKhadri/Odin.git"
  },

  {
    title: "Dynamic AI for Real-Time Sight, Haptic and Navigation Assistance",
    description: "Wearable for blind users with depth sensing, haptics, and conversational AI powered by vision transformers.",
    tech: ["Depth Estimation", "Vision Transformers", "Embedded Systems"],
    category: "AI/ML & IOT",
    featured: true,
    sourceLink : "https://github.com/fardeenKhadri/R.O.B.E.R.T.git"
  },
  {
    title: "Doctor's Bot for Operational Trackers Technology",
    description: "AI-powered medical assistant that records, summarizes, and retrieves patient data using speech-to-text, Gemini AI, and Llama 3.",
    tech: ["Flask", "Python", "Whisper", "Gemini AI", "Llama 3", "Speech-to-Text", "Bootstrap", "CSV Storage"],
    category: "AI/Healthcare",
    featured: false,
    sourceLink: "https://github.com/fardeenKhadri/D-BOTT"
  },

  {
    title: "E`STATE: AI-Powered 3D Room Layout Predictor",
     description: "Transforms RGB panoramas into 3D room layouts using LGT-Net. Features Streamlit & Gradio interfaces, REST API, and multi-format export.",
    tech: ["Python", "LGT-Net", "Transformers", "3D Modeling", "Gradio", "Streamlit", "Flask", "REST API"],
    category: "AI",
    featured: false,
    sourceLink: "https://github.com/fardeenKhadri/mestri"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            🚀 Innovation Showcase
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge solutions spanning AI/ML, IoT, computer vision, and accessibility technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group bg-gradient-card border-0 shadow-card hover:shadow-glow transition-smooth relative overflow-hidden ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gradient-accent border-0 text-white">
                    ⭐ Featured
                  </Badge>
                </div>
              )}

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth" />

              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="w-5 h-5 text-primary" />
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="relative z-10">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <Badge 
                      key={i} 
                      variant="outline" 
                      className="text-xs hover:bg-primary/10 transition-smooth"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                {/* Action Buttons */}
              <div className="flex gap-3">
                <Button 
                  asChild
                  variant="outline" 
                  size="sm"
                  className="hover:bg-primary/10 transition-smooth"
                >
                  <a href={project.sourceLink} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Source
                  </a>
                </Button>
                
              </div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;