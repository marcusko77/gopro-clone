import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUser } from './../ducks/users';
import {Link} from 'react-router-dom'
import Cart from './Cart'
import './Navbar.css'


class Navbar extends Component {
    componentDidMount(){
        this.props.getUser();
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
                    <div className='cart-display-container'>
                        <img src="https://www.bookstore.umn.edu/images/icons/cart2.png" alt=""/>
                        <span className='cart-count'>count</span>
                    </div>
                    {user[0] ? <Cart/> :null}
                </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
// console.log(state.users)
    return {
        user: state.users.user
    }
}

export default connect(mapStateToProps, { getUser } )(Navbar)