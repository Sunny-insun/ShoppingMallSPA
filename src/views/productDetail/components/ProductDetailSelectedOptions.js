import OrderButton from "../../common/components/OrderButton.js";
import ProductDetailTotalPrice from "../components/ProductDetailTotalPrice.js"
import store from "../../../store/store.js"
import {goShoppingCartPage} from "../../../router/index.js"
export default class ProductDetailSelectedOptions{
    $target = null
    $data = null //받아오는 item
    $optionList = [];//item 넣는 list
    $productDetailSelectedOptions = null
    $instance = null;
    constructor(target, data){
        this.$target = target;
        this.$data = data;
        
        const productDetailSelectedOptions = document.createElement("div")
        productDetailSelectedOptions.className = "ProductDetail__selectedOptions"
        this.$productDetailSelectedOptions = productDetailSelectedOptions;
        this.$target.appendChild(this.$productDetailSelectedOptions)
        this.render()
    }

    render(){
        const titleElement = document.createElement("h3")
        titleElement.textContent = "선택된 상품"
        this.$productDetailSelectedOptions.appendChild(titleElement)

        const listRoot = document.createElement("ul")
        this.$productDetailSelectedOptions.appendChild(listRoot)
        this.$listRoot = listRoot


        //  <div class="ProductDetail__selectedOptions">
        //  <h3>선택된 상품</h3>
        //  <ul>
        //    <li>
        //      커피잔 100개 번들 10,000원 <div><input type="number" value="10">개</div>
        //    </li>
        //    <li>
        //      커피잔 1000개 번들 15,000원 <div><input type="number" value="5">개</div>
        //    </li>
        //  </ul>
        //  <div class="ProductDetail__totalPrice">175,000원</div>
        //  <button class="OrderButton">주문하기</button>
        // </div>

        // const totalPriceDiv = document.createElement("div")
        // totalPriceDiv.className = "ProductDetail__totalPrice"
        // this.$totalPriceDiv = totalPriceDiv
        // this.$productDetailSelectedOptions.appendChild(this.$totalPriceDiv)
        this.$productDetailTotalPrice = new ProductDetailTotalPrice(this.$productDetailSelectedOptions)
        this.$orderButton = new OrderButton(this.$productDetailSelectedOptions)
        this.$orderButton.onSetClickEvent(() => this.clickCallback(this.$optionList))
    }

    clickCallback(items){
        //localstorage 저장하기
        const objList = [];
        items.forEach((item) => {
            const obj ={
                productId: this.$data.id,
                optionId: item.id,
                quantity: item.addCount
            }
            objList.push(obj)
        })
        store.setCartItems(objList)
        goShoppingCartPage(this.$data)
    }

    addItem(item){

        //추가되는 count 세팅해주기
        this.setProductAddCount(item, 1) //최초는 1개
        this.setImageSrc(item, this.$data.imageUrl)

        let isExist = false
        this.$optionList.forEach((value)=>{
            if(value.id == item.id){
                isExist = true
            }
        })
        if(isExist) return

        //item이 optionList에 없을때
        this.$optionList.push(item)
        const listItem = document.createElement("li")
        listItem.textContent = `${item.name} ${item.price + this.$data.price}원`

        const inputDiv = document.createElement("div")
        listItem.appendChild(inputDiv)

        const input = document.createElement("input")
        input.setAttribute("type", "number")
        input.value = 1
        input.min = 1;
        input.max = item.stock;

        input.addEventListener("change", (e)=>{
            this.setProductAddCount(item, e.target.value) //itemcount추가
            this.changeTotalPrice()
        })

        inputDiv.appendChild(input)
        inputDiv.append("개")
        this.$listRoot.appendChild(listItem)
        this.changeTotalPrice()
    }

    //count 추가해주기
    setProductAddCount(item, count){
        item.addCount = count;
    }
    setImageSrc(item, src){
        item.imageUrl = src
    }
    //price change
    changeTotalPrice(){
        let totalPrice = 0;
        this.$optionList.forEach((item) => {
            totalPrice += (item.price + this.$data.price) * item.addCount
        })
        this.$productDetailTotalPrice.changePrice(totalPrice)
    }
}

