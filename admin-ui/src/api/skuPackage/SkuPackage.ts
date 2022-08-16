import { MapSkusToPackage } from "../mapSkusToPackage/MapSkusToPackage";

export type SkuPackage = {
  createdAt: Date;
  id: string;
  mapSkusToPackages?: Array<MapSkusToPackage>;
  packageName: string | null;
  packagePrice: number | null;
  updatedAt: Date;
};
