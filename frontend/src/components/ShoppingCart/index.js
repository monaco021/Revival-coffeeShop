import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCart, removeFromCart } from "../../store/cart";
import {useHistory } from "react-router-dom"
import "./cart.css"
//need to rebuild cart right now users have to hard reset to see what has been deleted
//also want to redesign the page looking to have simaliar layout to target or amazon cart 
//should be named the same as my folder name 
const UsersCart = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.session.user.id);
    const cartItems = useSelector((state) => state.cart.products)

    useEffect(() => {
        if(cart === null){
            history("/signup")
        } else {
            dispatch(getCart(cart))
        }
    }, [dispatch])

    return (
        <div>
            <h1>Shopping Cart</h1>
            <div className="cart-container">
                {cartItems !== 0 ?                
                cartItems.map((item) => {
                    return (
                        <div >
                            <div className="cart-images-container">
                                <img className="product-images" src={item.image} alt={item.name}/>
                            </div>
                            <div >
                                {`${item.brand}`}
                            </div>
                            <div >
                                {`${item.name}`}
                            </div>
                            <div>
                                {`$${item.price}.00`}
                            </div>
                            <div>
                            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove Me</button>
                            </div>
                        </div>
                    )
                })
                : <h1>no items in cart</h1>
            }
            </div>
            <div>
                <a href="http://localhost:3000/product-list">Check out!</a>
            </div>
        </div>
    )

}

export default UsersCart;
