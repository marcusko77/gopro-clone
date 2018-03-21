import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import {  getUserInfo } from '../ducks/users'
import { Link } from 'react-router-dom'
import { updateAddress } from '../ducks/users'
import '../styles/main.scss'
class Account extends Component {
    constructor(props){
        super(props)

        this.state = {
            editting: false,
            newAddress: ''
        }

    }
    componentDidMount() {
        this.props.getUserInfo();
        this.props.users.user[0] ? this.setState({newAddress:this.props.users.user[0].address }): null
    }

    edit( ) {
        this.setState({editting: false})
        this.props.updateAddress(this.state.newAddress)
    }


    render() {
console.log(this.props.users.user[0])
console.log(this.state)
        return (
            <div>
                <Navbar/>
                <div className = 'account'>
                    
                   
                    {this.props.users.user[0] ?
                        <div className = 'account-info'>
                         <h1>Account Information</h1>
                        <p>First Name: {this.props.users.user[0].first_name}</p>   
                        <p>Last Name: {this.props.users.user[0].last_name}</p>   

                        {this.state.editting?
                        <div>
                            <input placeholder = {this.state.newAddress} onChange = { ( e ) => this.setState({newAddress: e.target.value})} />
                        <button onClick = {()=> this.edit()} >Save</button> 
                        </div>
                        :
                        <div>

                        <p>Address: {this.state.newAddress}</p> <button onClick = { () => this.setState( { editting: true})}>Update Address</button>
                        </div>}
                        </div>

                        :<p>Please Login to View Account Information </p>}
                </div>
            </div>
        )
    }
}

function mapStateToProps( {users} ) {
   
    return {
        users
       
    }
}

const mapDispatchToProps = {
    getUserInfo,
    updateAddress
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)

