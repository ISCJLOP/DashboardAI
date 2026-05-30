import { Target, Activity, AlertTriangle, CheckCircle, Brain, Target as TargetIcon, XCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter, ZAxis } from 'recharts';
import { DocumentData, KpiMetrics } from '../types';

export function KpiCards({ kpis }: { kpis: KpiMetrics }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
      <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center text-center">
        <Activity className="w-5 h-5 text-indigo-400 mb-2" />
        <span className="text-slate-400 text-xs uppercase tracking-wider mb-1">Promedio IA</span>
        <span className="text-2xl font-bold text-slate-100">{kpis.promedioIA.toFixed(1)}%</span>
      </div>
      
      <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center text-center">
        <Brain className="w-5 h-5 text-cyan-400 mb-2" />
        <span className="text-slate-400 text-xs uppercase tracking-wider mb-1">Total Humanos</span>
        <span className="text-2xl font-bold text-slate-100">{kpis.totalHumanos}</span>
      </div>

      <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center text-center">
        <TargetIcon className="w-5 h-5 text-fuchsia-400 mb-2" />
        <span className="text-slate-400 text-xs uppercase tracking-wider mb-1">Total IA</span>
        <span className="text-2xl font-bold text-slate-100">{kpis.totalIA}</span>
      </div>

      <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center text-center">
        <Target className="w-5 h-5 text-slate-300 mb-2" />
        <span className="text-slate-400 text-xs uppercase tracking-wider mb-1">Precisión Gral.</span>
        <span className="text-2xl font-bold text-white shadow-sm">{kpis.precisionTotal.toFixed(1)}%</span>
      </div>

      <div className="bg-slate-900/40 border border-fuchsia-500/20 rounded-xl p-4 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-fuchsia-500/50 transition-colors">
        <div className="absolute inset-0 bg-fuchsia-500/5 blur-xl group-hover:bg-fuchsia-500/10 transition-colors"></div>
        <XCircle className="w-5 h-5 text-fuchsia-400 mb-2 relative z-10" />
        <span className="text-fuchsia-200/70 text-xs uppercase tracking-wider mb-1 relative z-10">Sensibilidad IA</span>
        <span className="text-2xl font-bold text-fuchsia-400 relative z-10">{kpis.sensibilidad.toFixed(1)}%</span>
      </div>

      <div className="bg-slate-900/40 border border-cyan-500/20 rounded-xl p-4 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-cyan-500/50 transition-colors">
        <div className="absolute inset-0 bg-cyan-500/5 blur-xl group-hover:bg-cyan-500/10 transition-colors"></div>
        <CheckCircle className="w-5 h-5 text-cyan-400 mb-2 relative z-10" />
        <span className="text-cyan-200/70 text-xs uppercase tracking-wider mb-1 relative z-10">Exactitud Humanos</span>
        <span className="text-2xl font-bold text-cyan-400 relative z-10">{kpis.exactitudHumanos.toFixed(1)}%</span>
      </div>

      <div className="bg-rose-900/20 border border-rose-500/30 rounded-xl p-4 flex flex-col items-center justify-center text-center relative overflow-hidden group">
         <AlertTriangle className="w-5 h-5 text-rose-400 mb-2 relative z-10 group-hover:scale-110 transition-transform" />
        <span className="text-rose-200/80 text-xs uppercase tracking-wider mb-1 relative z-10">Falsos Negativos</span>
        <span className="text-2xl font-bold text-rose-400 relative z-10">{kpis.falsosNegativos}</span>
      </div>
    </div>
  );
}

const PIE_COLORS = ['#06b6d4', '#d946ef'];

export function ChartsPanel({ data }: { data: DocumentData[] }) {
  // Aggregate data for BarChart (Total Docs by Detection Classification)
  const correctlyClassifiedHuman = data.filter(d => d.clasificacion === 'Humano Correcto').length;
  const correctlyClassifiedAI = data.filter(d => d.clasificacion === 'IA Detectada').length;
  const incorrectlyClassifiedAI = data.filter(d => d.clasificacion === 'Falso Negativo').length;
  
  const barData = [
    { name: 'Humano Correcto', count: correctlyClassifiedHuman, fill: '#06b6d4' },
    { name: 'IA Detectada (Correcto)', count: correctlyClassifiedAI, fill: '#8b5cf6' },
    { name: 'Falso Negativo (Error)', count: incorrectlyClassifiedAI, fill: '#f43f5e' },
  ].filter(d => d.count > 0);

  // Scatter Chart data mapping
  const scatterControl = data.filter(d => d.grupo === 'Control').map((d, i) => ({ x: parseInt(d.id.split('-')[1]), y: d.porcentajeIA, id: d.id, name: 'Control (Humano)' }));
  const scatterCP = data.filter(d => d.grupo === 'Generados CP').map((d, i) => ({ x: parseInt(d.id.replace('IA-CP', '')) + 30, y: d.porcentajeIA, id: d.id, name: 'IA con Prompt (CP)' }));
  const scatterSP = data.filter(d => d.grupo === 'Generados SP').map((d, i) => ({ x: parseInt(d.id.replace('IA-SP', '')) + 60, y: d.porcentajeIA, id: d.id, name: 'IA sin modificar (SP)' }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900/90 border border-slate-700 p-3 rounded-lg shadow-xl backdrop-blur-md">
          <p className="text-slate-200 text-sm font-medium">{`(ID: ${payload[0].payload.id || label})`}</p>
          <p className="text-slate-400 text-xs mt-1">
            <span className="font-semibold text-white">{payload[0].name}: </span>
            {payload[0].value} {payload[0].name.includes('IA') || payload[0].name === 'y' ? '%' : ''}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Gráfica Comparativa */}
      <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-6 shadow-lg shadow-black/20">
        <h3 className="font-display font-medium text-lg text-slate-200 mb-6">Diagnóstico de Clasificación vs Realidad</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <RechartsTooltip cursor={{ fill: '#1e293b', opacity: 0.5 }} content={<CustomTooltip />} />
              <Bar dataKey="count" radius={[4, 4, 0, 0]} maxBarSize={60}>
                {barData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Dispersión */}
      <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-6 shadow-lg shadow-black/20">
        <h3 className="font-display font-medium text-lg text-slate-200 mb-6">Dispersión Empírica (% IA Detectado)</h3>
        <div className="h-64 w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 10, right: 20, bottom: 10, left: -20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis type="number" dataKey="x" name="Índice" stroke="#94a3b8" fontSize={12} domain={['dataMin - 1', 'dataMax + 1']} tickLine={false} axisLine={false} />
              <YAxis type="number" dataKey="y" name="% Detectado IA" stroke="#94a3b8" fontSize={12} domain={[-5, 105]} tickLine={false} axisLine={false} />
              <ZAxis type="number" range={[50, 50]} />
              <RechartsTooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Scatter name="Control (Humano)" data={scatterControl} fill="#06b6d4" shape="circle" />
              <Scatter name="IA con Prompt (CP)" data={scatterCP} fill="#d946ef" shape="triangle" />
              <Scatter name="IA sin modificar (SP)" data={scatterSP} fill="#f59e0b" shape="diamond" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
