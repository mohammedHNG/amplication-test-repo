import { Module } from "@nestjs/common";
import { SkuModuleBase } from "./base/sku.module.base";
import { SkuService } from "./sku.service";
import { SkuController } from "./sku.controller";
import { SkuResolver } from "./sku.resolver";

@Module({
  imports: [SkuModuleBase],
  controllers: [SkuController],
  providers: [SkuService, SkuResolver],
  exports: [SkuService],
})
export class SkuModule {}
