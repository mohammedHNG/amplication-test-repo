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

import { SKUGROUP_TITLE_FIELD } from "./SkuGroupTitle";
import { SKUSUBGROUP_TITLE_FIELD } from "../skuSubGroup/SkuSubGroupTitle";

export const SkuGroupShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Sku Group Name" source="skuGroupName" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Sku" target="SkuGroupId" label="Skus">
          <Datagrid rowClick="show">
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
              source="skusubgroup.id"
              reference="SkuSubGroup"
            >
              <TextField source={SKUSUBGROUP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Sku Type" source="skuType" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SkuSubGroup"
          target="SkuGroupId"
          label="sku sub groups"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Sku Group"
              source="skugroup.id"
              reference="SkuGroup"
            >
              <TextField source={SKUGROUP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Sku Sub Group" source="skuSubGroupName" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
