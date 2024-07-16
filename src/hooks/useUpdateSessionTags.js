import { useState } from "react";
import axios from "axios";

const useUpdateSessionTags = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateSessionTags = async (sessionId, tags, isDelete = false) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/sessions/${sessionId}/tags`,
        {
          apply_to_all: false,
          tags: tags.map((tag) => ({ tag_id: tag.id, delete: isDelete })),
        }
      );
      setIsLoading(false);
      console.log("Response", response.data);
      return response.data;
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return { updateSessionTags, isLoading, error };
};

export default useUpdateSessionTags;
