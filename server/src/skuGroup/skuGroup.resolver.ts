import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SkuGroupResolverBase } from "./base/skuGroup.resolver.base";
import { SkuGroup } from "./base/SkuGroup";
import { SkuGroupService } from "./skuGroup.service";

@graphql.Resolver(() => SkuGroup)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SkuGroupResolver extends SkuGroupResolverBase {
  constructor(
    protected readonly service: SkuGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
