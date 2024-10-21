const cartStordels = () =>{
    const getStrorde = localStorage.getItem("cart")
    if(getStrorde){
        return JSON.parse(getStrorde)
    }
    return [];
}


const saveCartLs = (cart) =>{
 const cartStringify = JSON.stringify(cart)
localStorage.setItem("cart",cartStringify)

}

const addCart = (id) =>{
    const cart = cartStordels()
    cart.push(id)
    saveCartLs(cart)
}
export {addCart,cartStordels}

