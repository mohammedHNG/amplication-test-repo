import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { MapSkusToPackageListRelationFilter } from "../mapSkusToPackage/MapSkusToPackageListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SkuGroupWhereUniqueInput } from "../skuGroup/SkuGroupWhereUniqueInput";

export type SkuWhereInput = {
  fulfillmentInfo?: JsonFilter;
  id?: StringFilter;
  mapSkusToPackages?: MapSkusToPackageListRelationFilter;
  skuDescription?: StringNullableFilter;
  skuGroupId?: SkuGroupWhereUniqueInput;
  skuName?: StringNullableFilter;
  skuType?: "Item" | "Package";
};
