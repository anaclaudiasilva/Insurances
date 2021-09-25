export interface Coverages {
  id_cobertura: string;
  nome?: string;
  descricao?: string;
  resumo?: string;
  cobertura_obrigatoria?: string;
  identificador?: string;
  importancias_segurada?: Importances;
  nao_incluso?: [];
  dependencias?: [];
  ocultar_descricao?: boolean;
}

interface Importances {
  tipo?: number;
  minimo?: number;
  maximo?: number;
  incremento?: number;
  valor_sugerido?: SuggestionValue;
}

interface SuggestionValue {
  tipo_imovel?: number;
  valor?: number;
}
