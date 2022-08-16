import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SkuTitle } from "../sku/SkuTitle";

export const SkuPackageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="sku.id" reference="Sku" label="sku">
          <SelectInput optionText={SkuTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
