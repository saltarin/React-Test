import * as React from "react";
import * as pathToRegexp from "path-to-regexp";

import { App } from "/src/views";

const NotFound: React.SFC<{}> = () => <div>Not found</div>;

const pathBase = process.env.PATH_BASE;

export const Routes = [
  {
    component: App,
    routes: [
      /*
      {
        path: `${pathBase}/seleccione-paquete`,
        component: Package,
        exact: true,
        alias: 'package'
      },
      {
        path: `${pathBase}/paquetes/individual`,
        component: IndividualAnnouncement,
        exact: true,
        alias: 'individual'
      },
      {
        path: `${pathBase}/paquetes/bolsa/:id(\\d+)`,
        component: PackagePrinted,
        exact: true,
        alias: 'printed'
      },
      {
        path: `${pathBase}/paquetes/bolsa/:id(\\d+)/tipo/:idType`,
        component: PackageDuration,
        exact: true,
        alias: 'packageDuration'
      },
      {
        path: `${pathBase}/paquetes/individual/:id(\\d+)`,
        component: IndividualDuration,
        exact: true,
        alias: 'individualDuration'
      },
      */
      {
        path: "*",
        component: NotFound
      }
    ]
  }
];

export const AliasRouter = (alias: string, params: {} = {}): string => {
  let routes = Routes[0].routes;
  for (let k in routes) {
    if (routes[k].alias === alias) {
      let toPath = pathToRegexp.compile(routes[k].path);
      return toPath(params);
    }
  }
  return "";
  // throw new Error(`Alias Router '${alias}' not exist`);
};
