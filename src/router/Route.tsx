import React from "react";
import { RouterParams } from "./Router";

interface RouteProps {
  path: string;
  children: React.ReactElement;
  params?: RouterParams;
}

export const Route = (props: RouteProps) => {
  return <>{React.cloneElement(props.children!, { params: props.params })}</>;
};
