import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import { getProducts } from '../ducks/products'
import { Link } from 'react-router-dom'
import { addToCart } from '../ducks/cart'
import  Cart  from './Cart'
import {  getUserInfo } from '../ducks/users'
import '../styles/main.scss'

class Home extends Component {

    componentDidMount() {
        this.props.getProducts()
        this.props.getUserInfo()
    }

    

    render() {
    
    const user = this.props.user;
        return (
            <div>
                <Navbar />
                {/* {this.props.users.user[0] ? <Cart/> :null} */}
                {/* {console.log(this.props.users.user[0])} */}
                <div className='products'>
                {/* {console.log(this.props.products)} */}
                    {   
                        this.props.products.map( products => (
                            <div   className = 'product-list' key ={products.product_id} > 
                            
                            {/* <img src = {products.pictures[0]}/> */}
                            <div style= {{backgroundImage:`url(${products.pictures[0]})`}} className='product-info'>
                                <div className = 'content'>
                                <h1> {products.phrase}</h1>
                                <h2>{products.product_name}</h2>
                                <h3>${products.price}</h3>
                                <button  onClick = {() =>  this.props.user[0]?this.props.addToCart(products.product_id): alert('please login to add items to cart')}>Add To Cart</button>
                                <Link to= {`/description/${products.product_id}`}><button className = 'learn-more'>Learn More</button></Link>
                               </div>
                                </div>  
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

}

function mapStateToProps( state ) {
    // console.log(state.products)
    return {
        user:state.users.user,
       products:state.products.products
    }
}

const mapDispatchToProps = {
    getUserInfo,
    getProducts,
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)