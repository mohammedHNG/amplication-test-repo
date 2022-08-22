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
import { SKUGROUP_TITLE_FIELD } from "../skuGroup/SkuGroupTitle";
import { SKUSUBGROUPID_TITLE_FIELD } from "../skuSubGroupId/SkuSubGroupIdTitle";

export const SkuShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Fulfillment Info" source="fulfillmentInfo" />
        <TextField label="ID" source="id" />
        <TextField label="Sku Description" source="skuDescription" />
        <ReferenceField
          label="Sku Group"
          source="skugroup.id"
          reference="SkuGroup"
        >
          <TextField source={SKUGROUP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Sku Name" source="skuName" />
        <ReferenceField
          label="Sku Sub Group"
          source="skusubgroupid.id"
          reference="SkuSubGroupId"
        >
          <TextField source={SKUSUBGROUPID_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Sku Type" source="skuType" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="SkuPackage"
          target="SkuId"
          label="Sku Packages"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Inclusion Sku Price" source="inclusionSkuPrice" />
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
