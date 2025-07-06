import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface RiskFactors {
  pregnancies: number;
  glucose: number;
  bloodPressure: number;
  skinThickness: number;
  insulin: number;
  bmi: number;
  diabetesPedigree: number;
  age: number;
}

interface AlgorithmPrediction {
  name: string;
  probability: number;
  confidence: number;
}

const RiskCalculator = () => {
  const [factors, setFactors] = useState<RiskFactors>({
    pregnancies: 1,
    glucose: 120,
    bloodPressure: 80,
    skinThickness: 25,
    insulin: 150,
    bmi: 25,
    diabetesPedigree: 0.5,
    age: 35
  });

  const [predictions, setPredictions] = useState<AlgorithmPrediction[]>([]);
  const [mainRisk, setMainRisk] = useState(0);
  const [riskLevel, setRiskLevel] = useState('Low');

  // Simulate ML predictions based on risk factors
  useEffect(() => {
    const calculateRisk = () => {
      // Simplified risk calculation (in real app, this would call actual ML models)
      const glucoseScore = factors.glucose > 140 ? 0.3 : factors.glucose > 110 ? 0.15 : 0;
      const bmiScore = factors.bmi > 30 ? 0.25 : factors.bmi > 25 ? 0.1 : 0;
      const ageScore = factors.age > 45 ? 0.2 : factors.age > 35 ? 0.1 : 0;
      const bpScore = factors.bloodPressure > 90 ? 0.15 : 0;
      const pedigreeScore = factors.diabetesPedigree > 1.0 ? 0.1 : 0;
      
      const baseRisk = (glucoseScore + bmiScore + ageScore + bpScore + pedigreeScore) * 100;
      
      // Add some variability for different algorithms
      const algorithmPredictions = [
        { name: 'XGBoost', probability: Math.min(95, baseRisk + Math.random() * 10 - 5), confidence: 0.92 },
        { name: 'LightGBM', probability: Math.min(95, baseRisk + Math.random() * 8 - 4), confidence: 0.89 },
        { name: 'Random Forest', probability: Math.min(95, baseRisk + Math.random() * 12 - 6), confidence: 0.85 },
        { name: 'Gradient Boosting', probability: Math.min(95, baseRisk + Math.random() * 10 - 5), confidence: 0.87 },
        { name: 'SVM', probability: Math.min(95, baseRisk + Math.random() * 15 - 7), confidence: 0.81 },
        { name: 'Logistic Regression', probability: Math.min(95, baseRisk + Math.random() * 12 - 6), confidence: 0.79 },
        { name: 'Decision Tree', probability: Math.min(95, baseRisk + Math.random() * 18 - 9), confidence: 0.75 }
      ];

      setPredictions(algorithmPredictions);
      
      const avgRisk = algorithmPredictions.reduce((sum, pred) => sum + pred.probability, 0) / algorithmPredictions.length;
      setMainRisk(Math.round(avgRisk));
      
      if (avgRisk < 30) setRiskLevel('Low');
      else if (avgRisk < 60) setRiskLevel('Moderate');
      else setRiskLevel('High');
    };

    calculateRisk();
  }, [factors]);

  const updateFactor = (key: keyof RiskFactors, value: number[]) => {
    setFactors(prev => ({ ...prev, [key]: value[0] }));
  };

  const getRiskColor = () => {
    if (riskLevel === 'Low') return 'bg-gradient-risk-low';
    if (riskLevel === 'Moderate') return 'bg-gradient-risk-moderate';
    return 'bg-gradient-risk-high';
  };

  const getRiskBadgeVariant = () => {
    if (riskLevel === 'Low') return 'secondary';
    if (riskLevel === 'Moderate') return 'warning';
    return 'destructive';
  };

  const parameterDefinitions = [
    { key: 'pregnancies', label: 'Pregnancies', min: 0, max: 17, step: 1, unit: '', description: 'Number of times pregnant' },
    { key: 'glucose', label: 'Glucose Level', min: 70, max: 200, step: 1, unit: 'mg/dL', description: 'Plasma glucose concentration' },
    { key: 'bloodPressure', label: 'Blood Pressure', min: 50, max: 120, step: 1, unit: 'mmHg', description: 'Diastolic blood pressure' },
    { key: 'skinThickness', label: 'Skin Thickness', min: 10, max: 60, step: 1, unit: 'mm', description: 'Triceps skin fold thickness' },
    { key: 'insulin', label: 'Insulin Level', min: 0, max: 800, step: 10, unit: 'μU/mL', description: '2-Hour serum insulin' },
    { key: 'bmi', label: 'BMI', min: 15, max: 50, step: 0.1, unit: 'kg/m²', description: 'Body mass index' },
    { key: 'diabetesPedigree', label: 'Diabetes Pedigree', min: 0.05, max: 2.5, step: 0.01, unit: '', description: 'Genetic diabetes likelihood' },
    { key: 'age', label: 'Age', min: 20, max: 80, step: 1, unit: 'years', description: 'Age in years' }
  ];

  return (
    <section id="risk-calculator" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Interactive Diabetes Risk Calculator
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Adjust the clinical parameters below to see real-time risk predictions from 7 different ML algorithms
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Input Controls */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary">Clinical Parameters</CardTitle>
                <CardDescription>Adjust the values to see how they affect diabetes risk</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {parameterDefinitions.map((param) => (
                  <div key={param.key} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium text-foreground">
                        {param.label}
                      </label>
                      <Badge variant="outline" className="font-mono">
                        {factors[param.key as keyof RiskFactors]} {param.unit}
                      </Badge>
                    </div>
                    <Slider
                      value={[factors[param.key as keyof RiskFactors]]}
                      onValueChange={(value) => updateFactor(param.key as keyof RiskFactors, value)}
                      min={param.min}
                      max={param.max}
                      step={param.step}
                      className="w-full"
                    />
                    <p className="text-xs text-muted-foreground">{param.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Results Display */}
          <div className="space-y-6">
            {/* Main Risk Display */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary">Risk Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <div className={`w-32 h-32 mx-auto rounded-full ${getRiskColor()} flex items-center justify-center shadow-medical`}>
                    <div className="text-3xl font-bold text-white">
                      {mainRisk}%
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Badge variant={getRiskBadgeVariant() as any} className="text-lg px-4 py-2">
                      {riskLevel} Risk
                    </Badge>
                    <p className="text-muted-foreground">
                      Average prediction across all algorithms
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Algorithm Predictions */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary">Algorithm Comparison</CardTitle>
                <CardDescription>Individual predictions from each ML model</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {predictions.map((pred) => (
                  <div key={pred.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{pred.name}</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="font-mono">
                          {Math.round(pred.probability)}%
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          ({Math.round(pred.confidence * 100)}% confident)
                        </span>
                      </div>
                    </div>
                    <Progress value={pred.probability} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskCalculator;