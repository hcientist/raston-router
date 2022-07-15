import * as React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Fetch from "../components/Fetch";
import Form from "../components/Form";
import Error from "../components/Error";
import Plotly from "../components/Plotly";

import "../App.css";
import Database from "../components/inputs/Database";
import Mode from "../components/inputs/Mode";
import MaxWave from "../components/inputs/MaxWave";
import MinWave from "../components/inputs/MinWave";
import Tgas from "../components/inputs/Tgas";
import Pressure from "../components/inputs/Pressure";
import PathLength from "../components/inputs/PathLength";
import Molecule from "../components/inputs/Molecule";
import MoleFraction from "../components/inputs/MoleFraction";

export default function Input() {
  // const [data, setData] = useState("");
  const [error, setError] = useState(false);

  const progress = useSelector((state) => state.isProgressing);

  const storedParams = useSelector((state) => state.params);

  // user parameters loval stateiin the form
  // const [params, setParams] = useState(storedParams);

  const [species, setSpecies] = useState([
    {
      molecule: storedParams.species[0].molecule,
      mole_fraction: storedParams.species[0].mole_fraction,
    },
  ]);
  const [min_wavenumber_range, setMin_wavenumber_range] = useState(
    storedParams.min_wavenumber_range
  );
  const [max_wavenumber_range, setMax_wavenumber_range] = useState(
    storedParams.max_wavenumber_range
  );
  const [tgas, setTgas] = useState(storedParams.tgas);
  const [tvib, setTvib] = useState(storedParams.tvib);
  const [trot, setTrot] = useState(storedParams.trot);
  const [pressure, setPressure] = useState(storedParams.pressure);
  const [path_length, setPath_length] = useState(storedParams.path_length);
  const [simulate_slit, setSimulate_slit] = useState(
    storedParams.simulate_slit
  );
  const [mode, setMode] = useState(storedParams.mode);
  const [database, setDatabase] = useState(storedParams.database);
  return (
    <div className="App">
      <h1>Input</h1>

      <div id="fourm">
        <Database val={database} setter={setDatabase} />

        <Mode params={params} setParams={setParams} />

        <MinWave params={params} setParams={setParams} />

        <MaxWave params={params} setParams={setParams} />

        <Tgas params={params} setParams={setParams} />

        <Pressure params={params} setParams={setParams} />

        <PathLength params={params} setParams={setParams} />

        <Molecule params={params} setParams={setParams} />

        <MoleFraction params={params} setParams={setParams} />
      </div>
      <Fetch setError={setError} />
      {progress && <div id="spinner" />}
      {error && <Error />}

      {!progress && <Plotly />}
      <Outlet />
    </div>
  );
}
