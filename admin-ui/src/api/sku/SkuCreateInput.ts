import { InputJsonValue } from "../../types";
import { SkuWhereUniqueInput } from "./SkuWhereUniqueInput";
import { SkuPackageCreateNestedManyWithoutSkusInput } from "./SkuPackageCreateNestedManyWithoutSkusInput";
import { SkuCreateNestedManyWithoutSkusInput } from "./SkuCreateNestedManyWithoutSkusInput";

export type SkuCreateInput = {
  fulfillmentInfo?: InputJsonValue;
  inclusions?: SkuWhereUniqueInput | null;
  skuDescription?: string | null;
  skuId?: string | null;
  skuName?: string | null;
  skuPackages?: SkuPackageCreateNestedManyWithoutSkusInput;
  skus?: SkuCreateNestedManyWithoutSkusInput;
  skuType?: "Item" | "Package" | null;
};
