import { EntityModel } from '../../generic-crud/entity.model';

export class ApplicationModel extends EntityModel {
  id: string;
  createdAt: Date;
  name: string;
}
