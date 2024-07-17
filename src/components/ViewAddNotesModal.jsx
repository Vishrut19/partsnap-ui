import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import {
  ArrowLongRightIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function ViewAddNotesModal({ onClose, onSave }) {
  const [notes, setNotes] = useState("");

  const handleSave = () => {
    onSave(notes);
  };

  return (
    <Dialog open={true} onClose={onClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center">
          <DialogPanel className="modal rounded-tl-[10px] rounded-tr-[10px] rounded-br-[0px] rounded-bl-[0px] w-[788px] h-[580px] relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8">
            <div className="flex rounded-tl-[10px] rounded-tr-[10px] rounded-br-[0px] rounded-bl-[0px] -mt-[20px] -ml-[16px] h-[50px] bg-[#194BFB] w-[788px]">
              <div className="flex justify-between w-full">
                <span className="mt-3 ml-3 font-bold text-lg text-white leading-[18px]">
                  View/Add Notes
                </span>
                <button
                  className="flex mt-3 mr-3 items-center w-6 h-6 border-[1.5px] border-white p-1 rounded-md"
                  onClick={onClose}
                >
                  <XMarkIcon className="h-5 w-5 text-white" strokeWidth={3} />
                </button>
              </div>
            </div>
            <div className="flex flex-col w-[756px] h-[92px]">
              <div>
                <div className="flex justify-between mt-4">
                  <span className="text-[#1A202C] text-lg leading-5">
                    RMR | 10/01/2023
                  </span>
                  <button className="border-[1.5px] border-transparent">
                    <TrashIcon className="w-6 h-6 text-[#FF0000]" />
                  </button>
                </div>
                <hr className="mt-3" />
                <span className="text-[#718096] leading-6 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </span>
              </div>
              <div>
                <div className="flex justify-between mt-4">
                  <span className="text-[#1A202C] text-lg leading-5">
                    RMR | 10/01/2023
                  </span>
                  <button className="border-[1.5px] border-transparent">
                    <TrashIcon className="w-6 h-6 text-[#FF0000]" />
                  </button>
                </div>
                <hr className="mt-3" />
                <span className="text-[#718096] leading-6 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </span>
              </div>
            </div>
            <div className="flex gap-3 mt-36">
              <textarea
                rows={4}
                className="block w-[644px] h-[88px] rounded-md border-[1px] border-[#E2E8F0] py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-[#718096] focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Enter Description"
              />
              <button className="w-[95px] h-[44px] border-[1px] border-[#194BFB] rounded-[10px]">
                <span className="text-[#194BFB] leading-[18px] font-bold text-lg">
                  Add
                </span>
              </button>
            </div>
            <div className="flex justify-center gap-2 mt-16">
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
                className="flex ml-4 items-center justify-center w-[157px] h-[48px] border-2 border-[#194BFB]  bg-[#194BFB] rounded-[10px]"
                onClick={handleSave}
              >
                <div className="flex items-center justify-center">
                  <span className="text-white font-bold text-lg leading-[18px]">
                    Save
                  </span>
                  <ArrowLongRightIcon
                    className="text-white ml-3 w-6 h-6"
                    strokeWidth={2}
                  />
                </div>
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
