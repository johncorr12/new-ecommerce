import useFetch from "../hooks/useFetch";
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../hooks/CartContext"; 
import "../styles/WomenClothing.css"

const WomenClothing = () => {
    const { cartItem, setCartItem, handleAddToCart } = useContext(CartContext);

    const { data, error, loading } = useFetch(
      "https://fakestoreapi.com/products/category/women's clothing"
    );
  
    const notify = () => {
      toast.success("An item has been added !", {
        position: toast.POSITION.TOP_CENTER,
      });
    };
  return (
    <div className="container Women's clothing">
        <h2>{loading && <ClipLoader />}</h2>
        <div className="component-title-WomenClothing">
            <h2>WOMEN'S CATEGORY</h2>
        </div>
        <div className="WomenClothing">
        {data.map((datumWomenClothing) => {
          const { id, image, price, title } = datumWomenClothing;
          return (
            <div
              className="h-100 p-3 mt-5 text-center jewelry-inner shadow-sm rounded border-3 border"
              key={id}
            >
              <Link
                className="text-decoration-none"
                to={`/SingleProduct/${id}`}
              > 
                <img className="img-fluid w-50" src={image} alt={title} />
                <p className="fw-bold">${price} </p>
              </Link>
              <button
                onClick={() => {
                  handleAddToCart(datumWomenClothing);
                  notify();
                }}
                className="btn btn-primary text-white"
              >
                add to cart
              </button>
              <ToastContainer />
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default WomenClothing