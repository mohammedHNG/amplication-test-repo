import { SkuSubGroup as TSkuSubGroup } from "../api/skuSubGroup/SkuSubGroup";

export const SKUSUBGROUP_TITLE_FIELD = "skuSubGroupName";

export const SkuSubGroupTitle = (record: TSkuSubGroup): string => {
  return record.skuSubGroupName || record.id;
};
