import { EntityModel } from '../../generic-crud/entity.model';
import { ApplicationModel } from '../../applications/models/application.model';
import { PermissionGroupModel } from '../../permission-groups/models/permission-group.model';

export class PermissionGroupItemModel extends EntityModel {
  application: ApplicationModel | string;
  permissionGroup: PermissionGroupModel | string;
  crud: string;
  createdAt: Date;
}
