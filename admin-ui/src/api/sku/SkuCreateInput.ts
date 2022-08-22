import { InputJsonValue } from "../../types";
import { SkuPackageCreateNestedManyWithoutSkusInput } from "./SkuPackageCreateNestedManyWithoutSkusInput";
import { SkuGroupWhereUniqueInput } from "../skuGroup/SkuGroupWhereUniqueInput";
import { SkuSubGroupWhereUniqueInput } from "../skuSubGroup/SkuSubGroupWhereUniqueInput";

export type SkuCreateInput = {
  fulfillmentInfo?: InputJsonValue;
  inclusionSku?: SkuPackageCreateNestedManyWithoutSkusInput;
  skuDescription?: string | null;
  skuGroupId?: SkuGroupWhereUniqueInput | null;
  skuName?: string | null;
  skuPackages?: SkuPackageCreateNestedManyWithoutSkusInput;
  skuSubGroupId?: SkuSubGroupWhereUniqueInput | null;
  skuType?: "Item" | "Package" | null;
};
