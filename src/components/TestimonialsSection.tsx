import { useEffect, useCallback } from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    course: "JEE Advanced",
    text: "The personalized attention I received here was incredible. The faculty helped me improve my rank from 15,000 to under 2,000 in just one year!",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Rahul Verma",
    course: "NEET 2024",
    text: "Small batch sizes made all the difference. I could ask questions freely and clear every doubt. Secured 650+ in NEET thanks to this institute!",
    rating: 5,
    avatar: "RV",
  },
  {
    name: "Anjali Gupta",
    course: "Class 12 Science",
    text: "The teachers genuinely care about each student. Regular tests and detailed feedback helped me score 95% in boards. Highly recommended!",
    rating: 5,
    avatar: "AG",
  },
  {
    name: "Vikram Singh",
    course: "Coding Classes",
    text: "Excellent coding curriculum with hands-on projects. I learned Python and web development which helped me land a great internship!",
    rating: 5,
    avatar: "VS",
  },
];

const TestimonialsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="testimonials" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-accent rounded-full text-accent-foreground text-sm font-medium mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our <span className="text-gradient">Students Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it — hear from students who achieved their dreams with us.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
                <Card className="h-full border-0 card-shadow bg-background">
                  <CardContent className="p-6 relative">
                    <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
                    
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  current === index ? "bg-primary w-8" : "bg-primary/30"
                }`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
