import { useState } from "react";
import axios from "axios";

const useCreateItemReceipt = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const createItemReceipt = async (itemReceiptData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/item_receipts/`,
        itemReceiptData,
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
      return response.data;
    } catch (error) {
      setError("Error creating item receipt");
      console.error("Error creating item receipt:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { createItemReceipt, isLoading, error };
};

export default useCreateItemReceipt;
