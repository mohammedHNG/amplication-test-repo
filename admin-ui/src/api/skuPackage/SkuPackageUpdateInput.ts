import { MapSkusToPackageUpdateManyWithoutSkuPackagesInput } from "./MapSkusToPackageUpdateManyWithoutSkuPackagesInput";

export type SkuPackageUpdateInput = {
  mapSkusToPackages?: MapSkusToPackageUpdateManyWithoutSkuPackagesInput;
  packageName?: string | null;
  packagePrice?: number | null;
};
