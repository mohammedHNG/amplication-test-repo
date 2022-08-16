import { StringFilter } from "../../util/StringFilter";
import { SkuWhereUniqueInput } from "../sku/SkuWhereUniqueInput";
import { SkuListRelationFilter } from "../sku/SkuListRelationFilter";

export type SkuPackageWhereInput = {
  id?: StringFilter;
  sku?: SkuWhereUniqueInput;
  skus?: SkuListRelationFilter;
};
