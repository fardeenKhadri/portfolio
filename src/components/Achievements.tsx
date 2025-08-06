import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Calendar } from "lucide-react";

const achievements = [
  { title: "CodeRed 2025", position: "1st Place", venue: "BMSIT", icon: "🥇", year: "2025" },
  { title: "Confluence 2025", position: "1st Place", venue: "PES University", icon: "🥇", year: "2025" },
  { title: "Hackverse 2025", position: "Best Idea Award", venue: "Kristu Jayanti College", icon: "🏅", year: "2025" },
  { title: "Prompathon 2025", position: "2nd Place", venue: "AIT", icon: "🥈", year: "2025" },
  { title: "Hackverse 2025", position: "1st Place", venue: "WIET Mumbai", icon: "🥇", year: "2025" },
  { title: "National Techno Exhibition 2025", position: "2nd Place", venue: "Dr. AIT", icon: "🥈", year: "2025" },
  { title: "Geenovate 2025", position: "1st Place", venue: "GCET Hyderabad", icon: "🥇", year: "2025" },
  { title: "Namma Suraksha 2025", position: "1st Place", venue: "PES University", icon: "🥇", year: "2025" },
  { title: "SIGHT 2.0 2025", position: "1st Runner-up", venue: "UST Kerala", icon: "🥈", year: "2025" }
];

const stats = [
  { label: "Total Competitions", value: "9", icon: Trophy },
  { label: "First Place Wins", value: "5", icon: Award },
  { label: "Awards & Recognitions", value: "9", icon: Star },
  { label: "Active Competition Year", value: "2025", icon: Calendar }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            🏆 Competition Excellence
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Achievements & Awards</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Consistent performance in hackathons and technical competitions showcasing innovation and technical excellence
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center bg-gradient-card border-0 shadow-card hover:shadow-glow transition-smooth">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-2">
                    <div className="p-3 rounded-lg bg-gradient-accent">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="group bg-gradient-card border-0 shadow-card hover:shadow-glow transition-smooth relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-accent opacity-10 rounded-bl-[4rem]" />
              
              <CardHeader className="relative">
                <div className="flex items-start justify-between">
                  <div className="text-3xl mb-2">{achievement.icon}</div>
                  <Badge variant="outline" className="text-xs">
                    {achievement.year}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-smooth">
                  {achievement.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <Badge 
                    className={`w-fit ${
                      achievement.position.includes('1st') || achievement.position.includes('Best') 
                        ? 'bg-gradient-accent border-0 text-white' 
                        : 'bg-secondary'
                    }`}
                  >
                    {achievement.position}
                  </Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{achievement.venue}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Highlights */}
        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Star className="w-6 h-6 text-primary" />
                Achievement Highlights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">5</div>
                  <div className="text-sm text-muted-foreground">First Place Wins</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-1">3</div>
                  <div className="text-sm text-muted-foreground">Runner-up Positions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">1</div>
                  <div className="text-sm text-muted-foreground">Special Recognition</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;