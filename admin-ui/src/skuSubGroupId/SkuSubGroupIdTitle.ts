import { SkuSubGroupId as TSkuSubGroupId } from "../api/skuSubGroupId/SkuSubGroupId";

export const SKUSUBGROUPID_TITLE_FIELD = "skuSubGroupName";

export const SkuSubGroupIdTitle = (record: TSkuSubGroupId): string => {
  return record.skuSubGroupName || record.id;
};
