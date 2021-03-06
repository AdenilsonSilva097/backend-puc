import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { GenericCrudService } from '../generic-crud/generic-crud.service';
import {
  SectorAddress,
  SectorAddressDocument,
} from './schemas/sector-address.schema';

@Injectable()
export class SectorAddressesService extends GenericCrudService<
  SectorAddress,
  SectorAddressDocument
> {
  constructor(
    @InjectModel(SectorAddress.name)
    private readonly sectorAddressModel: Model<SectorAddressDocument>,
  ) {
    super(sectorAddressModel);
  }

  async findBySectorId(sectorId: string) {
    const sector = await this.sectorAddressModel
      .find({ setor: sectorId })
      .exec();
    if (!sector) return undefined;
    return sector.map((t) => t.toJSON() as any as SectorAddress);
  }
}
