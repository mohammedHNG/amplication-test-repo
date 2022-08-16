import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { SkuPackageWhereUniqueInput } from "../skuPackage/SkuPackageWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SkuPackageListRelationFilter } from "../skuPackage/SkuPackageListRelationFilter";

export type SkuWhereInput = {
  fulfillmentInfo?: JsonFilter;
  id?: StringFilter;
  packages?: SkuPackageWhereUniqueInput;
  skuDescription?: StringNullableFilter;
  skuId?: StringNullableFilter;
  skuName?: StringNullableFilter;
  skuPackages?: SkuPackageListRelationFilter;
  skuType?: "Item" | "Package";
};
