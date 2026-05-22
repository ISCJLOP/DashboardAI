import { Info, AlertOctagon, Lightbulb, Scale, ShieldCheck, Microscope, Layers, AlertCircle } from 'lucide-react';

export function ContextCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-slate-900/50 backdrop-blur-xl border border-indigo-500/20 rounded-2xl p-5 hover:border-indigo-400/40 transition-colors">
        <div className="flex items-center gap-3 mb-3 text-indigo-400">
          <Microscope className="w-5 h-5" />
          <h3 className="font-display font-semibold text-lg">Objetivo del Estudio</h3>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">
          Evaluar el rendimiento y validez empírica de la plataforma de detección IA Quillbot frente a conjuntos de textos humanos y sintéticos.
        </p>
      </div>

      <div className="bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-5 hover:border-cyan-400/40 transition-colors">
        <div className="flex items-center gap-3 mb-3 text-cyan-400">
          <Layers className="w-5 h-5" />
          <h3 className="font-display font-semibold text-lg">Diseño Experimental</h3>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">
          Análisis de 60 documentos: 30 textos humanos pre-2022 (grupo control) evaluados contra 30 documentos generados 100% mediante modelos de IA.
        </p>
      </div>

      <div className="bg-slate-900/50 backdrop-blur-xl border border-fuchsia-500/20 rounded-2xl p-5 hover:border-fuchsia-400/40 transition-colors">
        <div className="flex items-center gap-3 mb-3 text-fuchsia-400">
          <AlertCircle className="w-5 h-5" />
          <h3 className="font-display font-semibold text-lg">Resultados de Quillbot</h3>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">
          Eficacia del 100% en identificar textos humanos, pero fracaso total (0%) en detectar textos generados por IA, produciendo 30 falsos negativos consecutivos.
        </p>
      </div>

      <div className="bg-slate-900/50 backdrop-blur-xl border border-rose-500/20 rounded-2xl p-5 hover:border-rose-400/40 transition-colors">
        <div className="flex items-center gap-3 mb-3 text-rose-400">
          <Lightbulb className="w-5 h-5" />
          <h3 className="font-display font-semibold text-lg">Interpretación</h3>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">
          Quillbot enfrenta un colapso predictivo ante IA moderna. Las severas tasas de falsos negativos invalidan su uso como mecanismo auditor exclusivo.
        </p>
      </div>
    </div>
  );
}

