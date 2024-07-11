import { useState } from "react";
import axios from "axios";

const useUploadAttachment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const uploadAttachment = async (file, attachmentTypeId) => {
    setIsLoading(true);
    setError(null);

    const payload = {
      name: file.name,
      description: "",
      attachment_type_id: attachmentTypeId,
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/attachments/`,
        payload,
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
      console.log(response.data);
      return response.data;
    } catch (error) {
      setError("Error uploading attachment");
      console.error("Error uploading attachment:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { uploadAttachment, isLoading, error };
};

export default useUploadAttachment;
