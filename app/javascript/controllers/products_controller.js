import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="products"
export default class extends Controller {
  static values = { size: String, product: Object }
  addToCart() {
    console.log("product: ", this.productValue)
      const cart = localStorage.getItem("carts")
      if (cart) {
        const cartArray = JSON.parse(cart)
        const existingProduct = cartArray.findIndex((product) => product.id === this.productValue.id && product.size === this.sizeValue)
        if (existingProduct) {
          existingProduct.quantity += 1
        } else {
          cartArray.push({
            id: this.productValue.id,
            name: this.productValue.name,
            price: this.productValue.price,
            size: this.sizeValue,
            quantity: 1,
          })
        }
        localStorage.setItem("carts", JSON.stringify(cartArray))

      } else {
        const cartArray = []
        cartArray.push({
          id: this.productValue.id,
          name: this.productValue.name,
          price: this.productValue.price,
          size: this.sizeValue,
          quantity: 1,
        })
        localStorage.setItem("carts", JSON.stringify(cartArray))

      }
  }
  selectSize(e) {
    this.sizeValue = e.target.value
        const selectedSizeEl = document.getElementById("selected-size")
        selectedSizeEl.innerHTML = `Selected Size : ${this.sizeValue}`

  }
}
