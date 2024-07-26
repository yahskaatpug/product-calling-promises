export const categoryData = async (url, timeOut) => {
    const {controller, timeOutId} = apiTimeOut();

    try {
        const category = await fetch(url, {signal: controller.signal});
        clearTimeout(timeOutId);
        return category.json();
    } catch (err) {
        console.log("error:", err);
        if(error.name === 'AbortError') {
            throw new Error('Request timed out');
        }
    }
}

export const productData = async (url) => {
   const {controller, timeOutId} = apiTimeOut();
   clearTimeout(timeOutId);
    try {
        const product = await fetch(url,  {signal: controller.signal});
        return product.json();
    } catch (err) {
        console.log("error:", err);
        if(error.name === 'AbortError') {
            throw new Error('Request timed out');
        }
    }
}

const apiTimeOut = ()=>{
    const controller = new AbortController();
    const abortController = ()=> controller.abort();
    const timeOutId = setTimeout(()=> (abortController, 1000));
    return {controller, timeOutId}
}
