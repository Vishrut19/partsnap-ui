"use client";
import DatePicker from "@/components/DatePicker";
import SessionHistory from "@/components/SessionHistory";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useParams } from "next/navigation";
import ScanIcon from "@/components/ScanIcon";

const ItemReceiptPage = () => {
  const { sessionId } = useParams();

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
            <div className="w-[787px] h-[538px] rounded-[10px] bg-white ml-5 mt-5 shadow-sm">
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
                            // value={receivingTagQuery}
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
                          //   onClick={handleAddNewReceivingTag}
                          className="ml-2 mt-4 text-[#194BFB] text-base font-medium leading-4 underline"
                        >
                          Add New Tag
                        </a>
                      </div>
                    </div>
                    <div className="mt-3 w-[747px] h-[412px] bg-[#F4F7FF] rounded-[10px]">
                      <h1 className="font-semibold text-lg leading-[18px] ml-4 mt-4">
                        Item Receipt
                      </h1>
                      <div className="flex flex-row">
                        <div className="flex flex-col mt-3 ml-4">
                          <label
                            htmlFor="part-number"
                            className="block text-sm font-medium leading-[14px] text-[#1A202C]"
                          >
                            Part Number
                          </label>
                          <input
                            type="text"
                            name="part-number"
                            id="part-number"
                            className="mt-2 block w-[224px] h-[44px] rounded-[10px] border-white  py-1.5 text-gray-900 ring-1 ring-inset ring-white placeholder:text-[#718096] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                        <div className="flex flex-col mt-3 ml-4">
                          <label
                            htmlFor="total-quantity"
                            className="block text-sm font-medium leading-[14px] text-[#1A202C]"
                          >
                            Total Quantity
                          </label>
                          <input
                            type="text"
                            name="total-quantity"
                            id="total-quantity"
                            className="mt-2 block w-[224px] h-[44px] rounded-[10px] border-white  py-1.5 text-gray-900 ring-1 ring-inset ring-white placeholder:text-[#718096] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                        <div className="flex flex-col mt-3 ml-4">
                          <label
                            htmlFor="date-code"
                            className="block text-sm font-medium leading-[14px] text-[#1A202C]"
                          >
                            Date Code
                          </label>
                          <input
                            type="text"
                            name="date-code"
                            id="date-code"
                            className="mt-2 block w-[224px] h-[44px] rounded-[10px] border-white  py-1.5 text-gray-900 ring-1 ring-inset ring-white placeholder:text-[#718096] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row mt-2">
                        <div className="flex flex-col mt-3 ml-4">
                          <label
                            htmlFor="lot-code"
                            className="block text-sm font-medium leading-[14px] text-[#1A202C]"
                          >
                            Lot Code
                          </label>
                          <input
                            type="text"
                            name="lot-code"
                            id="lot-code"
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
                            <DatePicker className="w-[224px]" />
                          </div>
                        </div>
                        <div className="flex flex-col mt-3 ml-4">
                          <label
                            htmlFor="purchase-order-line"
                            className="block text-sm font-medium leading-[14px] text-[#1A202C]"
                          >
                            Purchase Order Line
                          </label>
                          <input
                            type="text"
                            name="purchase-order-line"
                            id="purchase-order-line"
                            className="mt-2 block w-[224px] h-[44px] rounded-[10px] border-white  py-1.5 text-gray-900 ring-1 ring-inset ring-white placeholder:text-[#718096] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row mt-2">
                        <div className="flex flex-col mt-3 ml-4">
                          <label
                            htmlFor="purchase-order"
                            className="block text-sm font-medium leading-[14px] text-[#1A202C]"
                          >
                            Purchase Order
                          </label>
                          <input
                            type="text"
                            name="purchase-order"
                            id="purchase-order"
                            className="mt-2 block w-[224px] h-[44px] rounded-[10px] border-white  py-1.5 text-gray-900 ring-1 ring-inset ring-white placeholder:text-[#718096] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                        <div className="flex flex-col mt-3 ml-4">
                          <label
                            htmlFor="media-type"
                            className="block text-sm font-medium leading-[14px] text-[#1A202C]"
                          >
                            Media type or package
                          </label>
                          <input
                            type="text"
                            name="media-type"
                            id="media-type"
                            className="mt-2 block w-[224px] h-[44px] rounded-[10px] border-white  py-1.5 text-gray-900 ring-1 ring-inset ring-white placeholder:text-[#718096] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                        <div className="flex flex-col mt-3 ml-4">
                          <label
                            htmlFor="end-customer"
                            className="block text-sm font-medium leading-[14px] text-[#1A202C]"
                          >
                            End Customer
                          </label>
                          <input
                            type="text"
                            name="end-customer"
                            id="end-customer"
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
                        <button
                          type="button"
                          className="flex items-center justify-center ml-32 w-[138px] h-[48px] border-[1px] bg-[#194BFB] rounded-[10px]"
                        >
                          <ScanIcon />
                          <span className="ml-2 text-white font-bold text-lg leading-[18px]">
                            Scan
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </main>
        </div>
        <div className="mt-[76px] ml-6 xl:mr-32">
          <SessionHistory height="643px" />
        </div>
      </div>
    </>
  );
};

export default ItemReceiptPage;
