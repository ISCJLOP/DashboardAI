export type GroupType = 'Control' | 'Generados';
export type OriginType = 'Humano (Pre-2022)' | '100% IA';
export type ClassificationType = 'Humano Correcto' | 'Falso Negativo';

export interface DocumentData {
  id: string;
  grupo: GroupType;
  origen: OriginType;
  porcentajeIA: number;
  clasificacion: ClassificationType;
}

export type FilterOption = 'Todos' | 'Humanos' | 'IA';

export interface KpiMetrics {
  promedioIA: number;
  totalHumanos: number;
  totalIA: number;
  precisionTotal: number;
  sensibilidad: number;
  exactitudHumanos: number;
  falsosNegativos: number;
}
