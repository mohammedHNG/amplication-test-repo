import { InputJsonValue } from "../../types";
import { SkuWhereUniqueInput } from "./SkuWhereUniqueInput";
import { SkuPackageUpdateManyWithoutSkusInput } from "./SkuPackageUpdateManyWithoutSkusInput";
import { SkuUpdateManyWithoutSkusInput } from "./SkuUpdateManyWithoutSkusInput";

export type SkuUpdateInput = {
  fulfillmentInfo?: InputJsonValue;
  inclusions?: SkuWhereUniqueInput | null;
  skuId?: string | null;
  skuName?: string | null;
  skuPackages?: SkuPackageUpdateManyWithoutSkusInput;
  skus?: SkuUpdateManyWithoutSkusInput;
  skuType?: "Item" | "Package" | null;
};
