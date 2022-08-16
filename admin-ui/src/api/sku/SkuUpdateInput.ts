import { InputJsonValue } from "../../types";
import { SkuPackageWhereUniqueInput } from "../skuPackage/SkuPackageWhereUniqueInput";
import { SkuPackageUpdateManyWithoutSkusInput } from "./SkuPackageUpdateManyWithoutSkusInput";

export type SkuUpdateInput = {
  fulfillmentInfo?: InputJsonValue;
  packages?: SkuPackageWhereUniqueInput | null;
  skuDescription?: string | null;
  skuId?: string | null;
  skuName?: string | null;
  skuPackages?: SkuPackageUpdateManyWithoutSkusInput;
  skuType?: "Item" | "Package" | null;
};
