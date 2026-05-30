export type GroupType = 'Control' | 'Generados CP' | 'Generados SP';
export type OriginType = 'Humano (Pre-2022)' | '100% IA CP' | '100% IA SP';
export type ClassificationType = 'Humano Correcto' | 'Falso Negativo' | 'IA Detectada';

export interface DocumentData {
  id: string;
  grupo: GroupType;
  origen: OriginType;
  porcentajeIA: number;
  clasificacion: ClassificationType;
}

export type FilterOption = 'Todos' | 'Humanos' | 'IA (Todos)' | 'IA (CP)' | 'IA (SP)';

export interface KpiMetrics {
  promedioIA: number;
  totalHumanos: number;
  totalIA: number;
  precisionTotal: number;
  sensibilidad: number;
  exactitudHumanos: number;
  falsosNegativos: number;
}

