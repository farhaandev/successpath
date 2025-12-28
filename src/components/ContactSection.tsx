import { MapPin, Phone, MessageCircle, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const handleCall = () => {
    window.location.href = "tel:+917380384270";
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/917380384270?text=Hi! I'm interested in your coaching classes.",
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-20 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-card rounded-full text-foreground text-sm font-medium mb-4 shadow-sm">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact & <span className="text-gradient">Location</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visit our center or reach out to us — we're here to help you start your learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-0 card-shadow bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Our Address</h3>
                    <p className="text-muted-foreground">
                      123, Education Lane, Model Town<br />
                      New Delhi - 110001, India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 card-shadow bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Timings</h3>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 8:00 AM - 8:00 PM<br />
                      Sunday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 card-shadow bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                    <p className="text-muted-foreground">
                      info@successcoaching.in<br />
                      admissions@successcoaching.in
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={handleCall}
                className="flex-1"
              >
                <Phone className="w-5 h-5" />
                +91 73803 84270
              </Button>
              <Button 
                variant="whatsapp" 
                size="lg" 
                onClick={handleWhatsApp}
                className="flex-1"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </Button>
            </div>
          </div>

          {/* Google Map */}
          <Card className="border-0 card-shadow overflow-hidden bg-card h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5040893710964!2d77.2090209!3d28.6442757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
