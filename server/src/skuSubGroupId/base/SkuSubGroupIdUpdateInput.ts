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
import { SkuGroupWhereUniqueInput } from "../../skuGroup/base/SkuGroupWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { SkuUpdateManyWithoutSkuSubGroupIdsInput } from "./SkuUpdateManyWithoutSkuSubGroupIdsInput";
@InputType()
class SkuSubGroupIdUpdateInput {
  @ApiProperty({
    required: false,
    type: () => SkuGroupWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SkuGroupWhereUniqueInput)
  @IsOptional()
  @Field(() => SkuGroupWhereUniqueInput, {
    nullable: true,
  })
  skuGroupId?: SkuGroupWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => SkuUpdateManyWithoutSkuSubGroupIdsInput,
  })
  @ValidateNested()
  @Type(() => SkuUpdateManyWithoutSkuSubGroupIdsInput)
  @IsOptional()
  @Field(() => SkuUpdateManyWithoutSkuSubGroupIdsInput, {
    nullable: true,
  })
  skus?: SkuUpdateManyWithoutSkuSubGroupIdsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  skuSubGroupName?: string | null;
}
export { SkuSubGroupIdUpdateInput };