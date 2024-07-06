"use client";
const TagComponent = ({ tags }) => {
  console.log(tags);
  return (
    <div className="flex flex-row w-full gap-[6px] mt-2">
      {tags?.map((tag) => (
        <button
          key={tag.id}
          className="border-[#194BFB99] border-[1px] rounded-[40px] w-[150px] h-[30px] bg-[#194BFB1A] px-[12px] pt-[1px] pb-[8px]"
        >
          <span className="text-[#194BFB] text-sm leading-[14px] font-medium">
            {tag.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default TagComponent;
