import "./App.css";
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import News from "./components/News";
import Service from "./components/Service";
import Shop from "./components/Shop";

function App() {
    return (
        <>
            <Header />
            <Banner />
            <News />
            <Shop />
            <Blog />
            <Service />
            <Footer />
        </>
    );
}

export default App;
