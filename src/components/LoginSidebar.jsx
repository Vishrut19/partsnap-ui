import Image from "next/image";
import React from "react";

const LoginSidebar = () => {
  return (
    <>
      <div className="flex absolute bg-[#194BFB] w-[720px] h-[1024px]">
        <div className="w-[620px] mt-[50px] ml-[50px] h-[924px] rounded-[20px] border-[1px] bg-custom-gradient">
          <Image
            src="/assets/loginPageImage.png"
            width={562}
            height={600}
            className="mt-[30px] ml-[30px] rounded-[12px]"
          />
          <div className="flex flex-col items-center justify-center">
            <span className="mt-36 text-white text-center font-bold text-[28px] leading-9">
              Simplify Your Order Management
            </span>
            <span className="text-white text-center w-[476px] h-[78px] mt-12 leading-[26px] font-normal text-base">
              Join <span className="font-semibold">Brand Name</span> for a
              simplified, efficient way to manage your orders and tags. Sign in
              to unlock powerful features designed for your business.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSidebar;
