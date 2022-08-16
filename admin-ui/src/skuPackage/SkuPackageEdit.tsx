import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { MapSkusToPackageTitle } from "../mapSkusToPackage/MapSkusToPackageTitle";

export const SkuPackageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
