"use client";
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { ArrowRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import useUploadAttachment from "@/hooks/useUploadAttachment";

export default function AttachmentModal({ onClose, onUpload }) {
  const router = useRouter();
  const { uploadAttachment, isLoading, error } = useUploadAttachment();
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [fileError, setFileError] = useState(null);

  const handleFileClick = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.multiple = false;
    fileInput.addEventListener("change", handleFileSelect);
    fileInput.click();
  };

  const handleUploadClick = async () => {
    const attachmentTypeId = selectedFile.type.startsWith("image/") ? 4 : 1; // 4 for image, 1 for document

    try {
      await uploadAttachment(selectedFile, attachmentTypeId);
      // Handle successful upload
      console.log("Attachment uploaded successfully");
      onUpload(selectedFile.name);
      onClose();
    } catch (error) {
      // Handle error
      console.error("Error uploading attachment:", error);
    }
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "application/pdf",
    ];

    if (allowedTypes.includes(file.type)) {
      setSelectedFile(file);
      setFileError(null);

      // Generate preview URL
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFile(null);
      setPreviewUrl(null);
      setFileError(
        "File type is not supported. Only PDF and image files are allowed."
      );
    }
  };

  const handleNextClick = () => {
    // Increase the modal height
    const modal = document.querySelector(".modal");
    modal.style.height = "500px";
    modal.style.overflow = "scroll";
  };

  return (
    <Dialog open={true} onClose={onClose} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-full overflow-scroll">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="modal w-[788px] h-[345px] rounded-none rounded-tl-[10px] rounded-tr-[10px] relative transform overflow-hidden bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="sticky w-[788px] h-[50px] bg-[#194BFB] rounded-none rounded-tl-[10px] rounded-tr-[10px] -ml-[16px] -mt-5 flex justify-between items-center px-4">
              <span className="text-white font-bold text-lg leading-[18px]">
                Add Attachment
              </span>
              <button
                className="flex items-center w-6 h-6 border-[1.5px] border-white p-1 rounded-md"
                onClick={onClose}
              >
                <XMarkIcon className="h-5 w-5 text-white" strokeWidth={3} />
              </button>
            </div>

            <div>
              <div className="mt-3 text-center">
                <div className="mt-2">
                  <p className="text-sm text-[#1A202C] font-medium leading-[14px]">
                    Select the source to add an image
                  </p>
                </div>
                <div className="mt-3 flex justify-center gap-[10px]">
                  <button
                    className="bg-[#194BFB0D] w-[164px] h-[118px] rounded-[10px] border-[1px] hover:border-[#194BFB] px-[50px] py-[20px] hover:shadow-lg"
                    onClick={handleFileClick}
                  >
                    <div className="flex flex-col items-center justify-center">
                      <Image
                        src="/assets/scannerIcon.png"
                        width={64}
                        height={51}
                        alt="Scanner Icon Image"
                      />
                      <span className="mt-3 text-center leading-4 font-semibold text-[15px]">
                        Scanner
                      </span>
                    </div>
                  </button>
                  <button
                    className="bg-[#194BFB0D] w-[164px] h-[118px] rounded-[10px] border-[1px] hover:border-[#194BFB] px-[50px] py-[20px] hover:shadow-lg"
                    onClick={handleFileClick}
                  >
                    <div className="flex flex-col items-center justify-center">
                      <Image
                        src="/assets/groupFile.png"
                        width={64}
                        height={51}
                        alt="Group File Icon Image"
                      />
                      <span className="mt-3 text-nowrap text-center leading-4 font-semibold text-[15px]">
                        From File
                      </span>
                    </div>
                  </button>
                </div>
                {fileError && (
                  <p className="mt-3 text-red-600 font-bold">{fileError}</p>
                )}
              </div>
            </div>
            <div className="mt-16 flex justify-center">
              <button
                type="button"
                onClick={handleNextClick}
                disabled={!selectedFile}
                className={`inline-flex w-[114px] h-[40px] justify-center rounded-md px-3 pb-2 pt-3 text-sm font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                  selectedFile
                    ? "bg-[#194BFB] text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                <span className="text-lg leading-[18px] font-bold">Next</span>
                <ArrowRightIcon
                  className="ml-2 w-6 h-6 pb-1"
                  strokeWidth={2.5}
                />
              </button>
            </div>
            {previewUrl && (
              <>
                <div className="flex justify-center items-center ml-24 w-[554px] h-[390px] rounded-[10px] border-[1px] border-[#E2E8F0] mt-4">
                  {selectedFile.type.startsWith("image/") ? (
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="w-full h-full object-contain rounded-[10px]"
                    />
                  ) : (
                    <div className="w-full h-full">
                      <iframe
                        src={previewUrl}
                        title="Preview"
                        className="w-full h-full rounded-[10px]"
                      />
                    </div>
                  )}
                </div>
                <div className="flex justify-center items-center mt-5 gap-[10px]">
                  <button
                    onClick={handleUploadClick}
                    disabled={isLoading}
                    className="flex justify-center gap-2 w-[153px] h-[48px] border-[1px] rounded-[10px] bg-[#194BFB] border-[#194BFB] text-white py-3 px-[30px]"
                  >
                    <span>{isLoading ? "Uploading..." : "Upload"}</span>
                    <ArrowRightIcon
                      className="ml-2 w-6 h-6 pb-1"
                      strokeWidth={2.5}
                    />
                  </button>
                </div>
              </>
            )}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
