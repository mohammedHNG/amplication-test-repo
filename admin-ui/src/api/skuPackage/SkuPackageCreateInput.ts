import { SkuWhereUniqueInput } from "../sku/SkuWhereUniqueInput";

export type SkuPackageCreateInput = {
  inclusionSku?: SkuWhereUniqueInput | null;
  inclusionSkuPrice?: number | null;
  sku?: SkuWhereUniqueInput | null;
};
