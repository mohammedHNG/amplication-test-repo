import { SkuWhereUniqueInput } from "../sku/SkuWhereUniqueInput";
import { SkuUpdateManyWithoutSkuPackagesInput } from "./SkuUpdateManyWithoutSkuPackagesInput";

export type SkuPackageUpdateInput = {
  sku?: SkuWhereUniqueInput | null;
  skus?: SkuUpdateManyWithoutSkuPackagesInput;
};
