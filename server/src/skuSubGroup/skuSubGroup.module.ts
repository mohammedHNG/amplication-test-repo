import { Module } from "@nestjs/common";
import { SkuSubGroupModuleBase } from "./base/skuSubGroup.module.base";
import { SkuSubGroupService } from "./skuSubGroup.service";
import { SkuSubGroupController } from "./skuSubGroup.controller";
import { SkuSubGroupResolver } from "./skuSubGroup.resolver";

@Module({
  imports: [SkuSubGroupModuleBase],
  controllers: [SkuSubGroupController],
  providers: [SkuSubGroupService, SkuSubGroupResolver],
  exports: [SkuSubGroupService],
})
export class SkuSubGroupModule {}
