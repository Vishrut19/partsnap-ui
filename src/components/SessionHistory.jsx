"use client";

import useGetSessions from "@/hooks/useGetSessions";

const SessionHistory = ({ height }) => {
  const sessions = useGetSessions();
  return (
    <>
      <div
        className="w-[300px] h-[760px] overflow-scroll rounded-md border-[#E2E8F0] border-[1px] bg-white"
        style={{ height: height || "760px" }}
      >
        <h1 className=" flex justify-center text-[#1A202C] leading-5 text-xl font-semibold mt-4">
          Resume Session
        </h1>
        <div className="mt-2 px-4">
          <hr />
        </div>

        <ul className="w-[250px] h-[66%] ml-6 mt-3">
          {sessions.map((session) => (
            <div key={session.id}>
              <li className="flex flex-col bg-[#F4F7FF] rounded-[10px] px-6 py-4 mb-3">
                <div className="flex justify-between">
                  <div>
                    <span className="leading-[13px] mt-2 text-sm font-medium text-[#1A202C]">
                      Session ID :
                      <span className="font-bold">{session.name}</span>
                    </span>
                    <br />
                    <span className="leading-[13px] mt-2 text-sm font-medium text-[#1A202C]">
                      Description :
                      <span className="font-bold"> {session.description}</span>
                    </span>
                    <br />
                    <span className="leading-[13px] mt-2 text-sm font-medium text-[#1A202C]">
                      PSID : <span className="font-bold"> {session.name}</span>
                    </span>
                    <br />
                    <span className="leading-[13px] mt-2 text-sm font-medium text-[#1A202C]">
                      UID : <span className="font-bold"> {session.name}</span>
                    </span>
                  </div>
                  <button
                    type="button"
                    className="mt-[30px] border-[#194BFB] border-[1px] w-[64px] h-[30px] bg-white gap-[10px] px-[8px] pt-[1px] pb-[6px] text-[#194BFB] hover:bg-indigo-100 rounded-[10px]"
                  >
                    <span className="font-bold leading-[14px] text-sm">
                      Details
                    </span>
                  </button>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SessionHistory;
