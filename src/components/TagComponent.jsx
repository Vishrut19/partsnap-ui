"use client";
const TagComponent = ({ tags, selectedTags, onTagClick }) => {
  return (
    <div className="flex flex-row flex-wrap w-full gap-[6px] mt-2">
      {tags?.map((tag) => {
        const isSelected = selectedTags?.some((t) => t.id === tag.id);
        return (
          <button
            type="button"
            key={tag.id}
            className={`border-[#194BFB99] border-[1px] rounded-[40px] h-[30px] px-[12px] pt-[5px] pb-[8px] flex items-center justify-between ${
              isSelected
                ? "bg-[#194BFB] text-white"
                : "bg-[#194BFB1A] text-[#194BFB]"
            }`}
            onClick={() => onTagClick(tag)}
          >
            <span className="text-sm leading-[14px] font-medium mr-2">
              {tag.name.charAt(0).toUpperCase() + tag.name.slice(1)}
            </span>
            {isSelected && (
              <span
                className="ml-1 font-bold"
                onClick={(e) => {
                  e.stopPropagation();
                  onTagClick(tag);
                }}
              >
                ×
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default TagComponent;
