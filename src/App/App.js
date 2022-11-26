import logo from '../logo.svg';
import './App.css';
import Button from "../Button/Button";
import Layout from "../Layout/Layout"
import Product from "../Product/Product"
import Products from "../Product/PRODUCTS.json"
import About from "../About/About";
import Contact from "../Contact/Contact"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, BrowserRouter
} from "react-router-dom";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Layout>
            <Switch>
                <Route exact path="/">
                        <Product dataProb = {Products}/>
                </Route>
                <Route path="/about">
                        <About/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
            </Switch>
        </Layout>
        </BrowserRouter>
    </div>
  );
}

export default App;
