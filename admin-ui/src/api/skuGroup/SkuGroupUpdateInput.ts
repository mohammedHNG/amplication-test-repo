import { SkuUpdateManyWithoutSkuGroupsInput } from "./SkuUpdateManyWithoutSkuGroupsInput";
import { SkuSubGroupUpdateManyWithoutSkuGroupsInput } from "./SkuSubGroupUpdateManyWithoutSkuGroupsInput";

export type SkuGroupUpdateInput = {
  skuGroupName?: string | null;
  skus?: SkuUpdateManyWithoutSkuGroupsInput;
  skuSubGroups?: SkuSubGroupUpdateManyWithoutSkuGroupsInput;
};
