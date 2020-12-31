import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCart } from "../../store/cart";


const UsersCart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state);
    useEffect(() => {

        dispatch(getCart())
    }, [dispatch])

    return (
        <div>
            <h1>Shopping Cart</h1>
        </div>
    )

}

export default UsersCart;
