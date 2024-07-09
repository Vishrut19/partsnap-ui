import { useState } from "react";
import axios from "axios";

const useCreateTag = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const createTag = async (name, tagTypeId) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/tags/`,
        {
          name,
          description: "",
          tag_type_id: tagTypeId,
        },
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
      console.log;
      return response.data;
    } catch (error) {
      setError("Error creating tag");
      console.error("Error creating tag:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { createTag, isLoading, error };
};

export default useCreateTag;
