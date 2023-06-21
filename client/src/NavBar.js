import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function NavBar() {
    return (
        <NavStyle>
            <li><NavLink exact to="/photographers">
                <p>Photographers</p>
            </NavLink>
            </li>
            <li><NavLink exact to="/exhibits">
                <p>Student Exhibits</p>
            </NavLink></li>
        </NavStyle>
    )
}

export default NavBar;

const NavStyle = styled.ul`
list-style-type: none;
margin: 10px;
padding: 0;
overflow: hidden;
background-color: #333;
li {
    border-right: 1px solid #bbb;
  }
li {
    float: left;
  }
  
li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
  /* Change the link color to #111 (black) on hover */
li a:hover {
    background-color: #111;
  }
.active {
    background-color: #87CEEB;
    color:white;
    text-shadow: 1px 1px #000000;
  }
.submit {
    float:right;
    border-left: 1px solid #bbb;
  }
`