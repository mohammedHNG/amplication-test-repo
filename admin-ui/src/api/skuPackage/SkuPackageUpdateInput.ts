import { SkuWhereUniqueInput } from "../sku/SkuWhereUniqueInput";

export type SkuPackageUpdateInput = {
  inclusionSkuPrice?: number | null;
  sku?: SkuWhereUniqueInput | null;
};
