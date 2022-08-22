/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, SkuPackage, Sku } from "@prisma/client";

export class SkuPackageServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SkuPackageFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SkuPackageFindManyArgs>
  ): Promise<number> {
    return this.prisma.skuPackage.count(args);
  }

  async findMany<T extends Prisma.SkuPackageFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SkuPackageFindManyArgs>
  ): Promise<SkuPackage[]> {
    return this.prisma.skuPackage.findMany(args);
  }
  async findOne<T extends Prisma.SkuPackageFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SkuPackageFindUniqueArgs>
  ): Promise<SkuPackage | null> {
    return this.prisma.skuPackage.findUnique(args);
  }
  async create<T extends Prisma.SkuPackageCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SkuPackageCreateArgs>
  ): Promise<SkuPackage> {
    return this.prisma.skuPackage.create<T>(args);
  }
  async update<T extends Prisma.SkuPackageUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SkuPackageUpdateArgs>
  ): Promise<SkuPackage> {
    return this.prisma.skuPackage.update<T>(args);
  }
  async delete<T extends Prisma.SkuPackageDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SkuPackageDeleteArgs>
  ): Promise<SkuPackage> {
    return this.prisma.skuPackage.delete(args);
  }

  async getInclusionSku(parentId: string): Promise<Sku | null> {
    return this.prisma.skuPackage
      .findUnique({
        where: { id: parentId },
      })
      .inclusionSku();
  }

  async getSku(parentId: string): Promise<Sku | null> {
    return this.prisma.skuPackage
      .findUnique({
        where: { id: parentId },
      })
      .sku();
  }
}
