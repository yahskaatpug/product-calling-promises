import { categoryData, productData } from "./api.js";


const productService = async () => {
    try {
        let products;
        const categories = await categoryData("https://fakestoreapi.com/products/categories");
        console.log("categories:", categories);

        if (categories) {
            products = await productData("https://fakestoreapi.com/products");
            console.log("products:", products);
            return { products, categories }
        }
        return categories;
    } catch (error) {
        console.log("err:", error)
    }
}

console.log(productService());