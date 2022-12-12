import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom";

const Navbar = () => (
  <ul className="Navbar">
    <li>
<Link to ="/">
        <button>Shop</button>
</Link>
    </li>
    <li>
<Link to ="/about">
        <button>About</button>
</Link>
    </li>
    <li>
        <Link to ="/contact">
        <button>Contact</button>
        </Link>
    </li>
      <li>
          <Link to ="/blog">
              <button>Blog</button>
          </Link>
      </li>
      <li>
          <Link to ="/blog2">
              <button>Blog2</button>
          </Link>
      </li>
      <li>
          <Link to ="/api">
              <button>api</button>
          </Link>
      </li>
      <li>
          <Link to ="/blog3">
              <button>blog3</button>
          </Link>
      </li>
  </ul>
);

export default Navbar