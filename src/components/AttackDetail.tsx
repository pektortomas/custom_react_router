import React from "react";
import { RouterParams } from "../router/Router";
import BackButton from "./buttons/BackButton";

interface ArticleProps {
  params?: RouterParams;
}

export default function AttackDetail(props: ArticleProps) {
  const id = props.params?.id;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      Article id: {id}
      <BackButton />
    </div>
  );
}
