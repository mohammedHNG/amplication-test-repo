import { JsonValue } from "type-fest";
import { SkuPackage } from "../skuPackage/SkuPackage";

export type Sku = {
  createdAt: Date;
  fulfillmentInfo: JsonValue;
  id: string;
  packages?: SkuPackage | null;
  skuDescription: string | null;
  skuId: string | null;
  skuName: string | null;
  skuPackages?: Array<SkuPackage>;
  skuType?: "Item" | "Package" | null;
  updatedAt: Date;
};
