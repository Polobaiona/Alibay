import React, { Component } from "react"
import { connect } from "react-redux"

class UnconnectedCart extends Component {
  constructor(props) {
    super(props)
  }

  render = () => {
    console.log(this.props.cart)
    return (
      <div className="wrap">
        <div className="cart-title">Items in your cart</div>
        {this.props.cart.map(item => {
          return(<div className="cart-outer">
            <img className="cart-img" src={"http://localhost:4000" + item.url} />
            <div>
            <div className="cart-name">{item.name}</div>
            <div className="cart-inner">{item.price}</div>
            <div className="cart-inner">{item.description}</div>
            </div>
          </div>)
        })}
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

let Cart = connect(mapStateToProps)(UnconnectedCart)

export default Cart
