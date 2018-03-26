import React, { Component } from 'react'
import Navbar from './Navbar'
import { getCart } from '../ducks/cart'
import { removeFromCart } from '../ducks/cart'
import { connect } from 'react-redux'
import { Elements } from 'react-stripe-elements'
import { Link } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import '../styles/main.scss'


class Checkout extends Component {

    componentDidMount() {
        this.props.getCart();

    }


    calculatetotal() {
        if (this.props.cart.length > 0) {
            return this.props.cart.reduce((acc, item) => {
                return acc + item.price
            }, 0).toFixed(2)

        }
    }

    onToken = token => {
        console.log('token', token);
        token.card = void 0;
        const { amount } = this.calculatetotal()
        axios.post('/api/payment', { token, amount })
          .then(charge => { console.log('charge response', charge.data) });

      }


    render() {

        const { cart } = this.props
        // var total = cart.reduce((acc, item) => acc + item.price, 0);
        return (
            <div className = 'checkout-background'>
                <Navbar />
                
                <div className='checkout'>
                <h1>Shopping Cart</h1>
                <div className = 'checkout-product-header'>
                    <p>Product</p>
                    <p>Quantity</p>
                    <p>Price</p>
                    <p>Remove from cart</p>
                </div>
                    {cart.length > 0 ?
                        cart.map(product => (
                            <div key={product.product_id} className = 'checkout-product'>
                                <Link to = {`/description/${product.product_id}`}><p>{product.product_name}</p></Link>
                                <p>{product.quantity}</p>
                                <p>{product.price}</p>
                                <button onClick={() => this.props.removeFromCart(product.product_id)} >Remove</button>
                            </div>
                        )) : null}
                        <div className = 'total'>
                        <h3 className = 'continue-shopping'><Link to='/home'>Continue Shopping</Link></h3>
                        <h3>Subtotal: ${this.calculatetotal()}</h3>
                    <StripeCheckout className = 'stripe'
                        token={this.onToken}
                        stripeKey='pk_test_oxuMGo3MknG7e550KhbXiKiX'
                        amount={this.calculatetotal()*100}/>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ cart }) {
    console.log(cart.cart)
    return {
        cart: cart.cart

    }
}

const mapDispatchToProps = {
    getCart,
    removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)