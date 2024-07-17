import { useState } from "react";
import axios from "axios";

export const useDeleteNote = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  const deleteNote = async (sessionId, noteId) => {
    setIsDeleting(true);
    setError(null);
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/sessions/${sessionId}/note/${noteId}`
      );
      setIsDeleting(false);
      return true;
    } catch (err) {
      setError(err);
      setIsDeleting(false);
      return false;
    }
  };

  return { deleteNote, isDeleting, error };
};
