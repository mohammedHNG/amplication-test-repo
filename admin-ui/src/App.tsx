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
import { SkuPackageList } from "./skuPackage/SkuPackageList";
import { SkuPackageCreate } from "./skuPackage/SkuPackageCreate";
import { SkuPackageEdit } from "./skuPackage/SkuPackageEdit";
import { SkuPackageShow } from "./skuPackage/SkuPackageShow";
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
          name="SkuPackage"
          list={SkuPackageList}
          edit={SkuPackageEdit}
          create={SkuPackageCreate}
          show={SkuPackageShow}
        />
      </Admin>
    </div>
  );
};

export default App;
