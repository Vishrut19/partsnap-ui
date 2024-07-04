import { useEffect, useState } from "react";
import axios from "axios";

const useGetLocations = () => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://ec2-3-110-148-101.ap-south-1.compute.amazonaws.com:8050/locations/`,
          {
            auth: {
              username: "admin",
              password: "",
            },
            headers: {
              accept: "application/json",
              Authorization: "Basic YWRtaW46",
            },
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return locations;
};

export default useGetLocations;
