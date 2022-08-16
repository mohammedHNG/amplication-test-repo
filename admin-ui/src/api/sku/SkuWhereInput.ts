import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { SkuWhereUniqueInput } from "./SkuWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SkuPackageListRelationFilter } from "../skuPackage/SkuPackageListRelationFilter";
import { SkuListRelationFilter } from "./SkuListRelationFilter";

export type SkuWhereInput = {
  fulfillmentInfo?: JsonFilter;
  id?: StringFilter;
  inclusions?: SkuWhereUniqueInput;
  skuDescription?: StringNullableFilter;
  skuId?: StringNullableFilter;
  skuName?: StringNullableFilter;
  skuPackages?: SkuPackageListRelationFilter;
  skus?: SkuListRelationFilter;
  skuType?: "Item" | "Package";
};
