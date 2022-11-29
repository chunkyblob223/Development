import logo from './devlogo.png';
import './App.css';
import {useEffect, useState} from "react";
import {hatData} from "./hat-data";

function App() {
  const [total, setTotal] = useState(0);
  const [flag, setFlag] = useState(Array(12).fill(false));

  const [styleType, setStyleType] = useState([]);
    
  const [materialType, setMaterialType] = useState([]);

  const [filt, setFilt] = useState(hatData);

  const [sortedData, setSortedData] = useState(hatData);
  const [sortActive, setSortActive] = useState(false);
  const toggleSortActiveHandler = () => setSortActive(a => !a);

  const [myCart, setCart] = useState([]);
  const[cartFlag, setCartFlag] = useState(true);


  function clickHandler(price, i_d){
    
    if (flag[i_d] == false){ //add to cart
      let temp = [...flag];
      temp[i_d] = true;
      setFlag(temp);
      setTotal(total + price);
      
      
      let tempArr = [...myCart, hatData[i_d]];
      setCart(tempArr);
      
    }
    else { //remove from cart
      let temp = [...flag];
      temp[i_d] = false;
      setFlag(temp);
      setTotal(total - price);
      
      let tempArr = [];
      myCart.map(item => {
        if (item.button_id != i_d){
          tempArr.push(item);
        }
      })
      setCart(tempArr);
    }
  }
  
  

  function selectHandler(filterType){
    let newFilt = filt;
    if (filterType == "Baseball" || filterType == "Cowboy"|| filterType == "Fedora"){ //style
      let newList = [];
      if (!styleType.includes(filterType)){
        newList = [...styleType, filterType];
        setStyleType(newList);
      }
      else {
        newList = styleType.filter(filter => filter != filterType);
        setStyleType(newList);
      }

      if (materialType.length!=0 && newList.length!=0){
        newFilt = (hatData.filter(item => materialType.includes(item.material) && newList.includes(item.style)));
      } else if (materialType.length!=0){
        newFilt = (hatData.filter(item => materialType.includes(item.material)));
      } else if (newList.length!=0){
        newFilt=(hatData.filter(item => newList.includes(item.style)));
      } else{ //when there are no filters
        newFilt=(hatData);
      }


    } else if (filterType == "Cloth" || filterType == "Leather" || filterType == "Straw"){ //material
      let newList = [];
      if (!materialType.includes(filterType)){
        newList = [...materialType, filterType];
        setMaterialType(newList);
      }
      else {
        newList = materialType.filter(filter => filter != filterType);
        setMaterialType(newList);
      }
      if (newList.length!=0 && styleType.length!=0){
        newFilt=(hatData.filter(item => newList.includes(item.material) && styleType.includes(item.style)));
      } else if (newList.length!=0){
        newFilt=(hatData.filter(item => newList.includes(item.material)));
      } else if (styleType.length!=0){
        newFilt=(hatData.filter(item => styleType.includes(item.style)));
      } else{ //when there are no filters
        newFilt=(hatData);
      }
    } else if (filterType == "My Cart"){
      if (cartFlag){
        // console.log(myCart);
        newFilt = myCart;
        setCartFlag(false);
      } else{
        console.log("enttttt");
        newFilt = hatData;
        setCartFlag(true);
      }
    }
    setFilt(newFilt);
    pullSort(newFilt);
  }
  
  useEffect(()=> pullSort(filt), [sortActive]);

  function pullSort(newfilt){
    if (sortActive){
      setSortedData([...newfilt].sort((a,b)=> (a.price > b.price) ? 1 : -1));
    } else{
      setSortedData(newfilt);
    }
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
                <div class = "label-flex"> <input type="checkbox" onClick = {toggleSortActiveHandler}/>
                Price (low to high)</div>
              </div>
            </div>
          </fieldset>
          <div class = "style-filter">
            <fieldset class = "Control-root">
              <legend style={{ fontSize:30 }}>Style</legend>
              <div class = "Form-group">
                <div class = "label-flex"> <input type="checkbox" onClick = {() => selectHandler("Baseball")}/>
                Baseball </div>
                <div class = "label-flex"> <input type="checkbox" onClick = {() => selectHandler("Cowboy")}/> 
                Cowboy</div>
                <div class = "label-flex"> <input type="checkbox" onClick = {() => selectHandler("Fedora")}/> 
                Fedora</div>
              </div>
            </fieldset>
          </div>
          <div class = "material-filter">
            <fieldset class = "Control-root">
              <legend style={{ fontSize:30 }}>Material</legend>
              <div class = "Form-group">
                <div class = "label-flex"><input type="checkbox" onClick = {() => selectHandler("Cloth")}/> 
                Cloth</div>
                <div class = "label-flex"> <input type="checkbox" onClick = {() => selectHandler("Leather")}/>
                Leather</div>
                <div class = "label-flex"> <input type="checkbox" onClick = {() => selectHandler("Straw")}/> 
                Straw</div>
              </div>
            </fieldset>
          </div>
          <div class = "cart-div">
            <fieldset class = "Control-root">
              <legend style={{ fontSize:30 }}>Cart</legend>
                <div class = "Form-group">
                  <label class = "label-flex"> <input type="checkbox" onClick = {() => selectHandler("My Cart")}/> 
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
          
          {sortedData.map((item) => {
            return (
              <div class = "per-item">
                <div>
                <p class = "color">
                  <h2>{item.name}</h2>
                  <p><i>Price:</i> ${item.price}.00</p>
                  <p><i>Style:</i> {item.style}</p>
                  <p><i>Material:</i> {item.material}</p>
                  <input class = "button" type = "button" id = {item.button_id} value = {flag[item.button_id] ? "Remove from Cart":"Add to Cart"} onClick = {() => 
                    clickHandler(item.price, item.button_id)}></input>
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
