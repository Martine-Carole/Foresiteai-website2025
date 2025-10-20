import { MessageSquare, Cpu, Wrench, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import industrialAI from "@/assets/industrial-ai.jpg";
import aiConsulting from "@/assets/ai-consulting.jpg";

const Services = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "AI Consulting Services",
      description: "Strategic guidance on leveraging AI for your business. We help you develop a comprehensive roadmap and ensure alignment with your business goals.",
      features: [
        "Strategic AI roadmap development",
        "Business goal alignment",
        "Technology assessment",
        "Implementation planning",
      ],
    },
    {
      icon: Cpu,
      title: "Advanced AI Solutions",
      description: "End-to-end AI implementation services. From deployment to optimization, we ensure your AI solutions deliver maximum efficiency and performance.",
      features: [
        "Complete implementation lifecycle",
        "System deployment & integration",
        "Performance optimization",
        "Continuous improvement",
      ],
    },
    {
      icon: Wrench,
      title: "Custom Industrial AI Solutions",
      description: "Bespoke AI applications tailored to your specific business challenges. We develop solutions that address your unique operational needs.",
      features: [
        "Tailored AI applications",
        "Industry-specific customization",
        "Scalable architecture",
        "Ongoing support",
      ],
    },
    {
      icon: GraduationCap,
      title: "Training & Education",
      description: "Comprehensive workshops, webinars, and on-site training programs to empower your teams with the AI skills they need to succeed.",
      features: [
        "Hands-on workshops",
        "Interactive webinars",
        "On-site training",
        "Certification programs",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={aiConsulting} 
            alt="AI Services" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-secondary/30"></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10 animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Our <span className="gradient-text drop-shadow-2xl">Services</span>
          </h1>
          <p className="text-2xl text-foreground/90 font-medium drop-shadow-md">
            Comprehensive AI solutions designed to transform your business operations
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all border-2 hover:border-primary/50 group hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-gradient-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section with Image */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift">
              <img 
                src={industrialAI} 
                alt="Industrial AI Solutions" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            </div>
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Industry-Leading AI Implementation
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our comprehensive approach ensures seamless integration of AI technologies into your existing workflows, maximizing efficiency and ROI.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <div className="h-6 w-6 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Proven Methodology</h3>
                    <p className="text-muted-foreground">Battle-tested implementation strategies that deliver results</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="h-6 w-6 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Continuous Support</h3>
                    <p className="text-muted-foreground">Ongoing assistance to ensure long-term success</p>
                  </div>
                </li>
              </ul>
              <Link to="/contact">
                <Button size="lg" className="shadow-lg hover:shadow-xl transition-all">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-primary/20 overflow-hidden shadow-xl hover:shadow-2xl transition-all hover-lift">
            <div className="bg-gradient-primary p-1">
              <CardContent className="bg-background p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Explore Cutting-Edge AI Consulting
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Ready to transform your business with AI? Book a consultation with our experts today.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="text-base px-8 shadow-lg hover:shadow-xl transition-all">
                    Book Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
