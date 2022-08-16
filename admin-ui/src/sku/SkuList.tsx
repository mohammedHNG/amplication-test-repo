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
import { SKU_TITLE_FIELD } from "./SkuTitle";

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
    </List>
  );
};
