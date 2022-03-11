import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Products from'./Products';
import AboutUs, {Members, Contact, Address} from './AboutUs';
import NavBar from "./NavBar";
import ProductDetail from './ProductDetail';
import NotFound from './NotFound';
import Users from './Users';


const App = () => {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="products" element={<Products />}></Route>
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="about-us" element={<AboutUs />}>
                    <Route path="members" element={<Members />}></Route>
                    <Route path="contact" element={<Contact />}></Route>
                    <Route path="address" element={<Address />}></Route>
                </Route>
                <Route path='/users' element={<Users />}></Route>
                <Route path="*" element = { <NotFound />}/>
            </Routes>
            <footer className="footer">This is my footer</footer>
        </div>
    );
};

export default App;