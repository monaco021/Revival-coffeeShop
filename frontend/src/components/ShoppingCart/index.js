import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCart, removeFromCart } from "../../store/cart";
import "./cart.css"

const UsersCart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.session.user.id);
    const cartItems = useSelector((state) => state.cart.products)
    console.log(cartItems);
    useEffect(() => {

        dispatch(getCart(cart))
    }, [dispatch])

    return (
        <div>
            <h1>Shopping Cart</h1>
            <ul className="cart-container">
                {cartItems.map((item) => {
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
                })}
            </ul>
            <button>Check Out!</button>
        </div>
    )

}

export default UsersCart;
