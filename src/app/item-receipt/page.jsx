"use client";
import Image from "next/image";
import SessionHistory from "@/components/SessionHistory";
import React from "react";
import { useRouter } from "next/navigation";

const ItemReceiptPage = () => {
  const router = useRouter();
  return (
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
        <div className="mt-5 ml-5 bg-white w-[787px] h-[834px] rounded-[10px]">
          <div className="w-[747px] h-[794px] ml-5 mt-5">
            <h2 className="pt-5 text-lg text-[#1A202C] font-semibold leading-[18px]">
              Item Receipt
            </h2>
            <div className="mt-[38px] w-[747px] h-[756px]">
              <div className="flex">
                {/* Left Side */}
                <div className="flex flex-col mr-[1px]">
                  <div className="flex mb-3">
                    <span className="text-[#718096]">Part Number :</span>
                    <span className="ml-[100px] text-base text-[#1A202C] font-bold">
                      APXG00ARA121MF61
                    </span>
                  </div>
                  <div className="flex mb-3">
                    <span className="text-[#718096]">
                      Media Type per package :
                    </span>
                    <span className="ml-[10px] text-base text-[#1A202C] font-bold">
                      Bag
                    </span>
                  </div>
                  <div className="flex mb-3">
                    <span className="text-[#718096]">Purchase Order :</span>
                    <span className="ml-[80px] text-base text-[#1A202C] font-bold">
                      18057-1-10003454
                    </span>
                  </div>
                  <div className="flex mb-3">
                    <span className="text-[#718096]">
                      Purchase order line :
                    </span>
                    <span className="ml-[52px] text-base text-[#1A202C] font-bold">
                      1
                    </span>
                  </div>
                  <div className="flex mb-3">
                    <span className="w-[113px] h-[16px] text-[#718096]">
                      Receiving Tags :
                    </span>
                    <span className="mt-2 ml-[95px] text-base text-[#1A202C] font-bold leading-4 text-pretty">
                      Bobs_Rocket, Rocket, Consigned
                    </span>
                  </div>
                </div>

                <div class="flex justify-center">
                  <div class="h-full border-l border-[#E2E8F0] border-[1px]"></div>
                </div>

                {/* Right Side */}
                <div className="flex flex-col ml-4">
                  <div className="flex mb-3">
                    <span className="text-[#718096]">Total Quantity:</span>
                    <span className="ml-[30px] text-base text-[#1A202C] font-bold">
                      1,000
                    </span>
                  </div>
                  <div className="flex mb-3">
                    <span className="text-[#718096]">Date Code:</span>
                    <span className="ml-[55px] text-base text-[#1A202C] font-bold">
                      240321
                    </span>
                  </div>
                  <div className="flex mb-3">
                    <span className="text-[#718096]">Lot Code:</span>
                    <span className="ml-[67px] text-base text-[#1A202C] font-bold">
                      85362
                    </span>
                  </div>
                  <div className="flex mb-3">
                    <span className="text-[#718096]">Receipt Date:</span>
                    <span className="ml-[40px] text-base text-[#1A202C] font-bold">
                      01 March, 2024
                    </span>
                  </div>
                  <div className="flex mb-3">
                    <span className="text-[#718096]">End Customer:</span>
                    <span className="ml-[30px] text-base text-[#1A202C] font-bold">
                      RocketX
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex mt-6 justify-center">
                <button
                  type="button"
                  className="ml-5 border-[#194BFB] border-[1px] w-[249px] h-[42px] bg-white gap-[10px] px-[20px] py-[12px] hover:bg-indigo-100 rounded-[10px] flex items-center justify-center"
                >
                  <span className="text-[#194BFB] text-md font-semibold leading-none">
                    View Notes (2 Available)
                  </span>
                </button>
              </div>

              <div className="ml-40 mt-6 flex flex-col justify-center w-[488px] h-[366px]">
                <Image
                  src="/assets/receiptImage.png"
                  width={488}
                  height={288}
                />
                <div className="flex gap-[10px] justify-center">
                  <button
                    type="button"
                    className="mt-2 w-[154px] h-[48px] px-[30px] pb-[15px] pt-[12px] border-[1px] border-[#194BFB] rounded-[10px] hover:bg-indigo-100"
                  >
                    <span className="text-[#194BFB] text-md font-semibold leading-[18px]">
                      View Label
                    </span>
                  </button>
                  <button
                    type="button"
                    className="mt-2 w-[154px] h-[48px] px-[30px] pb-[15px] pt-[12px] border-[1px] border-[#194BFB] rounded-[10px] hover:bg-indigo-100"
                  >
                    <span className="text-[#194BFB] text-md font-semibold leading-[18px]">
                      Print Label
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex justify-center ml-[40px] mt-[50px]">
                <button
                  type="button"
                  className="w-[249px] h-[48px] bg-[#4EAB37] rounded-[10px] hover:bg-[#4ba435]"
                  onClick={() => router.push("/bin-managment")}
                >
                  <span className="text-white text-lg font-semibold leading-none">
                    Complete Receipt &#8594;
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
  );
};

export default ItemReceiptPage;
