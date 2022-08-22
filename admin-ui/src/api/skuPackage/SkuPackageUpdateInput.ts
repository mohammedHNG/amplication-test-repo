import { SkuWhereUniqueInput } from "../sku/SkuWhereUniqueInput";

export type SkuPackageUpdateInput = {
  inclusionSku?: SkuWhereUniqueInput | null;
  inclusionSkuPrice?: number | null;
  sku?: SkuWhereUniqueInput | null;
};
