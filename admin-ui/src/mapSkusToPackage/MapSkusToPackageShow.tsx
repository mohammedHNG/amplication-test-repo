import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { SKUPACKAGE_TITLE_FIELD } from "../skuPackage/SkuPackageTitle";
import { SKU_TITLE_FIELD } from "../sku/SkuTitle";

export const MapSkusToPackageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
