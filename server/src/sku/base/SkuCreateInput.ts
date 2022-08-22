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
import {
  IsJSON,
  IsOptional,
  IsString,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { GraphQLJSONObject } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { SkuGroupWhereUniqueInput } from "../../skuGroup/base/SkuGroupWhereUniqueInput";
import { Type } from "class-transformer";
import { SkuPackageCreateNestedManyWithoutSkusInput } from "./SkuPackageCreateNestedManyWithoutSkusInput";
import { SkuSubGroupIdWhereUniqueInput } from "../../skuSubGroupId/base/SkuSubGroupIdWhereUniqueInput";
import { EnumSkuSkuType } from "./EnumSkuSkuType";
@InputType()
class SkuCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  fulfillmentInfo?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  skuDescription?: string | null;

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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  skuName?: string | null;

  @ApiProperty({
    required: false,
    type: () => SkuPackageCreateNestedManyWithoutSkusInput,
  })
  @ValidateNested()
  @Type(() => SkuPackageCreateNestedManyWithoutSkusInput)
  @IsOptional()
  @Field(() => SkuPackageCreateNestedManyWithoutSkusInput, {
    nullable: true,
  })
  skuPackages?: SkuPackageCreateNestedManyWithoutSkusInput;

  @ApiProperty({
    required: false,
    type: () => SkuSubGroupIdWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SkuSubGroupIdWhereUniqueInput)
  @IsOptional()
  @Field(() => SkuSubGroupIdWhereUniqueInput, {
    nullable: true,
  })
  skuSubGroupId?: SkuSubGroupIdWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumSkuSkuType,
  })
  @IsEnum(EnumSkuSkuType)
  @IsOptional()
  @Field(() => EnumSkuSkuType, {
    nullable: true,
  })
  skuType?: "Item" | "Package" | null;
}
export { SkuCreateInput };
