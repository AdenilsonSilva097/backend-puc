import { EntityModel } from '../../generic-crud/entity.model';

export class SectorModel extends EntityModel {
  id: string;
  createdAt: Date;
  nome: string;
}
