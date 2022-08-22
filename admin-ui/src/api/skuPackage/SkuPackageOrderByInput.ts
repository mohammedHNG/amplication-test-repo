import { SortOrder } from "../../util/SortOrder";

export type SkuPackageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  inclusionSkuId?: SortOrder;
  inclusionSkuPrice?: SortOrder;
  skuId?: SortOrder;
  updatedAt?: SortOrder;
};
