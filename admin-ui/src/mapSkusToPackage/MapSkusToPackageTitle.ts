import { MapSkusToPackage as TMapSkusToPackage } from "../api/mapSkusToPackage/MapSkusToPackage";

export const MAPSKUSTOPACKAGE_TITLE_FIELD = "id";

export const MapSkusToPackageTitle = (record: TMapSkusToPackage): string => {
  return record.id || record.id;
};
