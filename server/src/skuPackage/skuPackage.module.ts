import { Module } from "@nestjs/common";
import { SkuPackageModuleBase } from "./base/skuPackage.module.base";
import { SkuPackageService } from "./skuPackage.service";
import { SkuPackageController } from "./skuPackage.controller";
import { SkuPackageResolver } from "./skuPackage.resolver";

@Module({
  imports: [SkuPackageModuleBase],
  controllers: [SkuPackageController],
  providers: [SkuPackageService, SkuPackageResolver],
  exports: [SkuPackageService],
})
export class SkuPackageModule {}
