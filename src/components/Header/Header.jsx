import "./Header.scss";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {TbSearch, tbSearch} from "react-icons/tb"
import {CgShoppingCart} from "react-icons/cg"
import {AiOutlineHeart} from 'react-icons/ai'
import { Search } from "./Search/Search";
import Cart from "../../utilis/context"

const Header = () => {
    return (
    <header className="main-header">
    <div className="header-context">
    <ul className="left">
      <li>Home</li>
      <li>About</li>
      <li>Categories</li>
    </ul>
    <div className="center">BastiKaHasti</div>
    <div className="right">
     <TbSearch />
     <AiOutlineHeart />
     <span className="cart-icon">
        <CgShoppingCart/>
     </span>
    </div>
    </div>
  </header>)
    
};

export default Header;
