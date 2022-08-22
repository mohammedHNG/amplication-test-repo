import { Module } from "@nestjs/common";
import { SkuSubGroupIdModuleBase } from "./base/skuSubGroupId.module.base";
import { SkuSubGroupIdService } from "./skuSubGroupId.service";
import { SkuSubGroupIdController } from "./skuSubGroupId.controller";
import { SkuSubGroupIdResolver } from "./skuSubGroupId.resolver";

@Module({
  imports: [SkuSubGroupIdModuleBase],
  controllers: [SkuSubGroupIdController],
  providers: [SkuSubGroupIdService, SkuSubGroupIdResolver],
  exports: [SkuSubGroupIdService],
})
export class SkuSubGroupIdModule {}
