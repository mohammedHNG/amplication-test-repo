import { SortOrder } from "../../util/SortOrder";

export type SkuOrderByInput = {
  createdAt?: SortOrder;
  fulfillmentInfo?: SortOrder;
  id?: SortOrder;
  inclusionsId?: SortOrder;
  skuId?: SortOrder;
  skuName?: SortOrder;
  skuType?: SortOrder;
  updatedAt?: SortOrder;
};
