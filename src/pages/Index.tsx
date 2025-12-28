import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import InquiryModal from "@/components/InquiryModal";
import Footer from "@/components/Footer";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Show inquiry modal after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Success Coaching Institute | Quality Coaching for Real Results</title>
        <meta 
          name="description" 
          content="Join Success Coaching Institute for expert tutoring in Class 9-12, JEE, NEET, CUET preparation, Coding & IELTS. Small batches, experienced faculty, proven results." 
        />
        <meta name="keywords" content="coaching institute, tuition classes, JEE preparation, NEET coaching, CUET, coding classes, IELTS" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar onOpenInquiry={() => setIsModalOpen(true)} />
        
        <main className="pt-16">
          <HeroSection />
          <CoursesSection />
          <WhyChooseUsSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        
        <Footer />
        
        <InquiryModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
    </>
  );
};

export default Index;
