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
import { ValidateNested, IsOptional, IsNumber } from "class-validator";
import { Type } from "class-transformer";
@InputType()
class SkuPackageCreateInput {
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
  inclusionSku?: SkuWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  inclusionSkuPrice?: number | null;

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
}
export { SkuPackageCreateInput };
