"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { FiSearch } from "react-icons/fi";
import { DEBOUNCED_TIME } from "@/app/constants";

const SearchBox = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(term);
    // create a new URLSearchParams object
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    // Update the URL with the new search term
    replace(`${pathname}?${params.toString()}`);
  }, DEBOUNCED_TIME);

  return (
    <section className="w-full lg:w-2/3 m-auto my-12 md:p-6">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none">
          <FiSearch size={24} className="text-gray-500" />
        </div>
        <label htmlFor="search" className="sr-only">
          ابحث عن منتج
        </label>
        <input
          id="search"
          type="search"
          className="block w-full p-4 ps-24 border-2 text-slate-950 border-gray-400 rounded-xl bg-gray-50 focus:bg-white focus:ring-primary-950 focus:border-primary-950  outline-none"
          placeholder="ابحث عن منتج"
          defaultValue={searchParams.get("query")?.toString() || ""}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </section>
  );
};

export default SearchBox;
