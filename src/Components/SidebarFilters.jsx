import { FiChevronDown } from "react-icons/fi";

const SidebarFilters = () => {
  return (
    <div className="min-h-full hidden md:block">
      <div className="w-[240px] p-6 rounded-lg bg-[#F9F9F9] border flex flex-col gap-y-4 sticky top-[88px] h-full max-h-[calc(100vh-104px)]">
        {/* Header */}
        <div className="flex justify-between items-center pb-4 border-b">
          <span className="text-lg">Result: 142</span>
          <button type="button" className="text-primary text-sm">
            Remove filters
          </button>
        </div>
        {/* Min/Max Price */}
        <div>
          <div className="flex items-center justify-between">
            <span>Price</span>
            <FiChevronDown />
          </div>
          <div className="flex gap-2 justify-between mt-2">
            <input
              inputMode="decimal"
              className="w-1/2 px-2 py-3 border rounded focus:border-primary outline-none bg-white/50"
              placeholder="Min-$"
            />
            <input
              inputMode="decimal"
              className="w-1/2 px-2 py-3 border rounded focus:border-primary outline-none bg-white/50"
              placeholder="Max-$"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarFilters;
