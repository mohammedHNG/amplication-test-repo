import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { SkuWhereUniqueInput } from "../sku/SkuWhereUniqueInput";

export type SkuPackageWhereInput = {
  id?: StringFilter;
  inclusionSkuPrice?: FloatNullableFilter;
  sku?: SkuWhereUniqueInput;
};
