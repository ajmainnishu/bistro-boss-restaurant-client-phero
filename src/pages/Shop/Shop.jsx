import { Helmet } from "react-helmet-async";
import ShopBanner from "./ShopBanner/ShopBanner";

const Shop = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Shop</title>
            </Helmet>
            <ShopBanner></ShopBanner>
        </div>
    );
};

export default Shop;