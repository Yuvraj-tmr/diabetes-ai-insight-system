
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-secondary/5 to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Hero Title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              AI-Powered
              <span className="bg-gradient-medical bg-clip-text text-transparent block">
                Diabetes Risk Prediction
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Advanced Machine Learning for Healthcare: Comparing 7 ML Algorithms with 
              Real-time Risk Assessment and Explainable AI
            </p>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">88.9%</div>
              <div className="text-sm text-muted-foreground">Accuracy with XGBoost</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 shadow-card">
              <div className="text-3xl font-bold text-secondary mb-2">7</div>
              <div className="text-sm text-muted-foreground">Algorithms Compared</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">Real-time</div>
              <div className="text-sm text-muted-foreground">Risk Assessment</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 shadow-card">
              <div className="text-3xl font-bold text-secondary mb-2">Clinical</div>
              <div className="text-sm text-muted-foreground">Validated Features</div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/calculator">
                Try Interactive Demo
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/analysis" className="text-black hover:text-black">
                View Performance Analysis
              </Link>
            </Button>
            <Button variant="medical" size="lg" asChild>
              <Link to="/research">
                Explore Research
              </Link>
            </Button>
          </div>

          {/* Medical Context */}
          <div className="mt-16 max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              This research represents a systematic approach to diabetes risk prediction using 
              state-of-the-art machine learning techniques, combining clinical expertise with 
              advanced AI to create practical tools for healthcare professionals and patients.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;
