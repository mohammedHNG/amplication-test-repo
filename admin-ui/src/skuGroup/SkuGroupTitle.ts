import { SkuGroup as TSkuGroup } from "../api/skuGroup/SkuGroup";

export const SKUGROUP_TITLE_FIELD = "skuGroupName";

export const SkuGroupTitle = (record: TSkuGroup): string => {
  return record.skuGroupName || record.id;
};
