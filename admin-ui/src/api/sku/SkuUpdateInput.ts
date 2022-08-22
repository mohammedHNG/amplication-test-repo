import { InputJsonValue } from "../../types";
import { SkuPackageUpdateManyWithoutSkusInput } from "./SkuPackageUpdateManyWithoutSkusInput";
import { SkuGroupWhereUniqueInput } from "../skuGroup/SkuGroupWhereUniqueInput";
import { SkuSubGroupWhereUniqueInput } from "../skuSubGroup/SkuSubGroupWhereUniqueInput";

export type SkuUpdateInput = {
  fulfillmentInfo?: InputJsonValue;
  inclusionSku?: SkuPackageUpdateManyWithoutSkusInput;
  skuDescription?: string | null;
  skuGroupId?: SkuGroupWhereUniqueInput | null;
  skuName?: string | null;
  skuPackages?: SkuPackageUpdateManyWithoutSkusInput;
  skuSubGroupId?: SkuSubGroupWhereUniqueInput | null;
  skuType?: "Item" | "Package" | null;
};
