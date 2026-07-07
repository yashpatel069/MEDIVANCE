import { Heart, Award, Users, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Compassionate Care",
      description: "We treat every patient with empathy, respect, and personalized attention.",
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Excellence",
      description: "Committed to delivering the highest standards of medical care and service.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Patient-Centered",
      description: "Your health and comfort are at the heart of everything we do.",
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Accessibility",
      description: "Making quality healthcare available and convenient for everyone.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient pt-24 sm:pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 animate-fade-up">
            About Medivance
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up">
            Pioneering smart healthcare management to deliver exceptional patient experiences
            and empower healthcare professionals.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At Medivance, we believe that healthcare should be accessible, efficient, and 
                patient-focused. Our smart hospital management system bridges the gap between 
                patients and healthcare providers, making medical care more accessible than ever.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We leverage modern technology to streamline appointments, manage medical records,
                and ensure seamless communication between all stakeholders in the healthcare journey.
              </p>
            </div>
            <GlassCard className="p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                {[
                  { value: "10+", label: "Years Experience" },
                  { value: "500+", label: "Doctors" },
                  { value: "50K+", label: "Patients Served" },
                  { value: "98%", label: "Satisfaction Rate" },
                ].map((stat, index) => (
                  <div key={index}>
                    <p className="text-3xl font-bold text-primary">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 hero-gradient">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <GlassCard key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
