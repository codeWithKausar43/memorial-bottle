import PropTypes from 'prop-types'
 
 import "./Bottle.css"
 const Bottle = ({bottle,handleCartAdd}) => {
  
    const {name,img,price} = bottle
    return (
        <div className="bottle">
             
            <img src={img}></img>
             <h2>Name: {name}</h2>
             <p>Price: {price}$</p>
             <button onClick={()=>handleCartAdd(bottle)}>Bye Now</button>
           
        </div>
    );
 };
 Bottle.propTypes = {
    bottle:PropTypes.array.isRequired,
    handleCartAdd:PropTypes.func.isRequired
 }
 export default Bottle;