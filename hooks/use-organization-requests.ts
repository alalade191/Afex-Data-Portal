import React, { useEffect, useState } from "react";

function useOrganizationRequests(tribeID) {
  const [location, setLocation] = useState([]);
  const url = "https://expertportal-production.up.railway.app/api/regions/";
  const [country, setCountry] = useState(null);
  const [cities, setCities] = useState([]);
  const [tribes, setTribes] = useState([]);
  const [squad, setSquad] = useState([]);

  const locationFetch = async () => {
    const token = JSON.parse(localStorage.getItem("userlogin"))?.tokens?.access;
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      console.log(data);
      setLocation(
        data.results.reduce((acc, curr) => {
          acc.push({ value: curr.id, label: curr.name });
          return acc;
        }, [])
      );
    } catch (error) {
      console.log(error);
    }
  };
  const tribeFetch = async () => {
    const token = JSON.parse(localStorage.getItem("userlogin"))?.tokens?.access;
    try {
      const res = await fetch(
        "https://expertportal-production.up.railway.app/api/tribes/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      setTribes(
        data.results.reduce((acc, curr) => {
          acc.push({ value: curr.id, label: curr.name });
          return acc;
        }, [])
      );
    } catch (error) {
      console.log(error);
    }
  };
  const squadFetch = async () => {
    const token = JSON.parse(localStorage.getItem("userlogin"))?.tokens?.access;
    try {
      const res = await fetch(
        `https://expertportal-production.up.railway.app/api/tribes/${tribeID}/squads`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      console.log(data);
      setSquad(
        data.results.reduce((acc, curr) => {
          acc.push({ value: curr.id, label: curr.name });
          return acc;
        }, [])
      );
    } catch (error) {
      console.log(error);
    }
  };
  const cityFetch = async (countryId) => {
    const token = JSON.parse(localStorage.getItem("userlogin"))?.tokens?.access;
    try {
      const res = await fetch(
        `https://expertportal-production.up.railway.app/api/address/${countryId}/city-address`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      // console.log(data);
      setCities(
        data.results.reduce((acc, curr) => {
          acc.push({ value: curr.id, label: curr.city });
          return acc;
        }, [])
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (tribeID) {
      squadFetch();
    }
  }, [tribeID]);

  useEffect(() => {
    tribeFetch();
  }, []);

  useEffect(() => {
    if (country) {
      cityFetch(country);
    }
  }, [country]);

  useEffect(() => {
    locationFetch();
  }, []);
  return { location, squad, country, tribes, cities, setCountry };
}

export default useOrganizationRequests;
