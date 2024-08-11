import { useState, useEffect } from 'react';
import ProductItem from '../ProductItem';
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import './index.css';

const Product = () => {
    const [product, setProduct] = useState([]);
    const [hide, setHide] = useState(true);

    const toggleHide = () => {
        setHide(!hide);
    };

    const getProduct = async () => {
        const apiUrl = 'https://fakestoreapi.com/products';
        

        try {
            const response = await fetch(apiUrl);
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                const updatedProducts = data.map((eachItem) => ({
                    id: eachItem.id,
                    title: eachItem.title,
                    image: eachItem.image,
                    rating: eachItem.rating,
                    description: eachItem.description,
                    category: eachItem.category,
                }));
                setProduct(updatedProducts);
            } else {
                console.error('Failed to fetch products');
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        getProduct();
    }, []);

    return (
          <>
            <div>
            <nav className='nav-item'>
                <p>3452 ITEMS</p>
                {hide ? (
                    
                    <button onClick={toggleHide} className='butt'>SHOW FILTER</button>
                ) : (
                    <div>
                        <button onClick={toggleHide} className='butt'>HIDE FILTER</button>
                        <input type='checkbox' id='name' />
                        <label>CUSTOMIZABLE</label>
                        <select>
                            <option>IDEAL FOR</option>
                            <option>ALL</option>
                        </select>
                        <hr/>
                        <select>
                            <option>OCCASION</option>
                            <option>ALL</option>
                        </select>
                        <hr/>

                        <select>
                            <option>WORK</option>
                            <option>ALL</option>
                        </select>
                        <hr/>
                        <select>
                            <option>FABRIC</option>
                            <option>ALL</option>
                        </select>
                        <hr/>
                        <select>
                            <option>SEGMENT</option>
                            <option>ALL</option>
                        </select>
                        <hr/>
                        <select>
                            <option>SUITABLE FOR</option>
                            <option>ALL</option>
                        </select>
                        <hr/>
                        <select>
                            <option>RAW MATERIALS</option>
                            <option>ALL</option>
                        </select>
                        <hr/>
                        <select>
                            <option>PATTERN</option>
                            <option>ALL</option>
                        </select>
                        <hr/>
                        
                        

                    </div>
                )}
                <select>
                    <option className='option'>RECOMMENDED</option>
                    <option className='option'>NEWEST FIRST</option>
                    <option className='option'>POPULAR</option>
                    <option className='option'>PRICE: HIGH TO LOW</option>
                    <option className='option'>PRICE: LOW TO HIGH</option>
                </select>
            </nav>
            <hr />
            </div>

            <div>
                <ul className='main-container'>
                    {product.map((eachItem) => (
                        <ProductItem key={eachItem.id} ProductDetails={eachItem} />
                    ))}
                </ul>
            </div>

            <footer className='footer-container'>
                
                    <h1 className='heading2'>BE THE FIRST TO KNOW</h1>
                    <p className='paras'>Sign up for updates from metta muse</p>
                    <input type='text' id ='name' className='input' placeholder='Enter your e-mail'/>
                    <button className='subscribe'>SUBSCRIBE</button>

                    <p className='parass2'>CONTACT US</p>
                    <p className='parass2'>+44 221 133 5360</p>
                    <p className='parass2'>customercare@mettam.com</p>
                    <p className='parass2'>CURRENCY</p>
                    <p className='parass2'>USD</p>

                    <hr/>
                    <h2 className='parass2'>metta muse</h2>
                    <p className='parass2'>About us</p>
                    <p className='parass2'>Stories</p>
                    <p className='parass2'>Artsans</p>
                    <p className='parass2'>Boutiques</p>
                    <p className='parass2'>CONTACT Us</p>

                    <p>FOLLOW US </p>
                    <FaInstagram />
                    <CiLinkedin />

 
                
            </footer>
        </>
    );
};

export default Product;
