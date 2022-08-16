import { InputJsonValue } from "../../types";
import { MapSkusToPackageUpdateManyWithoutSkusInput } from "./MapSkusToPackageUpdateManyWithoutSkusInput";
import { SkuGroupWhereUniqueInput } from "../skuGroup/SkuGroupWhereUniqueInput";
import { SkuSubGroupWhereUniqueInput } from "../skuSubGroup/SkuSubGroupWhereUniqueInput";

export type SkuUpdateInput = {
  fulfillmentInfo?: InputJsonValue;
  mapSkusToPackages?: MapSkusToPackageUpdateManyWithoutSkusInput;
  skuDescription?: string | null;
  skuGroupId?: SkuGroupWhereUniqueInput | null;
  skuName?: string | null;
  skuSubGroupId?: SkuSubGroupWhereUniqueInput | null;
  skuType?: "Item" | "Package" | null;
};
