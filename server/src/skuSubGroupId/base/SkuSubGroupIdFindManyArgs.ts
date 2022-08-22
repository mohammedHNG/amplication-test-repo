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
import { SkuSubGroupIdWhereInput } from "./SkuSubGroupIdWhereInput";
import { Type } from "class-transformer";
import { SkuSubGroupIdOrderByInput } from "./SkuSubGroupIdOrderByInput";

@ArgsType()
class SkuSubGroupIdFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SkuSubGroupIdWhereInput,
  })
  @Field(() => SkuSubGroupIdWhereInput, { nullable: true })
  @Type(() => SkuSubGroupIdWhereInput)
  where?: SkuSubGroupIdWhereInput;

  @ApiProperty({
    required: false,
    type: [SkuSubGroupIdOrderByInput],
  })
  @Field(() => [SkuSubGroupIdOrderByInput], { nullable: true })
  @Type(() => SkuSubGroupIdOrderByInput)
  orderBy?: Array<SkuSubGroupIdOrderByInput>;

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

export { SkuSubGroupIdFindManyArgs };
