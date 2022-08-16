import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SkuGroupServiceBase } from "./base/skuGroup.service.base";

@Injectable()
export class SkuGroupService extends SkuGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
