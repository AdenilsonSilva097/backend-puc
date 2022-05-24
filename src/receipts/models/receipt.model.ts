import { EntityModel } from '../../generic-crud/entity.model';

export class ReceiptModel extends EntityModel {
  id: string;
  idDoador: string;
  valor: number;
  dataEmissao: Date;
  idMensageiro: string;
  status: string;
  createdAt: Date;
}
