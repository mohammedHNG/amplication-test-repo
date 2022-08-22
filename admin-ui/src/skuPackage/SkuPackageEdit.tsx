import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SkuTitle } from "../sku/SkuTitle";

export const SkuPackageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Inclusion Sku Price" source="inclusionSkuPrice" />
        <ReferenceInput source="sku.id" reference="Sku" label="Sku">
          <SelectInput optionText={SkuTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
