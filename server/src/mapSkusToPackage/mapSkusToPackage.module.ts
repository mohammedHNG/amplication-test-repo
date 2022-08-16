import { Module } from "@nestjs/common";
import { MapSkusToPackageModuleBase } from "./base/mapSkusToPackage.module.base";
import { MapSkusToPackageService } from "./mapSkusToPackage.service";
import { MapSkusToPackageController } from "./mapSkusToPackage.controller";
import { MapSkusToPackageResolver } from "./mapSkusToPackage.resolver";

@Module({
  imports: [MapSkusToPackageModuleBase],
  controllers: [MapSkusToPackageController],
  providers: [MapSkusToPackageService, MapSkusToPackageResolver],
  exports: [MapSkusToPackageService],
})
export class MapSkusToPackageModule {}
