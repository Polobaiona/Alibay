import React, { Component } from "react"
import { connect } from "react-redux"

class UnconnectedCart extends Component {
  constructor(props) {
    super(props)
  }

  render = () => {
    console.log(this.props.cart)
    return (
      <div className="cart">
        <div>Items in your cart</div>
        {this.props.cart.map(item => {
          return(<div>
            <img className="img" src={"http://localhost:4000" + item.url} />
            <div>{item.name}</div>
            <div>{item.price}</div>
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
