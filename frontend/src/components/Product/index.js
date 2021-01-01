import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPage } from "../../store/coffeePage"

const GetCoffee = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const product = useSelector((state) => state.coffeePage);
    useEffect(() => {
        dispatch(getPage(productId))
    }, [dispatch])
    console.log({product});
    return (
        <div>
            <h1>Coffee Product Page</h1>
            <div>
                <h2>{product.name}</h2>
            </div>
        </div>
    )
}


export default GetCoffee;
