import { StringFilter } from "../../util/StringFilter";
import { SkuListRelationFilter } from "../sku/SkuListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SkuSubGroupIdWhereInput = {
  id?: StringFilter;
  skus?: SkuListRelationFilter;
  skuSubGroupName?: StringNullableFilter;
};
