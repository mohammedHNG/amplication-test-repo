import { SkuGroupWhereUniqueInput } from "../skuGroup/SkuGroupWhereUniqueInput";
import { SkuUpdateManyWithoutSkuSubGroupsInput } from "./SkuUpdateManyWithoutSkuSubGroupsInput";

export type SkuSubGroupUpdateInput = {
  skuGroupId?: SkuGroupWhereUniqueInput | null;
  skus?: SkuUpdateManyWithoutSkuSubGroupsInput;
  skuSubGroupName?: string | null;
};
