import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ProductListings from "./components/Products";
import SplashPage from "./components/Splash/splash";
import UsersCart from "./components/ShoppingCart";
import GetCoffee from "./components/Product";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/" exact>
            <SplashPage />
          </Route>
          <Route path="/product-list" exact>
              <ProductListings />
          </Route>
          <Route path="/shopping-cart">
            <UsersCart />
          </Route>
          <Route path="/product-list/:productId">
            <GetCoffee />
          </Route>

        </Switch>
      )}
    </>
  );
}

export default App;
