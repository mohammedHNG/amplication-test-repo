import { SkuCreateNestedManyWithoutSkuGroupsInput } from "./SkuCreateNestedManyWithoutSkuGroupsInput";
import { SkuSubGroupCreateNestedManyWithoutSkuGroupsInput } from "./SkuSubGroupCreateNestedManyWithoutSkuGroupsInput";

export type SkuGroupCreateInput = {
  skuGroupName?: string | null;
  skus?: SkuCreateNestedManyWithoutSkuGroupsInput;
  skuSubGroups?: SkuSubGroupCreateNestedManyWithoutSkuGroupsInput;
};
