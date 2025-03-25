import { Etudiant } from './etudiant.model';

export class Departement {
  idDepart!: number;
  nomDepart!: string;
  etudiants!: Etudiant[];
}
