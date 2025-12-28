import { BookOpen, Atom, Target, Code } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const courses = [
  {
    icon: BookOpen,
    title: "Class 9–10 Tuition",
    description: "Build strong foundations in all subjects with our comprehensive coaching program designed for board exam excellence.",
    features: ["All Subjects", "Board Exam Focus", "Weekly Tests", "Doubt Sessions"],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Atom,
    title: "Class 11–12 Science",
    description: "Master Physics, Chemistry, Mathematics & Biology with expert guidance for board exams and competitive entrance tests.",
    features: ["PCM / PCB Streams", "Lab Practicals", "Board + Entrance", "Study Material"],
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Target,
    title: "Competitive Exam Prep",
    description: "Intensive preparation for NEET, JEE Main/Advanced, and CUET with proven strategies and extensive practice.",
    features: ["NEET / JEE / CUET", "Mock Tests", "Previous Year Papers", "Rank Improvement"],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Code,
    title: "Coding & IELTS",
    description: "Future-ready skills with programming fundamentals and English proficiency training for global opportunities.",
    features: ["Python / Java / Web", "IELTS Coaching", "Flexible Timings", "Project-Based"],
    color: "bg-secondary/10 text-secondary",
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-accent rounded-full text-accent-foreground text-sm font-medium mb-4">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Courses We <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive coaching programs designed to help students excel at every level of their academic journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <Card 
              key={index} 
              className="group card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2 border-0 bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 rounded-xl ${course.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <course.icon className="w-7 h-7" />
                </div>
                <CardTitle className="text-xl text-foreground">{course.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
