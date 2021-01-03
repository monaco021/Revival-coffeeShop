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
            <h1 className="title">{`${product.brandName} - ${product.name}`}</h1>
            <div className="coffee-container">
                <img className="coffee-page-image" src={product.imageLink} alt="coffeeImage" />
            </div>
            <div className="description">
            <h2>Description:</h2>
                <h3 >{`${product.description}`}</h3>
            </div>
                <h3>{`Price: $${product.price}.99`}</h3>
            <button onClick={() => dispatch(addToCart(productId, user.id))}>Buy Me!</button>
            <div>
                <h2>Reviews coming soon...</h2>
            </div>
        </div>
    )
}


export default GetCoffee;
