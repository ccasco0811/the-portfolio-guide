import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const NumaProject: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-background px-6 pt-16 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-8">
              Numa
            </h1>
          </div>
          
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8">
              AI assistant that helps professionals create compliant invoices in seconds
            </h2>
          </div>
          
          {/* Metadata */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="text-center">
              <span className="uppercase tracking-wide">UX/UI</span>
            </div>
            <div className="text-center">
              <span className="uppercase tracking-wide">ROL</span>
            </div>
            <div className="text-center">
              <span className="uppercase tracking-wide">2023-2024</span>
            </div>
            <div className="text-center">
              <span>2024, Present</span>
            </div>
            <div className="text-center">
              <span>Product Strategy</span>
            </div>
            <div className="text-center">
              <span>WhatsApp & Web</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Visual Section */}
      <section className="bg-blue-50 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Factura por WhatsApp.<br />
                En segundos.
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                NUMA convierte las conversaciones de WhatsApp en SAT. Evita errores
                y ahorra tiempo en segundos, sin depender de nadie.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Ver el Futuro en Acción
              </button>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="/lovable-uploads/77f7effb-2c25-4511-8019-38f7831625d2.png" 
                  alt="WhatsApp interface showing NUMA assistant" 
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-8">Context</h3>
          <p className="text-muted-foreground leading-relaxed">
            Creating government-compliant digital invoices in Mexico (CFDI) was 
            slow, error-prone and frustrating for small service providers. The 
            SAT (Mexico's tax authority) offers a real new invoicing format that is basic 
            and lacks proper validation, so users often lost time making 
            corrections. The current invoicing is a manual, repetitive task often 
            delegated to accountants. Most existing tools were desktop-only and 
            overwhelming. Through research, we discovered users needed a simplified 
            service focused around a task they need to accomplish or else 
            they're taxed.
          </p>
        </div>
      </section>

      {/* Insights Section */}
      <section className="px-6 py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-8">Insights</h3>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Market research revealed that the most attractive value proposition would 
            combine four elements: 95 percent of invoicing regulatory urgency, 
            empathetic language, and credibility in the Mexican market. 
            Accountants charge $2 to $6 per invoice but making a mistake simply 
            doubles the initial strategy work, according the fact of fines that reach up to 
            $12,000 MXN. NUMA addresses these concerns by providing almost 
            zero error rate, a simplicity similar to WhatsApp conversations, and convenience 
            often consumer 15 to 20 hours weekly.
          </p>
        </div>
      </section>

      {/* Approach Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-8">Approach</h3>
          
          <div className="grid gap-4 mb-8">
            <Card className="bg-blue-600 text-white border-0">
              <CardContent className="p-6">
                <h4 className="font-bold mb-2">WhatsApp</h4>
                <p className="text-sm">
                  WhatsApp is used daily by over 95 million people in Mexico, giving 
                  this product instant familiarity and adoption.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-600 text-white border-0">
              <CardContent className="p-6">
                <h4 className="font-bold mb-2">Plain language</h4>
                <p className="text-sm">
                  We turned complex SAT fields into simple prompts that any 
                  professional can answer. An AI model helps in the background 
                  understanding agents for focus the verification and reduce 
                  errors.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-600 text-white border-0">
              <CardContent className="p-6">
                <h4 className="font-bold mb-2">Wizard prototype</h4>
                <p className="text-sm">
                  We tested the full workflows in a manual, wizard prototype, 
                  validating desirability and learning best without heavy development.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-600 text-white border-0">
              <CardContent className="p-6">
                <h4 className="font-bold mb-2">A/B tests</h4>
                <p className="text-sm">
                  We launched two landing pages, one for accountants and one 
                  for SMEs to understand value prop messaging, then saw improved 
                  sign up flow and tracked sign up conversions and reduced risk.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Journey Section */}
      <section className="px-6 py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-8">Customer Journey</h3>
          <p className="text-muted-foreground mb-12">Juan - Gym coach, name_rct 12345</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-background border-pink-200 border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💳</span>
                </div>
                <h4 className="font-bold text-foreground mb-2">Awareness</h4>
                <p className="text-sm text-muted-foreground">
                  Discovers NUMA through Google searches, 
                  word of mouth, and gym 
                  about SAT changes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background border-blue-200 border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h4 className="font-bold text-foreground mb-2">Consideration</h4>
                <p className="text-sm text-muted-foreground">
                  Visits website, watches a 
                  30-second demo, 
                  calculates savings, and 
                  books intro call.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background border-green-200 border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🏃</span>
                </div>
                <h4 className="font-bold text-foreground mb-2">First Use</h4>
                <p className="text-sm text-muted-foreground">
                  Attends a 5-minute demo, 
                  asks follow-up 
                  questions against current 
                  workflow, tests on-demand 
                  30-day free.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background border-orange-200 border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📄</span>
                </div>
                <h4 className="font-bold text-foreground mb-2">Onboarding</h4>
                <p className="text-sm text-muted-foreground">
                  Uses him to receive first 
                  certificate, issues first 
                  invoice, and shares with 
                  staff.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background border-purple-200 border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">👨</span>
                </div>
                <h4 className="font-bold text-foreground mb-2">Adoption</h4>
                <p className="text-sm text-muted-foreground">
                  Uses him to invoice 
                  business payments weekly 
                  for rentals, and typical 
                  document costs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background border-teal-200 border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h4 className="font-bold text-foreground mb-2">Advocacy</h4>
                <p className="text-sm text-muted-foreground">
                  Refers NUMA to other gym 
                  groups posts on social 
                  media, and talks to friends 
                  about the service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NumaProject;