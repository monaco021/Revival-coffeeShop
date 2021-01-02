import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../store/cart";
import { getPage } from "../../store/coffeePage"
import "./productPage.css"

const GetCoffee = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const { productId } = useParams();
    const product = useSelector((state) => state.coffeePage);
    useEffect(() => {
        dispatch(getPage(productId))
    }, [dispatch])

    return (
        <div>
            <h1 className="coffee-container">{`${product.brandName} - ${product.name}`}</h1>
            <div className="coffee-container">
                <img className="coffee-page-image" src={product.imageLink} alt="coffeeImage" />
            </div>
            <div>
            <h3>{product.description}</h3>
            </div>
            <button onClick={() => dispatch(addToCart(productId, user.id))}>add to cart</button>
        </div>
    )
}


export default GetCoffee;
