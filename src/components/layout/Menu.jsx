import "./Menu.css";
import React from "react";

import { Link } from "react-router-dom";

const Menu = (props) => (
  <aside className="Menu">
    <nav>
      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>

        <li>
          <Link to="/param/123">Para #01</Link>
        </li>

        <li>
          <Link to="/param/legal">Para #02</Link>
        </li>

        <li>
          <Link to="/about">Sobre</Link>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Menu;
