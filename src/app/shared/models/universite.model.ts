import { Departement } from './departement.model';

export class Universite {
  idUniv!: number;
  nomUniv!: string;
  departements!: Departement[];
}
