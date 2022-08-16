import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SkuPackageTitle } from "../skuPackage/SkuPackageTitle";
import { SkuTitle } from "../sku/SkuTitle";

export const MapSkusToPackageCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
