"use client";

const items = [
  { id: 1, qty: "1 bag of 50", bin: "A360", psid: "1z2685ah", uid: "NA" },
  { id: 2, qty: "1 bag of 50", bin: "A360", psid: "1z2685ah", uid: "NA" },
  { id: 3, qty: "1 bag of 50", bin: "A360", psid: "1z2685ah", uid: "NA" },
  { id: 4, qty: "1 bag of 50", bin: "A360", psid: "1z2685ah", uid: "NA" },
];

const SessionHistory = () => {
  return (
    <>
      <div className="w-[300px] h-[836px] overflow-scroll rounded-md border-[#E2E8F0] border-[1px] bg-white">
        <h1 className=" flex justify-center text-[#1A202C] leading-5 text-xl font-semibold mt-4">
          Resume Session
        </h1>
        <div className="mt-2 px-4">
          <hr />
        </div>

        <div className="flex flex-col ml-[24px]">
          <span className="leading-[14px] mt-[14px] text-sm font-medium">
            Session ID : <span className="font-bold">1234</span>
          </span>
          <span className="leading-[14px] mt-[12px] text-sm font-medium">
            Started at <span className="font-bold">12:12 18 March, 2024</span>
          </span>
          <span className="leading-[14px] mt-[12px] text-sm font-medium">
            Operator : <span className="font-bold">Radolte</span>
          </span>
        </div>
        <ul role="list" className="w-[250px] h-[66%] ml-6 mt-3">
          {items.map((item) => (
            <>
              <li
                key={item.id}
                className="flex flex-col bg-[#F4F7FF] rounded-[10px] px-6 py-4 mb-3"
              >
                <div className="flex justify-between">
                  <div>
                    <span className="leading-[13px] mt-2 text-sm font-medium text-[#1A202C]">
                      Qty : <span className="font-bold"> {item.qty}</span>
                    </span>
                    <br />
                    <span className="leading-[13px] mt-2 text-sm font-medium text-[#1A202C]">
                      Bin : <span className="font-bold"> {item.bin}</span>
                    </span>
                    <br />
                    <span className="leading-[13px] mt-2 text-sm font-medium text-[#1A202C]">
                      PSID : <span className="font-bold"> {item.psid}</span>
                    </span>
                    <br />
                    <span className="leading-[13px] mt-2 text-sm font-medium text-[#1A202C]">
                      UID : <span className="font-bold"> {item.uid}</span>
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
            </>
          ))}
        </ul>
        <div className="mt-2">
          <hr />
        </div>

        <div className="flex flex-col ml-[24px]">
          <span className="leading-[14px] mt-[14px] text-sm font-medium">
            Session ID : <span className="font-bold">1234</span>
          </span>
          <span className="leading-[14px] mt-[12px] text-sm font-medium">
            Started at <span className="font-bold">12:12 18 March, 2024</span>
          </span>
          <span className="leading-[14px] mt-[12px] text-sm font-medium">
            Operator : <span className="font-bold">Radolte</span>
          </span>
        </div>
        <ul role="list" className="w-[250px] h-[66%] ml-6 mt-3">
          {items.map((item) => (
            <>
              <li
                key={item.id}
                className="flex flex-col bg-[#F4F7FF] rounded-[10px] px-6 py-4 mb-3"
              >
                <div className="flex justify-between">
                  <div>
                    <span className="leading-[13px] mt-2 text-sm font-medium text-[#1A202C]">
                      Qty : <span className="font-bold"> {item.qty}</span>
                    </span>
                    <br />
                    <span className="leading-[13px] mt-2 text-sm font-medium text-[#1A202C]">
                      Bin : <span className="font-bold"> {item.bin}</span>
                    </span>
                    <br />
                    <span className="leading-[13px] mt-2 text-sm font-medium text-[#1A202C]">
                      PSID : <span className="font-bold"> {item.psid}</span>
                    </span>
                    <br />
                    <span className="leading-[13px] mt-2 text-sm font-medium text-[#1A202C]">
                      UID : <span className="font-bold"> {item.uid}</span>
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
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SessionHistory;
