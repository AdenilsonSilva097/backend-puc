import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { PermissionGroupModel } from '../../permission-groups/models/permission-group.model';
import { PermissionGroup } from '../../permission-groups/schemas/permission-group.schema';

import { getSchemaOptions } from '../../utils/mongoose.utils';
import { CollaboratorModel } from '../models/collaborator.model';

export type CollaboratorDocument = CollaboratorModel & Document;

@Schema(getSchemaOptions())
export class Collaborator implements CollaboratorModel {
  @Prop()
  id: string;

  @Prop({ default: () => new Date() })
  createdAt: Date;

  @Prop({ type: Types.ObjectId, ref: PermissionGroup.name, required: true })
  permissionGroup: PermissionGroupModel | string;

  @Prop()
  cargo: string;

  @Prop()
  idUsuario: string;

  @Prop()
  nome: string;

  @Prop()
  telefone: string;

  @Prop()
  cep: string;

  @Prop()
  endereco: string;

  @Prop()
  numeroEndereco: string;

  @Prop()
  cidade: string;

  @Prop()
  uf: string;

  @Prop()
  bairro: string;

  @Prop()
  complemento: string;

  @Prop()
  setor: string;

  @Prop()
  dataNascimento: Date;

  @Prop({ unique: true })
  cpf: string;

  @Prop()
  rg: string;

  @Prop({ default: () => new Date() })
  inicioVinculo: Date;

  @Prop()
  observacoes: string;
}

export const CollaboratorSchema = SchemaFactory.createForClass(Collaborator);
