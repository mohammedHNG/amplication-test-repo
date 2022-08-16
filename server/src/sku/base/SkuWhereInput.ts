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
import { JsonFilter } from "../../util/JsonFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { SkuWhereUniqueInput } from "./SkuWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SkuPackageListRelationFilter } from "../../skuPackage/base/SkuPackageListRelationFilter";
import { SkuListRelationFilter } from "./SkuListRelationFilter";
import { EnumSkuSkuType } from "./EnumSkuSkuType";
@InputType()
class SkuWhereInput {
  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  fulfillmentInfo?: JsonFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

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
  inclusions?: SkuWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  skuId?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  skuName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => SkuPackageListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SkuPackageListRelationFilter)
  @IsOptional()
  @Field(() => SkuPackageListRelationFilter, {
    nullable: true,
  })
  skuPackages?: SkuPackageListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SkuListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SkuListRelationFilter)
  @IsOptional()
  @Field(() => SkuListRelationFilter, {
    nullable: true,
  })
  skus?: SkuListRelationFilter;

  @ApiProperty({
    required: false,
    enum: EnumSkuSkuType,
  })
  @IsEnum(EnumSkuSkuType)
  @IsOptional()
  @Field(() => EnumSkuSkuType, {
    nullable: true,
  })
  skuType?: "Item" | "Package";
}
export { SkuWhereInput };
