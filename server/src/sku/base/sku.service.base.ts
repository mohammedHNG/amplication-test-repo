/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Sku, SkuPackage, SkuGroup, SkuSubGroup } from "@prisma/client";

export class SkuServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SkuFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SkuFindManyArgs>
  ): Promise<number> {
    return this.prisma.sku.count(args);
  }

  async findMany<T extends Prisma.SkuFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SkuFindManyArgs>
  ): Promise<Sku[]> {
    return this.prisma.sku.findMany(args);
  }
  async findOne<T extends Prisma.SkuFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SkuFindUniqueArgs>
  ): Promise<Sku | null> {
    return this.prisma.sku.findUnique(args);
  }
  async create<T extends Prisma.SkuCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SkuCreateArgs>
  ): Promise<Sku> {
    return this.prisma.sku.create<T>(args);
  }
  async update<T extends Prisma.SkuUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SkuUpdateArgs>
  ): Promise<Sku> {
    return this.prisma.sku.update<T>(args);
  }
  async delete<T extends Prisma.SkuDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SkuDeleteArgs>
  ): Promise<Sku> {
    return this.prisma.sku.delete(args);
  }

  async findInclusionSku(
    parentId: string,
    args: Prisma.SkuPackageFindManyArgs
  ): Promise<SkuPackage[]> {
    return this.prisma.sku
      .findUnique({
        where: { id: parentId },
      })
      .inclusionSku(args);
  }

  async findSkuPackages(
    parentId: string,
    args: Prisma.SkuPackageFindManyArgs
  ): Promise<SkuPackage[]> {
    return this.prisma.sku
      .findUnique({
        where: { id: parentId },
      })
      .skuPackages(args);
  }

  async getSkuGroupId(parentId: string): Promise<SkuGroup | null> {
    return this.prisma.sku
      .findUnique({
        where: { id: parentId },
      })
      .skuGroupId();
  }

  async getSkuSubGroupId(parentId: string): Promise<SkuSubGroup | null> {
    return this.prisma.sku
      .findUnique({
        where: { id: parentId },
      })
      .skuSubGroupId();
  }
}
