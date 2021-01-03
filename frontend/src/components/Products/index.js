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
            <h1 className="homepage-text">Find Your Perfect Blend</h1>
            <ul className="container">
                {products.product.list.map((p) => {
                    return (
                        <div className="product-container">
                            <NavLink key={p.name} to={`/product-list/${p.id}`}>
                                <div className="image-container">
                                    <img className="product-images" src={p.imageLink} alt={p.name}/>
                                </div>
                                <div className="text">
                                    {`${p.brandName}`}
                                </div>
                                <div className="text">
                                    {`${p.name}`}
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
