import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SKUPACKAGE_TITLE_FIELD } from "./SkuPackageTitle";
import { SKU_TITLE_FIELD } from "../sku/SkuTitle";

export const SkuPackageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Package Name" source="packageName" />
        <TextField label="Package Price" source="packagePrice" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="MapSkusToPackage"
          target="SkuPackageId"
          label="Map Skus To Packages"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Package"
              source="skupackage.id"
              reference="SkuPackage"
            >
              <TextField source={SKUPACKAGE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Sku" source="sku.id" reference="Sku">
              <TextField source={SKU_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
