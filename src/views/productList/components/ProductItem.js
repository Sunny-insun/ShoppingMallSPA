import {api} from "../../../api/api.js"
import {goProductDetailPage} from "../../../router/index.js"
export default class ProductItem{
    $target = null
    $data = null
    constructor(target, data){
        this.$target = target;
        this.$data = data;

        const productItem = document.createElement("li");
        productItem.className = "Product";
        this.$productItem = productItem;
        this.$target.appendChild(this.$productItem)
        this.render()
    }
    
    render(){
        const imageTag = document.createElement("img")
        imageTag.src = this.$data.imageUrl;
        this.$productItem.appendChild(imageTag)

        const infoDiv = document.createElement("div")
        infoDiv.className = "Product__info"
        this.$productItem.appendChild(infoDiv)

        const nameDiv = document.createElement("div")
        nameDiv.textContent = this.$data.name;
        infoDiv.appendChild(nameDiv)

        const priceDiv = document.createElement("div")
        priceDiv.textContent = this.$data.price + "원~"
        infoDiv.appendChild(priceDiv)

        this.setClickCallback(this.$productItem, this.$data.id);
        
    }

    setClickCallback(element, id){
        element.addEventListener("click", () => {
            api.fetProductById(id).then((response) => {
                console.log(`id == ${id}, response == ${JSON.stringify(response)}`)
                goProductDetailPage(response)
            })
        })
    }
}