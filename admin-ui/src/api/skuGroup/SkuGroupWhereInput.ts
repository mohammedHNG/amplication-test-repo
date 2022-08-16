import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SkuListRelationFilter } from "../sku/SkuListRelationFilter";
import { SkuSubGroupListRelationFilter } from "../skuSubGroup/SkuSubGroupListRelationFilter";

export type SkuGroupWhereInput = {
  id?: StringFilter;
  skuGroupName?: StringNullableFilter;
  skus?: SkuListRelationFilter;
  skuSubGroups?: SkuSubGroupListRelationFilter;
};
