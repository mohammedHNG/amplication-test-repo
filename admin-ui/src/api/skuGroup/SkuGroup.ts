import { Sku } from "../sku/Sku";
import { SkuSubGroupId } from "../skuSubGroupId/SkuSubGroupId";

export type SkuGroup = {
  createdAt: Date;
  id: string;
  skuGroupName: string | null;
  skus?: Array<Sku>;
  skuSubGroups?: Array<SkuSubGroupId>;
  updatedAt: Date;
};
