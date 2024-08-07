"use client";
import { useState, useEffect } from "react";
import DatePicker from "@/components/DatePicker";
import SessionHistory from "@/components/SessionHistory";
import TagComponent from "@/components/TagComponent";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import useGetTags from "@/hooks/useGetTags";
import useCreateTag from "@/hooks/useCreateTag";
import AttachmentModal from "@/components/AttachmentModal";
import useUploadAttachment from "@/hooks/useUploadAttachment";
import AttachmentDisplay from "@/components/AttachmentDisplay";
import PODisplay from "@/components/PODisplay";
import useCreateSession from "@/hooks/useCreateSession";
import useGetSessions from "@/hooks/useGetSessions";
import useUpdateSessionTags from "@/hooks/useUpdateSessionTags";
import useGetSessionDetails from "@/hooks/useGetSessionDetails";

const InventoryManagementPage = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [receivingTagQuery, setReceivingTagQuery] = useState("");
  const [customerTagQuery, setCustomerTagQuery] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [selectedSessionId, setSelectedSessionId] = useState(null);
  const [selectedReceivingTags, setSelectedReceivingTags] = useState([]);
  const [selectedCustomerTags, setSelectedCustomerTags] = useState([]);
  const [displayedReceivingTags, setDisplayedReceivingTags] = useState([]);
  const [displayedCustomerTags, setDisplayedCustomerTags] = useState([]);
  const [resumedSession, setResumedSession] = useState(null);

  const { createSession, isLoading: isCreatingSession } = useCreateSession();
  const { sessionDetails, isLoading: isLoadingSessionDetails } =
    useGetSessionDetails(selectedSessionId);

  useEffect(() => {
    if (sessionDetails) {
      // Filter tags based on tag_type_id
      const receivingTags = sessionDetails.tags.filter(
        (tag) => tag.tag_type_id === 2
      );
      const customerTags = sessionDetails.tags.filter(
        (tag) => tag.tag_type_id === 1
      );

      setDisplayedReceivingTags(receivingTags);
      setDisplayedCustomerTags(customerTags);

      // Set purchase order if available
      if (sessionDetails.purchase_order) {
        setUploadedFileName(sessionDetails.purchase_order.name || "");
        setUploadedFile(sessionDetails.purchase_order.file || null);
      }

      // Set the date if it's available in sessionDetails
      // setSelectedDate(sessionDetails.date);
    }
  }, [sessionDetails]);

  const handleResumeSession = (session) => {
    setSelectedSessionId(session.id);
    setResumedSession(session);
  };

  const {
    updateSessionTags,
    isLoading: isUpdatingTags,
    error: updateTagsError,
  } = useUpdateSessionTags();

  const sessions = useGetSessions();

  const {
    uploadAttachment,
    isLoading: isUploading,
    error: uploadError,
  } = useUploadAttachment();

  // Receiving Tags
  const {
    tags: receivingTags,
    isLoading,
    error,
  } = useGetTags(2, receivingTagQuery);

  // Customer Tags
  const {
    tags: customerTags,
    isLoading: customerTagsLoading,
    error: customerTagsError,
  } = useGetTags(1, customerTagQuery);

  const {
    createTagType,
    createTag,
    isLoading: createTagLoading,
    error: createTagError,
  } = useCreateTag();

  const handleAddNewCustomerTag = async () => {
    try {
      // Create a new tag with the customer tag type (tag_type_id: 1)
      await createTag(customerTagQuery, 1);

      // Reset the customer tag query
      setCustomerTagQuery("");

      // Optionally, you can update the customerTags list here
    } catch (error) {
      console.error(error);
    }
  };

  // Handle File Upload
  const handleFileUpload = (fileName) => {
    setUploadedFileName(fileName);
    setUploadedFile(fileName);
    setShowModal(false);
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

  // Handle Receiving Tag Selection
  const handleReceivingTagSelection = (tag) => {
    setSelectedReceivingTags((prevTags) => {
      if (prevTags.some((t) => t.id === tag.id)) {
        return prevTags.filter((t) => t.id !== tag.id);
      } else {
        return [...prevTags, tag];
      }
    });
  };

  // Handle Customer Tag Selection
  const handleCustomerTagSelection = (tag) => {
    setSelectedCustomerTags((prevTags) => {
      if (prevTags.some((t) => t.id === tag.id)) {
        return prevTags.filter((t) => t.id !== tag.id);
      } else {
        return [...prevTags, tag];
      }
    });
  };

  // Selected Receiving Tags
  const handleAddSelectedReceivingTags = () => {
    const newTags = receivingTags.filter((tag) =>
      selectedReceivingTags.some((selectedTag) => selectedTag.id === tag.id)
    );

    setDisplayedReceivingTags((prevTags) => [
      ...new Set([...prevTags, ...newTags]),
    ]);

    setSelectedReceivingTags([]);
    setReceivingTagQuery("");
  };

  // Handle Begin Receiving
  const handleBeginReceiving = async () => {
    try {
      let sessionId;
      if (resumedSession) {
        sessionId = resumedSession.id;
      } else {
        const nextSessionNumber = sessions.length + 1;
        const sessionName = `session_${nextSessionNumber}`;
        const newSession = await createSession(sessionName);
        sessionId = newSession.id;
      }

      // Add both receiving and customer tags to the session
      const allTags = [...displayedReceivingTags, ...displayedCustomerTags];
      if (allTags.length > 0) {
        await updateSessionTags(sessionId, allTags);
      }
      // Navigate to the session
      router.push(`/item-receipt/${sessionId}`);
    } catch (error) {
      console.error("Failed to begin receiving:", error);
    }
  };

  // Delete Receiving Tag
  const handleReceivingTagDelete = async (tagToDelete) => {
    if (sessions.length > 0) {
      const latestSession = sessions[sessions.length - 1];
      await updateSessionTags(latestSession.id, [tagToDelete], true);
      setDisplayedReceivingTags((prevTags) =>
        prevTags.filter((tag) => tag.id !== tagToDelete.id)
      );
    }
  };

  // Delete Customer Tag
  const handleCustomerTagDelete = async (tagToDelete) => {
    if (sessions.length > 0) {
      const latestSession = sessions[sessions.length - 1];
      await updateSessionTags(latestSession.id, [tagToDelete], true);
      setDisplayedCustomerTags((prevTags) =>
        prevTags.filter((tag) => tag.id !== tagToDelete.id)
      );
    }
  };

  // Add Selected Customer Tags
  const handleAddSelectedCustomerTags = () => {
    const newTags = customerTags.filter((tag) =>
      selectedCustomerTags.some((selectedTag) => selectedTag.id === tag.id)
    );

    setDisplayedCustomerTags((prevTags) => [
      ...new Set([...prevTags, ...newTags]),
    ]);

    setSelectedCustomerTags([]);
    setCustomerTagQuery("");
  };

  return (
    <>
      <div className="bg-[#F4F7FF] lg:pl-72 flex justify-content-between">
        <div className="mx-auto max-w-5xl">
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
              <div>
                <h1 className="text-[#1A202C] font-semibold text-2xl leading-6">
                  Receive Inventory
                </h1>
                <p className="mt-2 font-normal text-base text-[#718096] leading-4">
                  Select how would you like the receiving process to begin
                </p>
              </div>
              {/* <div className="flex ml-44">
              <div className="bg-white mt-4 w-[450px] h-[60px] rounded-[10px] border-[#E2E8F0] border-[1px] p-[4px] gap-[4px]">
                <button
                  type="button"
                  className="border-[#194BFB] font-semibold border-[1px] w-[172px] h-12 bg-[#E8EDFF] gap-[10px] px-[30px] pt-3 pb-[15px] text-md text-[#194BFB] hover:bg-indigo-100 rounded-[10px]"
                >
                  New Session
                </button>
                <button
                  type="button"
                  className="rounded-md font-normal text-md leading-[18px] w-[266px] h-12 bg-white gap-[10px] px-[30px] py-[15px] text-[#1A202C] hover:bg-gray-50"
                >
                  Resume Paused Session
                </button>
              </div>
            </div> */}
            </div>
            {/* Main Content */}
            <div className="mt-5 ml-5 bg-white w-[787px] h-[728px] rounded-[10px]">
              <form className="bg-white h-full rounded-[10px]">
                <div className="px-4 py-6 sm:p-8">
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
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pr-8"
                          />
                          <MagnifyingGlassIcon
                            className="pointer-events-none absolute inset-y-0 right-0 h-full w-5 text-black mr-2"
                            aria-hidden="true"
                          />
                        </div>
                        <a
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
                          <TagComponent
                            tags={receivingTags}
                            selectedTags={selectedReceivingTags}
                            onTagClick={handleReceivingTagSelection}
                          />
                          {receivingTags.length > 0 && (
                            <button
                              type="button"
                              onClick={handleAddSelectedReceivingTags}
                              className="mt-[10px] px-[25px] py-[10px] w-[211px] h-[44px] rounded-[10px] border-[1px] border-[#194BFB] "
                            >
                              <span className="font-semibold text-lg leading-[18px] text-[#194BFB] text-nowrap">
                                Add Selected Tags
                              </span>
                            </button>
                          )}
                        </>
                      )}
                      {/* Display selected tags */}
                      {displayedReceivingTags.length > 0 && (
                        <TagComponent
                          tags={displayedReceivingTags}
                          selectedTags={displayedReceivingTags}
                          onTagClick={handleReceivingTagDelete}
                        />
                      )}
                    </div>
                    <br />
                    <div>
                      <label
                        htmlFor="customer-tag"
                        className="block text-sm font-medium leading-[14px] text-[#1A202C]"
                      >
                        Customer Tag
                      </label>
                      <div className="flex">
                        <div className="relative mt-2 w-[502px]">
                          <input
                            type="search"
                            name="customer-tag"
                            placeholder="Search Tag"
                            id="customer-tag"
                            value={customerTagQuery}
                            onChange={(e) =>
                              setCustomerTagQuery(e.target.value)
                            }
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pr-8"
                          />
                          <MagnifyingGlassIcon
                            className="pointer-events-none absolute inset-y-0 right-0 h-full w-5 text-black mr-2"
                            aria-hidden="true"
                          />
                        </div>
                        <a
                          href="#"
                          onClick={handleAddNewCustomerTag}
                          className="ml-2 mt-4 text-[#194BFB] text-base font-medium leading-4 underline"
                        >
                          Add New Customer Tag
                        </a>
                      </div>
                      {customerTagsLoading ? (
                        <p>Loading...</p>
                      ) : customerTagsError ? (
                        <p className="text-red-500">{customerTagsError}</p>
                      ) : customerTagQuery && customerTags.length == 0 ? (
                        <p className="text-red-500">TAG NOT FOUND</p>
                      ) : (
                        <>
                          <TagComponent
                            tags={customerTags}
                            selectedTags={selectedCustomerTags}
                            onTagClick={handleCustomerTagSelection}
                          />
                          {customerTags.length > 0 && (
                            <button
                              type="button"
                              onClick={handleAddSelectedCustomerTags}
                              className="mt-[10px] px-[25px] py-[10px] w-[211px] h-[44px] rounded-[10px] border-[1px] border-[#194BFB]"
                            >
                              <span className="font-semibold text-lg leading-[18px] text-[#194BFB] text-nowrap">
                                Add Selected Tags
                              </span>
                            </button>
                          )}
                        </>
                      )}
                      {displayedCustomerTags.length > 0 && (
                        <TagComponent
                          tags={displayedCustomerTags}
                          selectedTags={displayedCustomerTags}
                          onTagClick={handleCustomerTagDelete}
                        />
                      )}
                    </div>
                    <br />
                    <div>
                      <label
                        htmlFor="purchase-order"
                        className="block text-sm font-medium leading-[14px] text-[#1A202C]"
                      >
                        Add Purchase Order to Receipt
                      </label>
                      <div
                        className={`flex ${
                          uploadedFile ? "flex-col" : ""
                        } mt-2`}
                      >
                        <input
                          id="text"
                          name="purchase-order"
                          placeholder="Upload Purchase Order to Receipt"
                          type="text"
                          value={uploadedFileName}
                          readOnly
                          className="block w-[70%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {showModal && (
                          <AttachmentModal
                            onClose={() => setShowModal(false)}
                            onUpload={handleFileUpload}
                          />
                        )}
                        {!uploadedFile ? (
                          <button
                            type="button"
                            onClick={() => setShowModal(true)}
                            className="ml-3 border-[#194BFB] border-[1px] w-[192px] h-12 bg-white gap-[10px] px-[26px] py-[13px] hover:bg-indigo-100 rounded-[10px] flex items-center justify-center cursor-pointer"
                          >
                            <span className="text-[#194BFB] text-md font-semibold leading-none">
                              Add PO
                            </span>
                          </button>
                        ) : (
                          <PODisplay fileName={uploadedFile} />
                        )}
                      </div>
                    </div>
                    <br />
                    <div>
                      <label
                        htmlFor="add_attachment"
                        className="block text-sm font-medium leading-[14px] text-[#1A202C]"
                      >
                        Add attachment(s) to all receipt in this session
                      </label>

                      <div className="mt-2">
                        {!uploadedFileName ? (
                          <button
                            type="button"
                            onClick={() => setShowModal(true)}
                            name="add_attachment"
                            className="border-[#194BFB] border-[1px] w-[192px] h-12 bg-white gap-[10px] px-[26px] py-[13px] hover:bg-indigo-100 rounded-[10px] flex items-center justify-center"
                          >
                            <span className="text-[#194BFB] text-md font-semibold leading-none">
                              Add Attachment
                            </span>
                          </button>
                        ) : (
                          <AttachmentDisplay fileName={uploadedFile} />
                        )}
                      </div>
                    </div>
                    <br />
                    <div>
                      <label
                        htmlFor="select-date"
                        className="block text-sm font-medium leading-[14px] text-[#1A202C]"
                      >
                        Set Receipt Date
                      </label>
                      <div className="flex mt-2">
                        <DatePicker className="w-[271px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-[60px]">
                  <button
                    type="button"
                    onClick={handleBeginReceiving}
                    disabled={isCreatingSession}
                    className="w-[232px] h-[48px] rounded-md bg-[#194BFB] px-[30px] py-[12px] shadow-sm hover:bg-[#2250f7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    <span className="text-white font-bold text-lg leading-[18px]">
                      {isCreatingSession
                        ? "Creating Session..."
                        : "Begin Receiving →"}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
        <div className="mt-[76px] ml-6 xl:mr-32">
          <SessionHistory onResumeSession={handleResumeSession} />
        </div>
      </div>
    </>
  );
};

export default InventoryManagementPage;
