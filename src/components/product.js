import { useState } from "react";
import Cart from "./cart";
import "./product.css";

const Product = () => {
  const [qunty1, setqty1] = useState(0);
  const [qunty2, setqty2] = useState(0)
  const [qunty3, setqty3] = useState(0)


  const handelDec = () => {
    if (qunty1 === 0) {
      return;
    } else {
      setqty1(prev => prev - 1)
    }
  }

  const handelInc = () => {

    setqty1(qunty1 + 1)

  }
  const handelDec2 = () => {
    if (qunty2 === 0) {
      return;
    } else {
      setqty2(prev => prev - 1)
    }
  }

  const handelInc2 = () => {

    setqty2(qunty2 + 1)

  }

  const handelDec3 = () => {
    if (qunty3 === 0) {
      return;
    } else {
      setqty3(prev => prev - 1)
    }
  }

  const handelInc3 = () => {


    setqty3(qunty3 + 1)

  }



  return (
    <>
      <div className="parentctn">
        <div>
          <div className="pro-container">
            <h2 className="heading">Products</h2>
            <div className="productDesc">
              <span className="productdetails">Product-1</span>
              <span className="productdetails">100</span>
              <div className="qty"><button onClick={() => handelDec()}>-</button><p>{qunty1}</p><button onClick={() => handelInc()}>+</button></div>
            </div>

          </div>
          <div className="pro-container">
            <div className="productDesc">
              <span className="productdetails">Product-2</span>
              <span className="productdetails">200</span>
              <div className="qty"><button onClick={() => handelDec2()}>-</button><p>{qunty2}</p><button onClick={() => handelInc2()}>+</button></div>
            </div>

          </div>
          <div className="pro-container">
            <div className="productDesc">
              <span className="productdetails">Product-3</span>
              <span className="productdetails">300</span>
              <div className="qty"><button onClick={() => handelDec3()}>-</button><p>{qunty3}</p><button onClick={() => handelInc3()}>+</button></div>
            </div>

          </div>
        </div>
        <div>


          <Cart qunty1={qunty1} qunty2={qunty2} qunty3={qunty3} />
        </div>
      </div>
    </>
  )
}

export default Product;