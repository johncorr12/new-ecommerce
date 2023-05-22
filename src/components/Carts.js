import React, { useContext } from "react";
import "../styles/Carts.css";
import CartContext from "../hooks/CartContext";

const Carts = () => {
  const { cartItem,setCartItem,handleDecrease,handleIncrease,totalPrice} = useContext(CartContext);
  return (
    <div className="container">
      <div>
        {cartItem.length === 0 && (
          <div>
            <h3>No item in the cart</h3>
          </div>
        )}
      </div>
      <div className="container">
        {cartItem.map((singleCartItem) => {
          const { image, id, title, price, quantity, description } = singleCartItem;
          return (
            <div
              key={id}
              className="row justify-content-between align-items-center mt-4"
            >
              <div className="col-md-5">
                <img className="w-100" src={image} alt={title} />
              </div>
              <div className="col-md-6">
                <h2 className="text-danger"> {title}</h2>
                <h4 className="text-success lh-base"> {description} </h4>
                <div>
                  <h4>
                    {quantity} * {price}
                  </h4>
                  <div  className="d-flex justify-content-between w-75 gap-4">
                    <button onClick={()=> handleIncrease(singleCartItem)} className="btn btn-primary w-75">increase</button>
                    <button onClick={()=> handleDecrease(singleCartItem)} className="btn btn-primary w-75">decrease</button>
                    
                  </div>
                </div>
              </div>
            </div>
          )
        })} 
        {cartItem.length >= 1 && (
          <div className="text-center">
            <button onClick={()=>setCartItem([])} className="btn btn-danger mt-5 fs-5 fw-bold w-25" >{cartItem.length === 1 ? 'clear item' : 'clear all'}</button>
          </div>
        )}
      </div>
      <h1  className="fw-bold text-center"> $(Total price) </h1>
    </div>
  );
};

export default Carts;
