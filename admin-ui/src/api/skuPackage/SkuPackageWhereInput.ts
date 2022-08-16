import { StringFilter } from "../../util/StringFilter";
import { SkuWhereUniqueInput } from "../sku/SkuWhereUniqueInput";

export type SkuPackageWhereInput = {
  id?: StringFilter;
  sku?: SkuWhereUniqueInput;
};
