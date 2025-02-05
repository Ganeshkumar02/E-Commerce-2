import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import Product from "./Product";
// import Cart from "./Cart";
import Footer from "./Footer";
// import Contact from "./Contact";
function Home() {
    return (
        <div>
            <Header />
            <Slider />
            <Product />
            {/* <Contact/> */}
            {/* <Cart/> */}
            <Footer />

        </div>
    )
};
export default Home;