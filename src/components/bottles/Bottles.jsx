import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import { addCart,cartStordels } from "../../utility/localstorage";
import Cart from "../../cart/Cart";
 
 const Bottles = () => {

    const [bottle,setBottle] = useState([])
    const [cart,setCart] = useState([])

    useEffect(()=>{
        fetch("bottles.json")
        .then(res => res.json())
        .then(data => setBottle(data))
    },[])

    useEffect(()=>{
        const array = []
        if(bottle.length){
        const stordCartid = cartStordels()
        for(const id of stordCartid){
         const bottles =   bottle.find(bottle =>bottle.id === id)
            
              if(bottles){
                array.push(bottle)
              }
        }
        setCart(array)
    }
    },[bottle])
        

    const handleCartAdd = bottle =>{
        const newCart = [...cart,bottle]
        setCart(newCart)
        addCart(bottle.id)

    }

 
    return (
        <div>
            <h3>bottle here:{bottle.length} </h3>
            <Cart cart={cart}></Cart>
            <div className="bottle-container">
            {
                bottle.map(bottle => <Bottle 
                    key={bottle.id}  
                    bottle={bottle}
                    handleCartAdd= {handleCartAdd}>
                    </Bottle>)
            }
            </div>
        </div>
    );
 };
 
 export default Bottles;