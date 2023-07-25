import React, { useContext } from "react";
import { RouterContext } from "./Router";

interface LinkProps {
  to: string;
  children: React.ReactNode;
}

export default function Link(props: LinkProps) {
  const routerContext = useContext(RouterContext);
  return (
    <a
      href={props.to}
      onClick={(e) => {
        e.preventDefault();
        routerContext?.history.push(props.to);
      }}>
      {props.children}
    </a>
  );
}
