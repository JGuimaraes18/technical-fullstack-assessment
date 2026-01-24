export interface Person {
  id?: number;
  nome: string;
  data_nascimento: string;
  cpf: string;
  sexo: 'M' | 'F';
  altura: number;
  peso: number;
}