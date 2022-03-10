import {api} from "./api/api.js"
import ProductDetailPage from "./views/productDetail/ProductDetailPage.js"
import ProductListPage from "./views/productList/ProductListPage.js"
export default class App{
    $target = null
    $productList = null
    $productListPage = null //상품 리스트페이지
    constructor(target){
        this.$target = target

        //초반 init (productList)
        this.initData()

    }

    async initData(){
        await api.fetchProductList().then((response) => {
            this.$productList = response
        })
        this.$productListPage = await new ProductListPage(this.$target, this.$productList);
        // api.fetchProductList().then((response) => {
        //     const productListPage = new ProductListPage(this.$target, response);
        //     this.$productListPage = productListPage;
        // })
    }


    
}