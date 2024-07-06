import { useState, useEffect } from "react";
import axios from "axios";

const useGetSessions = () => {
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://ec2-3-110-148-101.ap-south-1.compute.amazonaws.com:8050/sessions/`,
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
        return setSessions(response.data);
      } catch (error) {
        console.error("Error Fetching Data", error);
      }
    };
    fetchData();
  }, []);

  return sessions;
};

export default useGetSessions;
