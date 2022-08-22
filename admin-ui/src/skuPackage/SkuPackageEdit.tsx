import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { SkuTitle } from "../sku/SkuTitle";

export const SkuPackageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="sku.id" reference="Sku" label="Inclusion Sku">
          <SelectInput optionText={SkuTitle} />
        </ReferenceInput>
        <NumberInput label="Inclusion Sku Price" source="inclusionSkuPrice" />
        <ReferenceInput source="sku.id" reference="Sku" label="Sku">
          <SelectInput optionText={SkuTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
