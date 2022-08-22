import { SkuWhereUniqueInput } from "../sku/SkuWhereUniqueInput";

export type SkuPackageCreateInput = {
  inclusionSkuPrice?: number | null;
  sku?: SkuWhereUniqueInput | null;
};
