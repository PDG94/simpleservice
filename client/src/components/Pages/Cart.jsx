import { useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart, decreaseCart, removeCart, clearCart, calculateSubTotal, calculateTotalQuantity, cleanState, saveUrl } from "../../redux/actions";
import NavBar from "../NavBar/NavBar";




const Cart = () => {
    const cartItems = useSelector((state)=>state.cartItems);
    const cartTotalAmount = useSelector((state)=>state.cartTotalAmount);
    const cartTotalQuantity = useSelector((state)=>state.cartTotalQuantity);
    const isLoggedIn1 = useSelector((state)=>state.isLoggedIn);
    console.log(isLoggedIn1);
    const dispatch = useDispatch();
    const navigate =  useNavigate();
    const url = window.location.href;

    useEffect(() => {
        dispatch(calculateSubTotal());
        dispatch(calculateTotalQuantity());
        dispatch(saveUrl(""))
        return () => {
            dispatch(cleanState());
          };
        
      }, [cartItems, dispatch]);

      const checkout = () => {
        if (isLoggedIn1) {
          navigate("/checkout-details");
        } else {
          dispatch(saveUrl(url));
          navigate("/login");
        }
      };


    const increaseCart = (cart) => {
        dispatch(addToCart(cart));
      };

      const decreaseCart1=(cart)=>{
        dispatch(decreaseCart(cart));
        
   
      }
      const removeFromCart = (cart) => {
        dispatch(removeCart(cart));
       
        
      };
      const clearCart1 = () => {
        dispatch(clearCart());
       
      };
    
    return (
        <section>
               <NavBar/>
          <div className="">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
              <>
                <p>Your cart is currently empty.</p>
                <br />
                <div>
                  <Link to="/services">&larr; Continue shopping</Link>
                </div>
              </>
            ) : (
              <>
                <table>
                  <thead>
                    <tr>
                      <th>s/n</th>
                      <th>Service</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((cart, index) => {
                      const { id, servicename, price, cartQuantity } = cart;
                      return (
                        <tr key={id}>
                          <td>{index + 1}</td>
                          <td>
                            <p>
                              <b>{servicename}</b>
                            </p>
                            <img
                              src={cart.Users[0].profilepic}
                              alt="img"
                              style={{ width: "100px" }}
                            />
                          </td>
                          <td>{price}</td>
                          <td>
                            <div className="">
                              <button
                                className="--btn"
                                onClick={() => decreaseCart1(cart)}
                              >
                                -
                              </button>
                              <p>
                                <b>{cartQuantity}</b>
                              </p>
                              <button
                                className="--btn"
                                onClick={() => increaseCart(cart)}
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td>{(price * cartQuantity).toFixed(2)}</td>
                          <td className="">
                            <FaTrashAlt
                              size={19}
                              color="red"
                              onClick={() => removeFromCart(cart)}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className="">
                  <button className="--btn --btn-danger" onClick={clearCart1}>
                    Clear Cart
                  </button>
                  <div className="">
                    <div>
                      <Link to="/services">&larr; Continue shopping</Link>
                    </div>
                    <br />
                   
                      <p>
                        <b> {`Cart item(s): ${cartTotalQuantity}`}</b>
                      </p>
                      <div className="">
                        <h4>Subtotal:</h4>
                        <h3>{`$${cartTotalAmount.toFixed(2)}`}</h3>
                      </div>
                      <p>Tax an shipping calculated at checkout</p>
                      <button
                        className="--btn --btn-primary --btn-block"
                        onClick={checkout}
                      >
                        Checkout
                      </button>
                    
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      );
    };


export default Cart;