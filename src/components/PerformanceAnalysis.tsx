import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

interface AlgorithmMetrics {
  name: string;
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  aucRoc: number;
  trainingTime: number; // in seconds
  isTopPerformer?: boolean;
}

const PerformanceAnalysis = () => {
  const [sortBy, setSortBy] = useState<keyof AlgorithmMetrics>('accuracy');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const algorithms: AlgorithmMetrics[] = [
    {
      name: 'XGBoost',
      accuracy: 88.9,
      precision: 87.2,
      recall: 85.6,
      f1Score: 86.4,
      aucRoc: 91.3,
      trainingTime: 2.3,
      isTopPerformer: true
    },
    {
      name: 'LightGBM',
      accuracy: 87.8,
      precision: 86.1,
      recall: 84.9,
      f1Score: 85.5,
      aucRoc: 90.7,
      trainingTime: 1.8,
      isTopPerformer: true
    },
    {
      name: 'Random Forest',
      accuracy: 85.4,
      precision: 83.7,
      recall: 82.1,
      f1Score: 82.9,
      aucRoc: 88.9,
      trainingTime: 3.1
    },
    {
      name: 'Gradient Boosting',
      accuracy: 84.7,
      precision: 82.9,
      recall: 81.5,
      f1Score: 82.2,
      aucRoc: 87.8,
      trainingTime: 4.7
    },
    {
      name: 'SVM',
      accuracy: 82.3,
      precision: 80.1,
      recall: 79.2,
      f1Score: 79.6,
      aucRoc: 85.4,
      trainingTime: 5.2
    },
    {
      name: 'Logistic Regression',
      accuracy: 79.8,
      precision: 77.4,
      recall: 76.8,
      f1Score: 77.1,
      aucRoc: 82.7,
      trainingTime: 0.5
    },
    {
      name: 'Decision Tree',
      accuracy: 76.2,
      precision: 74.1,
      recall: 73.6,
      f1Score: 73.8,
      aucRoc: 79.3,
      trainingTime: 0.3
    }
  ];

  const sortedAlgorithms = [...algorithms].sort((a, b) => {
    const aValue = Number(a[sortBy]);
    const bValue = Number(b[sortBy]);
    if (sortOrder === 'desc') {
      return bValue - aValue;
    }
    return aValue - bValue;
  });

  const handleSort = (metric: keyof AlgorithmMetrics) => {
    if (sortBy === metric) {
      setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
    } else {
      setSortBy(metric);
      setSortOrder('desc');
    }
  };

  const getMetricColor = (value: number, metric: keyof AlgorithmMetrics) => {
    const ranges = {
      accuracy: { excellent: 85, good: 80 },
      precision: { excellent: 85, good: 80 },
      recall: { excellent: 80, good: 75 },
      f1Score: { excellent: 82, good: 77 },
      aucRoc: { excellent: 88, good: 83 },
      trainingTime: { excellent: 2, good: 4, reverse: true }
    };

    const range = ranges[metric as keyof typeof ranges];
    if (!range) return 'text-foreground';

    const isReverse = 'reverse' in range && range.reverse;
    
    if (isReverse) {
      if (value <= range.excellent) return 'text-secondary';
      if (value <= range.good) return 'text-warning';
      return 'text-destructive';
    } else {
      if (value >= range.excellent) return 'text-secondary';
      if (value >= range.good) return 'text-warning';
      return 'text-destructive';
    }
  };

  const featureImportance = [
    { feature: 'Glucose Level', importance: 0.28 },
    { feature: 'BMI', importance: 0.19 },
    { feature: 'Age', importance: 0.16 },
    { feature: 'Diabetes Pedigree', importance: 0.13 },
    { feature: 'Blood Pressure', importance: 0.11 },
    { feature: 'Insulin Level', importance: 0.08 },
    { feature: 'Pregnancies', importance: 0.03 },
    { feature: 'Skin Thickness', importance: 0.02 }
  ];

  return (
    <section id="performance-analysis" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Comprehensive Performance Analysis
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Systematic comparison of 7 machine learning algorithms with detailed metrics and insights
          </p>
        </div>

        <Tabs defaultValue="comparison" className="max-w-7xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="comparison">Algorithm Comparison</TabsTrigger>
            <TabsTrigger value="features">Feature Importance</TabsTrigger>
            <TabsTrigger value="methodology">Methodology</TabsTrigger>
          </TabsList>

          <TabsContent value="comparison" className="space-y-6">
            {/* Performance Metrics Table */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary flex items-center justify-between">
                  Performance Metrics Comparison
                  <Badge variant="secondary" className="text-sm">
                    Click columns to sort
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Comprehensive evaluation across key machine learning metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Algorithm</th>
                        {(['accuracy', 'precision', 'recall', 'f1Score', 'aucRoc', 'trainingTime'] as const).map((metric) => (
                          <th 
                            key={metric}
                            className="text-center py-3 px-4 font-semibold cursor-pointer hover:bg-muted/50 transition-colors"
                            onClick={() => handleSort(metric)}
                          >
                            <div className="flex items-center justify-center gap-1">
                              {metric === 'accuracy' && 'Accuracy (%)'}
                              {metric === 'precision' && 'Precision (%)'}
                              {metric === 'recall' && 'Recall (%)'}
                              {metric === 'f1Score' && 'F1-Score (%)'}
                              {metric === 'aucRoc' && 'AUC-ROC (%)'}
                              {metric === 'trainingTime' && 'Time (s)'}
                              {sortBy === metric && (
                                <span className="text-primary">
                                  {sortOrder === 'desc' ? '↓' : '↑'}
                                </span>
                              )}
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {sortedAlgorithms.map((algo, index) => (
                        <tr key={algo.name} className={`border-b hover:bg-muted/30 transition-colors ${algo.isTopPerformer ? 'bg-secondary/10' : ''}`}>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{algo.name}</span>
                              {algo.isTopPerformer && (
                                <Badge variant="secondary" className="text-xs">
                                  Top Performer
                                </Badge>
                              )}
                            </div>
                          </td>
                          <td className={`text-center py-4 px-4 font-mono ${getMetricColor(algo.accuracy, 'accuracy')}`}>
                            {algo.accuracy.toFixed(1)}
                          </td>
                          <td className={`text-center py-4 px-4 font-mono ${getMetricColor(algo.precision, 'precision')}`}>
                            {algo.precision.toFixed(1)}
                          </td>
                          <td className={`text-center py-4 px-4 font-mono ${getMetricColor(algo.recall, 'recall')}`}>
                            {algo.recall.toFixed(1)}
                          </td>
                          <td className={`text-center py-4 px-4 font-mono ${getMetricColor(algo.f1Score, 'f1Score')}`}>
                            {algo.f1Score.toFixed(1)}
                          </td>
                          <td className={`text-center py-4 px-4 font-mono ${getMetricColor(algo.aucRoc, 'aucRoc')}`}>
                            {algo.aucRoc.toFixed(1)}
                          </td>
                          <td className={`text-center py-4 px-4 font-mono ${getMetricColor(algo.trainingTime, 'trainingTime')}`}>
                            {algo.trainingTime.toFixed(1)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Top Performers Highlight */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-success border-secondary/20">
                <CardHeader>
                  <CardTitle className="text-secondary flex items-center gap-2">
                    🏆 Best Overall: XGBoost
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Accuracy</span>
                      <Badge variant="secondary">88.9%</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>AUC-ROC</span>
                      <Badge variant="secondary">91.3%</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Exceptional balance of accuracy and robustness. Best choice for clinical deployment.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-success border-secondary/20">
                <CardHeader>
                  <CardTitle className="text-secondary flex items-center gap-2">
                    ⚡ Fastest: Decision Tree
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Training Time</span>
                      <Badge variant="secondary">0.3s</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Interpretability</span>
                      <Badge variant="secondary">Highest</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Excellent for quick screening and educational purposes with clear decision paths.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="features" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary">Global Feature Importance</CardTitle>
                <CardDescription>
                  Average importance rankings across tree-based models (XGBoost, LightGBM, Random Forest)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {featureImportance.map((feature, index) => (
                    <div key={feature.feature} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{feature.feature}</span>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="font-mono">
                            {(feature.importance * 100).toFixed(1)}%
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            #{index + 1}
                          </span>
                        </div>
                      </div>
                      <Progress value={feature.importance * 100} className="h-3" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-primary text-lg">Clinical Insights</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p><strong>Glucose Level:</strong> Primary indicator, aligns with clinical diabetes diagnosis criteria.</p>
                  <p><strong>BMI:</strong> Strong predictor, supports lifestyle intervention importance.</p>
                  <p><strong>Age:</strong> Significant factor, confirms age-related diabetes risk increase.</p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-primary text-lg">Actionable Factors</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p><strong>Modifiable:</strong> BMI, Blood Pressure, Insulin levels through lifestyle changes.</p>
                  <p><strong>Genetic:</strong> Diabetes Pedigree factor guides family screening recommendations.</p>
                  <p><strong>Monitoring:</strong> Regular glucose and BP checks for high-risk individuals.</p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-primary text-lg">Prevention Focus</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p><strong>Weight Management:</strong> BMI optimization reduces risk significantly.</p>
                  <p><strong>Regular Screening:</strong> Early glucose monitoring for at-risk populations.</p>
                  <p><strong>Lifestyle Changes:</strong> Diet and exercise impact multiple risk factors.</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="methodology" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-primary">Dataset Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-secondary">768</div>
                      <div className="text-sm text-muted-foreground">Total Samples</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">8</div>
                      <div className="text-sm text-muted-foreground">Features</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">34.9%</div>
                      <div className="text-sm text-muted-foreground">Positive Cases</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">5-Fold</div>
                      <div className="text-sm text-muted-foreground">Cross Validation</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-primary">Evaluation Protocol</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">✓</Badge>
                    <span className="text-sm">Stratified K-Fold Cross-Validation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">✓</Badge>
                    <span className="text-sm">Hyperparameter Optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">✓</Badge>
                    <span className="text-sm">Statistical Significance Testing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">✓</Badge>
                    <span className="text-sm">Data Preprocessing & Scaling</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary">Research Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none text-muted-foreground">
                  <p className="mb-4">
                    This comprehensive study aims to systematically compare machine learning algorithms for diabetes risk prediction, 
                    providing evidence-based recommendations for clinical implementation.
                  </p>
                  <h4 className="font-semibold text-foreground mb-2">Key Research Questions:</h4>
                  <ul className="space-y-1 mb-4">
                    <li>Which ML algorithm provides the best balance of accuracy and interpretability?</li>
                    <li>How do ensemble methods compare to traditional statistical approaches?</li>
                    <li>What are the most important clinical features for diabetes risk prediction?</li>
                    <li>How can these models be responsibly deployed in healthcare settings?</li>
                  </ul>
                  <h4 className="font-semibold text-foreground mb-2">Clinical Impact:</h4>
                  <p>
                    The results support the deployment of XGBoost-based screening tools in primary care settings, 
                    with LightGBM as a viable alternative for resource-constrained environments. The feature importance 
                    analysis validates current clinical guidelines while providing data-driven insights for prevention strategies.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PerformanceAnalysis;