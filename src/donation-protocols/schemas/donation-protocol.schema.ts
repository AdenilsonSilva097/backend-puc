import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { getSchemaOptions } from '../../utils/mongoose.utils';
import { DonationProtocolModel } from '../models/donation-protocol.model';

export type DonationProtocolDocument = DonationProtocolModel & Document;

@Schema(getSchemaOptions())
export class DonationProtocol implements DonationProtocolModel {
  @Prop()
  id: string;

  @Prop()
  idGuiaDoacao: string;

  @Prop()
  valor: number;

  @Prop({ default: () => new Date() })
  dataRecebimento: Date;

  @Prop({ default: () => new Date() })
  createdAt: Date;
}

export const DonationProtocolSchema =
  SchemaFactory.createForClass(DonationProtocol);
