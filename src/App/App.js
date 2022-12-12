import logo from '../logo.svg';
import './App.css';
import Button from "../Button/Button";
import Layout from "../Layout/Layout"
import Product from "../Product/Product"
import Products from "../Product/PRODUCTS.json"
import About from "../About/About";
import Contact from "../Contact/Contact"
import Blog from "../Blog/Blog";
import Blog2 from "../Blog/Blog2";
import Api from "../Blog/Api";
import Blog3 from "../Blog/Blog3";
import ThemeContext from "../contexts/ThemeContext";
import theme from "../configs/theme";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, BrowserRouter
} from "react-router-dom";
import {useState} from "react";
function App() {
    const [activeTheme , setActiveTheme] = useState('green')
  return (
      //theme.green -. pass var like ths
      <ThemeContext.Provider value={{
          rang: theme[activeTheme],
          setActiveTheme
      }
      }>
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
                <Route path="/blog">
                    <Blog/>
                </Route>
                <Route path="/blog2">
                    <Blog2/>
                </Route>
                <Route path="/api">
                    <Api/>
                </Route>
                <Route path="/blog3">
                    <Blog3/>
                </Route>
            </Switch>
        </Layout>
        </BrowserRouter>
    </div>
      </ThemeContext.Provider>
  );
}

export default App;
