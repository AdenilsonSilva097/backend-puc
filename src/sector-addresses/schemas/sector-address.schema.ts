import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { getSchemaOptions } from '../../utils/mongoose.utils';
import { SectorAddressModel } from '../models/sector-address.model';
import { SectorModel } from '../../sectors/models/sector.model';
import { Sector } from '../../sectors/schemas/sector.schema';

export type SectorAddressDocument = SectorAddressModel & Document;

@Schema(getSchemaOptions())
export class SectorAddress implements SectorAddressModel {
  @Prop()
  id: string;

  @Prop({ type: Types.ObjectId, ref: Sector.name, required: true })
  setor: SectorModel | string;

  @Prop()
  bairro: string;

  @Prop()
  logradouro: string;

  @Prop()
  numeroEnderecoDe: string;

  @Prop()
  numeroEnderecoAte: string;

  @Prop({ default: () => new Date() })
  createdAt: Date;
}

export const SectorAddressSchema = SchemaFactory.createForClass(SectorAddress);
