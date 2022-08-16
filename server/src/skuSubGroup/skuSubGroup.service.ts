import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SkuSubGroupServiceBase } from "./base/skuSubGroup.service.base";

@Injectable()
export class SkuSubGroupService extends SkuSubGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
