import React from 'react'
import { useParams,Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { ClipLoader } from "react-spinners";

const SingleProduct = () => {
  const {id} = useParams()
  const { data,loading } = useFetch(`https://fakestoreapi.com/products/${id}`)
  const {title,image,description,price,rating} = data

  return (
    <div>
      <div className='container'>
       <h2>{loading && <ClipLoader color={'red'}size={50}/>}</h2>
        <div className='row justify-content-between align-items-center mt-4'>
          <div className='col-sm-12 text-center col-md-4'>
            <img className='img-fluid w-100' src={image} alt={title} />
          </div>
          <div className='col-sm-12 col-md-7 '>
            <h1 className='text-danger fw-bold'> {title}</h1>
            <h4 className='text-success lh-base'>{description}</h4>
            <h3>${price}</h3>
            <div className='d-flex justify-content-between w-75'>  
            <button  className='btn btn-primary'>add to cart</button>
              <Link to='/' className='btn btn-primary'> Back to home</Link>
        
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct