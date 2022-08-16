import { SkuPackageWhereUniqueInput } from "../skuPackage/SkuPackageWhereUniqueInput";
import { SkuWhereUniqueInput } from "../sku/SkuWhereUniqueInput";

export type MapSkusToPackageUpdateInput = {
  packageId?: SkuPackageWhereUniqueInput | null;
  skuId?: SkuWhereUniqueInput | null;
};
