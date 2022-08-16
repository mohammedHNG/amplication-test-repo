import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { SkuList } from "./sku/SkuList";
import { SkuCreate } from "./sku/SkuCreate";
import { SkuEdit } from "./sku/SkuEdit";
import { SkuShow } from "./sku/SkuShow";
import { SkuGroupList } from "./skuGroup/SkuGroupList";
import { SkuGroupCreate } from "./skuGroup/SkuGroupCreate";
import { SkuGroupEdit } from "./skuGroup/SkuGroupEdit";
import { SkuGroupShow } from "./skuGroup/SkuGroupShow";
import { SkuSubGroupList } from "./skuSubGroup/SkuSubGroupList";
import { SkuSubGroupCreate } from "./skuSubGroup/SkuSubGroupCreate";
import { SkuSubGroupEdit } from "./skuSubGroup/SkuSubGroupEdit";
import { SkuSubGroupShow } from "./skuSubGroup/SkuSubGroupShow";
import { SkuPackageList } from "./skuPackage/SkuPackageList";
import { SkuPackageCreate } from "./skuPackage/SkuPackageCreate";
import { SkuPackageEdit } from "./skuPackage/SkuPackageEdit";
import { SkuPackageShow } from "./skuPackage/SkuPackageShow";
import { MapSkusToPackageList } from "./mapSkusToPackage/MapSkusToPackageList";
import { MapSkusToPackageCreate } from "./mapSkusToPackage/MapSkusToPackageCreate";
import { MapSkusToPackageEdit } from "./mapSkusToPackage/MapSkusToPackageEdit";
import { MapSkusToPackageShow } from "./mapSkusToPackage/MapSkusToPackageShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Sample app"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Sku"
          list={SkuList}
          edit={SkuEdit}
          create={SkuCreate}
          show={SkuShow}
        />
        <Resource
          name="SkuGroup"
          list={SkuGroupList}
          edit={SkuGroupEdit}
          create={SkuGroupCreate}
          show={SkuGroupShow}
        />
        <Resource
          name="SkuSubGroup"
          list={SkuSubGroupList}
          edit={SkuSubGroupEdit}
          create={SkuSubGroupCreate}
          show={SkuSubGroupShow}
        />
        <Resource
          name="SkuPackage"
          list={SkuPackageList}
          edit={SkuPackageEdit}
          create={SkuPackageCreate}
          show={SkuPackageShow}
        />
        <Resource
          name="MapSkusToPackage"
          list={MapSkusToPackageList}
          edit={MapSkusToPackageEdit}
          create={MapSkusToPackageCreate}
          show={MapSkusToPackageShow}
        />
      </Admin>
    </div>
  );
};

export default App;
