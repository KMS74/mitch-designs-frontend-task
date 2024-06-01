import { IoMdCloseCircle } from "react-icons/io";

const ProductFilters = () => {
  return (
    <section className=" w-full py-4 mt-8">
      <div className="flex gap-3 items-center overflow-x-auto whitespace-nowrap">
        <button
          type="button"
          className="inline-flex justify-center items-center gap-2 text-primary-950 bg-gray-300 hover:bg-primary-950 hover:text-primary-50  transition-colors duration-300 ease-in-out font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2"
        >
          <span>كل القهوة</span>
          <IoMdCloseCircle size={20} />
        </button>

        {Array.from({ length: 10 }).map((_, index) => (
          <button
            key={index}
            type="button"
            className="inline-flex justify-center items-center gap-2 text-primary-950 bg-primary-50 hover:bg-primary-950 hover:text-primary-50  transition-colors duration-300 ease-in-out font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2"
          >
            <span> قهوة</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ProductFilters;
