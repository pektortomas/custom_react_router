import { BrowserHistory, createBrowserHistory } from "history";
import React, { createContext, useState } from "react";
import { Route } from "./Route";
import { MatchResult, match } from "path-to-regexp";

interface RouterState {
  url: string;
}

interface RouterProps {
  children: React.ReactElement | React.ReactElement[];
  fallback: JSX.Element;
}

interface RouterValue {
  history: BrowserHistory;
  params: any;
}

export const RouterContext = createContext(null as null | RouterValue);

export const Router = (props: RouterProps) => {
  const history = createBrowserHistory() as BrowserHistory;
  const [state, setState] = useState<RouterState>({ url: window.location.pathname });
  let params: MatchResult | undefined;

  history.listen((e) => setState((s) => (s.url !== e.location.pathname ? { url: e.location.pathname } : s)));

  const getRouteChild = (child: React.ReactElement | React.ReactElement[]) => {
    if (Array.isArray(child)) return child.find((c: React.ReactElement) => (c.type === Route && match(c.props.path, { decode: decodeURIComponent })(state.url)) !== false);
    else if (child) return child.type === Route && child.props.path !== state.url ? (props.children && match(child.props.path, { decode: decodeURIComponent })(state.url) ? child : null) : child;
    else return null;
  };

  const child = getRouteChild(props.children);
  const parsedParams = child ? match(child?.props.path, { decode: decodeURIComponent })(state.url) : false;

  if (parsedParams !== false) {
    params = parsedParams.params as MatchResult;
  }

  return <RouterContext.Provider value={{ history, params }}>{child ?? props.fallback}</RouterContext.Provider>;
};
