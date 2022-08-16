import { Sku } from "../sku/Sku";
import { SkuSubGroup } from "../skuSubGroup/SkuSubGroup";

export type SkuGroup = {
  createdAt: Date;
  id: string;
  skuGroupName: string | null;
  skus?: Array<Sku>;
  skuSubGroups?: Array<SkuSubGroup>;
  updatedAt: Date;
};
