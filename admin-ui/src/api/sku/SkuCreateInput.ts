import { InputJsonValue } from "../../types";
import { SkuPackageWhereUniqueInput } from "../skuPackage/SkuPackageWhereUniqueInput";
import { SkuPackageCreateNestedManyWithoutSkusInput } from "./SkuPackageCreateNestedManyWithoutSkusInput";

export type SkuCreateInput = {
  fulfillmentInfo?: InputJsonValue;
  packages?: SkuPackageWhereUniqueInput | null;
  skuDescription?: string | null;
  skuId?: string | null;
  skuName?: string | null;
  skuPackages?: SkuPackageCreateNestedManyWithoutSkusInput;
  skuType?: "Item" | "Package" | null;
};
