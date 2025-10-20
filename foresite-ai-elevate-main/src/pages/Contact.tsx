import { MapPin, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "11111 Katy Freeway Suite 910, Houston, TX 77079",
    },
    {
      icon: Mail,
      title: "Email",
      content: "Info@foresiteai.com",
      link: "mailto:Info@foresiteai.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "(555) 555-5555",
      link: "tel:5555555555",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get in <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Let's discuss how we can help transform your business with AI
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form - replaced with Formspree */}
            <Card className="border-2">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form
                  action="https://formspree.io/f/xgvnbwnp"
                  method="POST"
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="block text-sm font-medium text-muted-foreground">First Name</label>
                      <input type="text" id="firstName" name="firstName" required placeholder="John" className="w-full px-4 py-2 border rounded-md" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="block text-sm font-medium text-muted-foreground">Last Name</label>
                      <input type="text" id="lastName" name="lastName" required placeholder="Doe" className="w-full px-4 py-2 border rounded-md" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">Your Email</label>
                    <input type="email" id="email" name="email" required placeholder="you@example.com" className="w-full px-4 py-2 border rounded-md" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">Your Message</label>
                    <textarea id="message" name="message" required placeholder="Tell us about your project..." rows={6} className="w-full px-4 py-2 border rounded-md" />
                  </div>
                  <button type="submit" className="w-full bg-primary text-white py-3 rounded-md font-semibold hover:bg-primary/90 transition">Send</button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Reach out to us through any of these channels. We're here to help!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.content}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-primary border-0">
                <CardContent className="p-8 text-white">
                  <h3 className="text-xl font-bold mb-2">Office Hours</h3>
                  <p className="mb-4 opacity-90">Monday - Friday: 9:00 AM - 6:00 PM CST</p>
                  <p className="text-sm opacity-80">
                    We typically respond within 24 hours during business days.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
