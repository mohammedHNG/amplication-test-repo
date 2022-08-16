import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SkuPackageService } from "./skuPackage.service";
import { SkuPackageControllerBase } from "./base/skuPackage.controller.base";

@swagger.ApiTags("skuPackages")
@common.Controller("skuPackages")
export class SkuPackageController extends SkuPackageControllerBase {
  constructor(
    protected readonly service: SkuPackageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
