import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SkuSubGroupService } from "./skuSubGroup.service";
import { SkuSubGroupControllerBase } from "./base/skuSubGroup.controller.base";

@swagger.ApiTags("skuSubGroups")
@common.Controller("skuSubGroups")
export class SkuSubGroupController extends SkuSubGroupControllerBase {
  constructor(
    protected readonly service: SkuSubGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
