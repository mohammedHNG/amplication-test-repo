import { SkuWhereUniqueInput } from "./SkuWhereUniqueInput";
import { SkuCreateNestedManyWithoutSkusInput } from "./SkuCreateNestedManyWithoutSkusInput";

export type SkuCreateInput = {
  inclusions?: SkuWhereUniqueInput | null;
  skuId?: string | null;
  skuName?: string | null;
  skus?: SkuCreateNestedManyWithoutSkusInput;
  skuType?: "Item" | "Package" | null;
};
