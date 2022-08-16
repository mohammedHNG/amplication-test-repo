import { SkuGroupWhereInput } from "./SkuGroupWhereInput";
import { SkuGroupOrderByInput } from "./SkuGroupOrderByInput";

export type SkuGroupFindManyArgs = {
  where?: SkuGroupWhereInput;
  orderBy?: Array<SkuGroupOrderByInput>;
  skip?: number;
  take?: number;
};
