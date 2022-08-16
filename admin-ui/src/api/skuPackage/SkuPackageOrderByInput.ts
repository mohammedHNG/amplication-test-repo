import { SortOrder } from "../../util/SortOrder";

export type SkuPackageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  packageName?: SortOrder;
  packagePrice?: SortOrder;
  updatedAt?: SortOrder;
};
