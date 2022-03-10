import ProductDetailInfo from "../views/productDetail/components/ProductDetailInfo.js"
import ProductDetailPage from "../views/productDetail/ProductDetailPage.js"

export const goProductListPage = () =>{

}

export const goProductDetailPage = (data) => {

    history.pushState({ data: data }, '상품 상세', `/web/products/${data.id}`)
    const root = document.getElementById("App")
    root.innerHTML = ''
    new ProductDetailPage(root, data);
}

export const goShoppingCartPage = () => {

}