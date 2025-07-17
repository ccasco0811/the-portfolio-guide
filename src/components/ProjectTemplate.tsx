import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface Metric {
  objetivo: string;
  kpi: string;
  meta: string;
}

interface Resultado {
  metrica: string;
  antes: string;
  despues: string;
}

interface ProjectTemplateProps {
  // Hero Section
  nombreProyecto: string;
  tagline: string;
  rol: string;
  industria: string;
  miniStats: string[];
  
  // Context & Challenge
  panorama: string;
  dolorClave: string;
  oportunidad: string;
  
  // Role
  estrategia: string;
  uxDesign: string;
  delivery: string;
  
  // Objectives & Metrics
  objetivos: Metric[];
  
  // Process
  descubrimiento: string;
  diseno: string;
  iteracion: string;
  lanzamiento: string;
  artefactosVisuales?: string[];
  
  // Final Solution
  imagenSolucion: string;
  funcionamiento: string[];
  techStack: string[];
  
  // Results
  resultados: Resultado[];
  
  // Learnings & Next Steps
  queFunciono: string;
  queNo: string;
  proximoPaso: string;
  
  // Credits & Tools
  creditos: {
    area: string;
    colaboradores: string;
  }[];
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({
  nombreProyecto,
  tagline,
  rol,
  industria,
  miniStats,
  panorama,
  dolorClave,
  oportunidad,
  estrategia,
  uxDesign,
  delivery,
  objetivos,
  descubrimiento,
  diseno,
  iteracion,
  lanzamiento,
  artefactosVisuales = [],
  imagenSolucion,
  funcionamiento,
  techStack,
  resultados,
  queFunciono,
  queNo,
  proximoPaso,
  creditos
}) => {
  return (
    <div className="min-h-screen bg-background">
      {/* 0. Hero Section */}
      <section className="bg-black h-svh">
        <div className="mx-auto max-w-7xl px-6 h-full flex items-center lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <Badge variant="outline" className="bg-white/10 text-white border-white/20">
                {industria}
              </Badge>
              <span className="text-pretty text-lg font-medium text-slate-50">{rol}</span>
            </div>
            <h1 className="text-pretty text-5xl font-semibold tracking-tight text-white text-left sm:text-6xl mb-6">
              {nombreProyecto}
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium sm:text-xl/8 text-left text-slate-50 mb-8">
              {tagline}
            </p>
            <div className="flex flex-wrap gap-2">
              {miniStats.map((stat, index) => (
                <Badge key={index} variant="outline" className="bg-white/10 text-white border-white/20">
                  {stat}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 1. Context & Challenge */}
      <section className="editorial-section">
        <div className="editorial-container">
          <div className="editorial-accent-line"></div>
          <h2 className="editorial-display mb-6">Contexto & Reto</h2>
          <p className="editorial-body text-muted-foreground mb-12 max-w-3xl">
            Entender el panorama completo, identificar los puntos de dolor más críticos y reconocer las oportunidades estratégicas que guiarán el desarrollo del proyecto.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="editorial-card h-96 flex flex-col">
              <CardContent className="flex flex-col h-full justify-between">
                <h3 className="editorial-heading mb-6">Panorama</h3>
                <p className="editorial-body text-muted-foreground mt-auto">{panorama}</p>
              </CardContent>
            </Card>
            <Card className="editorial-card h-96 flex flex-col">
              <CardContent className="flex flex-col h-full justify-between">
                <h3 className="editorial-heading mb-6">Dolor Clave</h3>
                <p className="editorial-body text-muted-foreground mt-auto">{dolorClave}</p>
              </CardContent>
            </Card>
            <Card className="editorial-card h-96 flex flex-col">
              <CardContent className="flex flex-col h-full justify-between">
                <h3 className="editorial-heading mb-6">Oportunidad</h3>
                <p className="editorial-body text-muted-foreground mt-auto">{oportunidad}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 2. My Role */}
      <section className="editorial-section bg-muted/30">
        <div className="editorial-container">
          <div className="editorial-accent-line"></div>
          <h2 className="editorial-display mb-8">Mi Rol</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="editorial-heading mb-3">Estrategia</h3>
              <p className="editorial-body text-muted-foreground">{estrategia}</p>
            </div>
            <div>
              <h3 className="editorial-heading mb-3">UX/Service Design</h3>
              <p className="editorial-body text-muted-foreground">{uxDesign}</p>
            </div>
            <div>
              <h3 className="editorial-heading mb-3">Delivery</h3>
              <p className="editorial-body text-muted-foreground">{delivery}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Objectives & Metrics */}
      <section className="editorial-section">
        <div className="editorial-container">
          <div className="editorial-accent-line"></div>
          <h2 className="editorial-display mb-8">Objetivos & Métricas</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-2 editorial-heading">Objetivo</th>
                  <th className="text-left py-4 px-2 editorial-heading">KPI</th>
                  <th className="text-left py-4 px-2 editorial-heading">Meta</th>
                </tr>
              </thead>
              <tbody>
                {objetivos.map((objetivo, index) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-4 px-2 editorial-body">{objetivo.objetivo}</td>
                    <td className="py-4 px-2 editorial-body text-muted-foreground">{objetivo.kpi}</td>
                    <td className="py-4 px-2 editorial-body font-medium">{objetivo.meta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Process */}
      <section className="editorial-section bg-muted/30">
        <div className="editorial-container">
          <div className="editorial-accent-line"></div>
          <h2 className="editorial-display mb-8">Proceso</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="editorial-card">
              <CardContent>
                <h3 className="editorial-heading mb-4">Descubrimiento</h3>
                <p className="editorial-body text-muted-foreground">{descubrimiento}</p>
              </CardContent>
            </Card>
            <Card className="editorial-card">
              <CardContent>
                <h3 className="editorial-heading mb-4">Diseño</h3>
                <p className="editorial-body text-muted-foreground">{diseno}</p>
              </CardContent>
            </Card>
            <Card className="editorial-card">
              <CardContent>
                <h3 className="editorial-heading mb-4">Iteración</h3>
                <p className="editorial-body text-muted-foreground">{iteracion}</p>
              </CardContent>
            </Card>
            <Card className="editorial-card">
              <CardContent>
                <h3 className="editorial-heading mb-4">Lanzamiento</h3>
                <p className="editorial-body text-muted-foreground">{lanzamiento}</p>
              </CardContent>
            </Card>
          </div>
          {artefactosVisuales.length > 0 && (
            <div className="mt-8">
              <h3 className="editorial-heading mb-4">Artefactos Visuales</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {artefactosVisuales.map((artefacto, index) => (
                  <div key={index} className="bg-muted/50 h-32 flex items-center justify-center border border-border">
                    <span className="editorial-small text-muted-foreground">{artefacto}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. Final Solution */}
      <section className="editorial-section">
        <div className="editorial-container">
          <div className="editorial-accent-line"></div>
          <h2 className="editorial-display mb-8">Solución Final</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-muted/50 h-64 flex items-center justify-center border border-border mb-6">
                <span className="editorial-small text-muted-foreground">{imagenSolucion}</span>
              </div>
            </div>
            <div>
              <h3 className="editorial-heading mb-4">Cómo funciona</h3>
              <ul className="space-y-3 mb-6">
                {funcionamiento.map((paso, index) => (
                  <li key={index} className="editorial-body flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                      {index + 1}
                    </span>
                    {paso}
                  </li>
                ))}
              </ul>
              <div>
                <h4 className="editorial-subheading mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <Badge key={index} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Results */}
      <section className="editorial-section bg-muted/30">
        <div className="editorial-container">
          <div className="editorial-accent-line"></div>
          <h2 className="editorial-display mb-8">Resultados</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-2 editorial-heading">Métrica</th>
                  <th className="text-left py-4 px-2 editorial-heading">Antes</th>
                  <th className="text-left py-4 px-2 editorial-heading">Después</th>
                </tr>
              </thead>
              <tbody>
                {resultados.map((resultado, index) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-4 px-2 editorial-body">{resultado.metrica}</td>
                    <td className="py-4 px-2 editorial-body text-muted-foreground">{resultado.antes}</td>
                    <td className="py-4 px-2 editorial-body font-medium text-green-600">{resultado.despues}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. Learnings & Next Steps */}
      <section className="editorial-section">
        <div className="editorial-container">
          <div className="editorial-accent-line"></div>
          <h2 className="editorial-display mb-8">Aprendizajes & Next Steps</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="editorial-card">
              <CardContent>
                <h3 className="editorial-heading mb-4 text-green-600">Qué funcionó ✅</h3>
                <p className="editorial-body text-muted-foreground">{queFunciono}</p>
              </CardContent>
            </Card>
            <Card className="editorial-card">
              <CardContent>
                <h3 className="editorial-heading mb-4 text-red-600">Qué no funcionó ❌</h3>
                <p className="editorial-body text-muted-foreground">{queNo}</p>
              </CardContent>
            </Card>
            <Card className="editorial-card">
              <CardContent>
                <h3 className="editorial-heading mb-4 text-blue-600">Próximo paso 🚀</h3>
                <p className="editorial-body text-muted-foreground">{proximoPaso}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 8. Credits & Tools */}
      <section className="editorial-section bg-muted/30">
        <div className="editorial-container">
          <div className="editorial-accent-line"></div>
          <h2 className="editorial-display mb-8">Créditos & Herramientas</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-2 editorial-heading">Área</th>
                  <th className="text-left py-4 px-2 editorial-heading">Colaboradores / Tools</th>
                </tr>
              </thead>
              <tbody>
                {creditos.map((credito, index) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-4 px-2 editorial-body font-medium">{credito.area}</td>
                    <td className="py-4 px-2 editorial-body text-muted-foreground">{credito.colaboradores}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="editorial-section bg-primary text-primary-foreground">
        <div className="editorial-container text-center">
          <h2 className="editorial-display mb-6">¿Quieres resultados así?</h2>
          <Button 
            variant="outline" 
            size="lg"
            className="editorial-button-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            Escríbeme 👉 cabras.co
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProjectTemplate;