import { Sku as TSku } from "../api/sku/Sku";

export const SKU_TITLE_FIELD = "skuName";

export const SkuTitle = (record: TSku): string => {
  return record.skuName || record.id;
};
