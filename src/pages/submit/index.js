import React from 'react';
import './submit.css';
import products from '../../products.json'

export default function Submit() {

    let user_info = JSON.parse(window.localStorage.getItem('customer_info'));
    let cart_products = JSON.parse(window.localStorage.getItem('cart_products'));

    let allProducts = [...products];

    let filteredProducts = allProducts.filter((item, index) => {
        return cart_products.includes(item.id);
    })


    console.log(user_info, cart_products)

    return (
        <div className='submit_root'>
            <p className='submit-info'>All details from previous pages</p>

            <div className='user-info'>
                <strong>User Info</strong>

                <table>
                    <thead>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{user_info.name}</td>
                            <td>{user_info.email}</td>
                            <td>{user_info.phone}</td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <div className='products-info'>
                <strong>Products Info</strong>

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
        </div>
    )
}