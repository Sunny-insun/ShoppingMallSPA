import ProductDetailInfo from "../views/productDetail/components/ProductDetailInfo.js"
import ProductDetailPage from "../views/productDetail/ProductDetailPage.js"
import ShoppingCart from "../views/shoppingCart/ShoppingCartPage.js"
import store from "../store/store.js"
import ProductListPage from "../views/productList/ProductListPage.js"
import {api} from "../api/api.js"
const getCleanDOM = ()=>{
    const root = document.getElementById("App")
    root.innerHTML = ''
    return root
}

export const goProductListPage = () =>{
    history.pushState({page: 'productListPage'}, "상품 목록", `/web`)
    const root = getCleanDOM()
    api.fetchProductList().then((response) => {
        new ProductListPage(root, response)
    })
}

export const goProductDetailPage = (data) => {
    history.pushState({ data: data, page:'productDetailPage' }, '상품 상세', `/web/products/${data.id}`)
    const root = getCleanDOM()
    new ProductDetailPage(root, data);
}

export const goShoppingCartPage = (data) => {
    history.pushState({data: data, page:'productShoppiingCartPage'}, '장바구니', `/web/cart`)
    const root = getCleanDOM()
    new ShoppingCart(root, data)
}