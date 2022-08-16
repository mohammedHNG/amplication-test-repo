/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SkuWhereInput } from "./SkuWhereInput";
import { Type } from "class-transformer";
import { SkuOrderByInput } from "./SkuOrderByInput";

@ArgsType()
class SkuFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SkuWhereInput,
  })
  @Field(() => SkuWhereInput, { nullable: true })
  @Type(() => SkuWhereInput)
  where?: SkuWhereInput;

  @ApiProperty({
    required: false,
    type: [SkuOrderByInput],
  })
  @Field(() => [SkuOrderByInput], { nullable: true })
  @Type(() => SkuOrderByInput)
  orderBy?: Array<SkuOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SkuFindManyArgs };
