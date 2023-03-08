import React from 'react'
import styled from 'styled-components'
import {COLORS} from '../helpers/Colors'

const Navbar = () => {

    const Nav = styled.nav`
        width: 100%;
        height: 5rem;
        background-color: ${COLORS.white};
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;
    `;
    const Logo = styled.h1`
        background-size: cover;
        color: ${COLORS.black};
        width: 15rem;
        height: 5rem;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
    `;

    return (
        <>
            <Nav>
                <Logo>JDM Center</Logo>
            </Nav>
        </>
    )
}

export default Navbar
