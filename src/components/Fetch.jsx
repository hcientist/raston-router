import React from "react";

import { useDispatch } from "react-redux";
import { hideProgress, showProgress, storeData, storeParams } from "../actions";

function Fetch({ params, setError }) {
  const dispatch = useDispatch();

  async function fetchRadis() {
    console.log(params);
    dispatch(storeParams(params));

    setError(false);
    dispatch(showProgress());

    let response;
    try {
      response = await fetch("https://api.radis.app/calculate-spectrum", {
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9",
          "cache-control": "no-cache",
          "content-type": "application/json;charset=UTF-8",
          pragma: "no-cache",
          "sec-ch-ua":
            '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
        },
        referrer: "https://www.radis.app/",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: JSON.stringify(params),
        method: "POST",
        mode: "cors",
        credentials: "omit",
      });

      if (response.ok) {
        dispatch(storeData(JSON.parse(await response.text())));
        // setData(JSON.parse(await response.text()));
        dispatch(hideProgress());
      } else {
        dispatch(hideProgress());
        setError(true);
        // setData(null);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <button id="button" onClick={fetchRadis}>
      Perform Fetch Request
    </button>
  );
}

export default Fetch;
