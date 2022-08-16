/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, MapSkusToPackage, SkuPackage, Sku } from "@prisma/client";

export class MapSkusToPackageServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MapSkusToPackageFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MapSkusToPackageFindManyArgs>
  ): Promise<number> {
    return this.prisma.mapSkusToPackage.count(args);
  }

  async findMany<T extends Prisma.MapSkusToPackageFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MapSkusToPackageFindManyArgs>
  ): Promise<MapSkusToPackage[]> {
    return this.prisma.mapSkusToPackage.findMany(args);
  }
  async findOne<T extends Prisma.MapSkusToPackageFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MapSkusToPackageFindUniqueArgs>
  ): Promise<MapSkusToPackage | null> {
    return this.prisma.mapSkusToPackage.findUnique(args);
  }
  async create<T extends Prisma.MapSkusToPackageCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MapSkusToPackageCreateArgs>
  ): Promise<MapSkusToPackage> {
    return this.prisma.mapSkusToPackage.create<T>(args);
  }
  async update<T extends Prisma.MapSkusToPackageUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MapSkusToPackageUpdateArgs>
  ): Promise<MapSkusToPackage> {
    return this.prisma.mapSkusToPackage.update<T>(args);
  }
  async delete<T extends Prisma.MapSkusToPackageDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MapSkusToPackageDeleteArgs>
  ): Promise<MapSkusToPackage> {
    return this.prisma.mapSkusToPackage.delete(args);
  }

  async getPackageId(parentId: string): Promise<SkuPackage | null> {
    return this.prisma.mapSkusToPackage
      .findUnique({
        where: { id: parentId },
      })
      .packageId();
  }

  async getSkuId(parentId: string): Promise<Sku | null> {
    return this.prisma.mapSkusToPackage
      .findUnique({
        where: { id: parentId },
      })
      .skuId();
  }
}