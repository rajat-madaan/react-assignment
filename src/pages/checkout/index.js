import React, { useState } from 'react';
import products from '../../products.json'
import './checkout.css';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
    let cart_products = JSON.parse(window.localStorage.getItem('cart_products'));
    const navigate = useNavigate();

    // start filter out process and get products info to show in tabular form

    let allProducts = [...products];
    let filteredProducts = allProducts.filter((item, index) => {
        return cart_products.includes(item.id);
    })

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.phone) {
            alert('please fill out data in all the fields!')
        } else if (formData.phone.length != 10) {
            alert('pleaes fill valid phone number')
        } else {
            window.localStorage.setItem('customer_info', JSON.stringify(formData));
            navigate('/submit_order')
        }
    }

    const handleChange = (e) => {

        let form = { ...formData };
        form[e.target.name] = e.target.value;

        setFormData(form);
    }

    return (
        <div className='checkout-root'>
            <p className='cart_heading'>Cart Items</p>
            <div className='cart-products'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredProducts.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td><img src={item.url} height={50} width={50} /></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <div className='checkout-info'>
                <form>
                    <span>Please enter info to continue!</span>
                    <div>
                        <input type='text' className='name' placeholder='Enter your name' name="name" onChange={handleChange} />
                    </div>
                    <div>
                        <input type='text' className='email' placeholder='Enter your email' name="email" onChange={handleChange} />
                    </div>
                    <div>
                        <input type='number' className='phone' placeholder='Enter your phone' name="phone" onChange={handleChange} />
                    </div>
                    <div>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>

                </form>
            </div>
        </div>

    )
}