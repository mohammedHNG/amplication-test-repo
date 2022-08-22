import { SkuGroupWhereUniqueInput } from "../skuGroup/SkuGroupWhereUniqueInput";
import { SkuUpdateManyWithoutSkuSubGroupIdsInput } from "./SkuUpdateManyWithoutSkuSubGroupIdsInput";

export type SkuSubGroupIdUpdateInput = {
  skuGroupId?: SkuGroupWhereUniqueInput | null;
  skus?: SkuUpdateManyWithoutSkuSubGroupIdsInput;
  skuSubGroupName?: string | null;
};
