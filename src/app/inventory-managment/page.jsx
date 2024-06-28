import DatePicker from "@/components/DatePicker";
import SessionHistory from "@/components/SessionHistory";
import TagComponent from "@/components/TagComponent";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const InventoryManagementPage = () => {
  return (
    <>
      <div className="bg-[#F4F7FF] lg:pl-72 flex justify-content-between">
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
            <div className="flex ml-44">
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
            </div>
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
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pr-8"
                        />
                        <MagnifyingGlassIcon
                          className="pointer-events-none absolute inset-y-0 right-0 h-full w-5 text-black mr-2"
                          aria-hidden="true"
                        />
                      </div>
                      <a
                        href="#"
                        className="ml-2 mt-4 text-[#194BFB] text-base font-medium leading-4 underline"
                      >
                        Add New Tag
                      </a>
                    </div>
                    <TagComponent />
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
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pr-8"
                        />
                        <MagnifyingGlassIcon
                          className="pointer-events-none absolute inset-y-0 right-0 h-full w-5 text-black mr-2"
                          aria-hidden="true"
                        />
                      </div>
                      <a
                        href="#"
                        className="ml-2 mt-4 text-[#194BFB] text-base font-medium leading-4 underline"
                      >
                        Add New Tag
                      </a>
                    </div>
                    <TagComponent />
                  </div>
                  <br />
                  <div>
                    <label
                      htmlFor="purchase-order"
                      className="block text-sm font-medium leading-[14px] text-[#1A202C]"
                    >
                      Add Purchase Order to Receipt
                    </label>
                    <div className="flex mt-2">
                      <input
                        id="text"
                        name="purchase-order"
                        type="text"
                        className="block w-[70%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <button
                        type="button"
                        className="ml-3 border-[#194BFB] border-[1px] w-[192px] h-12 bg-white gap-[10px] px-[26px] py-[13px] hover:bg-indigo-100 rounded-[10px] flex items-center justify-center"
                      >
                        <span className="text-[#194BFB] text-md font-semibold leading-none">
                          Add Attachment
                        </span>
                      </button>
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
                      <button
                        type="button"
                        name="add_attachment"
                        className="border-[#194BFB] border-[1px] w-[192px] h-12 bg-white gap-[10px] px-[26px] py-[13px] hover:bg-indigo-100 rounded-[10px] flex items-center justify-center"
                      >
                        <span className="text-[#194BFB] text-md font-semibold leading-none">
                          Add Attachment
                        </span>
                      </button>
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
                    <div className="flex mt-2 w-[271px]">
                      <DatePicker />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center mt-[90px]">
                <button
                  type="submit"
                  className="w-[232px] h-[48px] rounded-md bg-[#194BFB] px-[30px] py-[12px] shadow-sm hover:bg-[#2250f7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <span className="text-white font-bold text-lg leading-[18px]">
                    Begin Receiving &#8594;
                  </span>
                </button>
              </div>
            </form>
          </div>
        </main>
        <div className="mt-16 ml-6">
          <SessionHistory />
        </div>
      </div>
    </>
  );
};

export default InventoryManagementPage;
