import { StringFilter } from "../../util/StringFilter";
import { SkuWhereUniqueInput } from "../sku/SkuWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type SkuPackageWhereInput = {
  id?: StringFilter;
  inclusionSku?: SkuWhereUniqueInput;
  inclusionSkuPrice?: FloatNullableFilter;
  sku?: SkuWhereUniqueInput;
};
