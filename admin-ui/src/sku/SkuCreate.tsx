import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { MapSkusToPackageTitle } from "../mapSkusToPackage/MapSkusToPackageTitle";
import { SkuGroupTitle } from "../skuGroup/SkuGroupTitle";
import { SkuSubGroupTitle } from "../skuSubGroup/SkuSubGroupTitle";

export const SkuCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <ReferenceArrayInput
          source="mapSkusToPackages"
          reference="MapSkusToPackage"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MapSkusToPackageTitle} />
        </ReferenceArrayInput>
        <TextInput label="Sku Description" multiline source="skuDescription" />
        <ReferenceInput
          source="skugroup.id"
          reference="SkuGroup"
          label="Sku Group"
        >
          <SelectInput optionText={SkuGroupTitle} />
        </ReferenceInput>
        <TextInput label="Sku Name" source="skuName" />
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
    </Create>
  );
};
