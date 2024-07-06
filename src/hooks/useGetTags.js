import { useState, useEffect } from "react";
import axios from "axios";

const useGetTags = (tagType, searchQuery) => {
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `http://ec2-3-110-148-101.ap-south-1.compute.amazonaws.com:8050/tags/?tag_type_id=${tagType}&search=${searchQuery}`,
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
        setTags(response.data);
      } catch (error) {
        setError("Error fetching tags");
      } finally {
        setIsLoading(false);
      }
    };

    if (searchQuery) {
      fetchData();
    } else {
      setTags([]);
    }
  }, [tagType, searchQuery]);

  return { tags, isLoading, error };
};

export default useGetTags;
