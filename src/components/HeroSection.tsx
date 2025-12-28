import { Phone, MessageCircle, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
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
    <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-accent rounded-full mb-6 animate-fade-up">
            <span className="text-accent-foreground flex items-center font-medium text-sm">
              <GraduationCap className="mr-2" />
              <span>Trusted by 1000+ Students</span>
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Quality Coaching for{" "}
            <span className="text-gradient">Real Results</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Helping students prepare for success with clarity, guidance, and personal attention. 
            Join our community of achievers today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button 
              variant="hero" 
              size="xl" 
              onClick={handleCall}
              className="group"
            >
              <Phone className="w-5 h-5 group-hover:animate-pulse" />
              Call Now
            </Button>
            <Button 
              variant="whatsapp" 
              size="xl" 
              onClick={handleWhatsApp}
              className="group"
            >
              <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
              WhatsApp Inquiry
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-8 sm:text-sm text-xs text-muted-foreground animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              <span>Expert Faculty</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              <span>Small Batches</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              <span>Proven Results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
