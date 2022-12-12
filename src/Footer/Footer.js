import React, { useContext } from "react";
import './Footer.css'
import ThemeContext from "../contexts/ThemeContext";
const Footer = () => {
    const themeValue = useContext(ThemeContext);
    console.log("theme valu footer" , themeValue);
  return (
    <div className="Footer">
      <h5>footer</h5>
      <div>
          <button onClick={() => themeValue.setActiveTheme('green')} className="green">green</button>
          <button onClick={() => themeValue.setActiveTheme('blue')} className="blue">blu</button>
      </div>
    </div>
  );
};

export default Footer