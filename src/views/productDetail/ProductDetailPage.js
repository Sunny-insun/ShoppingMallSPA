import ProductDetailInfo from "./components/ProductDetailInfo.js";
import {changeVisibility} from "../../utils/common.js"
export default class ProductDetailPage {
    $target = null
    $data = null
    $productDetailPage = null

    constructor(target, data){
        this.$target = target;
        this.$data = data;
        const productDetailPage = document.createElement("div")
        productDetailPage.className = "ProductDetailPage"
        this.$productDetailPage = productDetailPage;
        this.$target.appendChild(this.$productDetailPage)
        this.render()
    }

    render(){
        const titleElement = document.createElement("h1")
        titleElement.textContent = this.$data.name + "상품 정보"
        this.$productDetailPage.appendChild(titleElement)

        const productDetailDiv = document.createElement("div")
        productDetailDiv.className = "ProductDetail"
        this.$productDetailPage.appendChild(productDetailDiv)

        const imageTag = document.createElement("img")
        imageTag.src = this.$data.imageUrl
        productDetailDiv.appendChild(imageTag)

        new ProductDetailInfo(productDetailDiv, this.$data)
    }

    changeVisibility(isVisible){
        changeVisibility(this.$productDetailPage, isVisible)
    }
}