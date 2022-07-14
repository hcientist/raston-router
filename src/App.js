import * as React from "react";
import { Outlet, Link } from "react-router-dom";

// https://reactrouter.com/docs/en/v6/getting-started/tutorial
export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}
