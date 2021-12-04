import React from 'react';
import { 
    LeftContainer, 
    NavbarContainer, 
    NavbarExtendedContainer, 
    NavbarInnerContainer, 
    NavbarLinkContainer, 
    RightContainer, 
    NavbarLink
} from '../styles/Navbar.style';

function Navbar (){
    return (
        <NavbarContainer>
            <NavbarInnerContainer>
                <LeftContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to="/">Home</NavbarLink>
                        <NavbarLink to="/products">Products</NavbarLink>
                        <NavbarLink to="/contact">Contact Us</NavbarLink>
                        <NavbarLink to="/about">About Us</NavbarLink>

                    </NavbarLinkContainer>
                </LeftContainer>
                <RightContainer></RightContainer>
            </NavbarInnerContainer>
            <NavbarExtendedContainer></NavbarExtendedContainer>
        </NavbarContainer>)
    ;
}

export default Navbar;