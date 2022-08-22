import { InputJsonValue } from "../../types";
import { SkuGroupWhereUniqueInput } from "../skuGroup/SkuGroupWhereUniqueInput";
import { SkuPackageCreateNestedManyWithoutSkusInput } from "./SkuPackageCreateNestedManyWithoutSkusInput";
import { SkuSubGroupWhereUniqueInput } from "../skuSubGroup/SkuSubGroupWhereUniqueInput";

export type SkuCreateInput = {
  fulfillmentInfo?: InputJsonValue;
  skuDescription?: string | null;
  skuGroupId?: SkuGroupWhereUniqueInput | null;
  skuName?: string | null;
  skuPackages?: SkuPackageCreateNestedManyWithoutSkusInput;
  skuSubGroupId?: SkuSubGroupWhereUniqueInput | null;
  skuType?: "Item" | "Package" | null;
};
