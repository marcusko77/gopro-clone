import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUser } from './../ducks/users';
import {getCart } from './../ducks/cart'
import {Link} from 'react-router-dom'
import Cart from './Cart'
import './Navbar.css'


class Navbar extends Component {
    constructor(props){
        super(props)

        this.state = {
            showcart:false
        }
    }

    cartToggle(){
        // console.log(this.state.showcart)
        return this.setState({showcart:!this.state.showcart})
    }


    componentDidMount(){
        this.props.getUser();
        this.props.getCart();
    }

        calculateQuantity(){
    if (this.props.cart.length > 0) {
        // console.log(this.props.cart)
        return this.props.cart.reduce((acc, item) => {
            return acc + parseInt(item.quantity)    
        }, 0)
    }
}

    render() {
        const user = this.props.user;
        return (
            <div className='nav-container'>
            <div className = 'nav-sides-container'>
                <div className='left-menu-container'>
                    {/* <a href={process.env.REACT_APP_HOMEPAGE}> */}
                    <Link to= '/home'>
                        <div className='main-logo'>
                        </div>
                    </Link>
                    <div className='dead-menu-links'>
                        <p>SHOP</p>
                        <p>APPS</p>
                        <p>WATCH</p>
                        <p>PLUS</p>
                    </div>
                </div>

                <div className='right-menu-container'>
                    <a href = { user[0] ? process.env.REACT_APP_LOGOUT : process.env.REACT_APP_LOGIN }>{user[0] ? <p>Logout</p> : <p>Login/Register</p>}</a>
                    <Link to = '/account'>Account</Link>
                    <p>US</p>
                    <div onClick = {()=> this.cartToggle()} className='cart-display-container'>
                        <img src="https://www.bookstore.umn.edu/images/icons/cart2.png" alt=""/>
                        <span className='cart-count'>{this.calculateQuantity()}</span>
                    </div>
                    {this.state.showcart ? <Cart/> :null}
                    {/* {console.log(this.showcart)} */}
                </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
// console.log(state.users)
    return {
        user: state.users.user,
        cart:state.cart.cart
    }
}

export default connect(mapStateToProps, { getUser, getCart } )(Navbar)