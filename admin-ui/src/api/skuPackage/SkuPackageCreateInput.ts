import { SkuWhereUniqueInput } from "../sku/SkuWhereUniqueInput";
import { SkuCreateNestedManyWithoutSkuPackagesInput } from "./SkuCreateNestedManyWithoutSkuPackagesInput";

export type SkuPackageCreateInput = {
  sku?: SkuWhereUniqueInput | null;
  skus?: SkuCreateNestedManyWithoutSkuPackagesInput;
};
