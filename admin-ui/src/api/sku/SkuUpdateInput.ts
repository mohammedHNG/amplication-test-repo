import { InputJsonValue } from "../../types";
import { SkuGroupWhereUniqueInput } from "../skuGroup/SkuGroupWhereUniqueInput";
import { SkuPackageUpdateManyWithoutSkusInput } from "./SkuPackageUpdateManyWithoutSkusInput";
import { SkuSubGroupIdWhereUniqueInput } from "../skuSubGroupId/SkuSubGroupIdWhereUniqueInput";

export type SkuUpdateInput = {
  fulfillmentInfo?: InputJsonValue;
  skuDescription?: string | null;
  skuGroupId?: SkuGroupWhereUniqueInput | null;
  skuName?: string | null;
  skuPackages?: SkuPackageUpdateManyWithoutSkusInput;
  skuSubGroupId?: SkuSubGroupIdWhereUniqueInput | null;
  skuType?: "Item" | "Package" | null;
};
