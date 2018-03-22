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
            }, 0)

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
            <div>
                <Navbar />
                <h1>Checkout!</h1>
                <div>
                    {cart.length > 0 ?
                        cart.map(product => (
                            <div key={product.product_id}>
                                <p>{product.product_name}</p>
                                <p>Price:{product.price}</p>
                                <p>Quantity:{product.quantity}</p>
                                <button onClick={() => this.props.removeFromCart(product.product_id)} >Remove</button>
                            </div>
                        )) : null}
                    <h3>{this.calculatetotal()}</h3>
                </div>
                <div>
                    <StripeCheckout
                        token={this.onToken}
                        stripeKey='pk_test_oxuMGo3MknG7e550KhbXiKiX'
                        amount={this.calculatetotal()*100}/>
                    <Link to='/home'>Continue Shopping</Link>
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