import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MapSkusToPackageService } from "./mapSkusToPackage.service";
import { MapSkusToPackageControllerBase } from "./base/mapSkusToPackage.controller.base";

@swagger.ApiTags("mapSkusToPackages")
@common.Controller("mapSkusToPackages")
export class MapSkusToPackageController extends MapSkusToPackageControllerBase {
  constructor(
    protected readonly service: MapSkusToPackageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
