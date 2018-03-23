import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import { getProducts } from '../ducks/products'
import { addToCart } from '../ducks/cart'
import { getUserInfo } from '../ducks/users'
import '../styles/main.scss'

 class Description extends Component {

    componentDidMount() {
        this.props.getProducts()
        this.props.getUserInfo()
    }


    render() {

        const product = this.props.products.filter(product => product.product_id == this.props.match.params.id);
        // console.log(product)

        return(
            <div>
                <Navbar/>
                <div className = 'product'>
               { product.map(product => (
                   <div className = 'camera' style = {{backgroundImage:`url(${product.pictures[1]})`}}> 
                   <div className = 'products'>
             <h1>{product.product_name}</h1>
               <h1 className ='price'>${product.price}</h1>
               <p>{product.description}</p>
               {/* <img src = {product.pictures[1]}/> */}
                    <button onClick = {()=> this.props.addToCart(product.product_id)}>Add to Cart</button>
                    </div>
                   </div>))}
                </div>
               
               
            </div>
        )
        
               }
}

function mapStateToProps( state ) {
    console.log(state)
    return {
        users:state.users,
       products:state.products.products
    }
}

const mapDispatchToProps = {
    getProducts,
    getUserInfo,
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Description)