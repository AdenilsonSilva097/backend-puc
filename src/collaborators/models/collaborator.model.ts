import { EntityModel } from '../../generic-crud/entity.model';
import { PermissionGroupModel } from '../../permission-groups/models/permission-group.model';

export class CollaboratorModel extends EntityModel {
  id: string;
  createdAt: Date;
  cargo: string;
  permissionGroup: PermissionGroupModel | string;
  nome: string;
  telefone: string;
  cep: string;
  endereco: string;
  numeroEndereco: string;
  cidade: string;
  uf: string;
  bairro: string;
  complemento: string;
  setor: string;
  dataNascimento: Date;
  cpf: string;
  rg: string;
  inicioVinculo: Date;
  observacoes: string;
}
