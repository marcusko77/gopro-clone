import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import axios from 'axios'
import { getProducts } from '../ducks/products'

class Home extends Component {

    componentDidMount() {
        this.props.getProducts()
    }

    render() {
        console.log(this.props.products)
    
        return (
            <div>
                <Navbar />
                <h1>Home</h1>
                <div className='products'>
                    {   
                        this.props.products.map( products => (
                            <div className = 'product-list'> 
                                <h1> {products.phrase}</h1>
                                <h2>{products.product_name}</h2>
                                <h3>{products.product_price}</h3>
                                {/* <img src = {products.imgurl[0]}/> */}
                            </div>
                        ))
                    }
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
    getProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)