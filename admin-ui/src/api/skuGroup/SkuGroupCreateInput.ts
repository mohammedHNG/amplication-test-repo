import { SkuCreateNestedManyWithoutSkuGroupsInput } from "./SkuCreateNestedManyWithoutSkuGroupsInput";
import { SkuSubGroupIdCreateNestedManyWithoutSkuGroupsInput } from "./SkuSubGroupIdCreateNestedManyWithoutSkuGroupsInput";

export type SkuGroupCreateInput = {
  skuGroupName?: string | null;
  skus?: SkuCreateNestedManyWithoutSkuGroupsInput;
  skuSubGroups?: SkuSubGroupIdCreateNestedManyWithoutSkuGroupsInput;
};
