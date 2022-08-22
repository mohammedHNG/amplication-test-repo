import { SkuUpdateManyWithoutSkuGroupsInput } from "./SkuUpdateManyWithoutSkuGroupsInput";
import { SkuSubGroupIdUpdateManyWithoutSkuGroupsInput } from "./SkuSubGroupIdUpdateManyWithoutSkuGroupsInput";

export type SkuGroupUpdateInput = {
  skuGroupName?: string | null;
  skus?: SkuUpdateManyWithoutSkuGroupsInput;
  skuSubGroups?: SkuSubGroupIdUpdateManyWithoutSkuGroupsInput;
};
