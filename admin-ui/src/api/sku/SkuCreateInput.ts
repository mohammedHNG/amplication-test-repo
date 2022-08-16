import { InputJsonValue } from "../../types";
import { MapSkusToPackageCreateNestedManyWithoutSkusInput } from "./MapSkusToPackageCreateNestedManyWithoutSkusInput";
import { SkuGroupWhereUniqueInput } from "../skuGroup/SkuGroupWhereUniqueInput";
import { SkuSubGroupWhereUniqueInput } from "../skuSubGroup/SkuSubGroupWhereUniqueInput";

export type SkuCreateInput = {
  fulfillmentInfo?: InputJsonValue;
  mapSkusToPackages?: MapSkusToPackageCreateNestedManyWithoutSkusInput;
  skuDescription?: string | null;
  skuGroupId?: SkuGroupWhereUniqueInput | null;
  skuName?: string | null;
  skuSubGroupId?: SkuSubGroupWhereUniqueInput | null;
  skuType?: "Item" | "Package" | null;
};
