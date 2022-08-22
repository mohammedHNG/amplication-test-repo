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

export const SkuSubGroupIdList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"sku sub groups"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
