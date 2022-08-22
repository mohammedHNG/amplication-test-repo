import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SkuSubGroupIdService } from "./skuSubGroupId.service";
import { SkuSubGroupIdControllerBase } from "./base/skuSubGroupId.controller.base";

@swagger.ApiTags("skuSubGroupIds")
@common.Controller("skuSubGroupIds")
export class SkuSubGroupIdController extends SkuSubGroupIdControllerBase {
  constructor(
    protected readonly service: SkuSubGroupIdService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
