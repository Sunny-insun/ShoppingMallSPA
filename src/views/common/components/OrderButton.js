export default class OrderButton {
    $target = null
    $clickCallback = null
    $orderButton = null

    constructor(target) {
        this.$target = target
        this.render()
    }

    render(){
        const orderButton = document.createElement("button")
        orderButton.className = "OrderButton"
        orderButton.textContent = "주문하기"
        this.$orderButton = orderButton
        this.$target.appendChild(orderButton)
    }

    onSetClickEvent(callback){
        this.$clickCallback = callback
        this.$orderButton.addEventListener("click", ()=>{
            callback()
        })
    }
}