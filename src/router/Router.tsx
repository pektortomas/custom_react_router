import { BrowserHistory, createBrowserHistory } from "history";
import React, { createContext, useEffect, useState } from "react";
import { Route } from "./Route";
import NotFoundPage from "./NotFoundPage";
import { match } from "path-to-regexp";

interface RouterState {
  url: string;
}

interface RouterProps {
  children: React.ReactElement | React.ReactElement[];
}

interface RouterValue {
  history: BrowserHistory;
}

export interface RouterParams {
  id?: number;
}

export const RouterContext = createContext(null as null | RouterValue);

export const Router = (props: RouterProps) => {
  const history = createBrowserHistory() as BrowserHistory;
  const [state, setState] = useState<RouterState>({ url: window.location.pathname });

  useEffect(() => history.listen((e) => setState((s) => (s.url !== e.location.pathname ? { url: e.location.pathname } : s))));

  if (Array.isArray(props.children)) {
    const childs = props.children.map<React.ReactNode>((c: React.ReactElement, index) => {
      const dynamicRouteParams = match(c.props.path, { decode: decodeURIComponent })(state.url);
      if (c == null || c.props == undefined) return c;
      if (c.type == Route && dynamicRouteParams !== false) {
        return React.cloneElement(c, { key: index, params: dynamicRouteParams.params });
      }
      if (c.type == Route && c.props.path != state.url) return null;
      return React.cloneElement(c, { key: index });
    });

    return <RouterContext.Provider value={{ history: history }}>{childs.every((c) => c === null) ? <NotFoundPage /> : childs}</RouterContext.Provider>;
  } else {
    const dynamicRouteParams = match(props.children.props.path, { decode: decodeURIComponent })(state.url);
    console.log(dynamicRouteParams);

    const child = props.children.type == Route && props.children.props.path !== state.url ? (props.children && dynamicRouteParams ? props.children : null) : null;
    return <RouterContext.Provider value={{ history: history }}>{child ? child && dynamicRouteParams ? React.cloneElement(child, { params: dynamicRouteParams.params }) : child : <NotFoundPage />}</RouterContext.Provider>;
  }
};
