import { EntityModel } from '../../generic-crud/entity.model';

export class DonationProtocolModel extends EntityModel {
  id: string;
  idGuiaDoacao: string;
  dataRecebimento: Date;
  valor: number;
  createdAt: Date;
}
