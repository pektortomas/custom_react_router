import React from "react";
import { RouterContext } from "../router/Router";

export const useParams = () => {
  const context = React.useContext(RouterContext);

  return context?.params ?? {};
};
