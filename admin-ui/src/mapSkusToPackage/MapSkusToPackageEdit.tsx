import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SkuPackageTitle } from "../skuPackage/SkuPackageTitle";
import { SkuTitle } from "../sku/SkuTitle";

export const MapSkusToPackageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="skupackage.id"
          reference="SkuPackage"
          label="Package"
        >
          <SelectInput optionText={SkuPackageTitle} />
        </ReferenceInput>
        <ReferenceInput source="sku.id" reference="Sku" label="Sku">
          <SelectInput optionText={SkuTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
