import { StringFilter } from "../../util/StringFilter";
import { MapSkusToPackageListRelationFilter } from "../mapSkusToPackage/MapSkusToPackageListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type SkuPackageWhereInput = {
  id?: StringFilter;
  mapSkusToPackages?: MapSkusToPackageListRelationFilter;
  packageName?: StringNullableFilter;
  packagePrice?: FloatNullableFilter;
};
