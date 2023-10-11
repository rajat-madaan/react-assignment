import React, { useEffect, useState } from 'react';
import './products.css'
import products from '../../products.json'
import { useNavigate } from 'react-router-dom';

export default function Products() {

    const [cartProducts, setCartProducts] = useState([]);
    const navigate = useNavigate();

    const buyProduct = (productId) => {
        const addedProducts = [...cartProducts];

        if (addedProducts.includes(productId)) {
            alert('product already added to cart')
        } else {
            addedProducts.push(productId);
            setCartProducts(addedProducts)
            alert('Product added to cart successfully!')
        }
    }

    const gotoCart = () => {
        window.localStorage.setItem('cart_products', JSON.stringify(cartProducts));
        navigate('/cart')
    }

    return (
        <>
            <div className='heading'>Products</div>
            <div className='cart'>
                <button className='fa fa-shopping-cart' onClick={gotoCart}> Go to Cart ({cartProducts.length})</button>
            </div >
            <div className='products'>
                {
                    products.map((item, index) => (
                        <div className='product' key={item.id}>
                            <img src={item.url} className='product_image' />
                            <p className='product_name'>{item.name}</p>
                            <p className='product_price'>${item.price}</p>
                            <button className='buy_product' onClick={() => buyProduct(item.id)} disabled={cartProducts.includes(item.id)}
                                style={{ backgroundColor: cartProducts.includes(item.id) ? '#ccc' : 'dodgerblue' }}>Buy</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
