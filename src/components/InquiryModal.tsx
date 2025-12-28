import { useState, useEffect } from "react";
import { X, User, Phone, BookOpen, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const courses = [
  "Class 9–10 Tuition",
  "Class 11–12 Science (PCM)",
  "Class 11–12 Science (PCB)",
  "JEE Main Preparation",
  "JEE Advanced Preparation",
  "NEET Preparation",
  "CUET Preparation",
  "Coding Classes",
  "IELTS Coaching",
  "Other",
];

const InquiryModal = ({ isOpen, onClose }: InquiryModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim() || !formData.course) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to submit your inquiry.",
        variant: "destructive",
      });
      return;
    }

    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid 10-digit phone number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Inquiry Submitted! 🎉",
      description: "We'll call you back within 24 hours. Thank you for your interest!",
    });
    
    setFormData({ name: "", phone: "", course: "" });
    setIsSubmitting(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card rounded-2xl shadow-2xl w-full max-w-md p-6 animate-fade-up">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Send className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Request a Callback
          </h2>
          <p className="text-muted-foreground text-sm">
            Fill in your details and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground font-medium">
              Your Name
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="pl-11 h-12 bg-background border-border focus:border-primary"
                maxLength={100}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground font-medium">
              Phone Number
            </Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="phone"
                type="tel"
                placeholder="Enter 10-digit mobile number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="pl-11 h-12 bg-background border-border focus:border-primary"
                maxLength={10}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="course" className="text-foreground font-medium">
              Course Interested In
            </Label>
            <Select
              value={formData.course}
              onValueChange={(value) => setFormData({ ...formData, course: value })}
            >
              <SelectTrigger className="h-12 bg-background border-border">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-muted-foreground" />
                  <SelectValue placeholder="Select a course" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {courses.map((course) => (
                  <SelectItem key={course} value={course}>
                    {course}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                Submitting...
              </span>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Request Callback
              </>
            )}
          </Button>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-4">
          By submitting, you agree to receive calls regarding our courses.
        </p>
      </div>
    </div>
  );
};

export default InquiryModal;
