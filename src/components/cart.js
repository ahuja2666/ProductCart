import "./cart.css"



const Cart = (props) => {
  return (
    <>
      <div className="cart-ctn">
        <h4 className="crt-h">Cart</h4>
        {props.qunty1 || props.qunty2 || props.qunty3 ? <span></span> : <span>Cart is empty</span>}
        {props.qunty1 ? <div className="cartsumm"><span>Product -1 </span><span>{props.qunty1}*{props.qunty1 * 100}</span> </div> : <span></span>}
        {props.qunty2 ? <div className="cartsumm"><span>Product -2 </span><span>{props.qunty2}*{props.qunty1 * 200}</span> </div> : <span></span>}
        {props.qunty3 ? <div className="cartsumm"><span>Product -3 </span><span>{props.qunty3}*{props.qunty1 * 300}</span> </div> : <span></span>}

        <div className="cartsumm">
          <h3>Total : {props.qunty1 * 100 + props.qunty2 * 200 + props.qunty3 * 300}</h3>
        </div>
      </div>
    </>
  )
}

export default Cart