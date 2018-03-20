import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import { getProducts } from '../ducks/products'
import { addToCart } from '../ducks/cart'

 class Description extends Component {

    componentDidMount() {
        this.props.getProducts()
    }


    render() {

        const product = this.props.products.filter(product => product.product_id == this.props.match.params.id);
        console.log(product)

        return(
            <div>
                <Navbar/>
                <div className = 'product'>
               { product.map(product => (
                   <div> 
             <h2>{product.product_name}</h2>
               <h2>{product.price}</h2>
               <p>{product.description}</p>
               <img src = {product.pictures[1]}/>
                    <button onClick = {()=> this.props.addToCart(product.product_id)}>Add to Cart</button>
                   </div>))}
                </div>
               
               
            </div>
        )
        
               }
}

function mapStateToProps( {products} ) {
    return {
    
       products:products.products
    }
}

const mapDispatchToProps = {
    getProducts,
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Description)