import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SkuTitle } from "../sku/SkuTitle";

export const SkuPackageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Inclusion Sku Price" source="inclusionSkuPrice" />
        <ReferenceInput source="sku.id" reference="Sku" label="Sku">
          <SelectInput optionText={SkuTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
