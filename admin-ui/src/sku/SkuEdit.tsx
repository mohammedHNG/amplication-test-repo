import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SkuGroupTitle } from "../skuGroup/SkuGroupTitle";
import { SkuPackageTitle } from "../skuPackage/SkuPackageTitle";
import { SkuSubGroupTitle } from "../skuSubGroup/SkuSubGroupTitle";

export const SkuEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="Sku Description" multiline source="skuDescription" />
        <ReferenceInput
          source="skugroup.id"
          reference="SkuGroup"
          label="Sku Group"
        >
          <SelectInput optionText={SkuGroupTitle} />
        </ReferenceInput>
        <TextInput label="Sku Name" source="skuName" />
        <ReferenceArrayInput
          source="skuPackages"
          reference="SkuPackage"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SkuPackageTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="skusubgroup.id"
          reference="SkuSubGroup"
          label="Sku Sub Group"
        >
          <SelectInput optionText={SkuSubGroupTitle} />
        </ReferenceInput>
        <SelectInput
          source="skuType"
          label="Sku Type"
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
