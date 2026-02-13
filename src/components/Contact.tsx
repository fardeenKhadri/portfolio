import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            📧 Get In Touch
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating or discussing opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {/* Email */}
                <Card className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-smooth">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="p-3 rounded-lg bg-gradient-accent">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">fardeeinshakhadrii@gmail.com</div>
                    </div>
                  </CardContent>
                </Card>

                {/* Phone */}
                <Card className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-smooth">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="p-3 rounded-lg bg-primary">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-muted-foreground">+91-7795163421</div>
                    </div>
                  </CardContent>
                </Card>

                {/* Location */}
                <Card className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-smooth">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="p-3 rounded-lg bg-accent">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-muted-foreground">Bangalore, India</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Quick Actions */}
            {/* Quick Actions */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Actions</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button
                  asChild
                  className="bg-gradient-accent border-0 hover:shadow-soft transition-smooth"
                >
                  <a href="FARDEEN_S_KHADRI_Resume .pdf" download>
                    <FileText className="w-4 h-4 mr-2" />
                    Download Resume
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="hover:bg-primary/10 transition-smooth"
                >
                  <a href="https://github.com/fardeenKhadri" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View GitHub
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="hover:bg-primary/10 transition-smooth"
                >
                  <a href="https://www.linkedin.com/in/fardeenkhadri/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn Profile
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="hover:bg-primary/10 transition-smooth"
                >
                  <a href="mailto:fardeeinshakhadrii@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Direct
                  </a>
                </Button>
              </div>
            </div>


            {/* Availability Status */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  Current Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className="bg-blue-500/20 text-blue-400 mb-3">
                  💼 Currently Employed @ MantraCare
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Focused on building advanced conversational AI and health-tech systems. Not currently seeking new opportunities.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                action="https://formsubmit.co/fardeeinshakhadrii@gmail.com"
                method="POST"
                // encType="text/plain" 
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input name="name" placeholder="Your name" className="border-border" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input name="email" type="email" placeholder="Your email" className="border-border" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input name="subject" placeholder="Subject of your message" className="border-border" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    className="border-border resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-accent border-0 hover:shadow-soft transition-smooth"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>

            </CardContent>
          </Card>
        </div>

        {/* Education & Publication */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Education & Publication</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🎓 Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="font-semibold">B.E. in Electronics & Communication</div>
                  <div className="text-muted-foreground">Dr. Ambedkar Institute of Technology</div>
                  <Badge variant="outline" className="mt-1">CGPA: 8.12</Badge>
                </div>
                <div>
                  <div className="font-medium">Class XII: 95%</div>
                  <div className="text-sm text-muted-foreground">Hoysala PU College</div>
                </div>
                <div>
                  <div className="font-medium">Class X: 96%</div>
                  <div className="text-sm text-muted-foreground">St. Ann's High School</div>
                </div>
              </CardContent>
            </Card>

            {/* Publication */}

            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  📚 Publication
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="font-semibold">VISNAV: Visor Integrated System for Navigation</div>
                  <div className="text-sm text-muted-foreground">
                    Published in International Journal of Innovative Research in Technology (IJIRT), Volume 11, Issue 12
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="hover:bg-primary/10 transition-smooth"
                  >
                    <a
                      href="https://ijirt.org/publishedpaper/IJIRT168252_PAPER.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Read Publication
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;