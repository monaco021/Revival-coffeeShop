import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCart } from "../../store/cart";
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
                        </div>
                    )
                })}
            </ul>
        </div>
    )

}

export default UsersCart;
