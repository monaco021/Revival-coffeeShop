import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPage } from "../../store/coffeePage"

const GetCoffee = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state);
    useEffect(() => {
        dispatch(getPage())
    }, [dispatch])

    return (
        <div>
            <h1>Coffee Product Page</h1>
            <div>
                <h2>{products.product.name}</h2>
            </div>
        </div>
    )
}


export default GetCoffee;
