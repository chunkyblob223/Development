import logo from './devlogo.png';
import './App.css';
import { useState } from "react";
import {hatData} from "./hat-data";

function App() {
  const [total, setTotal] = useState(0);
  const [type, setType] = useState("All");

  function clickHandler(price, i_d){
    if (document.getElementById(i_d).value == "Add to Cart"){
      document.getElementById(i_d).value = "Remove From Cart";
      // setTotal(total + price);
    }
    else {
      document.getElementById(i_d).value = "Add to Cart";
      // setTotal(total - price);
    }
  }


  function selectFilterType(idk){
    // sets the state to the selected type, function passed to the onSelect event handler of HTML buttons
  }

  function matchesFilterType(idk){
    // creates a filtering condition
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" style={{ width: 300, height: 200 }} />
        <p>
          Hat Trick Hat Shop
        </p>
      </header>
      <div class = "main-grid">
        <div class = "side-bar">
          <fieldset class = "Control-root">
            <legend style={{ fontSize:30 }}> Sort By</legend>
            <div class= "Form-group">
              <div>
                <div class = "label-flex"> <input type="checkbox" />
                Popular </div>
              </div>
            </div>
          </fieldset>
          <div class = "style-filter">
            <fieldset class = "Control-root">
              <legend style={{ fontSize:30 }}>Style</legend>
              <div class = "Form-group">
                <div class = "label-flex"> <input type="checkbox" />
                Baseball </div>
                <div class = "label-flex"> <input type="checkbox" /> 
                Cowboy</div>
                <div class = "label-flex"> <input type="checkbox" /> 
                Fedora</div>
              </div>
            </fieldset>
          </div>
          <div class = "material-filter">
            <fieldset class = "Control-root">
              <legend style={{ fontSize:30 }}>Material</legend>
              <div class = "Form-group">
                <div class = "label-flex"><input type="checkbox" /> 
                Cloth</div>
                <div class = "label-flex"> <input type="checkbox" />
                Leather</div>
                <div class = "label-flex"> <input type="checkbox" /> 
                Straw</div>
              </div>
            </fieldset>
          </div>
          <div class = "cart-div">
            <fieldset class = "Control-root">
              <legend style={{ fontSize:30 }}>Cart</legend>
                <div class = "Form-group">
                  <label class = "label-flex"> <input type="checkbox" /> 
                  My Cart</label>
                </div>
            </fieldset>
          </div>
          <h1 style = {{
            marginTop: '-1rem', 
            marginBottom:'1rem', 
            color: 'grey', 
            fontSize:'1.0rem'}}>
            Cart Total: ${total}.00
          </h1>
        </div>
        <div class = "item-grid">
          {hatData.map((item) => {
          return (
            <div class = "per-item">
              <div>
              <p class = "color">
                <h2>{item.name}</h2>
                <p><i>Price:</i> ${item.price}.00</p>
                <p><i>Style:</i> {item.style}</p>
                <p><i>Material:</i> {item.material}</p>
                <input class = "button" type = "button" id = {item.button_id} value = "Add to Cart" onClick = {() => clickHandler(item.price, item.button_id)}></input>
              </p>
              </div>
              <div>
                <img class = "App-logo" src = {item.image}></img>
              </div>
            </div>
          );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
