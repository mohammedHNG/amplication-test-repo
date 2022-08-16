import { Sku } from "../sku/Sku";

export type SkuPackage = {
  createdAt: Date;
  id: string;
  sku?: Sku | null;
  skus?: Array<Sku>;
  updatedAt: Date;
};
