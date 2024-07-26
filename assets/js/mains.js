import { categoryData, productData } from "./api";


const productService = async()=>{
    let products;
    let categories = await categoryData("https://fakestoreapi.com/products/categories");
    categories = await categories?.json();
    console.log("categories:", categories);

    if(categories){
         products = await productData("https://fakestoreapi.com/products");
         products = await products?.json();
         console.log("products:", products);
         return {products,categories}
    }
    return categories;
}

console.log(productService());