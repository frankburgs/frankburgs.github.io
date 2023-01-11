import React from 'react'
import {
    Nav,
    NavItem,
    NavLink
} from "reactstrap";

export const Footer = () => {
  return (
    <Nav>
        <NavItem>
            <NavLink active href="/home">
                Home
            </NavLink>
        </NavItem>

        <NavItem>
            <NavLink href="/about">
                About
            </NavLink>
        </NavItem>

        <NavItem>
            <NavLink disabled href="#">
                Disabled Link
            </NavLink>
        </NavItem>
    </Nav>
  )
}

export default Footer;