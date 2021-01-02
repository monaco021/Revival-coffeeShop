import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCart } from "../../store/cart";


const UsersCart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.session.user.id);
    const cartArr = Object.values(cart);
    console.log(cartArr)
    useEffect(() => {

        dispatch(getCart(cart))
    }, [dispatch])

    return (
        <div>
            <h1>Shopping Cart</h1>
        </div>
    )

}

export default UsersCart;
