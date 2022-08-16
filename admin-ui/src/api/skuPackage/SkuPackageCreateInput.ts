import { MapSkusToPackageCreateNestedManyWithoutSkuPackagesInput } from "./MapSkusToPackageCreateNestedManyWithoutSkuPackagesInput";

export type SkuPackageCreateInput = {
  mapSkusToPackages?: MapSkusToPackageCreateNestedManyWithoutSkuPackagesInput;
  packageName?: string | null;
  packagePrice?: number | null;
};
