export const categoryData = async(url)=>{
    const category = await fetch(url);
    return category;
}

export const productData = async(url)=>{
    const product = await fetch(url);
    return product;
}