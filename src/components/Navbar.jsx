import React, {useState} from 'react';
import { 
    LeftContainer, 
    NavbarContainer, 
    NavbarExtendedContainer, 
    NavbarInnerContainer, 
    NavbarLinkContainer, 
    RightContainer, 
    NavbarLink,
    Logo,
    OpenLinkButton, 
    NavbarLinkExtended
} from '../styles/Navbar.style';
import LogoImg  from '../assets/gitlab.png';

function Navbar (){
    const [extendNavbar,setExtendNavbar] =useState(false);

    return (
        <NavbarContainer extendNavbar = {extendNavbar}>
            <NavbarInnerContainer>
                <LeftContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to="/">Home</NavbarLink>
                        <NavbarLink to="/products">Products</NavbarLink>
                        <NavbarLink to="/contact">Contact Us</NavbarLink>
                        <NavbarLink to="/about">About Us</NavbarLink>
                        <OpenLinkButton
                            onClick={()=>{
                                setExtendNavbar((curr)=>!curr);
                            }}
                        >
                            {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
                        </OpenLinkButton>
                    </NavbarLinkContainer>
                </LeftContainer>
                <RightContainer>
                    <Logo src ={LogoImg}></Logo>
                </RightContainer>
            </NavbarInnerContainer>
            {extendNavbar && (
            <NavbarExtendedContainer>
                <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
                <NavbarLinkExtended to="/products">Products</NavbarLinkExtended>
                <NavbarLinkExtended to="/contact">Contact Us</NavbarLinkExtended>
                <NavbarLinkExtended to="/about">About Us</NavbarLinkExtended>
            </NavbarExtendedContainer>
            )}
        </NavbarContainer>);
}

export default Navbar;