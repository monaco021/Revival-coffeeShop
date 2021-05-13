import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../store/product";
import { NavLink } from "react-router-dom";

const SearchListings = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.search);

    // useEffect(())
}