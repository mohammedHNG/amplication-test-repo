import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SkuPackageTitle } from "../skuPackage/SkuPackageTitle";

export const SkuCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
