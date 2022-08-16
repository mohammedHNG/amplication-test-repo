import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SkuTitle } from "../sku/SkuTitle";
import { SkuSubGroupTitle } from "../skuSubGroup/SkuSubGroupTitle";

export const SkuGroupEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Sku Group Name" source="skuGroupName" />
        <ReferenceArrayInput
          source="skus"
          reference="Sku"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SkuTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="skuSubGroups"
          reference="SkuSubGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SkuSubGroupTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};