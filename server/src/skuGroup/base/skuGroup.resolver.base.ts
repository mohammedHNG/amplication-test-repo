/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateSkuGroupArgs } from "./CreateSkuGroupArgs";
import { UpdateSkuGroupArgs } from "./UpdateSkuGroupArgs";
import { DeleteSkuGroupArgs } from "./DeleteSkuGroupArgs";
import { SkuGroupFindManyArgs } from "./SkuGroupFindManyArgs";
import { SkuGroupFindUniqueArgs } from "./SkuGroupFindUniqueArgs";
import { SkuGroup } from "./SkuGroup";
import { SkuFindManyArgs } from "../../sku/base/SkuFindManyArgs";
import { Sku } from "../../sku/base/Sku";
import { SkuSubGroupIdFindManyArgs } from "../../skuSubGroupId/base/SkuSubGroupIdFindManyArgs";
import { SkuSubGroupId } from "../../skuSubGroupId/base/SkuSubGroupId";
import { SkuGroupService } from "../skuGroup.service";

@graphql.Resolver(() => SkuGroup)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SkuGroupResolverBase {
  constructor(
    protected readonly service: SkuGroupService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SkuGroup",
    action: "read",
    possession: "any",
  })
  async _skuGroupsMeta(
    @graphql.Args() args: SkuGroupFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [SkuGroup])
  @nestAccessControl.UseRoles({
    resource: "SkuGroup",
    action: "read",
    possession: "any",
  })
  async skuGroups(
    @graphql.Args() args: SkuGroupFindManyArgs
  ): Promise<SkuGroup[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => SkuGroup, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SkuGroup",
    action: "read",
    possession: "own",
  })
  async skuGroup(
    @graphql.Args() args: SkuGroupFindUniqueArgs
  ): Promise<SkuGroup | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SkuGroup)
  @nestAccessControl.UseRoles({
    resource: "SkuGroup",
    action: "create",
    possession: "any",
  })
  async createSkuGroup(
    @graphql.Args() args: CreateSkuGroupArgs
  ): Promise<SkuGroup> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SkuGroup)
  @nestAccessControl.UseRoles({
    resource: "SkuGroup",
    action: "update",
    possession: "any",
  })
  async updateSkuGroup(
    @graphql.Args() args: UpdateSkuGroupArgs
  ): Promise<SkuGroup | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => SkuGroup)
  @nestAccessControl.UseRoles({
    resource: "SkuGroup",
    action: "delete",
    possession: "any",
  })
  async deleteSkuGroup(
    @graphql.Args() args: DeleteSkuGroupArgs
  ): Promise<SkuGroup | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Sku])
  @nestAccessControl.UseRoles({
    resource: "Sku",
    action: "read",
    possession: "any",
  })
  async skus(
    @graphql.Parent() parent: SkuGroup,
    @graphql.Args() args: SkuFindManyArgs
  ): Promise<Sku[]> {
    const results = await this.service.findSkus(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [SkuSubGroupId])
  @nestAccessControl.UseRoles({
    resource: "SkuSubGroupId",
    action: "read",
    possession: "any",
  })
  async skuSubGroups(
    @graphql.Parent() parent: SkuGroup,
    @graphql.Args() args: SkuSubGroupIdFindManyArgs
  ): Promise<SkuSubGroupId[]> {
    const results = await this.service.findSkuSubGroups(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
