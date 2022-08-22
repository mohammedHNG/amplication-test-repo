import { SkuPackage as TSkuPackage } from "../api/skuPackage/SkuPackage";

export const SKUPACKAGE_TITLE_FIELD = "id";

export const SkuPackageTitle = (record: TSkuPackage): string => {
  return record.id || record.id;
};
