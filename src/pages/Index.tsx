import { Link } from "react-router-dom";
import { Calendar, Users, Stethoscope, Shield, Clock, HeartPulse } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";

const Index = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Easy Scheduling",
      description: "Book appointments with your preferred doctors in just a few clicks.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Expert Doctors",
      description: "Access to qualified healthcare professionals across all specialties.",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Secure Records",
      description: "Your medical records are safely stored and easily accessible.",
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your healthcare needs.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-gradient pt-24 sm:pt-32 pb-16 sm:pb-24 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <HeartPulse className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground/80">Smart Healthcare Solution</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Your Health, Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Priority
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Smarter Healthcare, Faster Response. Book appointments,
              access records, and connect with doctors all in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="btn-warm text-center">
                Get Started
              </Link>
              <Link
                to="/about"
                className="glass-card px-6 py-3 font-medium text-foreground hover:bg-white/50 transition-all duration-300 text-center"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
            {[
              { value: "500+", label: "Doctors" },
              { value: "50K+", label: "Patients" },
              { value: "100+", label: "Departments" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <GlassCard key={index} className="text-center py-6">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose Medivance?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive healthcare solutions designed to make your life easier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <GlassCard key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient py-16 sm:py-24 px-4">
        <div className="container mx-auto">
          <GlassCard className="max-w-3xl mx-auto text-center p-8 sm:p-12">
            <Stethoscope className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of patients who trust Medivance for their healthcare needs.
            </p>
            <Link to="/register" className="btn-warm inline-block">
              Create Your Account
            </Link>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
