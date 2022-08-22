import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SkuSubGroupIdResolverBase } from "./base/skuSubGroupId.resolver.base";
import { SkuSubGroupId } from "./base/SkuSubGroupId";
import { SkuSubGroupIdService } from "./skuSubGroupId.service";

@graphql.Resolver(() => SkuSubGroupId)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SkuSubGroupIdResolver extends SkuSubGroupIdResolverBase {
  constructor(
    protected readonly service: SkuSubGroupIdService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
