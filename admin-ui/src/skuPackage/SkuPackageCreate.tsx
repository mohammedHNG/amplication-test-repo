import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { MapSkusToPackageTitle } from "../mapSkusToPackage/MapSkusToPackageTitle";

export const SkuPackageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="mapSkusToPackages"
          reference="MapSkusToPackage"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MapSkusToPackageTitle} />
        </ReferenceArrayInput>
        <TextInput label="Package Name" source="packageName" />
        <NumberInput label="Package Price" source="packagePrice" />
      </SimpleForm>
    </Create>
  );
};
