import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Users, Zap, Target, MessageCircle, Mail, Linkedin, ExternalLink, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import profileImage from '@/assets/profile-editorial.jpg';
import heroImage from '@/assets/hero-editorial.jpg';
import lexaImage from '@/assets/lexa-case.jpg';
import numaImage from '@/assets/numa-case.jpg';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fixed sections with fade transitions only - no movement
  // Each section fades in/out based on scroll position
  const heroOpacity = scrollY < 300 ? 1 : Math.max(0, 1 - ((scrollY - 300) / 200));
  const workOpacity = scrollY >= 300 && scrollY < 800 ? Math.min(1, (scrollY - 300) / 200) : 
                     scrollY >= 800 ? Math.max(0, 1 - ((scrollY - 800) / 200)) : 0;
  const servicesOpacity = scrollY >= 800 && scrollY < 1300 ? Math.min(1, (scrollY - 800) / 200) : 
                         scrollY >= 1300 ? Math.max(0, 1 - ((scrollY - 1300) / 200)) : 0;
  const methodologyOpacity = scrollY >= 1300 && scrollY < 1800 ? Math.min(1, (scrollY - 1300) / 200) : 
                            scrollY >= 1800 ? Math.max(0, 1 - ((scrollY - 1800) / 200)) : 0;
  const caseStudiesOpacity = scrollY >= 1800 && scrollY < 2300 ? Math.min(1, (scrollY - 1800) / 200) : 
                            scrollY >= 2300 ? Math.max(0, 1 - ((scrollY - 2300) / 200)) : 0;
  const aboutOpacity = scrollY >= 2300 && scrollY < 2800 ? Math.min(1, (scrollY - 2300) / 200) : 
                      scrollY >= 2800 ? Math.max(0, 1 - ((scrollY - 2800) / 200)) : 0;
  const contactOpacity = scrollY >= 2800 ? Math.min(1, (scrollY - 2800) / 200) : 0;

  return (
    <div className="relative">
      {/* Scroll content for height */}
      <div className="h-[3500px]"></div>

      {/* Hero Section */}
      <section 
        className="fixed inset-0 bg-black h-svh z-10 transition-opacity duration-700 ease-out"
        style={{ opacity: heroOpacity }}
      >
        <div className="mx-auto max-w-7xl px-6 h-full flex items-center lg:px-8">
          <div 
            className={`max-w-4xl transition-opacity duration-1000 ease-out ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex justify-start mb-8">
              <img 
                src="/lovable-uploads/f6615c53-e1f9-45e6-928c-136887dfd867.png" 
                alt="GoatPath Logo" 
                className="w-[120px] h-[120px]"
              />
            </div>
            <h1 className="text-pretty text-5xl font-semibold tracking-tight text-white text-left sm:text-6xl">
              Shaping the future of products, one idea at a time.
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium sm:text-xl/8 text-left text-slate-50">
              I help product and innovation teams validate business ideas through structured experiments and the support of artificial intelligence.
              My work reduces uncertainty, delivers evidence, and accelerates smarter decision-making.
            </p>
            <div className="mt-10 flex items-center justify-start gap-x-6">
              <a href="#" className="rounded-full border-2 border-white bg-transparent px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-white hover:text-black transition-colors duration-300">
                Let's collaborate together
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Work Projects Section */}
      <section 
        className="fixed inset-0 bg-black h-svh z-20 transition-opacity duration-700 ease-out"
        style={{ opacity: workOpacity }}
      >
        <div className="mx-auto max-w-7xl px-6 h-full flex flex-col justify-center lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              What We made Happen
            </h2>
            <p className="mt-2 text-lg/8 text-white">Projects I've co-designed with teams and founders to turn ideas into meaningful, testable solutions.</p>
          </div>
          <div className="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                id: 1,
                title: 'Title proyect',
                slug: 'project-1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
              },
              {
                id: 2,
                title: 'Title proyect',
                slug: 'project-2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
              },
              {
                id: 3,
                title: 'Title proyect',
                slug: 'project-3',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
              },
            ].map((project) => (
              <article
                key={project.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-white border-2 border-white px-8 pb-8 pt-48"
              >
                <h3 className="mt-3 text-lg/6 font-semibold text-black">
                  <Link to={`/project/${project.slug}`}>
                    <span className="absolute inset-0" />
                    {project.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-gray-600">{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        className="fixed inset-0 bg-muted h-svh z-30 transition-opacity duration-700 ease-out overflow-y-auto"
        style={{ opacity: servicesOpacity }}
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="text-left mb-16">
            <div className="w-12 h-0.5 bg-primary mb-8"></div>
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl mb-4">How We Work Together</h2>
          </div>
          
          <div className="editorial-grid">
            <Card className="editorial-card">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Zap className="h-8 w-8 mb-4" />
                  <h3 className="editorial-heading mb-4">Landing Test Sprint</h3>
                </div>
                <p className="editorial-body mb-4">
                  I design and launch demand validation tests in 48 hours.
                </p>
                <p className="editorial-body font-medium">
                  You get real market signals before building anything.
                </p>
              </CardContent>
            </Card>

            <Card className="editorial-card">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Users className="h-8 w-8 mb-4" />
                  <h3 className="editorial-heading mb-4">Customer Reality Check</h3>
                </div>
                <p className="editorial-body mb-4">
                  We dive deep into user interviews and behavioral analysis.
                </p>
                <p className="editorial-body font-medium">
                  You discover what your customers actually want, not what you think they want.
                </p>
              </CardContent>
            </Card>

            <Card className="editorial-card">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Target className="h-8 w-8 mb-4" />
                  <h3 className="editorial-heading mb-4">Pivot or Persist</h3>
                </div>
                <p className="editorial-body mb-4">
                  I facilitate strategic decision workshops using data-driven frameworks.
                </p>
                <p className="editorial-body font-medium">
                  You leave with a clear direction and actionable next steps.
                </p>
              </CardContent>
            </Card>

            <Card className="editorial-card lg:col-span-3">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="mb-6">
                      <MessageCircle className="h-8 w-8 mb-4" />
                      <h3 className="editorial-heading mb-4">Validation AI Coach</h3>
                    </div>
                    <p className="editorial-body mb-4">
                      My signature course + AI assistant that teaches you to validate ideas independently.
                    </p>
                    <p className="editorial-body font-medium">
                      You build internal capabilities while I support your learning journey.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-48 h-32 bg-primary/10 border border-primary flex items-center justify-center">
                      <MessageCircle className="h-16 w-16 text-primary" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section 
        className="fixed inset-0 bg-background h-svh z-40 transition-opacity duration-700 ease-out overflow-y-auto"
        style={{ opacity: methodologyOpacity }}
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="text-left mb-16">
            <div className="w-12 h-0.5 bg-primary mb-8"></div>
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl mb-4">The GoatPath Method</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
              number: "1",
              title: "DISCOVER",
              description: "I audit your assumptions and identify critical risks.",
              result: "You gain clarity on what needs validation first."
            }, {
              number: "2",
              title: "DESIGN",
              description: "We craft targeted experiments and testing strategies.",
              result: "You get a clear roadmap for gathering evidence."
            }, {
              number: "3",
              title: "VALIDATE",
              description: "I guide you through rapid testing cycles.",
              result: "You collect real market feedback in days, not months."
            }, {
              number: "4",
              title: "DECIDE",
              description: "We analyze results and define next steps together.",
              result: "You move forward with confidence, backed by data."
            }].map((step, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">{step.number}</span>
                  </div>
                  <h3 className="editorial-small mb-4">{step.title}</h3>
                </div>
                <p className="editorial-body mb-4">{step.description}</p>
                <p className="editorial-body font-medium text-primary">{step.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section 
        className="fixed inset-0 bg-muted h-svh z-50 transition-opacity duration-700 ease-out overflow-y-auto"
        style={{ opacity: caseStudiesOpacity }}
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="text-left mb-16">
            <div className="w-12 h-0.5 bg-primary mb-8"></div>
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl mb-4">Proven Results</h2>
          </div>
          
          <div className="space-y-16">
            <Card className="editorial-card">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="editorial-heading mb-4">LEXA: From Idea to AI Assistant</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="editorial-small text-muted-foreground mb-2">Challenge</p>
                        <p className="editorial-body">
                          A team needed to validate demand for an AI assistant helping with complex REPSE bureaucratic processes.
                        </p>
                      </div>
                      <div>
                        <p className="editorial-small text-muted-foreground mb-2">What I did</p>
                        <p className="editorial-body">
                          Designed a 48-hour Landing Test Sprint focusing on pain point validation and early user acquisition.
                        </p>
                      </div>
                      <div>
                        <p className="editorial-small text-muted-foreground mb-2">What we achieved</p>
                        <p className="editorial-body">
                          Validated product-market fit, gathered 200+ qualified leads, and secured initial funding to build the MVP.
                        </p>
                      </div>
                      <div className="bg-primary/10 p-4 border-l-4 border-primary">
                        <p className="editorial-body font-medium">
                          Result: LEXA launched successfully, now serving hundreds of users navigating regulatory compliance.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img src={lexaImage} alt="LEXA Case Study" className="w-full max-w-md editorial-shadow-strong" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="editorial-card">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="order-2 lg:order-1">
                    <img src={numaImage} alt="NUMA Case Study" className="w-full max-w-md editorial-shadow-strong" />
                  </div>
                  <div className="order-1 lg:order-2">
                    <h3 className="editorial-heading mb-4">NUMA: The Strategic Pivot</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="editorial-small text-muted-foreground mb-2">Challenge</p>
                        <p className="editorial-body">
                          A startup's original billing platform wasn't gaining traction after 6 months of development.
                        </p>
                      </div>
                      <div>
                        <p className="editorial-small text-muted-foreground mb-2">What I did</p>
                        <p className="editorial-body">
                          Facilitated a Pivot or Persist workshop, conducted user interviews, and identified WhatsApp as the key channel insight.
                        </p>
                      </div>
                      <div>
                        <p className="editorial-small text-muted-foreground mb-2">What we achieved</p>
                        <p className="editorial-body">
                          Pivoted to NUMA - a WhatsApp-based invoicing system that matched real user behavior patterns.
                        </p>
                      </div>
                      <div className="bg-primary/10 p-4 border-l-4 border-primary">
                        <p className="editorial-body font-medium">
                          Result: 3x user engagement increase and sustainable growth within 60 days of pivot.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        className="fixed inset-0 bg-background h-svh z-60 transition-opacity duration-700 ease-out overflow-y-auto"
        style={{ opacity: aboutOpacity }}
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-0.5 bg-primary mb-8"></div>
              <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl mb-6">Behind GoatPath</h2>
              <div className="space-y-4">
                <p className="editorial-body">
                  I'm a strategic innovation consultant who believes in validating fast and failing cheap.
                </p>
                <p className="editorial-body">
                  My background spans corporate innovation (designing digital services for global companies) and startup consulting. 
                  I've led technology adoption processes, optimized user experiences from back-office to interface, and helped teams 
                  navigate the messy reality of bringing ideas to market.
                </p>
                <p className="editorial-body">
                  Today, I focus on what I do best: helping you turn assumptions into evidence through rapid validation.
                </p>
                <p className="editorial-body font-medium">
                  When you work with me, you're not just getting methodology - you're getting a thinking partner who's been 
                  where you are and knows how to get you where you want to go.
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img src={profileImage} alt="Profile" className="w-80 h-96 object-cover editorial-shadow-strong" />
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        className="fixed inset-0 bg-primary text-primary-foreground h-svh z-70 transition-opacity duration-700 ease-out overflow-y-auto"
        style={{ opacity: contactOpacity }}
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="text-center">
            <div className="w-12 h-0.5 bg-primary-foreground mx-auto mb-8"></div>
            <h2 className="text-4xl font-semibold tracking-tight mb-6">Ready to Validate Your Idea?</h2>
            <p className="editorial-body mb-8 max-w-2xl mx-auto">
              Whether you need rapid market validation, user research, or strategic pivoting guidance, 
              I'm here to help you move from uncertainty to clarity.
            </p>
            <p className="editorial-subheading mb-12">
              Let's turn your assumptions into actionable insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Mail className="mr-2 h-4 w-4" />
                hello@goatpath.com
              </Button>
              <Button variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn Profile
              </Button>
            </div>
            
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4 text-lg">
              Book a Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="mt-12 pt-8 border-t border-primary-foreground/20">
              <p className="editorial-body italic">
                "The fastest way to validate an idea is to test it with real users, not perfect plans."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;