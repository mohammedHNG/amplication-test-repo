/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SkuWhereUniqueInput } from "../../sku/base/SkuWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { SkuUpdateManyWithoutSkuPackagesInput } from "./SkuUpdateManyWithoutSkuPackagesInput";
@InputType()
class SkuPackageUpdateInput {
  @ApiProperty({
    required: false,
    type: () => SkuWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SkuWhereUniqueInput)
  @IsOptional()
  @Field(() => SkuWhereUniqueInput, {
    nullable: true,
  })
  sku?: SkuWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => SkuUpdateManyWithoutSkuPackagesInput,
  })
  @ValidateNested()
  @Type(() => SkuUpdateManyWithoutSkuPackagesInput)
  @IsOptional()
  @Field(() => SkuUpdateManyWithoutSkuPackagesInput, {
    nullable: true,
  })
  skus?: SkuUpdateManyWithoutSkuPackagesInput;
}
export { SkuPackageUpdateInput };
