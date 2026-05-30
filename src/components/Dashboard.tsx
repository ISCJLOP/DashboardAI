import { useState, useMemo } from 'react';
import { studyData } from '../data';
import { FilterOption, KpiMetrics } from '../types';
import { KpiCards, ChartsPanel } from './Visualizations';
import { ContextCards, AnalyticInsights, EthicsSection } from './ContextAndEthics';
import { DataTable } from './DataTable';
import { Filter, Database } from 'lucide-react';

export default function Dashboard() {
  const [filter, setFilter] = useState<FilterOption>('Todos');

  const filteredData = useMemo(() => {
    if (filter === 'Humanos') return studyData.filter(d => d.grupo === 'Control');
    if (filter === 'IA (Todos)') return studyData.filter(d => d.grupo.startsWith('Generados'));
    if (filter === 'IA (CP)') return studyData.filter(d => d.grupo === 'Generados CP');
    if (filter === 'IA (SP)') return studyData.filter(d => d.grupo === 'Generados SP');
    return studyData;
  }, [filter]);

  const kpis: KpiMetrics = useMemo(() => {
    const total = filteredData.length;
    const totalHumanos = filteredData.filter(d => d.grupo === 'Control').length;
    const totalIA = filteredData.filter(d => d.grupo.startsWith('Generados')).length;
    
    // Exact statistics derived directly from dataset
    const correctosHumanos = filteredData.filter(d => d.clasificacion === 'Humano Correcto').length;
    const detectadosIA = filteredData.filter(d => d.clasificacion === 'IA Detectada').length;
    const falsosNegativos = filteredData.filter(d => d.clasificacion === 'Falso Negativo').length;
    
    const precisionTotal = total === 0 ? 0 : ((correctosHumanos + detectadosIA) / total) * 100;
    const exactitudHumanos = totalHumanos === 0 ? 0 : (correctosHumanos / totalHumanos) * 100;
    const sensibilidad = totalIA === 0 ? 0 : (detectadosIA / totalIA) * 100;

    const sumaPorcentajeIA = filteredData.reduce((acc, curr) => acc + curr.porcentajeIA, 0);
    const promedioIA = total === 0 ? 0 : sumaPorcentajeIA / total;

    return {
      totalHumanos,
      totalIA,
      falsosNegativos,
      precisionTotal,
      exactitudHumanos,
      sensibilidad,
      promedioIA,
    };
  }, [filteredData]);

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header Neón/Glass */}
      <header className="mb-10 relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/30 rounded-full blur-[100px] mix-blend-screen opacity-50 transform -translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-[100px] mix-blend-screen opacity-50 transform -translate-y-1/2 translate-x-1/3"></div>
        </div>
        
        <div className="flex items-center gap-2 text-cyan-400 mb-3 uppercase tracking-[0.2em] text-xs font-semibold">
          <Database className="w-4 h-4" /> Investigacional &middot; Reporte Empírico
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-white to-slate-400 mb-4 tracking-tight">
          Evaluación de Quillbot como Detector Inteligencia Artificial
        </h1>
        <p className="text-slate-400 text-lg max-w-4xl leading-relaxed">
          Evaluación de la herramienta Quillbot para detectar textos creados con Inteligencia Artificial. El análisis demuestra cómo el sistema falla dramáticamente al detectar textos de IA que fueron apenas modificados. Estas fallas se analizan desde la perspectiva de la libre expresión bajo los Principios de Chapultepec y la Declaración de Heredia.
        </p>
      </header>

      {/* Contextual & Methodoly Cards */}
      <ContextCards />

      {/* Action / Filter Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 bg-slate-900/50 backdrop-blur-md p-4 rounded-xl border border-slate-800">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-slate-400" />
          <span className="text-slate-300 font-medium">Controles de Cohorte:</span>
        </div>
        <div className="flex gap-2 flex-wrap">
          {(['Todos', 'Humanos', 'IA (Todos)', 'IA (CP)', 'IA (SP)'] as FilterOption[]).map(opt => (
            <button
              key={opt}
              onClick={() => setFilter(opt)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === opt 
                  ? 'bg-slate-100 text-slate-900 shadow-[0_0_15px_rgba(241,245,249,0.3)]' 
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-700/50'
              }`}
            >
              {opt === 'Todos' ? 'Contexto Global' : 
               opt === 'Humanos' ? 'Control (Humanos)' : 
               opt === 'IA (Todos)' ? 'Experimental IA (Todos)' :
               opt === 'IA (CP)' ? 'Con Parafraseo y Prompt (CP)' :
               'Sin Parafrasear (SP)'}
            </button>
          ))}
        </div>
      </div>

      {/* Top Metrics Area */}
      <KpiCards kpis={kpis} />

      {/* Main Charts & Analytics Wrapper */}
      <ChartsPanel data={filteredData} />
      
      {/* Interpretational Block */}
      <div className="mb-10">
        <AnalyticInsights />
      </div>

      {/* Comprehensive Raw Data Table */}
      <DataTable data={filteredData} />

      {/* Governance & Ethics */}
      <EthicsSection />

      <footer className="mt-16 text-center text-slate-500 text-sm py-8 border-t border-slate-800/60 pb-12">
        <p className="font-display font-medium text-slate-400 mb-1">LA TRAMPA DE LA FALSA SEGURIDAD</p>
        <p className="mb-1">Tesis de Licenciatura en Ingeniería en Sistemas Computacionales</p>
        <p>Presenta: <span className="text-slate-300 font-medium">Juan Luis Ordóñez Pérez</span></p>
      </footer>
    </div>
  );
}
