
import HeroSection from "@/components/HeroSection";
import RiskCalculator from "@/components/RiskCalculator";
import PerformanceAnalysis from "@/components/PerformanceAnalysis";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <RiskCalculator />
      <PerformanceAnalysis />
      
      {/* Research Section */}
      <section id="research" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8">
            Advanced Machine Learning Research
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed">
              This project represents a systematic approach to diabetes risk prediction using state-of-the-art 
              machine learning techniques. Our research combines clinical expertise with advanced AI to create 
              practical tools for healthcare professionals.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl mb-4">🔬</div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Scientific Rigor</h3>
                <p className="text-muted-foreground">Systematic comparison with statistical validation</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4">🏥</div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Clinical Relevance</h3>
                <p className="text-muted-foreground">Real-world applicability for healthcare settings</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Ethical AI</h3>
                <p className="text-muted-foreground">Transparent, explainable, and responsible AI development</p>
              </div>
            </div>
            <div className="mt-8">
              <Button variant="medical" size="lg" asChild>
                <Link to="/research">
                  Learn More About Our Research
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
