import ProductDetailSelectedOptions from "./ProductDetailSelectedOptions.js"

export default class ProductDetailInfo {
    $target = null
    $data = null
    constructor(target, data){
        this.$target = target
        this.$data = data

        const productDetailInfo = document.createElement("div")
        productDetailInfo.className = "ProductDetail__info"
        this.$productDetailInfo = productDetailInfo

        this.$target.appendChild(this.$productDetailInfo)
        this.render()
    }

    render(){
        const titleElement = document.createElement("h2")
        titleElement.textContent = this.$data.name;

        this.$productDetailInfo.appendChild(titleElement)

        const priceDiv = document.createElement("div")
        priceDiv.className = "ProductDetail__price"
        priceDiv.textContent = this.$data.price + "원~"
        
        this.$productDetailInfo.appendChild(priceDiv)
        this.setOption()
    }

    setOption(){
        const root = document.createElement("select")
        const defaultOption = document.createElement("option")
        defaultOption.textContent ="선택하세요"
        root.appendChild(defaultOption)

        this.$data.productOptions.forEach((item) => {
            const element = document.createElement("option")
            element.value = JSON.stringify(item)

            let content = ''
            if(item.stock === 0){
                content = `(품절) ${this.$data.name} ${item.name}`
                element.disabled = true
            }
            else if(item.price === 0) {
                content = `${this.$data.name} ${item.name} `
            }else if(item.price > 0) {
                content = `${this.$data.name} ${item.name} (+${item.price}원)`
            }
            element.textContent = content
            root.appendChild(element)
        })
        this.$productDetailInfo.appendChild(root)
        this.$productDetailSelectedOptions = new ProductDetailSelectedOptions(this.$productDetailInfo, this.$data)
        root.addEventListener("change", (e)=>{
            this.onChangeCallback(e.target.value)
        })
    }


    //changeCallback
    onChangeCallback(item){
       item = JSON.parse(item)
       this.$productDetailSelectedOptions.addItem(item)
    }

    // productOptions": [
    //     {
    //       "id": 7,
    //       "name": "기품기 본품",
    //       "price": 0,
    //       "stock": 10,
    //       "created_at": "2021-08-23T22:54:00.263Z",
    //       "updated_at": "2021-08-23T22:54:00.267Z"
    //     },
    // ]
}