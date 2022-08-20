import { useEffect, useRef, useState } from "react";
import axios from "axios";

type ENetworkMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

type TUseNetworkArgs = {
  method: ENetworkMethod;
  url: string;
  payload?: any;
};

type TUseNetwork = (config: TUseNetworkArgs) => {
  data: any;
  error: string;
  loaded: boolean;
};

const useNetwork: TUseNetwork = ({ method, url, payload }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const controllerRef = useRef(new AbortController());
  const cancel = () => {
    controllerRef.current.abort();
  };

  const networkRequest = async () => {
    try {
      const response = await axios.request({
        data: payload,
        signal: controllerRef.current.signal,
        method,
        url,
      });
      setData(response.data);
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        setError(error.message);
      } else {
        setError(error);
      }
      setError(error.message);
    } finally {
      setLoaded(true);
    }
  };

  return { cancel, data, error, loaded, networkRequest };
};

export default useNetwork;
