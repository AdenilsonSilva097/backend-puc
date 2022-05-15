import { Controller, Get, Param, NotFoundException } from '@nestjs/common';

import { GenericCrudController } from '../generic-crud/generic-crud.controller';
import { SectorAddressModel } from './models/sector-address.model';
import { SectorAddressDocument } from './schemas/sector-address.schema';
import { SectorAddressesService } from './sector-addresses.service';

@Controller('sector-addresses')
export class SectorAddressesController extends GenericCrudController<
  SectorAddressModel,
  SectorAddressDocument
> {
  constructor(private readonly sectorAddressesService: SectorAddressesService) {
    super(sectorAddressesService);
  }

  @Get('sector/:sectorId')
  async findBySectorId(@Param('sectorId') sectorId: string) {
    const entity = await this.sectorAddressesService.findBySectorId(sectorId);
    if (!entity) {
      throw new NotFoundException('Entity does not exist!');
    }
    return entity;
  }
}
