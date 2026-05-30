import { DocumentData } from './types';

// Generar los 70 registros basados en la descripción del experimento (30 H, 30 IA-CP, 10 IA-SP).
export const studyData: DocumentData[] = [
  // 30 Documentos de Control (Humanos Pre-2022)
  ...Array.from({ length: 30 }, (_, i) => ({
    id: `H-${(i + 1).toString().padStart(2, '0')}`,
    grupo: 'Control',
    origen: 'Humano (Pre-2022)',
    porcentajeIA: 0,
    clasificacion: 'Humano Correcto'
  })),
  // 30 Documentos Experimentales (Generados 100% por IA, Con Parafraseo / CP)
  ...Array.from({ length: 30 }, (_, i) => {
    let porcentajeIA = 0;
    let clasificacion: 'Falso Negativo' | 'IA Detectada' = 'Falso Negativo';
    if (i + 1 === 13) { porcentajeIA = 93; clasificacion = 'IA Detectada'; }
    else if (i + 1 === 27) { porcentajeIA = 59; clasificacion = 'IA Detectada'; }
    
    return {
      id: `IA-CP${i + 1}`,
      grupo: 'Generados CP',
      origen: '100% IA CP',
      porcentajeIA,
      clasificacion
    };
  }),
  // 10 Documentos Experimentales (Generados 100% por IA, Sin Parafraseo / SP)
  { id: 'IA-SP1', grupo: 'Generados SP', origen: '100% IA SP', porcentajeIA: 97, clasificacion: 'IA Detectada' },
  { id: 'IA-SP2', grupo: 'Generados SP', origen: '100% IA SP', porcentajeIA: 94, clasificacion: 'IA Detectada' },
  { id: 'IA-SP3', grupo: 'Generados SP', origen: '100% IA SP', porcentajeIA: 98, clasificacion: 'IA Detectada' },
  { id: 'IA-SP4', grupo: 'Generados SP', origen: '100% IA SP', porcentajeIA: 97, clasificacion: 'IA Detectada' },
  { id: 'IA-SP5', grupo: 'Generados SP', origen: '100% IA SP', porcentajeIA: 94, clasificacion: 'IA Detectada' },
  { id: 'IA-SP6', grupo: 'Generados SP', origen: '100% IA SP', porcentajeIA: 97, clasificacion: 'IA Detectada' },
  { id: 'IA-SP7', grupo: 'Generados SP', origen: '100% IA SP', porcentajeIA: 92, clasificacion: 'IA Detectada' },
  { id: 'IA-SP8', grupo: 'Generados SP', origen: '100% IA SP', porcentajeIA: 83, clasificacion: 'IA Detectada' },
  { id: 'IA-SP9', grupo: 'Generados SP', origen: '100% IA SP', porcentajeIA: 92, clasificacion: 'IA Detectada' },
  { id: 'IA-SP10', grupo: 'Generados SP', origen: '100% IA SP', porcentajeIA: 98, clasificacion: 'IA Detectada' }
] as DocumentData[];
