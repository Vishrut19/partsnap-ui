"use client";
import { useState, useEffect } from "react";
import DatePicker from "@/components/DatePicker";
import SessionHistory from "@/components/SessionHistory";
import {
  ArrowLongRightIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useParams, useRouter } from "next/navigation";
import ScanIcon from "@/components/ScanIcon";
import useGetTags from "@/hooks/useGetTags";
import TagComponent from "@/components/TagComponent";
import useCreateTag from "@/hooks/useCreateTag";
import useCreateItemReceipt from "@/hooks/useCreateItemReceipt";
import axios from "axios";
import useUpdateSessionTags from "@/hooks/useUpdateSessionTags";
import useGetSessions from "@/hooks/useGetSessions";

const ItemReceiptPage = () => {
  const { sessionId } = useParams();
  const router = useRouter();
  const [receivingTagQuery, setReceivingTagQuery] = useState("");
  const [displayedReceivingTags, setDisplayedReceivingTags] = useState([]);
  const [selectedReceivingTags, setSelectedReceivingTags] = useState([]);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [formData, setFormData] = useState({
    part_number: "",
    manufacturer: "",
    ordered_quantity: 0,
    received_quantity: 0,
    date_code: "",
    lot_code: "",
    po_line: 0,
    receiving_session_id: parseInt(sessionId),
    receipt_date: "",
  });

  const { createItemReceipt } = useCreateItemReceipt();
  const { updateSessionTags } = useUpdateSessionTags();
  const sessions = useGetSessions();

  const {
    createTagType,
    createTag,
    isLoading: createTagLoading,
    error: createTagError,
  } = useCreateTag();

  const {
    tags: receivingTags,
    isLoading,
    error,
  } = useGetTags(2, receivingTagQuery);

  const handleReceivingTagSelection = (tag) => {
    setSelectedReceivingTags((prevTags) => {
      if (prevTags.some((t) => t.id === tag.id)) {
        return prevTags.filter((t) => t.id !== tag.id);
      } else {
        return [...prevTags, tag];
      }
    });
  };

  const handleAddNewReceivingTag = async () => {
    try {
      // Create a new tag with the receiving tag type (tag_type_id: 2)
      await createTag(receivingTagQuery, 2);

      // Reset the receiving tag query
      setReceivingTagQuery("");

      // Optionally, you can update the receivingTags list here
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddSelectedTags = () => {
    setSelectedReceivingTags((prevTags) => {
      const newTags = receivingTags.filter((tag) =>
        selectedReceivingTags.some((selectedTag) => selectedTag.id === tag.id)
      );
      console.log(newTags);
      return [...new Set([...prevTags, ...newTags])];
    });
    setReceivingTagQuery("");
  };

  const checkFormCompletion = () => {
    const requiredFields = [
      "part_number",
      "received_quantity",
      "date_code",
      "lot_code",
      "po_line",
      "purchase_order",
      "media_type",
      "end_customer",
    ];

    const allFieldsFilled = requiredFields.every(
      (field) => document.getElementById(field)?.value.trim() !== ""
    );

    setIsFormComplete(allFieldsFilled);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    checkFormCompletion();
  };

  const handleConfirm = async () => {
    try {
      const itemReceiptData = {
        ...formData,
        manufacturer: formData.end_customer, // Set manufacturer as end customer
      };
      const response = await createItemReceipt(itemReceiptData);
      console.log("Item receipt created:", response);
      router.push("/item-receipt");
    } catch (error) {
      console.error("Failed to create item receipt:", error);
    }
  };

  useEffect(() => {
    if (sessions.length > 0) {
      const currentSession = sessions.find(
        (session) => session.id === parseInt(sessionId)
      );
      if (currentSession) {
        setDisplayedReceivingTags(currentSession.tags);
      }
    }
  }, [sessions, sessionId]);

  const handleTagDelete = async (tagToDelete) => {
    await updateSessionTags(sessionId, [tagToDelete], true);
    setDisplayedReceivingTags((prevTags) =>
      prevTags.filter((tag) => tag.id !== tagToDelete.id)
    );
  };

  return (
    <>
      <div className="bg-[#F4F7FF] lg:pl-72 flex justify-content-between">
        <div className="mx-auto max-w-5xl">
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
              <div>
                <h1 className="text-[#1A202C] font-semibold text-2xl leading-6">
                  Inventory Managment
                </h1>
                <p className="mt-2 font-normal text-base text-[#718096] leading-4">
                  Select how would you like the receiving process to begin
                </p>
              </div>
              <div className="flex items-center justify-center ml-28">
                <div className="bg-white mt-4 w-[155px] h-[56px] rounded-[10px] border-[#E2E8F0] border-[1px] p-[4px] gap-[4px]">
                  <button
                    type="button"
                    className="border-[#194BFB] font-semibold border-[1px] w-[147px] h-12 bg-[#E8EDFF] gap-[10px] pl-[25px] pr-[30px] pt-3 pb-[15px] text-md text-nowrap text-[#194BFB] hover:bg-indigo-100 rounded-[10px]"
                  >
                    Receiving
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[787px] h-[630px] rounded-[10px] bg-white ml-5 mt-5 shadow-sm">
              <form className="bg-white h-full rounded-[10px]">
                <div className="flex justify-center px-4 py-6 sm:p-8">
                  <div className="flex flex-col">
                    <div>
                      <label
                        htmlFor="receiving-tag"
                        className="block text-sm font-medium leading-[14px] text-[#1A202C]"
                      >
                        Receiving Label / Tag
                      </label>
                      <div className="flex">
                        <div className="relative mt-2 w-[502px]">
                          <input
                            type="search"
                            name="receiving-tag"
                            placeholder="Search Tag"
                            id="receiving-tag"
                            value={receivingTagQuery}
                            onChange={(e) =>
                              setReceivingTagQuery(e.target.value)
                            }
                            className="block w-full h-[44px] rounded-[10px] border-[1px] border-[#E2E8F0] py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-[#718096] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pr-8"
                          />
                          <MagnifyingGlassIcon
                            className="pointer-events-none absolute inset-y-0 right-0 w-6 h-6 mt-2 text-black mr-2"
                            aria-hidden="true"
                          />
                        </div>
                        <a
                          href="#"
                          onClick={handleAddNewReceivingTag}
                          className="ml-2 mt-4 text-[#194BFB] text-base font-medium leading-4 underline"
                        >
                          Add New Tag
                        </a>
                      </div>
                      {isLoading ? (
                        <p>Loading...</p>
                      ) : error ? (
                        <p className="text-red-500">{error}</p>
                      ) : receivingTagQuery && receivingTags.length === 0 ? (
                        <p className="text-red-500">TAG NOT FOUND</p>
                      ) : (
                        <>
                          {displayedReceivingTags.length > 0 && (
                            <TagComponent
                              tags={displayedReceivingTags}
                              selectedTags={displayedReceivingTags}
                              onTagClick={handleTagDelete}
                            />
                          )}
                          {receivingTags.length > 0 && (
                            <button
                              type="button"
                              onClick={handleAddSelectedTags}
                              className="mt-[10px] px-[25px] py-[10px] w-[211px] h-[44px] rounded-[10px] border-[1px] border-[#194BFB] "
                            >
                              <span className="font-semibold text-lg leading-[18px] text-[#194BFB] text-nowrap">
                                Add Selected Tags
                              </span>
                            </button>
                          )}
                        </>
                      )}
                    </div>
                    <div className="mt-3 w-[747px] h-[412px] bg-[#F4F7FF] rounded-[10px]">
                      <h1 className="font-semibold text-lg leading-[18px] ml-4 mt-4">
                        Item Receipt
                      </h1>
                      <div className="flex flex-row">
                        <div className="flex flex-col mt-3 ml-4">
                          <label
                            htmlFor="part_number"
                            className="block text-sm font-medium leading-[14px] text-[#1A202C]"
                          >
                            Part Number
                          </label>
                          <input
                            type="text"
                            name="part_number"
                            id="part_number"
                            value={formData.part_number}
                            onChange={handleInputChange}
                            className="mt-2 block w-[224px] h-[44px] rounded-[10px] border-white  py-1.5 text-gray-900 ring-1 ring-inset ring-white placeholder:text-[#718096] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                        <div className="flex flex-col mt-3 ml-4">
                          <label
                            htmlFor="received_quantity"
                            className="block text-sm font-medium leading-[14px] text-[#1A202C]"
                          >
                            Received Quantity
                          </label>
                          <input
                            type="number"
                            name="received_quantity"
                            id="received_quantity"
                            value={formData.total_quantity}
                            onChange={handleInputChange}
                            className="mt-2 block w-[224px] h-[44px] rounded-[10px] border-white py-1.5 text-gray-900 ring-1 ring-inset ring-white placeholder:text-[#718096] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                        <div className="flex flex-col mt-3 ml-4">
                          <label
                            htmlFor="date_code"
                            className="block text-sm font-medium leading-[14px] text-[#1A202C]"
                          >
                            Date Code
                          </label>
                          <input
                            type="text"
                            name="date_code"
                            id="date_code"
                            value={formData.date_code}
                            onChange={handleInputChange}
                            className="mt-2 block w-[224px] h-[44px] rounded-[10px] border-white  py-1.5 text-gray-900 ring-1 ring-inset ring-white placeholder:text-[#718096] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row mt-2">
                        <div className="flex flex-col mt-3 ml-4">
                          <label
                            htmlFor="lot_code"
                            className="block text-sm font-medium leading-[14px] text-[#1A202C]"
                          >
                            Lot Code
                          </label>
                          <input
                            type="text"
                            name="lot_code"
                            id="lot_code"
                            value={formData.lot_code}
                            onChange={handleInputChange}
                            className="mt-2 block w-[224px] h-[44px] rounded-[10px] border-white  py-1.5 text-gray-900 ring-1 ring-inset ring-white placeholder:text-[#718096] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                        <div className="flex flex-col mt-3 ml-4">
                          <label
                            htmlFor="receipt-date"
                            className="block text-sm font-medium leading-[14px] text-[#1A202C]"
                          >
                            Receipt Date
                          </label>
                          <div className="mt-2">
                            <DatePicker
                              className="w-[224px]"
                              onChange={(newValue) => {
                                const formattedDate = newValue.startDate;
                                setFormData((prevData) => ({
                                  ...prevData,
                                  receipt_date: formattedDate,
                                }));
                                checkFormCompletion();
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col mt-3 ml-4">
                          <label
                            htmlFor="po_line"
                            className="block text-sm font-medium leading-[14px] text-[#1A202C]"
                          >
                            Purchase Order Line
                          </label>
                          <input
                            type="number"
                            name="po_line"
                            id="po_line"
                            value={formData.po_line}
                            onChange={handleInputChange}
                            className="mt-2 block w-[224px] h-[44px] rounded-[10px] border-white  py-1.5 text-gray-900 ring-1 ring-inset ring-white placeholder:text-[#718096] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row mt-2">
                        <div className="flex flex-col mt-3 ml-4">
                          <label
                            htmlFor="purchase_order"
                            className="block text-sm font-medium leading-[14px] text-[#1A202C]"
                          >
                            Purchase Order
                          </label>
                          <input
                            type="text"
                            name="purchase_order"
                            id="purchase_order"
                            onChange={checkFormCompletion}
                            className="mt-2 block w-[224px] h-[44px] rounded-[10px] border-white  py-1.5 text-gray-900 ring-1 ring-inset ring-white placeholder:text-[#718096] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                        <div className="flex flex-col mt-3 ml-4">
                          <label
                            htmlFor="media_type"
                            className="block text-sm font-medium leading-[14px] text-[#1A202C]"
                          >
                            Media type or package
                          </label>
                          <input
                            type="text"
                            name="media_type"
                            id="media_type"
                            onChange={checkFormCompletion}
                            className="mt-2 block w-[224px] h-[44px] rounded-[10px] border-white  py-1.5 text-gray-900 ring-1 ring-inset ring-white placeholder:text-[#718096] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                        <div className="flex flex-col mt-3 ml-4">
                          <label
                            htmlFor="end_customer"
                            className="block text-sm font-medium leading-[14px] text-[#1A202C]"
                          >
                            End Customer
                          </label>
                          <input
                            type="text"
                            name="end_customer"
                            id="end_customer"
                            value={formData.end_customer}
                            onChange={handleInputChange}
                            className="mt-2 block w-[224px] h-[44px] rounded-[10px] border-white  py-1.5 text-gray-900 ring-1 ring-inset ring-white placeholder:text-[#718096] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="flex mt-10 ml-6">
                        <button
                          type="button"
                          className="w-[157px] h-[48px] border-[1px] border-[#194BFB] rounded-[10px]"
                        >
                          <span className="text-[#194BFB] font-bold text-lg leading-[18px]">
                            View Notes
                          </span>
                        </button>
                        {isFormComplete ? (
                          <div className="flex justify-center items-center ml-9">
                            <button
                              type="button"
                              className=" ml-4 w-[157px] h-[48px] border-[1px] border-[#FB1919] rounded-[10px] mr-4"
                            >
                              <div className="flex items-center justify-center">
                                <span className="text-[#FB1919] font-bold text-lg leading-[18px]">
                                  Cancel
                                </span>
                                <XMarkIcon
                                  className="ml-3 w-6 h-6 text-[#FB1919]"
                                  strokeWidth={2}
                                />
                              </div>
                            </button>
                            <button
                              type="button"
                              className="flex ml-4 items-center justify-center w-[157px] h-[48px] border-2 bg-[#4EAB37] rounded-[10px]"
                              onClick={handleConfirm}
                            >
                              <div className="flex items-center justify-center">
                                <span className="text-white font-bold text-lg leading-[18px]">
                                  Confirm
                                </span>
                                <ArrowLongRightIcon
                                  className="text-white ml-3 w-6 h-6"
                                  strokeWidth={2}
                                />
                              </div>
                            </button>
                          </div>
                        ) : (
                          <>
                            <button
                              type="button"
                              className="flex items-center justify-center ml-32 w-[138px] h-[48px] border-[1px] bg-[#194BFB] rounded-[10px]"
                            >
                              <ScanIcon />
                              <span className="ml-2 text-white font-bold text-lg leading-[18px]">
                                Scan
                              </span>
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </main>
        </div>
        <div className="mt-[76px] ml-6 xl:mr-32">
          <SessionHistory height="735px" />
        </div>
      </div>
    </>
  );
};

export default ItemReceiptPage;
