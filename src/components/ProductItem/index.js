import './index.css'

const ProductItem = ({ProductDetails}) => {
 
  
    return (
        <li className='product-item'>
            <img className='product-image' src={ProductDetails.image}  alt='product' />
           <p>{ProductDetails.id}</p>
           <h1 className='heading'>{ProductDetails.title}</h1>
           <p>{ProductDetails.category}</p>
           
        </li>
    );
};

export default ProductItem;