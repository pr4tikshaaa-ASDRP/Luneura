import { Mail, Heart, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";

const ContactPage = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-b from-secondary/30 to-background py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center border-4 border-primary/30">
              <Mail className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium text-foreground">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* About Section */}
          <Card className="border-2">
            <CardContent className="p-8 space-y-4 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/30">
                  <Heart className="w-10 h-10 text-primary" />
                </div>
              </div>
              <h2 className="text-2xl font-medium text-foreground">
                Luneura
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are dedicated to creating neurodiversity-friendly resources for special girls and their families. Our mission is to provide clear, accessible, and compassionate information that empowers individuals to understand themselves better and thrive.
              </p>
            </CardContent>
          </Card>

          {/* Email Contact */}
          <Card className="border-2">
            <CardContent className="p-8 space-y-6 text-center">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-foreground">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground">
                  Have questions, feedback, or suggestions? We'd love to hear from you!
                </p>
                <a
                  href="mailto:luneuragirls@gmail.com"
                  className="inline-block text-primary hover:underline text-lg font-medium"
                >
                  luneuragirls@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card className="border-2 border-primary/30 bg-primary/5">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-foreground leading-relaxed">
                  <strong>Important Note:</strong> Luneura is an educational and support resource. We are not medical professionals and do not provide medical advice or diagnoses. For medical concerns, please consult with qualified healthcare providers.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;