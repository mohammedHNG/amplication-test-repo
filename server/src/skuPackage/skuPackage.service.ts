import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SkuPackageServiceBase } from "./base/skuPackage.service.base";

@Injectable()
export class SkuPackageService extends SkuPackageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