export function AnalyticInsights() {
  return (
    <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-6 mt-6">
      <h3 className="font-display font-semibold text-xl text-slate-200 mb-6 flex items-center gap-2">
        <Info className="w-5 h-5 text-indigo-400" />
        Análisis Empírico de Quillbot
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="border-l-2 border-indigo-500 pl-4">
            <h4 className="text-slate-200 font-medium mb-1">Invisibilidad Estadística (Gráfica Comparativa)</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              La métrica de detección en Quillbot se mantiene inalterada (0.00%) tanto en el grupo control como en el experimental. Esto corrobora que la sofisticación semántica del modelo generativo moderno es estadísticamente indistinguible de la escritura humana para este algoritmo en particular.
            </p>
          </div>
          <div className="border-l-2 border-fuchsia-500 pl-4">
            <h4 className="text-slate-200 font-medium mb-1">Colapso de Sensibilidad (Dispersión)</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              La gráfica de dispersión refleja una anomalía severa: una asimetría metodológica total en Quillbot. La especificidad (identificar humanos) es perfecta, pero la sensibilidad (identificar IA) es nula. Esta ilusión de exactitud está fuertemente sesgada por el grupo control.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="border-l-2 border-rose-500 pl-4">
            <h4 className="text-slate-200 font-medium mb-1">Limitaciones del Detector</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              La incapacidad de Quillbot para detectar firmas semánticas de nuevos LLMs significa que la herramienta opera basándose en heurísticas posiblemente anticuadas, generando confianza artificial ("false security") en procesos que requieren supervisión.
            </p>
          </div>
          <div className="border-l-2 border-cyan-500 pl-4">
            <h4 className="text-slate-200 font-medium mb-1">Impacto Sistémico de Falsos Negativos</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              30 falsos negativos en una cohorte de 30 documentos sintéticos advierten que la efectividad funcional de Quillbot en entornos "wild" (fuera de laboratorio) no reporta utilidad probabilística superior al mero azar para contenido generado recintemente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EthicsSection() {
  return (
    <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/90 border border-slate-800 rounded-2xl p-8 mt-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none"></div>
      
      <div className="flex items-center gap-3 mb-6 relative z-10">
        <Scale className="w-7 h-7 text-cyan-400" />
        <h2 className="font-display text-2xl font-bold text-slate-100">Gobernanza, Ética y Derechos de Expresión</h2>
      </div>
      
      <p className="text-slate-300 mb-8 max-w-4xl leading-relaxed relative z-10 font-medium">
        El uso de herramientas opacas y con fallas sistémicas como Quillbot para imponer sanciones académicas o editoriales entra en conflicto directo con los marcos internacionales que protegen el discurso legítimo, la libertad de expresión y el debido proceso.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10 mb-10">
        <div className="bg-slate-900/70 border border-slate-700/50 rounded-xl p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
          <h3 className="text-lg font-display font-semibold text-slate-100 mb-3">La Declaración de Chapultepec</h3>
          <p className="text-slate-400 text-sm leading-relaxed focus:text-slate-300">
            Enraizada en la protección irrestricta a la libertad de expresión, la Declaración prohíbe mecanismos que censuren o restrinjan el flujo de información por "medios indirectos". Al utilizar un algoritmo que emite juicios inexactos (como Quillbot, carente de sensibilidad probada) como censor de facto sobre el trabajo de autores, investigadores o comunicadores, se establece una barrera artificial e injustificada al libre pensamiento, violando el principio 5 ("La censura previa, las restricciones a la circulación... se oponen directamente a la libertad de prensa").
          </p>
        </div>

        <div className="bg-slate-900/70 border border-slate-700/50 rounded-xl p-6 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-1 h-full bg-rose-500"></div>
          <h3 className="text-lg font-display font-semibold text-slate-100 mb-3">Los Principios de Heredia</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Diseñados para prevenir consecuencias civiles desproporcionadas frente al ejercicio de la expresión, los Principios de Heredia dictan que las sanciones deben ser justas y basadas en el dolo manifiesto (malicia real). Emplear una inteligencia artificial predictiva (cuyo resultado es esencialmente azaroso para textos IA en este estudio) para acusar académicamente u hostigar a un autor viola la proporcionalidad y el debido proceso garantizado en estos principios. No se puede sancionar penal, civil ni académicamente con base en "evidencia" generada por un software comprobablemente fallido.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-display font-bold text-slate-200 mb-6 relative z-10 border-b border-slate-800 pb-3">Conclusiones del Estudio</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-5 block">
          <ShieldCheck className="w-5 h-5 text-cyan-400 mb-3" />
          <h4 className="text-slate-200 font-semibold mb-2">1. Invalidez Probatoria</h4>
          <p className="text-slate-400 text-sm">
             Los resultados del experimento con Quillbot (0% de sensibilidad ante IA moderna) demuestran su total invalidez como herramienta probatoria concluyente.
          </p>
        </div>

        <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-5 block">
          <AlertOctagon className="w-5 h-5 text-fuchsia-400 mb-3" />
          <h4 className="text-slate-200 font-semibold mb-2">2. Prohibición Punitiva</h4>
          <p className="text-slate-400 text-sm">
            Dada la tasa de fallos, está éticamente prohibido utilizar Quillbot automatizadamente como causal para sanciones disciplinarias, respetando el debido proceso (Heredia).
          </p>
        </div>

        <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-5 block">
          <Info className="w-5 h-5 text-indigo-400 mb-3" />
          <h4 className="text-slate-200 font-semibold mb-2">3. Amenaza a la Expresión</h4>
          <p className="text-slate-400 text-sm">
            La censura delegada a algoritmos opacos crea un efecto inhibidor ("chilling effect") sobre los creadores, contraviniendo el espíritu de la Declaración de Chapultepec.
          </p>
        </div>
      </div>
    </div>
  );
}
