import { Suspense } from "react";

interface RouteProps {
  path: string;
  component: any;
}

export const Route = (props: RouteProps) => {
  return <Suspense fallback="...Loading">{props.component}</Suspense>;
};
