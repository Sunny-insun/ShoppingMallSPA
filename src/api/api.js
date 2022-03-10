const ROOT_URL = `https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev/products`

const request = async (url) => {
    try{
        const result = await fetch(url)
        return result.json();
    } catch(e) {
        alert("에러가 발생하였습니다 다시 시도해주세요")
    }
}


export const api = {
    fetchProductList : () =>{
        const response = request(`${ROOT_URL}`)
        return response;
    },

    fetProductById : (id) =>{
        const response = request(`${ROOT_URL}/${id}`)
        return response;
    }

}