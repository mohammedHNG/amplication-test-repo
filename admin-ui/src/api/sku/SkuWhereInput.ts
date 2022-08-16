import { StringFilter } from "../../util/StringFilter";
import { SkuWhereUniqueInput } from "./SkuWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SkuListRelationFilter } from "./SkuListRelationFilter";

export type SkuWhereInput = {
  id?: StringFilter;
  inclusions?: SkuWhereUniqueInput;
  skuId?: StringNullableFilter;
  skuName?: StringNullableFilter;
  skus?: SkuListRelationFilter;
  skuType?: "Item" | "Package";
};
