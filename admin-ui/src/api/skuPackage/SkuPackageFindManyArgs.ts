import { SkuPackageWhereInput } from "./SkuPackageWhereInput";
import { SkuPackageOrderByInput } from "./SkuPackageOrderByInput";

export type SkuPackageFindManyArgs = {
  where?: SkuPackageWhereInput;
  orderBy?: Array<SkuPackageOrderByInput>;
  skip?: number;
  take?: number;
};
