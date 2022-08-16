export type Sku = {
  createdAt: Date;
  id: string;
  inclusions?: Sku | null;
  skuId: string | null;
  skuName: string | null;
  skus?: Array<Sku>;
  skuType?: "Item" | "Package" | null;
  updatedAt: Date;
};
