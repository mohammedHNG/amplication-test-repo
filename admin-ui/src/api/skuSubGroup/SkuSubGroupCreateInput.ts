import { SkuGroupWhereUniqueInput } from "../skuGroup/SkuGroupWhereUniqueInput";
import { SkuCreateNestedManyWithoutSkuSubGroupsInput } from "./SkuCreateNestedManyWithoutSkuSubGroupsInput";

export type SkuSubGroupCreateInput = {
  skuGroupId?: SkuGroupWhereUniqueInput | null;
  skus?: SkuCreateNestedManyWithoutSkuSubGroupsInput;
  skuSubGroupName?: string | null;
};
