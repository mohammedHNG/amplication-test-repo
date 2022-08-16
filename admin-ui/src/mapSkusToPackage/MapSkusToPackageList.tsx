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
import { SKUPACKAGE_TITLE_FIELD } from "../skuPackage/SkuPackageTitle";
import { SKU_TITLE_FIELD } from "../sku/SkuTitle";

export const MapSkusToPackageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Map Skus To Packages"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
