import React, { Component } from 'react'
import Navbar from './Navbar'
import { getCart } from '../ducks/cart'
import { removeFromCart } from'../ducks/cart'
import { connect } from 'react-redux'

 class Checkout extends Component{

    componentDidMount(){
        this.props.getCart();
       
    }

    remove(product_id){
        this.props.removeFromCart(product_id);
       this.componentDidMount()
    }

    calculatetotal(){
        if(this.props.cart.length>0) {
            return this.props.cart.reduce((acc, item) => {
                return acc + item.price},0)
            
        }
    }


    render() {

        const { cart } = this.props
        // var total = cart.reduce((acc, item) => acc + item.price, 0);
        return(
            <div>
            <Navbar/>
            <h1>Checkout!</h1>
            <div>
              { cart.length > 0?
            cart.map(product => (
                        <div key = {product.product_id}>
                            <p>{product.product_name}</p>
                            <p>Price:{product.price}</p>
                            <p>Quantity:{product.quantity}</p>
                            <button onClick = {() => this.remove(product.product_id)} >Remove</button>
                        </div>
             ) ):null}
             <h3>{this.calculatetotal()}</h3>
            </div>
            
            </div>
        )
    }
}

function mapStateToProps({cart}) {
    console.log(cart.cart)
    return {
        cart:cart.cart
      
    }
}

const mapDispatchToProps = {
    getCart,
    removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)