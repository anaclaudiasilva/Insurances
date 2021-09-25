export interface Questions {
  id_questao: string;
  texto_questao?: string;
  respostas?: Anwsers;
}

interface Anwsers {
  id_resposta?: number;
  texto_resposta?: string;
}
