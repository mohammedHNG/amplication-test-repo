import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SkuPackageResolverBase } from "./base/skuPackage.resolver.base";
import { SkuPackage } from "./base/SkuPackage";
import { SkuPackageService } from "./skuPackage.service";

@graphql.Resolver(() => SkuPackage)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SkuPackageResolver extends SkuPackageResolverBase {
  constructor(
    protected readonly service: SkuPackageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
