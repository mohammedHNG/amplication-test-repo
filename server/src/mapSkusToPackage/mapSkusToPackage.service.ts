import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { MapSkusToPackageServiceBase } from "./base/mapSkusToPackage.service.base";

@Injectable()
export class MapSkusToPackageService extends MapSkusToPackageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
