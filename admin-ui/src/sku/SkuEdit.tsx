import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SkuPackageTitle } from "../skuPackage/SkuPackageTitle";

export const SkuEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput
          source="skupackage.id"
          reference="SkuPackage"
          label="packages"
        >
          <SelectInput optionText={SkuPackageTitle} />
        </ReferenceInput>
        <TextInput label="skuDescription" multiline source="skuDescription" />
        <TextInput label="skuId" source="skuId" />
        <TextInput label="skuName" source="skuName" />
        <ReferenceArrayInput
          source="skuPackages"
          reference="SkuPackage"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SkuPackageTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="skuType"
          label="skuType"
          choices={[
            { label: "item", value: "Item" },
            { label: "package", value: "Package" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
