import React from 'react';
import ProjectTemplate from '@/components/ProjectTemplate';

const ProjectExample = () => {
  const exampleData = {
    // Hero Section
    nombreProyecto: "NUMA / Pivot to E‑Invoicing",
    tagline: "Factura CFDI en 30 s vía WhatsApp",
    rol: "Founder & Product Lead — 2024‑2025",
    industria: "Fintech / SaaS B2B",
    miniStats: ["⏱ 30 s", "🤖 95% auto", "💰 $500k MXN pre‑sales"],
    
    // Context & Challenge
    panorama: "Las PyMEs mexicanas enfrentan multas millonarias por no facturar correctamente. El proceso tradicional toma más de 10 minutos y requiere conocimiento técnico específico.",
    dolorClave: "⚠ Multas de $173k MXN por facturación incorrecta o tardía. 'No entiendo por qué es tan complicado facturar' - Usuario PyME",
    oportunidad: "WhatsApp tiene 95% de penetración en México. Automatizar facturación vía chat elimina fricciones y democratiza el cumplimiento fiscal.",
    
    // Role
    estrategia: "Definí hipótesis de producto y KPIs de validación. Diseñé experimentos lean para validar demanda antes del desarrollo.",
    uxDesign: "Mapas de journey end-to-end, entrevistas cualitativas (n = 12), diseño de conversaciones para WhatsApp Business API.",
    delivery: "Coordiné desarrollo técnico, integración de IA, implementación de analytics con GA4 y gestión de lanzamiento.",
    
    // Objectives & Metrics
    objetivos: [
      {
        objetivo: "Reducir fricción al facturar",
        kpi: "Tiempo de emisión",
        meta: "≤ 30 s"
      },
      {
        objetivo: "Validar demanda real",
        kpi: "Ventas preventa",
        meta: "≥ 50 cuentas"
      },
      {
        objetivo: "Automatizar proceso",
        kpi: "Intervención manual",
        meta: "≤ 5%"
      }
    ],
    
    // Process
    descubrimiento: "Investigación con contadores y PyMEs. Webinar para validar dolor. Landing page para captar demanda temprana (120 leads en 2 semanas).",
    diseno: "Wireframes de flujo conversacional. Prototipo en Figma. Prompt engineering para IA que extrae datos de fotos de productos.",
    iteracion: "A/B test de mensajes WhatsApp. Métricas de abandono por paso. Pivot del flow inicial basado en feedback real.",
    lanzamiento: "Go-live con 20 beta testers. Implementación de pixel de Facebook y GA4. Loop de feedback semanal con usuarios.",
    artefactosVisuales: ["Journey Map", "Wireframes WhatsApp", "Esquema ManyChat", "Dashboard Analytics"],
    
    // Final Solution
    imagenSolucion: "Screenshot: Chat WhatsApp con factura CFDI generada en 30s",
    funcionamiento: [
      "Usuario envía foto del producto por WhatsApp",
      "IA extrae automáticamente datos (descripción, precio, cantidad)",
      "Sistema valida información fiscal con APIs del SAT",
      "Se genera CFDI válido y se envía al cliente",
      "Factura se almacena en dashboard web para seguimiento"
    ],
    techStack: ["WhatsApp Cloud API", "Facturama API", "OpenAI GPT-4V", "Next.js", "Vercel", "MongoDB"],
    
    // Results
    resultados: [
      {
        metrica: "Tiempo de facturación",
        antes: "> 10 min",
        despues: "30 s"
      },
      {
        metrica: "Adopción contadores",
        antes: "0",
        despues: "+120 pagos de preventa"
      },
      {
        metrica: "Tickets de soporte",
        antes: "—",
        despues: "–25% (primer mes)"
      },
      {
        metrica: "Tasa de conversión",
        antes: "—",
        despues: "18% (landing a pago)"
      }
    ],
    
    // Learnings & Next Steps
    queFunciono: "Storytelling con 'terror a multas' aumentó conversión 18%. WhatsApp como canal redujo significativamente la fricción de adopción. IA para extracción de datos fue el diferenciador clave.",
    queNo: "Webhook inicial saturó la API de Facturama. Onboarding muy técnico para contadores tradicionales. Faltó validación de integración contable.",
    proximoPaso: "Roadmap Q1 2025: Integración con CONTPAQi y otros ERPs. Facturación recurrente automática. Expansión a Colombia y Argentina.",
    
    // Credits & Tools
    creditos: [
      {
        area: "Development",
        colaboradores: "1 ingeniero full-stack (Freddy)"
      },
      {
        area: "IA & Automation",
        colaboradores: "OpenAI GPT-4V, Zapier, ManyChat"
      },
      {
        area: "Design & Research",
        colaboradores: "Figma, Midjourney, Loom"
      },
      {
        area: "Analytics & Tracking",
        colaboradores: "Google Tag Manager, GA4, Hotjar"
      },
      {
        area: "Legal & Fiscal",
        colaboradores: "Asesor fiscal externo"
      }
    ]
  };

  return <ProjectTemplate {...exampleData} />;
};

export default ProjectExample;