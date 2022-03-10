import ProductItem from "./components/ProductItem.js"
export default class ProductListPage {
    $target = null
    $data = null
    constructor(target, data) {
        this.$target = target;
        this.$data = data;
        const productListPage = document.createElement("div");
        productListPage.className = "ProductListPage"
        this.$productListPage = productListPage;
        this.$target.appendChild(this.$productListPage);
        this.render();
    }

    changeData(data){
        this.$data = data;
        this.render()
    }


    //rendering 
    render(){

        const titleElement = document.createElement("h1");
        titleElement.textContent = "상품목록";
        this.$productListPage.appendChild(titleElement);
        
        const rootListElement = document.createElement("ul")
        this.$productListPage.appendChild(rootListElement)
        
        this.$data.forEach((item) => {
            this.attachProductItem(rootListElement, item)
        })
    }
    attachProductItem(node,data){
       new ProductItem(node,data)
    }
}