import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SkuGroupWhereUniqueInput } from "../skuGroup/SkuGroupWhereUniqueInput";
import { SkuPackageListRelationFilter } from "../skuPackage/SkuPackageListRelationFilter";
import { SkuSubGroupWhereUniqueInput } from "../skuSubGroup/SkuSubGroupWhereUniqueInput";

export type SkuWhereInput = {
  fulfillmentInfo?: JsonFilter;
  id?: StringFilter;
  skuDescription?: StringNullableFilter;
  skuGroupId?: SkuGroupWhereUniqueInput;
  skuName?: StringNullableFilter;
  skuPackages?: SkuPackageListRelationFilter;
  skuSubGroupId?: SkuSubGroupWhereUniqueInput;
  skuType?: "Item" | "Package";
};
