export const fetchProductsByCategory = async (categoryId) => {
  try {
    const response = await fetch("/src/data/products.json");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    console.log("Raw response: ", text);
    const data = JSON.parse(text);

    if (!data.categories?.[categoryId]) {
      throw new Error(`Category ${categoryId} not found`);
    }

    return {
      ...data.categories[categoryId],
      id: categoryId,
    };
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
