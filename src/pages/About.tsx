
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              About This Project
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced machine learning research for diabetes risk prediction and healthcare AI
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Project Overview */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary">Project Mission</CardTitle>
                <CardDescription>Advancing healthcare through responsible AI and machine learning</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose prose-sm max-w-none text-muted-foreground">
                  <p className="text-lg mb-4">
                    This project represents a comprehensive effort to systematically compare and evaluate machine learning 
                    algorithms for diabetes risk prediction, combining cutting-edge AI research with practical clinical applications.
                  </p>
                  <p className="mb-4">
                    Our research addresses the critical need for accurate, interpretable, and clinically deployable AI tools 
                    in preventive healthcare. By comparing seven different machine learning approaches, we provide healthcare 
                    professionals with evidence-based recommendations for implementing AI-assisted diabetes screening.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🎯</div>
                    <h3 className="font-semibold text-foreground mb-2">Accuracy</h3>
                    <p className="text-sm text-muted-foreground">88.9% prediction accuracy with XGBoost</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🔬</div>
                    <h3 className="font-semibold text-foreground mb-2">Scientific Rigor</h3>
                    <p className="text-sm text-muted-foreground">Systematic comparison with statistical validation</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🏥</div>
                    <h3 className="font-semibold text-foreground mb-2">Clinical Impact</h3>
                    <p className="text-sm text-muted-foreground">Real-world healthcare applications</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technology Stack */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary">Technology Stack</CardTitle>
                <CardDescription>Modern web technologies and machine learning frameworks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">Frontend Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">React 18</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Tailwind CSS</Badge>
                      <Badge variant="secondary">shadcn/ui</Badge>
                      <Badge variant="secondary">Recharts</Badge>
                      <Badge variant="secondary">Vite</Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">ML & Data Science</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">scikit-learn</Badge>
                      <Badge variant="secondary">XGBoost</Badge>
                      <Badge variant="secondary">LightGBM</Badge>
                      <Badge variant="secondary">Pandas</Badge>
                      <Badge variant="secondary">NumPy</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Research Team */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary">Research Team</CardTitle>
                <CardDescription>Interdisciplinary collaboration between AI researchers and healthcare professionals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">AI Research Team</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <div className="font-medium">Machine Learning Engineers</div>
                        <div className="text-muted-foreground">Algorithm development and optimization</div>
                      </div>
                      <div>
                        <div className="font-medium">Data Scientists</div>
                        <div className="text-muted-foreground">Statistical analysis and validation</div>
                      </div>
                      <div>
                        <div className="font-medium">Software Developers</div>
                        <div className="text-muted-foreground">Web platform and user interface</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">Clinical Advisory Board</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <div className="font-medium">Endocrinologists</div>
                        <div className="text-muted-foreground">Diabetes care and management expertise</div>
                      </div>
                      <div>
                        <div className="font-medium">Primary Care Physicians</div>
                        <div className="text-muted-foreground">Preventive medicine and screening</div>
                      </div>
                      <div>
                        <div className="font-medium">Healthcare Informaticians</div>
                        <div className="text-muted-foreground">Clinical decision support systems</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact & Collaboration */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary">Collaboration & Contact</CardTitle>
                <CardDescription>Get involved in advancing healthcare AI research</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">Research Partnerships</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      We welcome collaborations with healthcare institutions, research organizations, 
                      and technology companies interested in advancing AI applications in preventive medicine.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div>• Clinical validation studies</div>
                      <div>• Multi-institutional data sharing</div>
                      <div>• Technology transfer partnerships</div>
                      <div>• Educational collaborations</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">Open Source Commitment</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Our research code, datasets, and documentation are available under open source licenses 
                      to promote transparency and accelerate healthcare AI development.
                    </p>
                    <div className="flex flex-col gap-2">
                      <Button variant="medical" size="sm">
                        View GitHub Repository
                      </Button>
                      <Button variant="outline" size="sm">
                        Download Research Data
                      </Button>
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

export default About;
