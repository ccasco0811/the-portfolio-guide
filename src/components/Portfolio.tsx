import { ArrowRight, CheckCircle, Users, Zap, Target, MessageCircle, Mail, Linkedin, ExternalLink, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import profileImage from '@/assets/profile-editorial.jpg';
import heroImage from '@/assets/hero-editorial.jpg';
import lexaImage from '@/assets/lexa-case.jpg';
import numaImage from '@/assets/numa-case.jpg';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-black">
        <svg
          aria-hidden="true"
          className="absolute inset-0 -z-10 size-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" width="100%" height="100%" strokeWidth={0} />
        </svg>
        <div
          aria-hidden="true"
          className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
            className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:px-8 lg:py-40 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="mt-10 text-pretty text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              Shaping the future of products, one idea at a time.
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
              I help product and innovation teams validate business ideas through structured experiments and the support of artificial intelligence.
              My work reduces uncertainty, delivers evidence, and accelerates smarter decision-making.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Get started
              </a>
              <a href="#" className="text-sm/6 font-semibold text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="editorial-section bg-muted">
        <div className="editorial-container">
          <div className="text-center mb-16">
            <div className="editorial-accent-line mx-auto"></div>
            <h2 className="editorial-display mb-4">How We Work Together</h2>
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
      <section className="editorial-section">
        <div className="editorial-container">
          <div className="text-center mb-16">
            <div className="editorial-accent-line mx-auto"></div>
            <h2 className="editorial-display mb-4">The GoatPath Method</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "1",
                title: "DISCOVER",
                description: "I audit your assumptions and identify critical risks.",
                result: "You gain clarity on what needs validation first."
              },
              {
                number: "2",
                title: "DESIGN",
                description: "We craft targeted experiments and testing strategies.",
                result: "You get a clear roadmap for gathering evidence."
              },
              {
                number: "3",
                title: "VALIDATE",
                description: "I guide you through rapid testing cycles.",
                result: "You collect real market feedback in days, not months."
              },
              {
                number: "4",
                title: "DECIDE",
                description: "We analyze results and define next steps together.",
                result: "You move forward with confidence, backed by data."
              }
            ].map((step, index) => (
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
      <section className="editorial-section bg-muted">
        <div className="editorial-container">
          <div className="text-center mb-16">
            <div className="editorial-accent-line mx-auto"></div>
            <h2 className="editorial-display mb-4">Proven Results</h2>
          </div>
          
          <div className="space-y-16">
            {/* LEXA Case */}
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
                    <img 
                      src={lexaImage} 
                      alt="LEXA Case Study" 
                      className="w-full max-w-md editorial-shadow-strong"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* NUMA Case */}
            <Card className="editorial-card">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="order-2 lg:order-1">
                    <img 
                      src={numaImage} 
                      alt="NUMA Case Study" 
                      className="w-full max-w-md editorial-shadow-strong"
                    />
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
      <section className="editorial-section">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="editorial-accent-line"></div>
              <h2 className="editorial-display mb-6">Behind GoatPath</h2>
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
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-80 h-96 object-cover editorial-shadow-strong"
                />
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="editorial-section bg-primary text-primary-foreground">
        <div className="editorial-container">
          <div className="text-center">
            <div className="w-12 h-0.5 bg-primary-foreground mx-auto mb-8"></div>
            <h2 className="editorial-display mb-6">Ready to Validate Your Idea?</h2>
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