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
          Evaluar qué tan bien funciona realmente la plataforma Quillbot para detectar textos escritos por Inteligencia Artificial, comparando textos humanos reales con textos generados por IA.
        </p>
      </div>

      <div className="bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-5 hover:border-cyan-400/40 transition-colors">
        <div className="flex items-center gap-3 mb-3 text-cyan-400">
          <Layers className="w-5 h-5" />
          <h3 className="font-display font-semibold text-lg">Diseño Experimental</h3>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">
          Se analizaron 70 documentos en total: 30 textos humanos pre-2022, frente a 30 documentos generados por IA con parafraseo usando Ingeniería de Prompt (CP) y 10 documentos IA sin parafrasear, tal cual salieron del modelo (SP).
        </p>
      </div>

      <div className="bg-slate-900/50 backdrop-blur-xl border border-fuchsia-500/20 rounded-2xl p-5 hover:border-fuchsia-400/40 transition-colors">
        <div className="flex items-center gap-3 mb-3 text-fuchsia-400">
          <AlertCircle className="w-5 h-5" />
          <h3 className="font-display font-semibold text-lg">Resultados de Quillbot</h3>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">
          Fue perfecta reconociendo textos humanos y aquellos de IA sin modificaciones (SP). Sin embargo, falló en detectar casi todos los textos de IA a los que se les aplicó parafraseo mediante Ingeniería de Prompt (CP).
        </p>
      </div>

      <div className="bg-slate-900/50 backdrop-blur-xl border border-rose-500/20 rounded-2xl p-5 hover:border-rose-400/40 transition-colors">
        <div className="flex items-center gap-3 mb-3 text-rose-400">
          <Lightbulb className="w-5 h-5" />
          <h3 className="font-display font-semibold text-lg">Interpretación</h3>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">
          Quillbot se confunde fácilmente cuando el texto pasa por modificaciones usando instrucciones de Ingeniería de Prompt (CP). Su alta cantidad de errores demuestra que no debería usarse como juez definitivo.
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
            <h4 className="text-slate-200 font-medium mb-1">Efecto de modificar el texto (CP vs SP)</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              El detector marca 0% tanto para textos creados por humanos como para textos generados por IA a los que se les aplicó parafraseo por Ingeniería de Prompt (CP). Sin embargo, detecta casi todos los textos de IA sin parafrasear (SP). Esto significa que Quillbot reconoce patrones repetitivos, pero se vuelve ciego si el texto se ajusta con instrucciones.
            </p>
          </div>
          <div className="border-l-2 border-fuchsia-500 pl-4">
            <h4 className="text-slate-200 font-medium mb-1">Inconsistencia en la detección (Dispersión)</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              La gráfica de puntos muestra dos realidades: el sistema es muy bueno atrapando textos de IA sin parafrasear (SP), pero falla por completo ante técnicas de Ingeniería de Prompt (CP). La supuesta precisión del sistema se rompe por completo al reestructurar el texto base.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="border-l-2 border-rose-500 pl-4">
            <h4 className="text-slate-200 font-medium mb-1">Los peligros de confiar ciegamente</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              La facilidad con la que se burla a Quillbot al usar Ingeniería de Prompt (CP) nos muestra que estos programas no "entienden" el sentido, solo buscan las palabras que más repite la IA. Esto crea una falsa sensación de seguridad e impide que se usen como prueba definitiva.
            </p>
          </div>
          <div className="border-l-2 border-cyan-500 pl-4">
            <h4 className="text-slate-200 font-medium mb-1">El problema de los falsos negativos</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              La gran cantidad de textos de IA que pasaron como "humanos" gracias al parafraseo intencional (CP) advierte que, en la vida real, este detector terminaría castigando sobre todo a estudiantes inexpertos, dejando pasar fácilmente a quienes saben usar Ingeniería de Prompt.
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
          <h3 className="text-lg font-display font-semibold text-slate-100 mb-3">Los Principios de Chapultepec</h3>
          <p className="text-slate-400 text-sm leading-relaxed focus:text-slate-300">
            Basados en la protección a la libertad de expresión, los Principios prohíben mecanismos que restrinjan el flujo de información por "medios indirectos". Al usar un algoritmo que comete tantos errores (como Quillbot) para juzgar y quizás censurar el trabajo de autores, investigadores o estudiantes, se crea una barrera injusta al libre pensamiento. Esto va en contra del principio 5 sobre evitar la censura previa o restricciones a la circulación de las ideas.
          </p>
        </div>

        <div className="bg-slate-900/70 border border-slate-700/50 rounded-xl p-6 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-1 h-full bg-rose-500"></div>
          <h3 className="text-lg font-display font-semibold text-slate-100 mb-3">La Declaración de Heredia</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Diseñada para evitar castigos exagerados por expresarse, la Declaración de Heredia indica que las sanciones deben ser justas y solo aplicarse cuando hay mala intención comprobada. Usar una herramienta automática (cuyos resultados varían tanto y fallan fácilmente frente a textos modificados) para acusar o castigar a un estudiante o autor va en contra de estos derechos. No se debería castigar a nadie basándose en la precaria "evidencia" de un software que se equivoca tanto.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-display font-bold text-slate-200 mb-6 relative z-10 border-b border-slate-800 pb-3">Conclusiones del Estudio</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-5 block">
           <ShieldCheck className="w-5 h-5 text-cyan-400 mb-3" />
          <h4 className="text-slate-200 font-semibold mb-2">1. No sirve como prueba definitiva</h4>
          <p className="text-slate-400 text-sm">
             Dado que Quillbot no logró detectar casi ningún texto de IA levemente modificado, sus resultados no son pruebas fiables de que alguien hizo trampa.
          </p>
        </div>

        <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-5 block">
          <AlertOctagon className="w-5 h-5 text-fuchsia-400 mb-3" />
          <h4 className="text-slate-200 font-semibold mb-2">2. Prohibición de Castigos Automáticos</h4>
          <p className="text-slate-400 text-sm">
            Al tener tantos fallos comprobados, es éticamente incorrecto usarlo para imponer sanciones o anular trabajos. Esto respeta la Declaración de Heredia sobre sanciones justas.
          </p>
        </div>

        <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-5 block">
          <Info className="w-5 h-5 text-indigo-400 mb-3" />
          <h4 className="text-slate-200 font-semibold mb-2">3. Amenaza a la Libertad de Expresión</h4>
          <p className="text-slate-400 text-sm">
            Permitir que un algoritmo con fallas acuse y censure el trabajo de los autores genera miedo de escribir. Esto rompe directamente con los Principios de Chapultepec.
          </p>
        </div>
      </div>
    </div>
  );
}
