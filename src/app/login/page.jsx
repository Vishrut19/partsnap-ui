"use client";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/20/solid";
import { EyeSlashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-center min-h-screen w-[494px] h-full ml-[833px] mt-[171px]">
        <div className="max-w-md w-full lg:max-w-xl">
          <h1 className="text-[#1A202C] font-bold text-3xl leading-[30px]">
            Login
          </h1>
          <p className="text-[#718096] font-normal mt-[46px] text-base leading-4 tracking-wider">
            Welcome back! Please enter your details
          </p>
          <div className="flex gap-3">
            <button className="w-[237px] h-[50px] border-[1px] border-[#E2E8F0] rounded-[10px] mt-10">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-4"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                <span className="ml-2 mt-[6px] font-semibold text-base leading-4 text-[#1A202C]">
                  Login with Google
                </span>
              </div>
            </button>
            <button className="w-[237px] h-[50px] border-[1px] border-[#E2E8F0] rounded-[10px] mt-10">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-4"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                >
                  <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
                </svg>
                <span className="ml-2 mt-[6px] font-semibold text-base leading-4 text-[#1A202C]">
                  Login with Apple
                </span>
              </div>
            </button>
          </div>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-[1px] border-t border-[#E2E8F0]"></div>
            <span className="flex-shrink mx-4 text-[#718096]">Or</span>
            <div className="flex-grow border-[1px] border-t border-[#E2E8F0]"></div>
          </div>
          {/* Form */}
          <div className="mt-3">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-[#718096] tracking-wider"
                >
                  Email Address
                </label>
                <div className="relative mt-2">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <EnvelopeIcon
                      className="h-5 w-5 text-black"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-[#718096] tracking-wider"
                  >
                    Password
                  </label>
                </div>
                <div className="relative mt-2">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-black"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <EyeSlashIcon
                    className="pointer-events-none absolute inset-y-0 right-0 h-full w-5 text-black mr-2"
                    aria-hidden="true"
                  />
                </div>

                <div className="flex items-center mt-1 text-right justify-end text-sm">
                  <a
                    href="#"
                    className="font-semibold leading-[14px] text-[#194BFB] hover:text-[#194afb]"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => router.push("/dashboard")}
                  className="flex w-full h-[54px] justify-center rounded-[10px] bg-[#194BFB] px-3 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#2f53d5] shadow-[#194BFB40]"
                >
                  <span className="font-extrabold leading-5 text-xl">
                    Login &#8594;
                  </span>
                </button>
              </div>
            </form>
            <div className="flex  justify-start">
              <p className="mt-10 text-center leading-4 font-normal text-sm text-[#718096]">
                Not Registered yet?
                <a
                  href="#"
                  className="ml-1 text-right font-semibold leading-4 text-[#194BFB] hover:text-indigo-500"
                >
                  Create an Account
                </a>
              </p>
            </div>
          </div>
          <div className="text-[#718096] mt-64 font-normal bg-white text-sm mb-2 leading-4">
            © 2024. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
