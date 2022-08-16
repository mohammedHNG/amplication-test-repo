import { SkuGroup } from "../skuGroup/SkuGroup";
import { Sku } from "../sku/Sku";

export type SkuSubGroup = {
  createdAt: Date;
  id: string;
  skuGroupId?: SkuGroup | null;
  skus?: Array<Sku>;
  skuSubGroupName: string | null;
  updatedAt: Date;
};
