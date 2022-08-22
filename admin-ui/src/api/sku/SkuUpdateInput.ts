import { InputJsonValue } from "../../types";
import { SkuGroupWhereUniqueInput } from "../skuGroup/SkuGroupWhereUniqueInput";
import { SkuPackageUpdateManyWithoutSkusInput } from "./SkuPackageUpdateManyWithoutSkusInput";
import { SkuSubGroupWhereUniqueInput } from "../skuSubGroup/SkuSubGroupWhereUniqueInput";

export type SkuUpdateInput = {
  fulfillmentInfo?: InputJsonValue;
  skuDescription?: string | null;
  skuGroupId?: SkuGroupWhereUniqueInput | null;
  skuName?: string | null;
  skuPackages?: SkuPackageUpdateManyWithoutSkusInput;
  skuSubGroupId?: SkuSubGroupWhereUniqueInput | null;
  skuType?: "Item" | "Package" | null;
};
