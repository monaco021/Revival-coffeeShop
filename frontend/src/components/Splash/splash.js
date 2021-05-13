import "./splash.css";
import picture from "./coffee-2.jpg"

// need to rebuild to make text more dynamic + look at css to allow text to stand out more
const SplashPage = () => {
    return (
        <div>
            <div id="splash-page-container">
                <img src={picture} alt="coffee-splash-backgroung" />
                <div id="splash-overlay">
                    <h1>Welcome to Revival, check our all of coffee by hitting the Home Button!</h1>
                </div>
            </div>
        </div>
    )
}
export default SplashPage;
