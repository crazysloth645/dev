
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
export default function BakeryItem({ name, description, price, image,
    sugar, type,
    cartTotal, cartTotalItems, nameCartItems,
    setCount, setCountItems, addItemName }) {
    console.log(nameCartItems)
    let [toggleFav, setToggle] = useState(nameCartItems.some(obj => obj.name == name)); // change this? if nameCartItems.contains(name?)=> false
    const unfavString = "Favorite";
    const favString = "Remove from Favs";

    function updateCart(price, name) { // function for updating the display
        console.log("toggle was" + toggleFav);
        if (toggleFav) { // the item already exists in the cart
            //remove from cart all of them 
            console.log("Remove item now");
            setCountItems(cartTotalItems - 1); // updates the number
            setCount(cartTotal - price); // updates the price
            addItemName(nameCartItems.filter(item=>{return item.name!=name}))
        }
        else{
        setCountItems(cartTotalItems + 1);
        setCount(cartTotal + price);
            addItemName([...nameCartItems, { name: name, count: cartTotal }]);
        }
       // will become true the first time
        // if toggle is true and then made false then remove from cart
        setToggle(toggleFav = !toggleFav); 
        console.log("toggleFav now is!!" + toggleFav);
    }
    
    return (
     <div className="itemBakery">
            <p>
            {/* <img src= {image} className="images"></img><br></br>
              <div className="itemName">  <b>{name} </b></div> */}
               <div className="inlineDiv"> <img src= {image} className="images"></img><br></br>
               <div className="itemText">   <div className="itemName">  <b>{name} </b></div> <i>{description}</i>
                </div> </div>
                
                <b>Sugar:</b> {sugar}<br></br>
                <b>Type:</b><i> {type}<br></br></i>
                <b> Price:</b> <i>{ price}<br></br></i><br></br>
                <button onClick={() => updateCart(price, name)} className={`${toggleFav ? 'fav' : 'unfav'}`}><FaHeart></FaHeart>{`${toggleFav ? favString : unfavString}`}</button> 
                
        </p>
        </div>
    );
}
  