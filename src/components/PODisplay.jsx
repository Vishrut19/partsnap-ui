import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const PODisplay = ({ fileName }) => {
  return (
    <>
      <div className="mt-4 w-[712.59px] h-[94px] rounded-[10px] border-[1px] border-[#E2E8F0]">
        <div className="flex justify-between p-4">
          <div className="flex">
            <Image
              src="/assets/attachmentImage.png"
              width={96.59}
              height={68}
              alt="PO Image"
            />
            <div className="flex flex-col">
              <span className="ml-4 mt-4 text-base leading-4 font-medium text-[#1A202C]">
                {fileName}
              </span>
              <span className="ml-4 mt-2 text-[#718096] font-medium leading-[14px] text-sm">
                1.2mb
              </span>
            </div>
          </div>
          <button className="mt-5 flex items-center justify-center w-6 h-6 border-[1.5px] border-[#718096] p-1 rounded-md">
            <XMarkIcon className="h-5 w-5 text-[#718096]" strokeWidth={3} />
          </button>
        </div>
      </div>
    </>
  );
};

export default PODisplay;
