import { SkuPackage } from "../skuPackage/SkuPackage";
import { Sku } from "../sku/Sku";

export type MapSkusToPackage = {
  createdAt: Date;
  id: string;
  packageId?: SkuPackage | null;
  skuId?: Sku | null;
  updatedAt: Date;
};
