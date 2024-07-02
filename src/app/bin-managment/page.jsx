"use client";
import React from "react";
import SessionHistory from "@/components/SessionHistory";

const BinAssignmentPage = () => {
  return (
    <>
      <div className="bg-[#F4F7FF] lg:pl-72 flex justify-content-between">
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div>
              <h1 className="text-[#1A202C] font-semibold text-2xl leading-6">
                Inventory Management
              </h1>
            </div>
          </div>
          {/* Main Content */}
          <div className="mt-5 ml-5 bg-white w-[676px] h-[358px] rounded-[10px]">
            <div className="w-[636px] h-[318px] ml-5 mt-5">
              <div className="w-[378px] h-[44px] flex flex-col">
                <h2 className="pt-5 text-lg text-[#1A202C] font-semibold leading-[18px]">
                  Bin Assignment
                </h2>
                <p className="text-[#718096] leading-4 mt-1 text-sm">
                  Scan the Bin and Label to complete binning process
                </p>
              </div>
              <div className="mt-[38px] w-[636px] h-[154px]">
                <div className="flex flex-col gap-[18px]">
                  <form className="flex flex-col gap-3">
                    <label className="text-[#1A202C] text-sm font-medium leading-[14px]">
                      Scan Label PSID
                    </label>
                    <div className="flex gap-[10px]">
                      <input
                        placeholder="Scan Label PSID"
                        className="border-[#E2E8F0] border-[1px] w-[502px] h-[44px] rounded-[10px]"
                      />
                      <button className="border-[#194BFB] hover:bg-indigo-100 border-[1px] rounded-[10px] w-[104px] h-[44px] px-[30px] pt-[10px] pb-[13px]">
                        <span className="text-[#194BFB] text-lg leading-[18px]">
                          Scan
                        </span>
                      </button>
                    </div>
                    <label className="pt-2 text-[#1A202C] text-sm font-medium leading-[14px]">
                      Scan Bin
                    </label>
                    <div className="flex gap-[10px]">
                      <input
                        placeholder="Scan Bin"
                        className="border-[#E2E8F0] border-[1px] w-[502px] h-[44px] rounded-[10px]"
                      />
                      <button className="border-[#194BFB] hover:bg-indigo-100 border-[1px] rounded-[10px] w-[104px] h-[44px] px-[30px] pt-[10px] pb-[13px]">
                        <span className="text-[#194BFB] text-lg leading-[18px]">
                          Scan
                        </span>
                      </button>
                    </div>
                  </form>
                </div>

                <div className="flex justify-center mt-[50px]">
                  <button
                    type="button"
                    className="w-[164px] h-[48px] bg-[#4EAB37] rounded-[10px] hover:bg-[#4ba435]"
                    onClick={() => router.push("/bin-managment")}
                  >
                    <span className="text-white text-lg font-semibold leading-none">
                      Confirm &#8594;
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="mt-[82px] ml-6">
          <SessionHistory />
        </div>
      </div>
    </>
  );
};

export default BinAssignmentPage;
