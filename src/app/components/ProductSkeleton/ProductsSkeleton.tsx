const ProductsSkeleton = () => {
  return (
    <section className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-8">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="card animate-pulse">
          <div className="w-full relative flex items-center justify-center bg-primary-50 h-96 border-b border-solid border-gray-200" />
          <div className="p-4 flex flex-col justify-between">
            <div className="w-full my-2 h-4 bg-primary-50 rounded-md" />
            <div className="w-2/3 my-2 h-4 bg-primary-50 rounded-md" />
            <div className="w-1/3 h-4 bg-primary-50 rounded-md" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductsSkeleton;
