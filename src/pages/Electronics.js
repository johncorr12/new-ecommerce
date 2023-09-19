import useFetch from "../hooks/useFetch";
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../hooks/CartContext"; 
import "../styles/Electronics.css"

const Electronics = () => {
     const { cartItem, setCartItem, handleAddToCart } = useContext(CartContext);

    const { data, error, loading } = useFetch(
      "https://fakestoreapi.com/products/category/electronics"
    );
    const notify = () => {
      toast.success("An item has been added !", {
        position: toast.POSITION.TOP_CENTER,
      });
    };
  return (
    <div className="container Electronics">
        <h2>{loading && <ClipLoader />}</h2>
        <div className="component-title-Electronics">
            <h2>ELECTRONICS CATEGORY</h2>
        </div>
        <div className="electron">
        {data.map((datumElectronics) => {
          const { id, image, price, title } = datumElectronics;
          return (
            <div
              className=" h-100 p-3 mt-5 text-center jewelry-inner shadow-sm rounded border-3 border"
              key={id}
            >
              <Link
                className="text-decoration-none "
                to={`/SingleProduct/${id}`}
              >
                <img className="img-fluid" src={image} alt={title} />
                <p className="fw-bold">${price} </p>
              </Link>
              <button
                onClick={() => {
                  handleAddToCart(datumElectronics);
                  notify();
                }}
                className="btn btn-primary text-white"
              >
                add to cart
              </button>
            </div>
          );
        })}
      </div>
        
    </div>
  )
}

export default Electronics