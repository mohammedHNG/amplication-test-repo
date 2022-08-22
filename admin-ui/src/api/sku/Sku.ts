import { JsonValue } from "type-fest";
import { SkuGroup } from "../skuGroup/SkuGroup";
import { SkuPackage } from "../skuPackage/SkuPackage";
import { SkuSubGroup } from "../skuSubGroup/SkuSubGroup";

export type Sku = {
  createdAt: Date;
  fulfillmentInfo: JsonValue;
  id: string;
  skuDescription: string | null;
  skuGroupId?: SkuGroup | null;
  skuName: string | null;
  skuPackages?: Array<SkuPackage>;
  skuSubGroupId?: SkuSubGroup | null;
  skuType?: "Item" | "Package" | null;
  updatedAt: Date;
};
