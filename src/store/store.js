import {setLocalStorage, getLocalStorageValue} from "../utils/common.js"

export default {
    getCartItems : () => {
        return getLocalStorageValue("products_cart");
    },
    setCartItems: (items) => {
       
        setLocalStorage("products_cart", items)
    }
}