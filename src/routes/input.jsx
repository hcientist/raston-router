import * as React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Fetch from "../components/Fetch";
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
  const [error, setError] = useState(false);

  const progress = useSelector((state) => state.isProgressing);
  const storedParams = useSelector((state) => state.params);

  // values set by user
  const [database, setDatabase] = useState(storedParams.database);
  const [mode, setMode] = useState(storedParams.mode);
  const [min_wavenumber_range, setMin_wavenumber_range] = useState(
    storedParams.min_wavenumber_range
  );
  const [max_wavenumber_range, setMax_wavenumber_range] = useState(
    storedParams.max_wavenumber_range
  );
  const [tgas, setTgas] = useState(storedParams.tgas);
  const [pressure, setPressure] = useState(storedParams.pressure);
  const [path_length, setPath_length] = useState(storedParams.path_length);
  const [species, setSpecies] = useState([
    {
      molecule: storedParams.species[0].molecule,
      mole_fraction: storedParams.species[0].mole_fraction,
    },
  ]);

  // values not set by user, but needed for Radis App
  const [tvib] = useState(storedParams.tvib);
  const [trot] = useState(storedParams.trot);
  const [simulate_slit] = useState(storedParams.simulate_slit);

  return (
    <div className="App">
      <h1>Input</h1>

      <div id="fourm">
        <Database val={database} setter={setDatabase} />

        <Mode val={mode} setter={setMode} />

        <MinWave val={min_wavenumber_range} setter={setMin_wavenumber_range} />

        <MaxWave val={max_wavenumber_range} setter={setMax_wavenumber_range} />

        <Tgas val={tgas} setter={setTgas} />

        <Pressure val={pressure} setter={setPressure} />

        <PathLength val={path_length} setter={setPath_length} />

        <Molecule val={species[0].molecule} setter={setSpecies.molecule} />

        <MoleFraction
          val={species[0].mole_fraction}
          setter={setSpecies.mole_fraction}
        />
      </div>
      <Fetch
        params={{
          database,
          max_wavenumber_range,
          min_wavenumber_range,
          mode,
          path_length,
          pressure,
          simulate_slit,
          species,
          tgas,
          trot,
          tvib,
        }}
        setError={setError}
      />
      {progress && <div id="spinner" />}
      {error && <Error />}

      {!progress && <Plotly />}
      <Outlet />
    </div>
  );
}
