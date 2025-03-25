import { Niveau } from './niveau.enum';
import { Etudiant } from './etudiant.model';
import { DetailEquipe } from './detail-equipe.model';

export class Equipe {
  idEquipe!: number;
  nomEquipe!: string;
  niveau!: Niveau;
  etudiants!: Etudiant[];
  detailEquipe!: DetailEquipe;
}
