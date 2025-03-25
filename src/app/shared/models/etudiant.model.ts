import { Option } from './option.enum';
import { Contrat } from './contrat.model';
import { Departement } from './departement.model';
import { Equipe } from './equipe.model';

export class Etudiant {
  idEtudiant!: number;
  nomE!: string;
  prenomE!: string;
  op!: Option;
  contrats!: Contrat[];
  departement!: Departement;
  equipes!: Equipe[];
}
