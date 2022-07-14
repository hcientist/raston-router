import * as React from "react";
import { Outlet, Link } from "react-router-dom";

// https://reactrouter.com/docs/en/v6/getting-started/tutorial
export default function App() {
  return (
    <div>
      <h1>Raston Router and Redux</h1>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/input" style={{ padding: "10px" }}>
          Input
        </Link>
        <Link to="/output" style={{ padding: "10px" }}>
          Output
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
