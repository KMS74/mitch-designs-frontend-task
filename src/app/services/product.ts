class ProductService {
  async fetchProducts(
    page: number,
    searchQuery = "",
    category = "Coffee",
    productsPerPage = 12
  ) {
    try {
      let products = [];
      const res = await fetch("https://woosonicpwa.com/MitchAPI/filter.php", {
        method: "POST",
        body: JSON.stringify({
          category: category, //for filter specific category
          price_range: [0, 100000000], // for filter price range
          products_per_page: productsPerPage, // per page
          page: page, // page number
          sort: {
            criteria: "date",
            arrangement: "DESC",
          },
          keyword: searchQuery, // keyword to search products (title, description)
        }),
      });
      // ! NOTE: because the response is not a valid JSON, we need to extract the JSON array from the response text.
      // ! The api returns an a warning message before the JSON array.
      const resText = await res.text();
      const jsonArrayMatch = resText.match(/\[.*\]/s);
      if (jsonArrayMatch) products = JSON.parse(jsonArrayMatch[0]);

      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

const productService = new ProductService();

export default productService;
