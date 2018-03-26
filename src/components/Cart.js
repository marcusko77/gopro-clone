import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCart } from '../ducks/cart'
import './Cart.css'
import '../styles/main.scss'

class Cart extends Component {


    componentDidMount() {
        this.props.getCart();

    }


    calculatetotal(){
        if(this.props.cart.length>0) {
            return this.props.cart.reduce((acc, item) => {
                return acc + item.price},0).toFixed(2)
            
        }
    }

    render() {

        const { cart } = this.props
        // console.log(cart)
        return (
            <div className='cart'>
            <div className = 'cart-dropdown'>
                <div className = 'cart-header'>
                    <h2>Your cart</h2>
                </div>
                <div>
                    {cart.length > 0
                        ? cart.map(product => (

                            <div key={product.product_id} className = 'cart-item'>
                                <Link to = {`/description/${product.product_id}`}><p>{product.product_name}</p></Link>
                                <p>Price: ${product.price}</p>
                                <p>{product.quantity}</p>
                            </div>
                        ))

                        : <h4>Your Cart is Empty</h4>
                    }
                    </div>
                    <div className = 'bottom-cart'>
                   <h3>Subtotal: ${this.calculatetotal()}</h3>
                   <Link to='checkout'>
                    <div className = 'checkout'>
                   <button>Checkout</button>
                     </div>
                     </Link>
                     </div>
                        
                
                </div>


            </div>
        )
    }
}

function mapStateToProps({ cart }) {
    // console.log(cart)
    return {
        cart: cart.cart

    }
}

const mapDispatchToProps = {
    getCart
   
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)