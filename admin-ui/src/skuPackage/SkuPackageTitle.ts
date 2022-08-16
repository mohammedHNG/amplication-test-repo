import { SkuPackage as TSkuPackage } from "../api/skuPackage/SkuPackage";

export const SKUPACKAGE_TITLE_FIELD = "packageName";

export const SkuPackageTitle = (record: TSkuPackage): string => {
  return record.packageName || record.id;
};
