import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { SKUPACKAGE_TITLE_FIELD } from "./SkuPackageTitle";
import { SKU_TITLE_FIELD } from "../sku/SkuTitle";

export const SkuPackageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="sku" source="sku.id" reference="Sku">
          <TextField source={SKU_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Sku" target="SkuPackageId" label="Skus">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="fulfillmentInfo" source="fulfillmentInfo" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="packages"
              source="skupackage.id"
              reference="SkuPackage"
            >
              <TextField source={SKUPACKAGE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="skuDescription" source="skuDescription" />
            <TextField label="skuId" source="skuId" />
            <TextField label="skuName" source="skuName" />
            <TextField label="skuType" source="skuType" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
