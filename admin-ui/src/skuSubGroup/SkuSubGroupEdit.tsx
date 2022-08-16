import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { SkuGroupTitle } from "../skuGroup/SkuGroupTitle";
import { SkuTitle } from "../sku/SkuTitle";

export const SkuSubGroupEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="skugroup.id"
          reference="SkuGroup"
          label="Sku Group"
        >
          <SelectInput optionText={SkuGroupTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="skus"
          reference="Sku"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SkuTitle} />
        </ReferenceArrayInput>
        <TextInput label="Sku Sub Group" source="skuSubGroupName" />
      </SimpleForm>
    </Edit>
  );
};
