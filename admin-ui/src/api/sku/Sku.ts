import { JsonValue } from "type-fest";
import { MapSkusToPackage } from "../mapSkusToPackage/MapSkusToPackage";
import { SkuGroup } from "../skuGroup/SkuGroup";
import { SkuSubGroup } from "../skuSubGroup/SkuSubGroup";

export type Sku = {
  createdAt: Date;
  fulfillmentInfo: JsonValue;
  id: string;
  mapSkusToPackages?: Array<MapSkusToPackage>;
  skuDescription: string | null;
  skuGroupId?: SkuGroup | null;
  skuName: string | null;
  skuSubGroupId?: SkuSubGroup | null;
  skuType?: "Item" | "Package" | null;
  updatedAt: Date;
};
