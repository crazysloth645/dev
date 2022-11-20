
import "./App.css";
import Button from 'react-bootstrap/Button';
import { FaBan } from "react-icons/fa";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
// import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  let [cartTotal, setCount] = useState(0); // setcount is the updating function
  let [cartTotalItems, setCountItems] = useState(0); // setcount is the updating function
  let [nameCartItems, addItemName] = useState([]);
  // let [removedItems, removeItemFunc] = useState([]);
  let [bakeryData, updateAllItems] = useState([
    {
      "name": "Chocolate Chip Cookies",
      "description": "Four classic chocolate chip cookies",
      "price": 7.99,
      "image": "https://images.aws.nestle.recipes/original/5b069c3ed2feea79377014f6766fcd49_Original_NTH_Chocolate_Chip_Cookie.jpg",
      "sugar":"high",
      "type": "dessert"
    },
    {
      "name": "Chocolate Fudge Brownie",
      "description": "A rich fudge brownie drizzled with chocolate ganache",
      "price": 3.99,
      "image": "https://cdn.loveandlemons.com/wp-content/uploads/2020/01/brownie-recipe.jpg",
      "sugar":"medium",
      "type": "dessert"
    },
    {
      "name": "Croissant",
      "description": "A classic butter croissant with a flaky crust",
      "price": 2.99,
      "image": "https://static01.nyt.com/images/2021/04/07/dining/06croissantsrex1/merlin_184841898_ccc8fb62-ee41-44e8-9ddf-b95b198b88db-threeByTwoMediumAt2X.jpg",
      "sugar":"low",
      "type": "bread"
    },
    
    {
      "name": "Egg Custard Bun",
      "description": "A fluffy steamed bun with a savory egg filling",
      "price": 12.99,
      "image": "https://takestwoeggs.com/wp-content/uploads/2021/05/Steamed-Egg-Custard-Buns-takestwoeggs-liu-sha-bao-10-720x1080.jpg",
      "sugar":"high",
      "type": "dessert"
    },
    {
      "name": "Egg Tart",
      "description": "A flaky pastry shell filled with a sweet egg custard",
      "price": 2.99,
      "image": "https://www.tastingtable.com/img/gallery/portuguese-egg-tart-recipe-pastry/intro-1641242937.jpg",
      "sugar":"medium",
      "type": "dessert"
    },
    {
      "name": "Everything Bagel",
      "description": "A toasted bagel with sesame seeds, poppy seeds, and dried onion",
      "price": 2.99,
      "image": "https://i0.wp.com/chefsavvy.com/wp-content/uploads/homemade-everything-bagels.jpg?resize=665%2C910&ssl=1",
      "sugar":"low",
      "type": "bread"
    },
    {
      "name": "Gingerbread Man",
      "description": "A soft gingerbread cookie with a sweet icing glaze",
      "price": 2.99,
      "image": "https://www.allrecipes.com/thmb/hRwRpwDL_BHXRaiGPtQMpaP8tO4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/230238-gingerbread-men-cookies-ddmfs-4x3-1-d291bf57fa9244d98238eac7df53f13d.jpg",
      "sugar":"high",
      "type": "bread"
    },
    {
      "name": "Macarons",
      "description": "A box of three macarons in assorted flavors",
      "price": 4.99,
      "image": "https://www.thespruceeats.com/thmb/hgN7KLDa3hCAznjq37Clie9Oeo0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-macaron-recipe-435221-hero-01-b3680f676df64f5ab2c1e65976c0e945.jpg",
      "sugar":"medium",
      "type": "dessert"
    },
    {
      "name": "Multigrain Bread",
      "description": "A loaf of fresh-baked multigrain bread",
      "price": 4.99,
      "image": "https://static.toiimg.com/thumb/76626392.cms?width=1200&height=900",
      "sugar":"low",
      "type": "bread"
    },
    {
      "name": "Steamed Taro Buns",
      "description": "Two soft steamed buns filled with gooey purple taro filling",
      "price": 5.99,
      "image": "https://www.ohmyfoodrecipes.com/wp-content/uploads/2022/03/taro-buns-open.jpg",
      "sugar":"medium",
      "type": "dessert"
    },
    
    {
      "name": "Toast with Butter",
      "description": "A slice of toast with a pat of butter",
      "price": 1.99,
      "image": "https://assets.epicurious.com/photos/5c7d70687936b21ddab1be71/1:1/w_2997,h_2997,c_limit/Why-You-Should-Butter-Your-Bread-Before-You-Toast-It-hero-27022019.jpg",
      "sugar":"low",
      "type": "bread"
    },
    {
      "name": "Tiramisu",
      "description": "A classic tiramisu with layers of coffee-soaked ladyfingers and mascarpone cream",
      "price": 3.99,
      "image": "https://www.cookingclassy.com/wp-content/uploads/2022/08/tiramisu-17.jpg",
      "sugar":"medium",
      "type": "pastry"
    },
    
    {
      "name": "Matcha Mille Crepe Cake",
      "description": "Layers of matcha crepe and matcha cream filling, topped with strawberries",
      "price": 4.99,
      "image": "https://www.indulgewithmimi.com/wp-content/uploads/2018/10/matcha-green-tea-mille-pancake-crepe-cake-japanese-1-735x735.jpg",
      "sugar":"high",
      "type": "pastry"
    }
  ]
  );
  let [radioNum, changeRadio] = useState(0);
  let [typeStr, changeTypeFun] = useState("all");
  let [sugarStr, changeSugarFun] = useState("all");
   // let mainBakery = [...bakeryData]; // HOW to make deep copy
   let mainBakery = [
    {
      "name": "Chocolate Chip Cookies",
      "description": "Four classic chocolate chip cookies",
      "price": 7.99,
      "image": "https://images.aws.nestle.recipes/original/5b069c3ed2feea79377014f6766fcd49_Original_NTH_Chocolate_Chip_Cookie.jpg",
      "sugar":"high",
      "type": "dessert"
    },
    {
      "name": "Chocolate Fudge Brownie",
      "description": "A rich fudge brownie drizzled with chocolate ganache",
      "price": 3.99,
      "image": "https://cdn.loveandlemons.com/wp-content/uploads/2020/01/brownie-recipe.jpg",
      "sugar":"medium",
      "type": "dessert"
    },
    {
      "name": "Croissant",
      "description": "A classic butter croissant with a flaky crust",
      "price": 2.99,
      "image": "https://static01.nyt.com/images/2021/04/07/dining/06croissantsrex1/merlin_184841898_ccc8fb62-ee41-44e8-9ddf-b95b198b88db-threeByTwoMediumAt2X.jpg",
      "sugar":"low",
      "type": "bread"
    },
    
    {
      "name": "Egg Custard Bun",
      "description": "A fluffy steamed bun with a savory egg filling",
      "price": 12.99,
      "image": "https://takestwoeggs.com/wp-content/uploads/2021/05/Steamed-Egg-Custard-Buns-takestwoeggs-liu-sha-bao-10-720x1080.jpg",
      "sugar":"high",
      "type": "dessert"
    },
    {
      "name": "Egg Tart",
      "description": "A flaky pastry shell filled with a sweet egg custard",
      "price": 2.99,
      "image": "https://www.tastingtable.com/img/gallery/portuguese-egg-tart-recipe-pastry/intro-1641242937.jpg",
      "sugar":"medium",
      "type": "dessert"
    },
    {
      "name": "Everything Bagel",
      "description": "A toasted bagel with sesame seeds, poppy seeds, and dried onion",
      "price": 2.99,
      "image": "https://i0.wp.com/chefsavvy.com/wp-content/uploads/homemade-everything-bagels.jpg?resize=665%2C910&ssl=1",
      "sugar":"low",
      "type": "bread"
    },
    {
      "name": "Gingerbread Man",
      "description": "A soft gingerbread cookie with a sweet icing glaze",
      "price": 2.99,
      "image": "https://www.allrecipes.com/thmb/hRwRpwDL_BHXRaiGPtQMpaP8tO4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/230238-gingerbread-men-cookies-ddmfs-4x3-1-d291bf57fa9244d98238eac7df53f13d.jpg",
      "sugar":"high",
      "type": "bread"
    },
    {
      "name": "Macarons",
      "description": "A box of three macarons in assorted flavors",
      "price": 4.99,
      "image": "https://www.thespruceeats.com/thmb/hgN7KLDa3hCAznjq37Clie9Oeo0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-macaron-recipe-435221-hero-01-b3680f676df64f5ab2c1e65976c0e945.jpg",
      "sugar":"medium",
      "type": "dessert"
    },
    {
      "name": "Multigrain Bread",
      "description": "A loaf of fresh-baked multigrain bread",
      "price": 4.99,
      "image": "https://static.toiimg.com/thumb/76626392.cms?width=1200&height=900",
      "sugar":"low",
      "type": "bread"
    },
    {
      "name": "Steamed Taro Buns",
      "description": "Two soft steamed buns filled with gooey purple taro filling",
      "price": 5.99,
      "image": "https://www.ohmyfoodrecipes.com/wp-content/uploads/2022/03/taro-buns-open.jpg",
      "sugar":"medium",
      "type": "dessert"
    },
    
    {
      "name": "Toast with Butter",
      "description": "A slice of toast with a pat of butter",
      "price": 1.99,
      "image": "https://assets.epicurious.com/photos/5c7d70687936b21ddab1be71/1:1/w_2997,h_2997,c_limit/Why-You-Should-Butter-Your-Bread-Before-You-Toast-It-hero-27022019.jpg",
      "sugar":"low",
      "type": "bread"
    },
    {
      "name": "Tiramisu",
      "description": "A classic tiramisu with layers of coffee-soaked ladyfingers and mascarpone cream",
      "price": 3.99,
      "image": "https://www.cookingclassy.com/wp-content/uploads/2022/08/tiramisu-17.jpg",
      "sugar":"medium",
      "type": "pastry"
    },
    
    {
      "name": "Matcha Mille Crepe Cake",
      "description": "Layers of matcha crepe and matcha cream filling, topped with strawberries",
      "price": 4.99,
      "image": "https://www.indulgewithmimi.com/wp-content/uploads/2018/10/matcha-green-tea-mille-pancake-crepe-cake-japanese-1-735x735.jpg",
      "sugar":"high",
      "type": "pastry"
    }
  ]
  
  function sortAscending() { //sorts bakeryItems in ascending order
    const strAscending = [...bakeryData].sort((a, b) =>
    a.name > b.name ? 1 : -1,
  );
    updateAllItems(bakeryData = [...strAscending])
  }


  function sort() {
    if (radioNum == 0) { 
      sortAscending();
     }
    else { //sort by price
      const priceAscending = [...bakeryData].sort((a, b) => a.price - b.price);
      updateAllItems(bakeryData = [...priceAscending])
    }
  }

  function changeRadioAlpha() {
    changeRadio(radioNum = 0);
    sort();
  }
  function changeRadioPrice() {
    changeRadio(radioNum = 1);
    sort();
  }

  function update() { // this function updates bakery data according to new filters
    console.log("inside update");
    let newArray = [];
    console.log("sugar str:" + sugarStr); // this is empty
    console.log("typeStr -" + typeStr); // this returns allbread
    if (sugarStr == "all" && typeStr =="all") {
      console.log("inside first if - all");
      newArray = [...mainBakery];
    }
    else if (typeStr == "all") {
      console.log("inside second if - type all");
      mainBakery.forEach(item => { 
        if (item.sugar == sugarStr) { // if its the correct sugar
          // add to new Array
          newArray = [...newArray, item];
        }
      });
    }
    else if (sugarStr == "all") {
      console.log("inside third if - SUGAR ALL");
      mainBakery.forEach(item => { 
        if (item.type == typeStr) { // if its the correct type
          // add to new Array
          newArray = [...newArray, item];
        }
      });
      
    }
    else { // 2 filters
      console.log("inside else - 2 filters");
      mainBakery.forEach(item => { 
        if (item.sugar == sugarStr && item.type==typeStr) { // if its the correct sugar
          // add to new Array
          newArray = [...newArray, item];
        }
      });
    }
    //bakerydata will be newArray - check shallow / deep copy behaviours
    updateAllItems(bakeryData = [...newArray]);
    sort(); // see if this goes before or after
  }

  function changeType(strType) {
    changeTypeFun(typeStr = strType); // when the radio button is selected, the str is changed
    console.log("changed type is" + typeStr); // gets printed
    update();
  }

  function changeSugar(strSugar) {
     // when the radio button is selected, the str is changed
    changeSugarFun(sugarStr = strSugar);
    console.log("changed sugar is" + strSugar);
    update();
  }

  function handleRemove(removedItem) {
    console.log("Removed item's name" + removedItem);
  }

  return (
    <div className="App">
      {/* <h1>My Bakery</h1>  */}
      <img src="https://i.etsystatic.com/5760761/r/il/da82ba/2424009156/il_1588xN.2424009156_gvrm.jpg" className="logoBakery"></img>
      <div className="mainpage" >
      <div className="rowWrapper">
        <div className="leftPanel">
          <h3>Choose your Items</h3>
          <hr></hr>
          <div className="sortingPanel">
            <h4>Sort by:</h4>
            <Form>
               <Form.Check label="Alphabet" type="radio" aria-label="option 1" name="myGroupName" defaultChecked onChange={() =>  changeRadioAlpha()}/>
              <Form.Check label="Price (Low to High)" type="radio" aria-label="option 1" name="myGroupName" id="priceSort" onChange={() =>  changeRadioPrice()}/>
              </Form>
              <br></br>
            <h4>Type:</h4>
            <Form>
              
              <Form.Check label="All" type="radio" name="myGroupName" aria-label="option 1" id="allType" defaultChecked onChange={() => changeType("all")} />
              <Form.Check label="Bread" type ="radio" name="myGroupName" aria-label="option 2" id="breadType" onChange={() => changeType("bread")}/>
              <Form.Check label="Pastry" type ="radio" name="myGroupName" aria-label="option 3" id="pastryType" onChange={() => changeType("pastry")} />
              <Form.Check label="Desserts" type ="radio" name="myGroupName" aria-label="option 4" id="dessertType" onChange={() => changeType("dessert")}/>
              </Form>
              <br></br>
            <h4>Sugar Level:</h4>
            <Form>
           <Form.Check label="All" type ="radio" name="sugar" aria-label="option 1" id="breadType" defaultChecked onChange={() => changeSugar("all")}/>
              <Form.Check label="Low" type ="radio" aria-label="option 5" name="sugar" onChange={() => changeSugar("low")} />
              <Form.Check label="Medium"  type ="radio" aria-label="option 6"  name="sugar" onChange={() => changeSugar("medium")} />
              <Form.Check label="High" type ="radio" aria-label="option 7" name="sugar" onChange={() => changeSugar("high")} />
              </Form>
        </div> 
        <div className="cart">
            <h3>Cart</h3>
            <hr></hr>
        <p>Total price of the cart:  <b>{cartTotal}</b></p>
        
        <p>No. of items in the cart:  <b>{cartTotalItems}</b></p>
       
        <p> <b>Items in Cart:</b></p>
        {nameCartItems.map((item) => (
          <div className="itemButton">
            {item.name}
            <Button id="removeButton" onClick={handleRemove("hello")}><FaBan /> </Button>
          </div>
          // <Button className="itemButton">
          //   {item.name}
          //   <div id="removeButton" onClick={handleRemove("hello")}><FaBan /> </div>
          // </Button>
          ))}
        
      </div>
        </div>
         
        <div className="bakeryCards">
          {
            bakeryData.map((item, index) => ( 
        <BakeryItem name={item.name} description={item.description} price={item.price} image={item.image} sugar={item.sugar} type={item.type}
          cartTotal={cartTotal} cartTotalItems={cartTotalItems} nameCartItems={nameCartItems}
          setCount={setCount} setCountItems={setCountItems} addItemName={addItemName} />
        
      ))}
          </div>
          </div>
      </div>
      </div>
  );
}

export default App;
