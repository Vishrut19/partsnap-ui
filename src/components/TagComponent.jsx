import React from "react";

const tagName = [
  { id: 1, name: "Bob_Rocket" },
  { id: 2, name: "General_Rocket" },
  { id: 3, name: "Rocket" },
  { id: 4, name: "SpaceRocket" },
  { id: 5, name: "Rocket_Final" },
];

const TagComponent = () => {
  return (
    <div className="flex flex-row w-full gap-[6px] mt-2">
      {tagName.map((tag) => (
        <button className="border-[#194BFB99] border-[1px] rounded-[40px] w-[150px] h-[30px] bg-[#194BFB1A] px-[12px] pt-[1px] pb-[8px]">
          <span className="text-[#194BFB] text-sm leading-[14px] font-medium">
            {tag.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default TagComponent;
