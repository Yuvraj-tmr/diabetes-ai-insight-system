
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-medical-ai.jpg";

const HeroSection = () => {
  const stats = [
    { value: "88.9%", label: "Accuracy with XGBoost", highlight: true },
    { value: "7", label: "Algorithms Systematically Compared" },
    { value: "Real-time", label: "Risk Assessment" },
    { value: "Clinically", label: "Validated Features" }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="AI Healthcare Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              AI-Powered Diabetes
              <span className="block text-secondary-light">Risk Prediction</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comparing 7 ML Algorithms with Real-time Risk Assessment and Explainable AI
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className={`p-6 text-center bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 ${stat.highlight ? 'ring-2 ring-secondary-light shadow-glow-success' : ''}`}>
                <div className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm lg:text-base text-primary-foreground/80">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-6 h-auto"
              asChild
            >
              <Link to="/calculator">
                Try Interactive Demo
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 h-auto border-white/30 text-primary-foreground hover:bg-white/10"
              asChild
            >
              <Link to="/analysis">
                View Performance Analysis
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              className="text-lg px-8 py-6 h-auto text-primary-foreground hover:bg-white/10"
              asChild
            >
              <Link to="/research">
                Explore Research
              </Link>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
