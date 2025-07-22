import React from 'react';
import ImageSwitcher from './ImageSwitcher';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface FocusArea {
  title: string;
  description: string;
}

interface KeyFeature {
  title: string;
  description: string;
}

interface Metric {
  name: string;
  before: string;
  after: string;
}

interface Tool {
  area: string;
  tools: string[];
}

interface ProjectTemplateProps {
  // Hero
  projectName: string;
  role: string;
  tagline: string;
  heroImages: string[];

  // Context
  contextDescription: string;
  problemStatement: string;
  whyImportant: string;
  contextImages?: string[];

  // Approach
  approachDescription: string;
  methodology: string;
  focusAreas: FocusArea[];
  approachImages?: string[];

  // Solution
  solutionDescription: string;
  keyCharacteristics: string;
  interfaceTone: string;
  keyFeatures: KeyFeature[];
  solutionImages?: string[];

  // Impact
  impactDescription?: string;
  metrics: Metric[];
  impactImages?: string[];

  // Learnings
  whatWorked: string;
  whatLearned: string;
  whatWouldDoDifferent: string;

  // Credits & Tools
  tools: Tool[];

  // CTA
  ctaText: string;
  ctaLink: string;
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({
  projectName,
  role,
  tagline,
  heroImages,
  contextDescription,
  problemStatement,
  whyImportant,
  contextImages = [],
  approachDescription,
  methodology,
  focusAreas,
  approachImages = [],
  solutionDescription,
  keyCharacteristics,
  interfaceTone,
  keyFeatures,
  solutionImages = [],
  impactDescription,
  metrics,
  impactImages = [],
  whatWorked,
  whatLearned,
  whatWouldDoDifferent,
  tools,
  ctaText,
  ctaLink
}) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-black editorial-section">
        <div className="editorial-container">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <Badge variant="outline" className="text-white border-white/20 bg-white/10">
                {role}
              </Badge>
            </div>
            <h1 className="text-xl font-light text-white leading-tight mb-4">
              {projectName}
            </h1>
            <p className="text-6xl text-gray-300 leading-tight mb-12">
              {tagline}
            </p>
            
            {/* Metadata grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
              <div>
                <p className="text-gray-500 uppercase tracking-wide font-medium mb-2">TIMELINE</p>
                <p className="text-gray-900">2024—Present</p>
              </div>
              {/* etc... */}
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      {heroImages.length > 0 && (
        <section className="editorial-section bg-background">
          <div className="editorial-container">
            <ImageSwitcher images={heroImages} className="max-w-4xl mx-auto" />
          </div>
        </section>
      )}

      {/* ✨ Context Section */}
      <section className="editorial-section bg-background">
        <div className="editorial-container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">✨</span>
              <h2 className="editorial-heading text-foreground">Context</h2>
            </div>
            
            <div className="space-y-6 mb-8">
              <p className="editorial-body text-foreground leading-relaxed">
                {contextDescription}
              </p>
              <p className="editorial-body text-muted-foreground leading-relaxed">
                <strong>The Problem:</strong> {problemStatement}
              </p>
              <p className="editorial-body text-muted-foreground leading-relaxed">
                <strong>Why it mattered:</strong> {whyImportant}
              </p>
            </div>

            {contextImages.length > 0 && (
              <ImageSwitcher images={contextImages} />
            )}
          </div>
        </div>
      </section>

      {/* 🧭 Approach Section */}
      <section className="editorial-section bg-muted/30">
        <div className="editorial-container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">🧭</span>
              <h2 className="editorial-heading text-foreground">Approach</h2>
            </div>
            
            <div className="space-y-6 mb-8">
              <p className="editorial-body text-foreground leading-relaxed">
                {approachDescription}
              </p>
              <p className="editorial-body text-muted-foreground leading-relaxed">
                {methodology}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="editorial-subheading text-foreground mb-6">My Focus Areas</h3>
              <div className="grid gap-4">
                {focusAreas.map((area, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{area.title}</h4>
                      <p className="text-muted-foreground text-sm">{area.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {approachImages.length > 0 && (
              <ImageSwitcher images={approachImages} />
            )}
          </div>
        </div>
      </section>

      {/* 🚀 Solution Section */}
      <section className="editorial-section bg-background">
        <div className="editorial-container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">🚀</span>
              <h2 className="editorial-heading text-foreground">Solution</h2>
            </div>
            
            <div className="space-y-6 mb-8">
              <p className="editorial-body text-foreground leading-relaxed">
                {solutionDescription}
              </p>
              <p className="editorial-body text-muted-foreground leading-relaxed">
                {keyCharacteristics}
              </p>
              <p className="editorial-body text-muted-foreground leading-relaxed">
                {interfaceTone}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="editorial-subheading text-foreground mb-6">Key Features</h3>
              <div className="grid gap-4">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {solutionImages.length > 0 && (
              <ImageSwitcher images={solutionImages} />
            )}
          </div>
        </div>
      </section>

      {/* 📊 Impact Section */}
      <section className="editorial-section bg-muted/30">
        <div className="editorial-container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">📊</span>
              <h2 className="editorial-heading text-foreground">Impact</h2>
            </div>
            
            {impactDescription && (
              <p className="editorial-body text-foreground leading-relaxed mb-8">
                {impactDescription}
              </p>
            )}

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-2 font-semibold text-foreground">Metric</th>
                    <th className="text-left py-4 px-2 font-semibold text-foreground">Before</th>
                    <th className="text-left py-4 px-2 font-semibold text-foreground">After</th>
                  </tr>
                </thead>
                <tbody>
                  {metrics.map((metric, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-4 px-2 text-foreground">{metric.name}</td>
                      <td className="py-4 px-2 text-muted-foreground">{metric.before}</td>
                      <td className="py-4 px-2 text-primary font-semibold">{metric.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {impactImages.length > 0 && (
              <ImageSwitcher images={impactImages} />
            )}
          </div>
        </div>
      </section>

      {/* 💡 Learnings Section */}
      <section className="editorial-section bg-background">
        <div className="editorial-container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">💡</span>
              <h2 className="editorial-heading text-foreground">Learnings</h2>
            </div>
            
            <div className="space-y-4">
              <p className="editorial-body text-foreground leading-relaxed">
                <strong>What worked well:</strong> {whatWorked}
              </p>
              <p className="editorial-body text-foreground leading-relaxed">
                <strong>What I learned:</strong> {whatLearned}
              </p>
              <p className="editorial-body text-foreground leading-relaxed">
                <strong>What I'd do differently:</strong> {whatWouldDoDifferent}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🛠️ Credits & Tools Section */}
      <section className="editorial-section bg-muted/30">
        <div className="editorial-container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">🛠️</span>
              <h2 className="editorial-heading text-foreground">Credits & Tools</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-2 font-semibold text-foreground">Area</th>
                    <th className="text-left py-4 px-2 font-semibold text-foreground">Tools</th>
                  </tr>
                </thead>
                <tbody>
                  {tools.map((tool, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-4 px-2 text-foreground font-medium">{tool.area}</td>
                      <td className="py-4 px-2 text-muted-foreground">{tool.tools.join(', ')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 🤝 CTA Final Section */}
      <section className="editorial-section bg-primary/5">
        <div className="editorial-container text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="text-2xl">🤝</span>
              <h2 className="editorial-heading text-foreground">Let's Work Together</h2>
            </div>
            
            <p className="editorial-body text-muted-foreground mb-8">
              {ctaText}
            </p>
            
            <a 
              href={ctaLink}
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectTemplate;