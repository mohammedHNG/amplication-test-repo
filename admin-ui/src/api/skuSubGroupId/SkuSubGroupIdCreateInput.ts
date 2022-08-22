import { SkuGroupWhereUniqueInput } from "../skuGroup/SkuGroupWhereUniqueInput";
import { SkuCreateNestedManyWithoutSkuSubGroupIdsInput } from "./SkuCreateNestedManyWithoutSkuSubGroupIdsInput";

export type SkuSubGroupIdCreateInput = {
  skuGroupId?: SkuGroupWhereUniqueInput | null;
  skus?: SkuCreateNestedManyWithoutSkuSubGroupIdsInput;
  skuSubGroupName?: string | null;
};
