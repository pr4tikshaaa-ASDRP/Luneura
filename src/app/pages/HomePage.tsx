import { Link } from "react-router";
import { Heart, Brain, Users, MessageCircle, BookOpen } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const HomePage = () => {
  const features = [
    {
      icon: Brain,
      title: "Parent Corner",
      description: "Understanding autism & supporting your special girl",
      link: "/parent-corner",
      color: "text-purple-500",
      emoji: "💜"
    },
    {
      icon: Users,
      title: "Ages & Quiz",
      description: "Age-specific quizzes from childhood through adulthood",
      link: "/ages-stages",
      color: "text-blue-500",
      emoji: "📊"
    },
    {
      icon: BookOpen,
      title: "Research Hub",
      description: "Latest discoveries and statistics about autism in girls",
      link: "/research-hub",
      color: "text-green-500",
      emoji: "🔬"
    },
    {
      icon: MessageCircle,
      title: "Friendly Chatbot",
      description: "Chat with our supportive companion for help",
      link: "/chatbot",
      color: "text-orange-500",
      emoji: "💬"
    },
    {
      icon: Heart,
      title: "Contact Us",
      description: "Get in touch with the Luneura team",
      link: "/contact",
      color: "text-pink-500",
      emoji: "📧"
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary/30 to-background py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-medium text-foreground leading-tight">
                Welcome to Luneura
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A calm, clear, and supportive space designed specifically for autistic girls of all ages.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                You're in the right place. Explore autism your way — clear, calm, and here for you.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/parent-corner">
                  <Button size="lg" className="rounded-full">
                    Get Started
                  </Button>
                </Link>
                <Link to="/chatbot">
                  <Button size="lg" variant="outline" className="rounded-full">
                    Chat with Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-card">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1567516364473-233c4b6fcfbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHlvdW5nJTIwZ2lybCUyMHNtaWxpbmd8ZW58MXx8fHwxNzY5MDU1OTIwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Happy young girl"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calming Section */}
      <section className="py-16 sm:py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-xl border-4 border-card">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1764677224091-d300d12df5f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMG5hdHVyZSUyMGNhbG18ZW58MXx8fHwxNzY5MDM0NzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Peaceful nature"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-medium text-foreground">
                Designed for You
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Calm & Clear:</strong> Soft colors, simple layouts, and predictable navigation
                </p>
                <p>
                  <strong className="text-foreground">Accessible:</strong> Easy-to-read fonts and high contrast for better readability
                </p>
                <p>
                  <strong className="text-foreground">Supportive:</strong> No judgment, just understanding and helpful information
                </p>
                <p>
                  <strong className="text-foreground">Sensory-Safe:</strong> No flashing elements or sudden animations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-4">
              Explore Our Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need in one calm, accessible place
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Link key={feature.link} to={feature.link}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 border-2">
                  <CardContent className="p-8 space-y-4">
                    <div className={`w-16 h-16 rounded-2xl bg-secondary/50 flex items-center justify-center ${feature.color}`}>
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-medium text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About the Luneura Team */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center text-4xl mb-4">
              <span>💜</span>
              <span>🌟</span>
              <span>💜</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium text-foreground mb-4">
              About the Luneura Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are dedicated to creating neurodiversity-friendly resources for autistic girls and their families
            </p>
          </div>

          <Card className="border-2">
            <CardContent className="p-8 space-y-6">
              <div className="prose max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our mission is to provide clear, accessible, and compassionate information that empowers autistic individuals to understand themselves better and thrive.
                </p>
                
                <div className="mt-8 space-y-6 text-muted-foreground">
                  <h3 className="text-2xl font-medium text-foreground flex items-center space-x-2">
                    <span>✨</span>
                    <span>Our Values</span>
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3 p-4 rounded-lg bg-secondary/20">
                      <span className="text-2xl flex-shrink-0">🌈</span>
                      <div>
                        <p className="font-medium text-foreground">Neurodiversity-Affirming</p>
                        <p className="text-sm">We celebrate autistic traits as differences, not deficits</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-4 rounded-lg bg-secondary/20">
                      <span className="text-2xl flex-shrink-0">♿</span>
                      <div>
                        <p className="font-medium text-foreground">Accessible</p>
                        <p className="text-sm">Clear language, sensory-safe design, and inclusive content</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-4 rounded-lg bg-secondary/20">
                      <span className="text-2xl flex-shrink-0">💝</span>
                      <div>
                        <p className="font-medium text-foreground">Supportive</p>
                        <p className="text-sm">Creating safe, judgment-free spaces for learning and growth</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-4 rounded-lg bg-secondary/20">
                      <span className="text-2xl flex-shrink-0">🔬</span>
                      <div>
                        <p className="font-medium text-foreground">Evidence-Based</p>
                        <p className="text-sm">Grounded in research and lived experiences</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-medium text-foreground mb-4 flex items-center space-x-2">
                    <span>🎨</span>
                    <span>Our Approach</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We design every aspect of this site with neurodiversity in mind — from the calming color palettes and readable fonts to the predictable navigation and sensory-safe interface. We believe that understanding autism should be accessible to everyone, especially autistic girls themselves.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default HomePage;