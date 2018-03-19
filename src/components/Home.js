import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import { getProducts } from '../ducks/products'
import { Link } from 'react-router-dom'

class Home extends Component {

    componentDidMount() {
        this.props.getProducts()
    }

    render() {
    
    
        return (
            <div>
                <Navbar />
                <h1>Home</h1>
                <div className='products'>
                {console.log(this.props.products)}
                    {   
                        this.props.products.map( products => (
                            <div className = 'product-list' key ={products.product_id} > 
                                <h1> {products.phrase}</h1>
                                <h2>{products.product_name}</h2>
                                <h3>{products.price}</h3>
                                <Link to= {`/description/${products.product_id}`}>Learn More</Link>
                                <button>Add To Cart</button>
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