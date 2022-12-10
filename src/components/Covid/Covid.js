import React, { useEffect, useState } from "react";
import "./Covid.css";

const Covid = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch(
        "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true"
      );
      const actualData = await res?.json();
      console.log(actualData);
      setData(actualData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <div className="header">
        <h1 className="live">🔴Live</h1>
        <h2 align="Center "> Date Of {data.lastUpdatedAtApify}</h2>
        <h2 className="" align="center">
          🛑 COVID-2019 Coronavirus Live 🛑
        </h2>
      </div>

      <section>
        <div className="card card_inner1">
          <p className="card_name">
            <span> Total Active Cases</span> 
          </p>
          <p className="card_total card_small">{data?.activeCases}</p>
        </div>
        <div className="card card_inner2">
          <p className="card_name">
            <span> Total Today Cases</span>
          </p>
          <p className="card_total card_small">{data?.totalCases}</p>
        </div>

        <div className="card card_inner3">
          <p className="card_name">
            <span> Total Deaths</span> 
          </p>
          <p className="card_total card_small">{data?.deaths}</p>
        </div>

        <div className="card card_inner4">
          <p className="card_name">
            <span> Total Recovery</span> 
          </p>
          <p className="card_total card_small">{data?.recovered}</p>
        </div>
      </section>
    </>
  );
};
export default Covid;
