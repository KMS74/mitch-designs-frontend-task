import React from "react";

const CategoriesSkeleton = () => {
  return (
    <section className=" w-full py-4 mt-8">
      <div className="flex gap-3 items-center overflow-x-auto whitespace-nowrap">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            className="animate-pulse inline-flex justify-center items-center gap-2 bg-primary-50 rounded-full px-5 py-2.5 text-center me-2 mb-2"
            key={index}
          >
            <div className="rounded-full px-10 py-3"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSkeleton;
