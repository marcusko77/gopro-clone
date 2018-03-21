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
                return acc + item.price},0)
            
        }
    }

    render() {

        const { cart } = this.props
        console.log(cart)
        return (
            <div className='cart'>
                <div>
                    <h2>Your cart</h2>
                </div>
                <div>
                    {cart.length > 0
                        ? cart.map(product => (

                            <div key={product.product_id}>
                                <p>{product.product_name}</p>
                                <p>Price:{product.price}</p>
                                <p>Quantity:{product.quantity}</p>
                            </div>
                        ))

                        : <h4>Your Cart is Empty</h4>
                    }
                   <h3>{this.calculatetotal()}</h3>

                   <Link to='/checkout'>Checkout</Link>

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