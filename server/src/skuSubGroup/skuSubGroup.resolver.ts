import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SkuSubGroupResolverBase } from "./base/skuSubGroup.resolver.base";
import { SkuSubGroup } from "./base/SkuSubGroup";
import { SkuSubGroupService } from "./skuSubGroup.service";

@graphql.Resolver(() => SkuSubGroup)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SkuSubGroupResolver extends SkuSubGroupResolverBase {
  constructor(
    protected readonly service: SkuSubGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
