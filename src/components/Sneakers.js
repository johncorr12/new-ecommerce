import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import useFetch from "../hooks/useFetch";
import { useContext } from "react";
import { ClipLoader } from "react-spinners";
import CartContext from "../hooks/CartContext";
import "../styles/Sneakers.css"
    const Sneakers = () => {
        // const { cartItem, setCartItem, handleAddToCart } = useContext(CartContext);
        const { data, loading } = useFetch(
            "https://example-data.draftbit.com/sneakers?_limit=10/"
          );     
          const notify = () => {
            toast.success("An item has been added !", {
              position: toast.POSITION.TOP_CENTER,
            });
          };
          return (
            <div className="mt-3">
              <div className='container electrons d-flex flex-wrap text-center outline-secondary'>
              <h2>{loading && <ClipLoader />}</h2>
                {data.map((datum) => {
                  const { id, colorway, media, title, retailPrice  } = datum;
                  return (
                    <div className='shoe p-3 shadow-lg rounded border border-4 ' key={id}>

                      <h5> {title} </h5>
                    
                      <p>{colorway}</p>
                   
                      <img className='w-75' src={media.imageUrl} alt={title} />
                     
                     <p className="mt-3">{retailPrice}</p>
                
                   
                      <button
                onClick={() => {
                
                  notify();
                }}
                className="btn btn-primary text-white"
              >
                add to cart
              </button>
              <ToastContainer />
                      
                    
                    </div>
                  )
                })}
              </div>
            </div>
        
            
          )
        }
        

export default Sneakers