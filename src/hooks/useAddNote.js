import { useState } from "react";
import axios from "axios";

export const useAddNote = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState(null);

  const addNote = async (sessionId, text) => {
    setIsAdding(true);
    setError(null);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/sessions/${sessionId}/note`,
        { text }
      );
      setIsAdding(false);
      return response.data;
    } catch (err) {
      setError(err);
      setIsAdding(false);
      return null;
    }
  };

  return { addNote, isAdding, error };
};
