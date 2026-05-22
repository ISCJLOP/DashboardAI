import { DocumentData } from './types';

// Generar los 60 registros basados en la imagen y descripción del experimento.
export const studyData: DocumentData[] = [
  // 30 Documentos de Control (Humanos Pre-2022)
  ...Array.from({ length: 30 }, (_, i) => ({
    id: `H-${(i + 1).toString().padStart(2, '0')}`,
    grupo: 'Control',
    origen: 'Humano (Pre-2022)',
    porcentajeIA: 0,
    clasificacion: 'Humano Correcto'
  })),
  // 30 Documentos Experimentales (Generados 100% por IA)
  ...Array.from({ length: 30 }, (_, i) => ({
    id: `IA-${(i + 1).toString().padStart(2, '0')}`,
    grupo: 'Generados',
    origen: '100% IA',
    porcentajeIA: 0,
    clasificacion: 'Falso Negativo'
  }))
] as DocumentData[];
