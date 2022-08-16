import { SkuPackageWhereUniqueInput } from "../skuPackage/SkuPackageWhereUniqueInput";
import { SkuWhereUniqueInput } from "../sku/SkuWhereUniqueInput";

export type MapSkusToPackageCreateInput = {
  packageId?: SkuPackageWhereUniqueInput | null;
  skuId?: SkuWhereUniqueInput | null;
};
