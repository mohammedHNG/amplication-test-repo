import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SkuSubGroupIdServiceBase } from "./base/skuSubGroupId.service.base";

@Injectable()
export class SkuSubGroupIdService extends SkuSubGroupIdServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
