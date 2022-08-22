import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { SkuPackageListRelationFilter } from "../skuPackage/SkuPackageListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SkuGroupWhereUniqueInput } from "../skuGroup/SkuGroupWhereUniqueInput";

export type SkuWhereInput = {
  fulfillmentInfo?: JsonFilter;
  id?: StringFilter;
  inclusionSku?: SkuPackageListRelationFilter;
  skuDescription?: StringNullableFilter;
  skuGroupId?: SkuGroupWhereUniqueInput;
  skuName?: StringNullableFilter;
  skuPackages?: SkuPackageListRelationFilter;
  skuType?: "Item" | "Package";
};
