// src/hooks/useCreateSession.js
import { useState } from "react";
import axios from "axios";

const useCreateSession = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const createSession = async (name) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/sessions/`,
        {
          name,
          description: "",
          active: true,
        },
        {
          auth: {
            username: "admin",
            password: "",
          },
          headers: {
            accept: "application/json",
            Authorization: "Basic YWRtaW46",
            "Content-Type": "application/json",
          },
        }
      );
      console.log("New session Created", response.data);
      return response.data;
    } catch (error) {
      setError("Error creating session");
      console.error("Error creating session:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { createSession, isLoading, error };
};

export default useCreateSession;
