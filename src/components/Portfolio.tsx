import React from 'react';
import heroImage from '@/assets/hero-editorial.jpg';
import numaCaseImage from '@/assets/numa-case.jpg';
import lexaCaseImage from '@/assets/lexa-case.jpg';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Hidden */}
      {/* Work Projects Section - Hidden */}

      {/* About Section */}
      <section className="editorial-section bg-background">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 xl:gap-10 items-center">
            <div className="editorial-content-width">
              <h2 className="editorial-heading text-foreground mb-6 sm:mb-8 lg:mb-12">
                Turning Ideas Into Reality
              </h2>
              <p className="editorial-body text-muted-foreground mb-6 sm:mb-8 lg:mb-12 max-w-prose break-words whitespace-normal">
                With over a decade of experience in product design and innovation consulting, I specialize in bridging the gap between ambitious ideas and market-ready solutions.
              </p>
              <p className="editorial-body text-muted-foreground mb-6 sm:mb-8 lg:mb-12 max-w-prose break-words whitespace-normal">
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
                src="/lovable-uploads/b9c7a304-f80f-41f2-8cce-84d50bbb9583.png"
                alt="Product development process"
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
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
            <h2 className="editorial-heading text-foreground mb-6 sm:mb-8 lg:mb-12">
              Ready to Start Your Project?
            </h2>
            <p className="editorial-body text-muted-foreground mb-6 sm:mb-8 lg:mb-12 max-w-prose mx-auto break-words whitespace-normal">
              Let's discuss how we can turn your ideas into market-ready solutions through structured experimentation and AI-powered insights.
            </p>
            <a 
              href="mailto:hello@goatpath.com" 
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 sm:px-8 sm:py-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105"
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