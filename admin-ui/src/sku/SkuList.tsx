import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SKUGROUP_TITLE_FIELD } from "../skuGroup/SkuGroupTitle";
import { SKUSUBGROUPID_TITLE_FIELD } from "../skuSubGroupId/SkuSubGroupIdTitle";

export const SkuList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Skus"}
      perPage={50}
      pagination={<Pagination />}
    >
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
          source="skusubgroupid.id"
          reference="SkuSubGroupId"
        >
          <TextField source={SKUSUBGROUPID_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Sku Type" source="skuType" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
