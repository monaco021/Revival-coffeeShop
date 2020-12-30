import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../store/product";
import "./product.css"

const ProductListings = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state);
    useEffect(() => {

        dispatch(getProduct())
    }, [dispatch])

    return(
        <div>
            <h1>Product List</h1>
            <ul>
                {products.product.list.map((p) => {
                    return (
                        <div>
                            <div>
                                <img className="product-images" src={p.imageLink} alt={p.name}/>
                            </div>
                            <div>
                                {p.name}
                            </div>
                        </div>
                    )
                })}
            </ul>
        </div>
    )


    // const { productId } = useParams();
    // const product = useSelector(state => {
    //     return state.product.list.map(productId => state.product[productId]);
    // });
}

export default ProductListings;
