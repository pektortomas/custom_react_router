import React from "react";
import Link from "../router/Link";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem", justifyContent: "center", alignContent: "center " }}>
        <Link to="/settings">Settings</Link>
        <Link to="/report">Report</Link>
        <Link to="/attackDetail/D083A545CC84">AttackDetail id: #D083A545CC84</Link>
      </div>
    </div>
  );
}
