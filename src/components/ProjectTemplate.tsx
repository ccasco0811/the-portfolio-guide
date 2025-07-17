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
  return <div className="min-h-screen bg-background">
      {/* 0. Hero Section */}
      <section className="bg-black h-svh">
        <div className="editorial-container h-full flex items-center">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-pretty text-lg font-medium text-slate-50">{rol}</span>
            </div>
            <h1 className="text-pretty text-5xl tracking-tight text-white text-left mb-6 sm:text-6xl font-light">
              {nombreProyecto}
            </h1>
            <p className="text-pretty text-lg font-medium text-slate-50 mb-8">Product Strategy · UX Design · Service Design · AI Prototyping · Go‑to‑Market</p>
            
          </div>
        </div>
      </section>

      {/* Nueva sección en blanco */}
      <section className="editorial-section">
        <div className="editorial-container">
          <p className="editorial-body text-muted-foreground">
            NUMA is a new AI‑powered invoicing assistant designed for professionals who need to issue CFDI (Mexico's official digital tax invoices) quickly and without errors.
            We defined NUMA's core proposition, designed its conversational flow, and built an MVP that lets users create a legally valid invoice directly on WhatsApp in under 30 seconds.
          </p>
        </div>
      </section>

    </div>;
};
export default ProjectTemplate;