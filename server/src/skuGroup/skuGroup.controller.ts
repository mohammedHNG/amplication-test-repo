import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SkuGroupService } from "./skuGroup.service";
import { SkuGroupControllerBase } from "./base/skuGroup.controller.base";

@swagger.ApiTags("skuGroups")
@common.Controller("skuGroups")
export class SkuGroupController extends SkuGroupControllerBase {
  constructor(
    protected readonly service: SkuGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
