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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { SkuCreateNestedManyWithoutSkuGroupsInput } from "./SkuCreateNestedManyWithoutSkuGroupsInput";
import { Type } from "class-transformer";
import { SkuSubGroupCreateNestedManyWithoutSkuGroupsInput } from "./SkuSubGroupCreateNestedManyWithoutSkuGroupsInput";
@InputType()
class SkuGroupCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  skuGroupName?: string | null;

  @ApiProperty({
    required: false,
    type: () => SkuCreateNestedManyWithoutSkuGroupsInput,
  })
  @ValidateNested()
  @Type(() => SkuCreateNestedManyWithoutSkuGroupsInput)
  @IsOptional()
  @Field(() => SkuCreateNestedManyWithoutSkuGroupsInput, {
    nullable: true,
  })
  skus?: SkuCreateNestedManyWithoutSkuGroupsInput;

  @ApiProperty({
    required: false,
    type: () => SkuSubGroupCreateNestedManyWithoutSkuGroupsInput,
  })
  @ValidateNested()
  @Type(() => SkuSubGroupCreateNestedManyWithoutSkuGroupsInput)
  @IsOptional()
  @Field(() => SkuSubGroupCreateNestedManyWithoutSkuGroupsInput, {
    nullable: true,
  })
  skuSubGroups?: SkuSubGroupCreateNestedManyWithoutSkuGroupsInput;
}
export { SkuGroupCreateInput };