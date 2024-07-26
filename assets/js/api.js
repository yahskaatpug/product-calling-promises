export const categoryData = async (url) => {
    try {
        const category = await fetch(url);
        return category;
    } catch (err) {

    }
}

export const productData = async (url) => {
    try {
        const product = await fetch(url);
        return product;
    } catch (err) {

    }
}