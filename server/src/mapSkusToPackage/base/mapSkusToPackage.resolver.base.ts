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
import { CreateMapSkusToPackageArgs } from "./CreateMapSkusToPackageArgs";
import { UpdateMapSkusToPackageArgs } from "./UpdateMapSkusToPackageArgs";
import { DeleteMapSkusToPackageArgs } from "./DeleteMapSkusToPackageArgs";
import { MapSkusToPackageFindManyArgs } from "./MapSkusToPackageFindManyArgs";
import { MapSkusToPackageFindUniqueArgs } from "./MapSkusToPackageFindUniqueArgs";
import { MapSkusToPackage } from "./MapSkusToPackage";
import { SkuPackage } from "../../skuPackage/base/SkuPackage";
import { Sku } from "../../sku/base/Sku";
import { MapSkusToPackageService } from "../mapSkusToPackage.service";

@graphql.Resolver(() => MapSkusToPackage)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MapSkusToPackageResolverBase {
  constructor(
    protected readonly service: MapSkusToPackageService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "MapSkusToPackage",
    action: "read",
    possession: "any",
  })
  async _mapSkusToPackagesMeta(
    @graphql.Args() args: MapSkusToPackageFindManyArgs
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
  @graphql.Query(() => [MapSkusToPackage])
  @nestAccessControl.UseRoles({
    resource: "MapSkusToPackage",
    action: "read",
    possession: "any",
  })
  async mapSkusToPackages(
    @graphql.Args() args: MapSkusToPackageFindManyArgs
  ): Promise<MapSkusToPackage[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => MapSkusToPackage, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "MapSkusToPackage",
    action: "read",
    possession: "own",
  })
  async mapSkusToPackage(
    @graphql.Args() args: MapSkusToPackageFindUniqueArgs
  ): Promise<MapSkusToPackage | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MapSkusToPackage)
  @nestAccessControl.UseRoles({
    resource: "MapSkusToPackage",
    action: "create",
    possession: "any",
  })
  async createMapSkusToPackage(
    @graphql.Args() args: CreateMapSkusToPackageArgs
  ): Promise<MapSkusToPackage> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        packageId: args.data.packageId
          ? {
              connect: args.data.packageId,
            }
          : undefined,

        skuId: args.data.skuId
          ? {
              connect: args.data.skuId,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MapSkusToPackage)
  @nestAccessControl.UseRoles({
    resource: "MapSkusToPackage",
    action: "update",
    possession: "any",
  })
  async updateMapSkusToPackage(
    @graphql.Args() args: UpdateMapSkusToPackageArgs
  ): Promise<MapSkusToPackage | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          packageId: args.data.packageId
            ? {
                connect: args.data.packageId,
              }
            : undefined,

          skuId: args.data.skuId
            ? {
                connect: args.data.skuId,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => MapSkusToPackage)
  @nestAccessControl.UseRoles({
    resource: "MapSkusToPackage",
    action: "delete",
    possession: "any",
  })
  async deleteMapSkusToPackage(
    @graphql.Args() args: DeleteMapSkusToPackageArgs
  ): Promise<MapSkusToPackage | null> {
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
  @graphql.ResolveField(() => SkuPackage, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SkuPackage",
    action: "read",
    possession: "any",
  })
  async packageId(
    @graphql.Parent() parent: MapSkusToPackage
  ): Promise<SkuPackage | null> {
    const result = await this.service.getPackageId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Sku, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Sku",
    action: "read",
    possession: "any",
  })
  async skuId(@graphql.Parent() parent: MapSkusToPackage): Promise<Sku | null> {
    const result = await this.service.getSkuId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}