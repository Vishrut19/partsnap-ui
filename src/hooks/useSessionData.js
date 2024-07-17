// hooks/useSessionData.js
import { useState, useEffect } from "react";
import axios from "axios";

export const useSessionData = (sessionId) => {
  const [sessionData, setSessionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSessionData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/sessions/${sessionId}`
        );
        console.log("Session Data", response.data);
        setSessionData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchSessionData();
  }, [sessionId]);

  return { sessionData, loading, error };
};
