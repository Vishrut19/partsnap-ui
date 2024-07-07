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
        if (searchQuery) {
          const response = await axios.get(
            `http://ec2-3-110-148-101.ap-south-1.compute.amazonaws.com:8050/tags/?tag_type_id=${tagType}`,
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
          const filteredTags = response.data.filter((tag) =>
            tag.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setTags(filteredTags);
        } else {
          setTags([]);
        }
      } catch (error) {
        setError("Error fetching tags", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [tagType, searchQuery]);

  return { tags, isLoading, error };
};

export default useGetTags;
