import React from 'react';
import heroImage from '@/assets/hero-editorial.jpg';
import lexaCaseImage from '@/assets/lexa-case.jpg';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="editorial-section bg-black">
        <div className="editorial-container">
          <div className="max-w-4xl">
            {/* Logo */}
            <div className="mb-12">
              <img 
                src="/lovable-uploads/f6615c53-e1f9-45e6-928c-136887dfd867.png" 
                alt="GoatPath Logo" 
                className="w-24 h-24 lg:w-32 lg:h-32 object-contain"
              />
            </div>
            
            {/* Hero Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              Shaping the future of products, one idea at a time.
            </h1>
            
            {/* Hero Description */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl">
              I help product and innovation teams validate business ideas through structured experiments and the support of artificial intelligence. My work reduces uncertainty, delivers evidence, and accelerates smarter decision-making.
            </p>
            
            {/* CTA Button */}
            <div className="flex items-center">
              <a 
                href="https://www.linkedin.com/in/carloscarrascoe/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Let&apos;s collaborate together
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Work Projects Section */}
      <section id="projects" className="editorial-section bg-black py-20 sm:py-24 lg:py-32">
        <div className="editorial-container">
          <div className="editorial-content-width mb-6 sm:mb-8 lg:mb-12">
            <h2 className="editorial-heading text-white mb-6 sm:mb-8 lg:mb-12">
              What We Made Happen
            </h2>
            <p className="editorial-body text-white/80 max-w-prose break-words whitespace-normal">
              Projects I've co-designed with teams and founders to turn ideas into meaningful, testable solutions.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="text-center text-white/60 py-20">
              <p className="text-lg">Portfolio projects coming soon...</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Portfolio;