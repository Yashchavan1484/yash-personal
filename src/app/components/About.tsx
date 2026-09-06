import { GraduationCap, Heart } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about who I am, what I do, and what I'm passionate about
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h3 className="text-2xl">Hello! I'm Yash Chavan</h3>
            <p className="text-muted-foreground">
              I'm an Aspiring Backend Developer and AI Engineer with a passion for building intelligent,
              scalable systems. Currently pursuing my Bachelor of Technology in Computer Science,
              I specialise in crafting robust backend architectures and integrating AI/ML capabilities
              that solve real-world problems.
            </p>
            <p className="text-muted-foreground">
              I believe in continuous learning and staying ahead of the curve. Whether it's
              engineering high-performance backend APIs, designing agentic AI workflows with LangChain
              and LangGraph, or building RAG pipelines with vector databases. I approach every
              challenge with precision and enthusiasm.
            </p>
            <p className="text-muted-foreground">
              My journey in tech has been driven by curiosity and a deep desire to make an impact.
              I love transforming ambitious ideas into production-ready systems, and every project
              I take on pushes me to grow further as both an engineer and a problem-solver.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="h-fit">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-4">Education</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-foreground">Dr. D.Y. Patil Institute, Pune</p>
                        <p className="text-muted-foreground text-sm">BTech, Computer Science (2023 - Present)</p>
                        <p className="text-muted-foreground text-sm">CGPA: 9.29</p>
                      </div>
                      <div>
                        <p className="text-foreground">The Lexicon Schools</p>
                        <p className="text-muted-foreground text-sm">12th - 84% | 10th - 95.5%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-fit">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-2">What Drives Me</h4>
                    <p className="text-muted-foreground text-sm">
                      The intersection of technology and creativity drives my passion. Building
                      innovative products that solve real problems and make people's lives easier
                      is what motivates me every day. I'm excited about leveraging AI/ML and web
                      technologies to create impactful solutions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}