import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { MapSkusToPackageResolverBase } from "./base/mapSkusToPackage.resolver.base";
import { MapSkusToPackage } from "./base/MapSkusToPackage";
import { MapSkusToPackageService } from "./mapSkusToPackage.service";

@graphql.Resolver(() => MapSkusToPackage)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MapSkusToPackageResolver extends MapSkusToPackageResolverBase {
  constructor(
    protected readonly service: MapSkusToPackageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
