import { EntityModel } from '../../generic-crud/entity.model';
import { SectorModel } from '../../sectors/models/sector.model';

export class SectorAddressModel extends EntityModel {
  id: string;
  setor: SectorModel | string;
  bairro: string;
  logradouro: string;
  numeroEnderecoDe: string;
  numeroEnderecoAte: string;
  createdAt: Date;
}
