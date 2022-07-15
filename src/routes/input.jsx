import * as React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Fetch from "../components/Fetch";
import Form from "../components/Form";
import Error from "../components/Error";
import Plotly from "../components/Plotly";

import "../App.css";

export default function Input() {
  const [data, setData] = useState("");
  const [error, setError] = useState(false);

  const progress = useSelector((state) => state.isProgressing);

  // user parameters
  const [params, setParams] = useState({
    species: [{ molecule: "CO", mole_fraction: 1 }],
    min_wavenumber_range: 1900,
    max_wavenumber_range: 2300,
    tgas: 294.15,
    tvib: null,
    trot: null,
    pressure: 0.0001,
    path_length: 10,
    simulate_slit: false,
    mode: "transmittance_noslit",
    database: "hitran",
  });

  return (
    <div className="App">
      <h1>Input</h1>

      <Form params={params} setParams={setParams} />
      <Fetch params={params} setData={setData} setError={setError} />
      {progress && <div id="spinner" />}
      {error && <Error />}

      {!progress && <Plotly data={data} params={params} />}
      <Outlet />
    </div>
  );
}
