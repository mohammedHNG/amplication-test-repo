import { SortOrder } from "../../util/SortOrder";

export type SkuOrderByInput = {
  createdAt?: SortOrder;
  fulfillmentInfo?: SortOrder;
  id?: SortOrder;
  skuDescription?: SortOrder;
  skuGroupIdId?: SortOrder;
  skuName?: SortOrder;
  skuSubGroupIdId?: SortOrder;
  skuType?: SortOrder;
  updatedAt?: SortOrder;
};
