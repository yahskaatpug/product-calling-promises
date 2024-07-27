export const categoryData = async (url, timeOut) => {
    const {controller, timeOutId} = apiTimeOut(timeOut);

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
  // const {controller, timeOutId} = apiTimeOut();
  // clearTimeout(timeOutId);
    try {
        const product = await axios.get(url);
        return product;
    } catch (err) {
        console.log("error:", err);
    }
}

const apiTimeOut = (timeOut)=>{
    const controller = new AbortController();
    const abortController = ()=> controller.abort();
    const timeOutId = setTimeout(()=> (abortController, timeOut));
    return {controller, timeOutId}
}
