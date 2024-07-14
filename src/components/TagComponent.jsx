"use client";
const TagComponent = ({ tags, selectedTags, onTagClick }) => {
  console.log("TagComponent props:", { tags, selectedTags, onTagClick });
  return (
    <div className="flex flex-row w-full gap-[6px] mt-2">
      {tags?.map((tag) => (
        <button
          type="button"
          key={tag.id}
          className={`border-[#194BFB99] border-[1px] rounded-[40px] w-[150px] h-[30px] px-[12px] pt-[1px] pb-[8px] ${
            selectedTags?.some((t) => t.id === tag.id)
              ? "bg-[#194BFB] text-white"
              : "bg-[#194BFB1A] text-[#194BFB]"
          }`}
          onClick={() => onTagClick(tag)}
        >
          <span className="text-sm leading-[14px] font-medium">
            {tag.name.charAt(0).toUpperCase() + tag.name.slice(1)}
          </span>
        </button>
      ))}
    </div>
  );
};

export default TagComponent;
