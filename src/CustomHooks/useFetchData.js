import { useState, useEffect } from "react";
import axios from "axios";
import { ApiCall } from "../api/Api";

function useFetchData(url, method, payload) {


  //id for ref reload page after url chages based on id in same link
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //Baseurl + To cover full url
  const baseUrl = process.env.REACT_APP_SERVER_BASE_URL + url;

  useEffect((url) => {
    setLoading(true);
    async function loadData() {
      try {
        console.log(payload, "Try Payload Top")
        const dataGet = await ApiCall.getApiDetails(baseUrl, method, payload);
        setData(dataGet.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    loadData();
  },
    [url]
  );

  //Refetch used For Onclick or Triger Event Call Function
  const refetch = async (url, method, dataGive) => {

    const baseUrl = process.env.REACT_APP_SERVER_BASE_URL + url;


    try {
      const dataGet = await ApiCall.getApiDetails(baseUrl, method, dataGive);
      return dataGet.data;
    } catch (err) {

    }

  };

  return { data, loading, error, refetch };
}

export default useFetchData;
