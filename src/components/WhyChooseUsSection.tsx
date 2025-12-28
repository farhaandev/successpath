import { Users, Award, TrendingUp, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Users,
    title: "Experienced Faculty",
    description: "Learn from teachers with 10+ years of experience who understand student needs and exam patterns thoroughly.",
    stat: "10+ Years",
  },
  {
    icon: Award,
    title: "Small Batch Sizes",
    description: "Maximum 15 students per batch ensures personalized attention and better doubt resolution for everyone.",
    stat: "15 Max",
  },
  {
    icon: TrendingUp,
    title: "Proven Student Results",
    description: "95% of our students clear their target exams with distinction. Many secure top ranks every year.",
    stat: "95% Success",
  },
  {
    icon: Heart,
    title: "Personal Attention",
    description: "Individual progress tracking, regular parent updates, and dedicated mentorship for each student.",
    stat: "1-on-1 Care",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="py-20 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-card rounded-full text-foreground text-sm font-medium mb-4 shadow-sm">
            Our Difference
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-gradient">Us?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're not just a coaching center — we're partners in your child's success journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 bg-card card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                
                <div className="text-2xl font-bold text-primary mb-2">{feature.stat}</div>
                
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
