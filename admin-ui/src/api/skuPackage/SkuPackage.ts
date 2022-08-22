import { Sku } from "../sku/Sku";

export type SkuPackage = {
  createdAt: Date;
  id: string;
  inclusionSkuPrice: number | null;
  sku?: Sku | null;
  updatedAt: Date;
};
