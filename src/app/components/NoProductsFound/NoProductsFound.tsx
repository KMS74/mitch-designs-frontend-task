import React from "react";

const NoProductsFound = () => {
  return (
    <section className="w-full h-full flex justify-center items-center mx-auto">
      <div className="text-center mt-12">
        <h2 className="text-4xl font-bold text-gray-800">
          لا توجد نتائج للبحث
        </h2>
        <p className="text-gray-500 mt-2">
          جرب كلمات أخرى أو تحقق من الأخطاء الإملائية
        </p>
      </div>
    </section>
  );
};

export default NoProductsFound;
