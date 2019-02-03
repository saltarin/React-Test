import * as React from "react";
import { renderRoutes } from "react-router-config";

interface Props {
  route?: any;
}

export const App: React.SFC<Props> = props => {
  return (
    <React.Fragment>
      <Wrapper>{renderRoutes(props.route.routes)}</Wrapper>
    </React.Fragment>
  );
};
