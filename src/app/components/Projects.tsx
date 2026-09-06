import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    id: 1,
    title: "Explora – Tourism Website",
    description:
      "A comprehensive tourism website featuring destination search, secure login, and real-time crowd density detection using OpenCV. The backend is built with Flask and SQLAlchemy, implementing a role-based dashboard and responsive UI for seamless user experience.",
    role: "Team Project",
    tools: ["Python", "Flask", "SQLAlchemy", "OpenCV"],
    highlights: [
      "Destination search with secure authentication",
      "Real-time crowd density detection",
      "Role-based dashboard implementation",
      "Responsive UI design",
    ],
    image: "https://images.unsplash.com/photo-1546661869-cf589fac7085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VyaXNtJTIwdHJhdmVsJTIwZGVzdGluYXRpb258ZW58MXx8fHwxNzYzMzkyNjc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    demoUrl: "https://explora-team-project-1.onrender.com",
    codeUrl: null,
  },
  {
    id: 2,
    title: "AI/ML Mini Projects",
    description:
      "A collection of Python-based mini-projects focused on automation, data classification, and machine learning. These academic and personal projects demonstrate practical applications of ML algorithms and data analysis techniques.",
    role: "Academic & Personal Work",
    tools: ["Python", "NumPy", "Pandas", "Scikit-learn", "Matplotlib"],
    highlights: [
      "Heart disease classification",
      "Bulldozer price prediction regression",
      "Basic neural network models",
      "Data analysis and visualization",
    ],
    image: "https://images.unsplash.com/photo-1653564142048-d5af2cf9b50f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXRhJTIwc2NpZW5jZXxlbnwxfHx8fDE3NjM0NDUxMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    demoUrl: null,
    codeUrl: "https://github.com/Yashchavan1484/aiml-projects",
  },
  {
    id: 3,
    title: "SIH – Team HYDRAN",
    description:
      "Backend workflow system for OTP and alert notifications using Twilio SMS API integration. Built for Smart India Hackathon, this project handles secure authentication and real-time notification delivery through SMS.",
    role: "Backend Developer",
    tools: ["Python", "Twilio SMS API", "REST APIs"],
    highlights: [
      "Twilio SMS integration for OTP delivery",
      "Alert notification system",
      "REST API implementation",
      "Secure authentication workflow",
    ],
    image: "https://images.unsplash.com/photo-1609162554108-6490759499ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbXMlMjBub3RpZmljYXRpb24lMjBtb2JpbGV8ZW58MXx8fHwxNzYzNDQ1MTM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    demoUrl: null,
    codeUrl: "https://github.com/Yashchavan1484/Hydran-SIH-Third-year-project-",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent work showcasing my skills in development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden flex flex-col">
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <h3 className="text-xl mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>
              <CardContent className="space-y-4 flex-grow">
                <div>
                  <p className="mb-1">
                    <span className="text-muted-foreground">Role:</span> {project.role}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <Badge key={tool} variant="secondary">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground mb-2">Key Features:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="text-sm">{highlight}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                {project.codeUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                )}
                {project.demoUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}