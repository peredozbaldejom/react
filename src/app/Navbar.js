import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const NavStyled = styled.nav`
    display: flex;
    padding: 0;
    background: #481499;
    `;

const NavContent = styled.div`
    display: flex;
    justify-content: space-between;
    `;

const SButton = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    display: flex;
    :hover {
        color: blue;
    }
    `;

const NavLink = styled.a`
    display: flex;
    margin: 15px;
    background: springgreen;
    padding: 10px;
    color: white;
    border-radius: 15%;
    :hover {
        color: white;
        background: #926bcf;
    }    
    a:active {
        font-weight: 700;
        padding: 0.25rem 1.5rem;
        border-radius: 4px;
        color: white !important;
        background: #481499;
    }
`

const NavItem = styled.div`
    display: flex;
    margin: auto;
`


export const Navbar = () => {
    return (
        <NavStyled>
          <section>
            <h1>Redux Essentials Example</h1>
            <NavContent>
              <NavItem>
                <NavLink to="/">Posts</NavLink>
                <NavLink to="/users">Users</NavLink>
              </NavItem>
              <SButton primary>
                Refresh Notifications
              </SButton>
            </NavContent>
          </section>
        </NavStyled>
      )
    }



// return (
//     <Nav
//         fill
//         pills
//     >
//         <NavItem>
//             <NavLink
//             active
//             href="#"
//             >
//             Link
//             </NavLink>
//         </NavItem>
//         <NavItem>
//             <NavLink href="#">
//             Much Longer Nav Link
//             </NavLink>
//         </NavItem>
//         <NavItem>
//             <NavLink href="#">
//             Another Link
//             </NavLink>
//         </NavItem>
//         <NavItem>
//             <NavLink
//             disabled
//             href="#"
//             >
//             Disabled Link
//             </NavLink>
//         </NavItem>
//     </Nav>
//   )