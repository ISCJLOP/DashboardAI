import { DocumentData } from '../types';
import { AlertTriangle, CheckCircle } from 'lucide-react';

export function DataTable({ data }: { data: DocumentData[] }) {
  return (
    <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
      <div className="p-6 border-b border-slate-800">
        <h3 className="font-display font-semibold text-lg text-slate-200">Registro de Documentos ({data.length})</h3>
        <p className="text-slate-400 text-sm mt-1">Desglose analítico de clasificación algorítmica.</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-900 text-slate-400 text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-medium border-b border-slate-800">ID Documento</th>
              <th className="px-6 py-4 font-medium border-b border-slate-800">Grupo</th>
              <th className="px-6 py-4 font-medium border-b border-slate-800">Origen del Texto</th>
              <th className="px-6 py-4 font-medium border-b border-slate-800">Análisis % IA</th>
              <th className="px-6 py-4 font-medium border-b border-slate-800">Clasificación Auditada</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {data.map((row) => (
              <tr key={row.id} className="hover:bg-slate-800/30 transition-colors group">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-300 group-hover:text-white">
                  {row.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                    row.grupo === 'Control' ? 'bg-slate-800 text-slate-300' : 'bg-indigo-900/30 text-indigo-300'
                  }`}>
                    {row.grupo}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                  {row.origen}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono text-slate-400 w-12">{row.porcentajeIA.toFixed(2)}%</span>
                    <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full" 
                        style={{ width: `${Math.max(row.porcentajeIA, 2)}%`, opacity: row.porcentajeIA === 0 ? 0.3 : 1 }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {row.clasificacion === 'Humano Correcto' ? (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-900/20 border border-cyan-500/20 text-cyan-400 text-xs font-medium">
                      <CheckCircle className="w-3.5 h-3.5" />
                      Humano Correcto
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-900/20 border border-rose-500/20 text-rose-400 text-xs font-medium shadow-[0_0_10px_rgba(244,63,94,0.1)]">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      Falso Negativo
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {data.length === 0 && (
          <div className="py-12 text-center text-slate-500 flex flex-col items-center">
            <span className="block mb-2 text-3xl">📭</span>
            Trate de ajustar los filtros, no se encontraron resultados.
          </div>
        )}
      </div>
    </div>
  );
}
