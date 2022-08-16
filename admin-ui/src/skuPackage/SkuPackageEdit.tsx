import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SkuTitle } from "../sku/SkuTitle";

export const SkuPackageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="sku.id" reference="Sku" label="sku">
          <SelectInput optionText={SkuTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
