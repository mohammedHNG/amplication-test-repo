import { Module } from "@nestjs/common";
import { SkuGroupModuleBase } from "./base/skuGroup.module.base";
import { SkuGroupService } from "./skuGroup.service";
import { SkuGroupController } from "./skuGroup.controller";
import { SkuGroupResolver } from "./skuGroup.resolver";

@Module({
  imports: [SkuGroupModuleBase],
  controllers: [SkuGroupController],
  providers: [SkuGroupService, SkuGroupResolver],
  exports: [SkuGroupService],
})
export class SkuGroupModule {}
