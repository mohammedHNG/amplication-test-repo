import { InputJsonValue } from "../../types";
import { SkuGroupWhereUniqueInput } from "../skuGroup/SkuGroupWhereUniqueInput";
import { SkuPackageCreateNestedManyWithoutSkusInput } from "./SkuPackageCreateNestedManyWithoutSkusInput";
import { SkuSubGroupIdWhereUniqueInput } from "../skuSubGroupId/SkuSubGroupIdWhereUniqueInput";

export type SkuCreateInput = {
  fulfillmentInfo?: InputJsonValue;
  skuDescription?: string | null;
  skuGroupId?: SkuGroupWhereUniqueInput | null;
  skuName?: string | null;
  skuPackages?: SkuPackageCreateNestedManyWithoutSkusInput;
  skuSubGroupId?: SkuSubGroupIdWhereUniqueInput | null;
  skuType?: "Item" | "Package" | null;
};
