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

import { SKU_TITLE_FIELD } from "./SkuTitle";

export const SkuShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="fulfillmentInfo" source="fulfillmentInfo" />
        <TextField label="ID" source="id" />
        <ReferenceField label="inclusions" source="sku.id" reference="Sku">
          <TextField source={SKU_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="skuId" source="skuId" />
        <TextField label="skuName" source="skuName" />
        <TextField label="skuType" source="skuType" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="SkuPackage"
          target="SkuId"
          label="SkuPackages"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="sku" source="sku.id" reference="Sku">
              <TextField source={SKU_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Sku" target="SkuId" label="Skus">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="fulfillmentInfo" source="fulfillmentInfo" />
            <TextField label="ID" source="id" />
            <ReferenceField label="inclusions" source="sku.id" reference="Sku">
              <TextField source={SKU_TITLE_FIELD} />
            </ReferenceField>
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
