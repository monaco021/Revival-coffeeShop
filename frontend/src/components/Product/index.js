import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPage } from "../../store/coffeePage"

const GetCoffee = () => {
    const dispatch = useDispatch();
    // const product = useSelector((state) => state);
    useEffect(() => {
        dispatch(getPage())
    }, [dispatch])

    return (
        <div>
            <h1>Coffee Product Page</h1>
        </div>
    )
}


export default GetCoffee;
