import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUser } from './../ducks/users';
import './Navbar.css'
class Navbar extends Component {
    componentDidMount(){
        this.props.getUser();
    }

    render() {
        const user = this.props.user;
        return (
            <div className='nav-container'>
                <div className='left-menu-container'>
                    <a href='http://localhost:3000/#/home'>
                        <div className='main-logo'>
                        </div>
                    </a>
                    <div className='dead-menu-links'>
                        <p>SHOP</p>
                        <p>APPS</p>
                        <p>WATCH</p>
                        <p>PLUS</p>
                    </div>
                </div>

                <div className='right-menu-container'>
                    <a href = { user.user_id ? process.env.REACT_APP_LOGOUT : process.env.REACT_APP_LOGIN }>{user.user_id ? <p>Logout</p> : <p>Login/Register</p>}</a>
                    <a>Account</a>
                    <p>US</p>
                    <div className='cart-display-container'>
                        <span>Cart icon</span>
                        <span className='cart-count'>count</span>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {

    return {
        user: state.users.user
    }
}

export default connect(mapStateToProps, { getUser } )(Navbar)