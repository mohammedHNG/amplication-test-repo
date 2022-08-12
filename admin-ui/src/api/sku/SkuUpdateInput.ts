import { SkuWhereUniqueInput } from "./SkuWhereUniqueInput";
import { SkuUpdateManyWithoutSkusInput } from "./SkuUpdateManyWithoutSkusInput";

export type SkuUpdateInput = {
  inclusions?: SkuWhereUniqueInput | null;
  skuId?: string | null;
  skuName?: string | null;
  skus?: SkuUpdateManyWithoutSkusInput;
  skuType?: "Item" | "Package" | null;
};
