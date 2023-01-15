import React from 'react'
import { Link } from 'react-router-dom'
import {Nav, NavItem, NavLink } from 'reactstrap'
export const Navbar = () => {

  return (
    <Nav
        fill
        pills
    >
        <NavItem>
            <NavLink
            active
            href="#"
            >
            Link
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#">
            Much Longer Nav Link
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#">
            Another Link
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink
            disabled
            href="#"
            >
            Disabled Link
            </NavLink>
        </NavItem>
    </Nav>
  )
}