export default class ProductDetailTotalPrice {
    $target = null
    $price = 0
    $productDetailTotalPrice = null
    constructor(target){
        this.$target = target
        const productDetailTotalPrice = document.createElement("div")
        productDetailTotalPrice.className = "ProductDetail__totalPrice"
        this.$productDetailTotalPrice = productDetailTotalPrice
        this.$target.appendChild(this.$productDetailTotalPrice)
    }

    
    changePrice(price){
        this.$price = price
        this.$productDetailTotalPrice.textContent = this.$price + "원"
    }

    
}