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
import { SkuSubGroupIdWhereInput } from "./SkuSubGroupIdWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SkuSubGroupIdListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SkuSubGroupIdWhereInput,
  })
  @ValidateNested()
  @Type(() => SkuSubGroupIdWhereInput)
  @IsOptional()
  @Field(() => SkuSubGroupIdWhereInput, {
    nullable: true,
  })
  every?: SkuSubGroupIdWhereInput;

  @ApiProperty({
    required: false,
    type: () => SkuSubGroupIdWhereInput,
  })
  @ValidateNested()
  @Type(() => SkuSubGroupIdWhereInput)
  @IsOptional()
  @Field(() => SkuSubGroupIdWhereInput, {
    nullable: true,
  })
  some?: SkuSubGroupIdWhereInput;

  @ApiProperty({
    required: false,
    type: () => SkuSubGroupIdWhereInput,
  })
  @ValidateNested()
  @Type(() => SkuSubGroupIdWhereInput)
  @IsOptional()
  @Field(() => SkuSubGroupIdWhereInput, {
    nullable: true,
  })
  none?: SkuSubGroupIdWhereInput;
}
export { SkuSubGroupIdListRelationFilter };