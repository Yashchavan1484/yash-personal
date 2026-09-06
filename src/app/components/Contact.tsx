import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <a
                href="mailto:yashchavan1484@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground">Email</p>
                  <p>yashchavan1484@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+919112494697"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground">Phone</p>
                  <p>+91 9112494697</p>
                </div>
              </a>

              <a
                href="https://github.com/yashchavan1484"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Github className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground">GitHub</p>
                  <p>yashchavan1484</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/yash-chavan-444320284/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground">LinkedIn</p>
                  <p>linkedin.com/in/yash-chavan</p>
                </div>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}