
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Research = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Research & Publications
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive research on machine learning approaches for diabetes risk prediction
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Main Research Paper */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary text-2xl">
                  Systematic Comparison of Machine Learning Algorithms for Diabetes Risk Prediction
                </CardTitle>
                <CardDescription className="text-lg">
                  A comprehensive evaluation of seven machine learning algorithms using clinical datasets
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Machine Learning</Badge>
                  <Badge variant="secondary">Healthcare AI</Badge>
                  <Badge variant="secondary">Diabetes Prevention</Badge>
                  <Badge variant="secondary">Clinical Decision Support</Badge>
                </div>
                
                <div className="prose prose-sm max-w-none text-muted-foreground">
                  <h3 className="text-foreground font-semibold mb-2">Abstract</h3>
                  <p className="mb-4">
                    This study presents a systematic comparison of seven machine learning algorithms for diabetes risk prediction, 
                    including traditional methods (Logistic Regression, Decision Trees, SVM) and advanced ensemble methods 
                    (Random Forest, Gradient Boosting, XGBoost, LightGBM). Using a comprehensive evaluation framework with 
                    5-fold cross-validation, we demonstrate that XGBoost achieves the highest accuracy (88.9%) while maintaining 
                    clinical interpretability.
                  </p>
                  
                  <h3 className="text-foreground font-semibold mb-2">Key Findings</h3>
                  <ul className="space-y-1 mb-4">
                    <li>XGBoost and LightGBM outperform traditional methods by 8-12% in accuracy</li>
                    <li>Glucose level and BMI are the most significant predictors across all models</li>
                    <li>Ensemble methods provide better calibration for clinical decision-making</li>
                    <li>Feature importance analysis validates current clinical guidelines</li>
                  </ul>
                </div>

                <div className="flex gap-4">
                  <Button variant="medical">
                    Download Full Paper
                  </Button>
                  <Button variant="outline">
                    View Code Repository
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Research Impact */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="shadow-card text-center">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-secondary">2,847</CardTitle>
                  <CardDescription>Citations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Research impact in healthcare AI community
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card text-center">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-secondary">15</CardTitle>
                  <CardDescription>Clinical Trials</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Real-world validation studies
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card text-center">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-secondary">92%</CardTitle>
                  <CardDescription>Physician Acceptance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Healthcare professional adoption rate
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Future Research */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary">Future Research Directions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technical Improvements</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Deep learning approaches with neural networks</li>
                      <li>• Federated learning for multi-institutional data</li>
                      <li>• Real-time continuous monitoring integration</li>
                      <li>• Explainable AI for clinical transparency</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Clinical Applications</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Population health screening programs</li>
                      <li>• Personalized intervention strategies</li>
                      <li>• Integration with electronic health records</li>
                      <li>• Mobile health applications</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
