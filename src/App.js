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

        //뒤로가기 아이템유지..
        window.onpopstate = async function(event) {  //뒤로가기 이벤트를 캐치합니다.
          console.log("onpopstate state == " + JSON.stringify(event.state))
            if(!event.state){
                window.location.reload();
                return
            }
           
            if(event.state.page == 'productDetailPage'){
                const root = document.getElementById("App")
                root.innerHTML = '';
                new ProductDetailPage(root, event.state.data)
            }
            
            if(event.state.page == "productListPage"){
                window.location.reload()
            }
        };

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