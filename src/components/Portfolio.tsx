import React from 'react';
import heroImage from '@/assets/hero-editorial.jpg';
import numaCaseImage from '@/assets/numa-case.jpg';
import lexaCaseImage from '@/assets/lexa-case.jpg';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="editorial-hero bg-black">
        <div className="editorial-container h-screen min-h-[600px] max-h-[900px] flex items-center">
          <div className="editorial-content-width">
            <div className="flex justify-start mb-6 sm:mb-8 lg:mb-12">
              <img 
                src="/lovable-uploads/f6615c53-e1f9-45e6-928c-136887dfd867.png" 
                alt="GoatPath Logo" 
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-[120px] lg:h-[120px] object-contain"
              />
            </div>
            <h1 className="editorial-hero-title text-white mb-6 sm:mb-8">
              Shaping the future of products, one idea at a time.
            </h1>
            <p className="editorial-body text-slate-50 mb-8 sm:mb-10 lg:mb-12 max-w-3xl">
              I help product and innovation teams validate business ideas through structured experiments and the support of artificial intelligence.
              My work reduces uncertainty, delivers evidence, and accelerates smarter decision-making.
            </p>
            <div className="flex items-center justify-start">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
              >
                Let's collaborate together
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Work Projects Section */}
      <section id="projects" className="editorial-section bg-black py-20 sm:py-24 lg:py-32">
        <div className="editorial-container">
          <div className="editorial-content-width mb-12 sm:mb-16 lg:mb-20">
            <h2 className="editorial-heading text-white mb-4 sm:mb-6">
              What We Made Happen
            </h2>
            <p className="editorial-body text-white/80 max-w-2xl">
              Projects I've co-designed with teams and founders to turn ideas into meaningful, testable solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                id: 1,
                title: 'NUMA AI Assistant',
                slug: 'numa-project',
                description: 'AI-powered invoicing assistant for CFDI compliance. Built conversational flow for WhatsApp-based invoice creation in under 30 seconds.',
                image: numaCaseImage,
                category: 'AI & Automation'
              },
              {
                id: 2,
                title: 'Lexa Platform',
                slug: 'lexa-project',
                description: 'Legal tech platform streamlining document processing. Reduced processing time by 75% through intelligent automation.',
                image: lexaCaseImage,
                category: 'Legal Tech'
              },
              {
                id: 3,
                title: 'Innovation Framework',
                slug: 'framework-project',
                description: 'Structured methodology for idea validation. Implemented across 15+ startups with 80% success rate in market fit.',
                image: heroImage,
                category: 'Strategy'
              },
            ].map((project) => (
              <article
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-white hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="editorial-subheading text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="editorial-small text-muted-foreground mb-6">
                    {project.description}
                  </p>
                  <a 
                    href={`/${project.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors duration-200"
                  >
                    View Case Study
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="editorial-section bg-background">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="editorial-content-width">
              <h2 className="editorial-heading text-foreground mb-6">
                Turning Ideas Into Reality
              </h2>
              <p className="editorial-body text-muted-foreground mb-6">
                With over a decade of experience in product design and innovation consulting, I specialize in bridging the gap between ambitious ideas and market-ready solutions.
              </p>
              <p className="editorial-body text-muted-foreground mb-8">
                My approach combines structured experimentation, AI-powered insights, and human-centered design to help teams make smarter decisions faster.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="editorial-small text-foreground">Idea Validation & Market Research</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="editorial-small text-foreground">AI-Powered Product Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="editorial-small text-foreground">Strategic Innovation Consulting</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Product development process"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="editorial-section bg-primary/5">
        <div className="editorial-container text-center">
          <div className="editorial-content-width mx-auto">
            <h2 className="editorial-heading text-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="editorial-body text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can turn your ideas into market-ready solutions through structured experimentation and AI-powered insights.
            </p>
            <a 
              href="mailto:hello@goatpath.com" 
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;