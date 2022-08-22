/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, SkuSubGroupId, Sku, SkuGroup } from "@prisma/client";

export class SkuSubGroupIdServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SkuSubGroupIdFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SkuSubGroupIdFindManyArgs>
  ): Promise<number> {
    return this.prisma.skuSubGroupId.count(args);
  }

  async findMany<T extends Prisma.SkuSubGroupIdFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SkuSubGroupIdFindManyArgs>
  ): Promise<SkuSubGroupId[]> {
    return this.prisma.skuSubGroupId.findMany(args);
  }
  async findOne<T extends Prisma.SkuSubGroupIdFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SkuSubGroupIdFindUniqueArgs>
  ): Promise<SkuSubGroupId | null> {
    return this.prisma.skuSubGroupId.findUnique(args);
  }
  async create<T extends Prisma.SkuSubGroupIdCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SkuSubGroupIdCreateArgs>
  ): Promise<SkuSubGroupId> {
    return this.prisma.skuSubGroupId.create<T>(args);
  }
  async update<T extends Prisma.SkuSubGroupIdUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SkuSubGroupIdUpdateArgs>
  ): Promise<SkuSubGroupId> {
    return this.prisma.skuSubGroupId.update<T>(args);
  }
  async delete<T extends Prisma.SkuSubGroupIdDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SkuSubGroupIdDeleteArgs>
  ): Promise<SkuSubGroupId> {
    return this.prisma.skuSubGroupId.delete(args);
  }

  async findSkus(
    parentId: string,
    args: Prisma.SkuFindManyArgs
  ): Promise<Sku[]> {
    return this.prisma.skuSubGroupId
      .findUnique({
        where: { id: parentId },
      })
      .skus(args);
  }

  async getSkuGroupId(parentId: string): Promise<SkuGroup | null> {
    return this.prisma.skuSubGroupId
      .findUnique({
        where: { id: parentId },
      })
      .skuGroupId();
  }
}