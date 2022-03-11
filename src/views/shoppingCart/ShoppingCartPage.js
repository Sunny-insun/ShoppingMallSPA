import store from "../../store/store.js"
import {goProductListPage} from "../../router/index.js"
export default class ShoppingCartPage {
    $target = null
    $cartItems = null //cartitems
    $shoppingCartPage = null
    $data = null
    constructor(target){
        console.log("history.state" + JSON.stringify(history.state.data))
        if(history.state.data){
            this.$data = history.state.data
        }

        this.$target = target
        const shoppingCartPage = document.createElement("div")
        shoppingCartPage.className = "CartPage"
        this.$shoppingCartPage = shoppingCartPage;
        this.$target.appendChild(this.$shoppingCartPage)
    //     <div class="CartPage">
    //     <h1>장바구니</h1>
    //     <div class="Cart">
    //       <ul>
    //         <li class="Cart__item">
    //           <img src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png">
    //           <div class="Cart__itemDesription">
    //             <div>커피잔 100개 번들 10,000원 10개</div>
    //             <div>100,000원</div>
    //           </div>
    //         </li>
    //         <li class="Cart__item">
    //           <img src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png">
    //           <div class="Cart__itemDesription">
    //             <div>커피잔 1000개 번들 15,000원 5개</div>
    //             <div>75,000원</div>
    //           </div>
    //         </li>
    //       </ul>
    //       <div class="Cart__totalPrice">
    //         총 상품가격 175,000원
    //       </div>
    //       <button class="OrderButton">주문하기</button>
    //     </div>
    //   </div> -->
    this.setData()
    this.render()
    }

    setData(){
        this.$cartItems = store.getCartItems();
    }
    render(){
        const titleElement = document.createElement("h1")
        titleElement.textContent = "장바구니"
        this.$shoppingCartPage.appendChild(titleElement)
        
        const cartDiv = document.createElement("div")
        cartDiv.className = "Cart"
        this.$shoppingCartPage.appendChild(cartDiv)

        const rootList = document.createElement("ul")
        cartDiv.appendChild(rootList)
        this.$rootList = rootList;

        this.setCartItems()

        const orderButton = document.createElement("button")
        orderButton.className = "OrderButton"
        orderButton.textContent = "주문하기"
        orderButton.addEventListener("click", ()=>{
            store.setCartItems("remove");
            goProductListPage();
            alert("주문되었습니다");
        })
        cartDiv.appendChild(orderButton)
    }

    setCartItems(){
        const listElement = document.createElement("li")
        listElement.className = "Cart__item"
        this.$rootList.appendChild(listElement)
      
        const image = document.createElement("img")
        image.src = this.$data.imageUrl
        listElement.appendChild(image)

        this.$cartItems.forEach((item) => {
            const discriptionDiv = document.createElement("div")
            discriptionDiv.className = "Cart__itemDesription"
            const obj = this.getPriceAndQuantityById(item)
            const productNameDiv = document.createElement("div")
            productNameDiv.textContent = obj.title
            discriptionDiv.appendChild(productNameDiv)
            listElement.appendChild(discriptionDiv)
        })

   

    }

    getPriceAndQuantityById(item){
        console.log("getPriceAndQuantityById")
        const obj = {}
        this.$data.productOptions.forEach((option) => {
            if(option.id == item.id){
                console.log("option.id == item.id")
                obj.title = `${this.$data.name} ${option.name} ${item.quantity} 개`
                obj.imageUrl
                console.log("obj.title == " + obj.title)
            }
        })
        return obj
    }
}