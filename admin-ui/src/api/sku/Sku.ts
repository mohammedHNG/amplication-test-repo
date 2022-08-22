import { JsonValue } from "type-fest";
import { SkuGroup } from "../skuGroup/SkuGroup";
import { SkuPackage } from "../skuPackage/SkuPackage";
import { SkuSubGroupId } from "../skuSubGroupId/SkuSubGroupId";

export type Sku = {
  createdAt: Date;
  fulfillmentInfo: JsonValue;
  id: string;
  skuDescription: string | null;
  skuGroupId?: SkuGroup | null;
  skuName: string | null;
  skuPackages?: Array<SkuPackage>;
  skuSubGroupId?: SkuSubGroupId | null;
  skuType?: "Item" | "Package" | null;
  updatedAt: Date;
};
