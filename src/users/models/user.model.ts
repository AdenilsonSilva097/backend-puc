import { EntityModel } from '../../generic-crud/entity.model';
import { PermissionGroupModel } from '../../permission-groups/models/permission-group.model';

export class UserModel extends EntityModel {
  name: string;
  email: string;
  password: string;
  birthDate: Date;
  permissionGroup: PermissionGroupModel | string;
  createdAt: Date;
}
