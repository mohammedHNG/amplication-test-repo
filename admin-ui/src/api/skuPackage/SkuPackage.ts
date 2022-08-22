import { Sku } from "../sku/Sku";

export type SkuPackage = {
  createdAt: Date;
  id: string;
  inclusionSku?: Sku | null;
  inclusionSkuPrice: number | null;
  sku?: Sku | null;
  updatedAt: Date;
};
