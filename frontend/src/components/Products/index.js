import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../store/product";
import { NavLink } from "react-router-dom";
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
                            <NavLink key={p.name} to={`/product-list/${p.id}`}>
                                <div>
                                    <img className="product-images" src={p.imageLink} alt={p.name}/>
                                </div>
                                <div>
                                    {p.name}
                                </div>
                            </NavLink>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default ProductListings;
