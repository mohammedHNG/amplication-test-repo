import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SkuListRelationFilter } from "../sku/SkuListRelationFilter";
import { SkuSubGroupIdListRelationFilter } from "../skuSubGroupId/SkuSubGroupIdListRelationFilter";

export type SkuGroupWhereInput = {
  id?: StringFilter;
  skuGroupName?: StringNullableFilter;
  skus?: SkuListRelationFilter;
  skuSubGroups?: SkuSubGroupIdListRelationFilter;
};
