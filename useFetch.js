import { useEffect, useState } from "react";
import { fetchData } from "../services/api";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await fetchData(endpoint);
      setData(res.results || res);
      setLoading(false);
    };

    getData();
  }, [endpoint]);

  return { data, loading };
};

export default useFetch;