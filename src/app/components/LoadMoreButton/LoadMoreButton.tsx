"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

const LoadMoreButton = ({ totalPages }: { totalPages: number }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { push } = useRouter();
  const currentPage = Number(searchParams.get("page")) || 1;

  const handleLoadMore = () => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(currentPage + 1));
    // Update the URL with the new page number
    push(`${pathname}?${params.toString()}`);
  };
  return (
    <section className="my-2 sm:my-10 p-4 flex flex-row justify-center items-center">
      <button
        className="w-1/2 md:w-max px-6 py-3 border-2 border-primary-950 rounded-xl text-center hover:bg-primary-950 hover:text-white transition-colors duration-300 ease-in-out  disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
        onClick={handleLoadMore}
      >
        عرض المزيد
      </button>
    </section>
  );
};
export default LoadMoreButton;
