
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Methodology = () => {
  const algorithms = [
    {
      name: "XGBoost",
      type: "Gradient Boosting",
      accuracy: 88.9,
      strengths: ["High accuracy", "Feature importance", "Handles missing values"],
      useCase: "Best overall performance for clinical deployment"
    },
    {
      name: "LightGBM",
      type: "Gradient Boosting",
      accuracy: 87.8,
      strengths: ["Fast training", "Memory efficient", "Good accuracy"],
      useCase: "Resource-constrained environments"
    },
    {
      name: "Random Forest",
      type: "Ensemble",
      accuracy: 85.4,
      strengths: ["Robust", "Less overfitting", "Feature ranking"],
      useCase: "Baseline ensemble method with good interpretability"
    },
    {
      name: "Gradient Boosting",
      type: "Ensemble",
      accuracy: 84.7,
      strengths: ["Sequential learning", "Bias reduction", "Flexible"],
      useCase: "Traditional boosting approach"
    },
    {
      name: "SVM",
      type: "Kernel Method",
      accuracy: 82.3,
      strengths: ["Kernel trick", "Margin maximization", "Robust"],
      useCase: "Non-linear pattern recognition"
    },
    {
      name: "Logistic Regression",
      type: "Linear Model",
      accuracy: 79.8,
      strengths: ["Interpretable", "Fast", "Probabilistic output"],
      useCase: "Clinical baseline and coefficient interpretation"
    },
    {
      name: "Decision Tree",
      type: "Tree-based",
      accuracy: 76.2,
      strengths: ["Highly interpretable", "No preprocessing", "Rule-based"],
      useCase: "Educational purposes and simple decision rules"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Research Methodology
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Systematic approach to comparing machine learning algorithms for diabetes risk prediction
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Experimental Design */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary">Experimental Design</CardTitle>
                <CardDescription>Rigorous scientific approach to algorithm evaluation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">Dataset Characteristics</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Total Samples</span>
                        <Badge variant="outline">768</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Features</span>
                        <Badge variant="outline">8 Clinical Parameters</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Positive Cases</span>
                        <Badge variant="outline">34.9% (268 cases)</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Data Source</span>
                        <Badge variant="outline">Pima Indian Diabetes Database</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">Validation Protocol</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">✓</Badge>
                        <span className="text-sm">5-Fold Stratified Cross-Validation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">✓</Badge>
                        <span className="text-sm">Hyperparameter Grid Search</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">✓</Badge>
                        <span className="text-sm">Statistical Significance Testing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">✓</Badge>
                        <span className="text-sm">Feature Scaling & Preprocessing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Algorithm Details */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary">Algorithm Comparison</CardTitle>
                <CardDescription>Detailed analysis of each machine learning approach</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {algorithms.map((algo, index) => (
                    <div key={algo.name} className="border-l-4 border-primary/20 pl-6 space-y-3">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold text-lg">{algo.name}</h3>
                          <Badge variant="outline">{algo.type}</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">Accuracy:</span>
                          <Badge variant="secondary" className="font-mono">
                            {algo.accuracy}%
                          </Badge>
                        </div>
                      </div>
                      
                      <Progress value={algo.accuracy} className="h-2" />
                      
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-foreground">Key Strengths:</span>
                          <ul className="mt-1 space-y-1 text-muted-foreground">
                            {algo.strengths.map((strength, i) => (
                              <li key={i}>• {strength}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <span className="font-medium text-foreground">Clinical Use Case:</span>
                          <p className="mt-1 text-muted-foreground">{algo.useCase}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Evaluation Metrics */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary">Evaluation Metrics</CardTitle>
                <CardDescription>Comprehensive performance assessment framework</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">Classification Metrics</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <div className="font-medium">Accuracy</div>
                        <div className="text-muted-foreground">Overall correctness of predictions</div>
                      </div>
                      <div>
                        <div className="font-medium">Precision</div>
                        <div className="text-muted-foreground">True positives / (True positives + False positives)</div>
                      </div>
                      <div>
                        <div className="font-medium">Recall (Sensitivity)</div>
                        <div className="text-muted-foreground">True positives / (True positives + False negatives)</div>
                      </div>
                      <div>
                        <div className="font-medium">F1-Score</div>
                        <div className="text-muted-foreground">Harmonic mean of precision and recall</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">Clinical Relevance</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <div className="font-medium">AUC-ROC</div>
                        <div className="text-muted-foreground">Area under receiver operating characteristic curve</div>
                      </div>
                      <div>
                        <div className="font-medium">Training Time</div>
                        <div className="text-muted-foreground">Computational efficiency for clinical deployment</div>
                      </div>
                      <div>
                        <div className="font-medium">Interpretability</div>
                        <div className="text-muted-foreground">Ability to explain predictions to clinicians</div>
                      </div>
                      <div>
                        <div className="font-medium">Robustness</div>
                        <div className="text-muted-foreground">Performance consistency across patient populations</div>
                      </div>
                    </div>
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

export default Methodology;
