import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/LogoImg.png'
import SearchImg from '../../assets/searchImg.png'
import CartImg from '../../assets/CartImg.png'

export default function Navbar(props) {  

   const [extendedNavbar, setExtendedNavbar] = useState(false);
   const [itemsInCart, setItemsInCart] = useState([1, 23 ,4]);

    return(
        <NavbarContainer extendedNavbar={extendedNavbar}>
            <NavbarUpperContainer>
                <LeftContainer>
                    <NavbarLogo src={LogoImg}></NavbarLogo> 
                    <NavbarTitle>Alkotótér</NavbarTitle>
                </LeftContainer>
                <MiddleContainer>
                    <NavbarSearchbarContainer>
                        <NavbarSearchbarIcon src={SearchImg}></NavbarSearchbarIcon>
                        <NavbarSearchbar placeholder='Keresés' />
                    </NavbarSearchbarContainer>
                </MiddleContainer>
                <RightContainer>
                    <NavbarButton>Belépés</NavbarButton>
                    <NavbarButton>Regisztráció</NavbarButton>
                    <NavbarCartContainer>
                        <NavbarCartImg src={CartImg} numberOfItemsInCart={itemsInCart.length}></NavbarCartImg>
                        {(itemsInCart.length > 0) ?
                        <NavbarCartBadge>{itemsInCart.length}</NavbarCartBadge> 
                        : 
                        <></>
                    }
                    </NavbarCartContainer>  
                    <HamburgerButton onClick={()=>{setExtendedNavbar(!extendedNavbar)}}>
                        {
                            extendedNavbar ? <>&#10005;</> : <>&#8801;</>
                        }
                    </HamburgerButton>
                </RightContainer>
            </NavbarUpperContainer>
            <NavbarLowerContainer>
                <LinkContainer>
                    <NavbarLink to="/">Ajánló</NavbarLink>
                    <NavbarLink to="/products">Termékek</NavbarLink>
                    <NavbarLink to="/artists">Alkotók</NavbarLink>
                </LinkContainer>
            </NavbarLowerContainer>
            {extendedNavbar ? 
            <ExtendedHamburgerContainer>
                <NavbarLink to="/">Ajánló</NavbarLink>
                <NavbarLink to="/products">Termékek</NavbarLink>
                <NavbarLink to="/artists">Alkotók</NavbarLink>
            </ExtendedHamburgerContainer>
            : 
            <></>
            }
        </NavbarContainer>
    )
}

const NavbarContainer = styled.nav`
    width: 100%;
    height: 13vh;
    position: sticky;
    position: -webkit-sticky;
    top: -7.5vh;
    box-shadow: 0 1px 1px #8fa0ba;
    overflow: hidden;

    @media (orientation: portrait){
        height: 100%;
    }
`

const LeftContainer = styled.div`
    width: 100%;
    flex: 20%;
    display: flex;
    padding-right: 2.5%;
    background-color: #FEF9F8;
    justify-content: left;
    align-items: center;
`

const MiddleContainer = styled.div`
    width: 100%;
    flex: 20%;
    display: flex;
    padding-right: 2.5%;
    background-color: #FEF9F8;
    justify-content: center;
    align-items: center;
    @media (orientation: portrait){
        flex: 60%;
    }
`


const RightContainer = styled.div`
    width: 100%;
    flex: 20%;
    display: flex;
    background-color: #FEF9F8;
    justify-content: right;
    align-items: center;
`

const NavbarUpperContainer = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;

    @media (orientation: portrait){
        height: 13vh;
    }
`

const NavbarLowerContainer = styled.div`
    width: 100%;
    height: 5vh;
    display: flex; 
    background-color: #FFFFFF;  
    justify-content: center;

    @media (orientation: portrait){
        display: none;
    }
`

const ExtendedHamburgerContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center; 
`

const LinkContainer = styled.div`
    display: flex;
    height: 20%;

    @media (orientation: portrait){
        display: none;
    }
`
const NavbarLink = styled(Link)`
    color:#5B7B7A;
    margin-inline: 2vh;
    font-size: 2.5vh;
    text-decoration: none;
    &:hover {
    color: #EA8C55;
    }
`

const NavbarLogo = styled.img`
    height: 8vh;
    width: auto;
    align-self: center;
    margin-left: 1.5vh;
    margin-right: 1.5vh;
`
const NavbarCartContainer = styled.div`
    background-color: #FEF9F8;
    display: flexbox;
    position: relative;
    justify-content: center;
    align-items: center;
`
const NavbarCartImg = styled.img`
    margin: 1vh;
    height: 6vh;
    width: auto;
    display: block;
    align-self: center;
    padding-top: 1vh;
    margin: 1vh;
    cursor:pointer;
    @media (orientation: portrait){
        display: none;
    }
`

const NavbarCartBadge = styled.div`
    position: absolute;
    top: 1vh;
    left: 4.2vh;
    width: 3vh;
    height: 3vh;
    background: red;
    color: #FEF9F8;
    font-family: 'Quicksand', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 24.5vh;
    font-size: 2vh;

    @media (orientation: portrait){
        display: none;
    }
`

const NavbarSearchbarIcon = styled.img`
    margin: 1vh;
    height: 3.5vh;
    width: auto;
    align-self: center;
`

const NavbarTitle = styled.p`
    color: #EA8C55;
    font-size: 5vh;
    align-self: center;
    @media (orientation: portrait){
        display: none;
    }
`

const HamburgerButton = styled.button`
    background: none;
    border: none;
    color: #5B7B7A;
    font-size: 10vh;
    padding-right: 2.5vh;
    cursor: pointer;

    @media (orientation:landscape){
        display: none;
    }
`
const NavbarButton = styled.button`
    width: 15vh;
    height: 38%;
    background-color: #FFFFFF;
    color: #5B7B7A;
    border-color: #5B7B7A;
    border: 1.2px solid;
    border-radius: 24.5vh;
    box-sizing: border-box;
    box-shadow: 0px 3px 3px rgba(0, 0, 0.05, 0.30);
    display: block;
    font-size: 2.2vh;
    text-align: center;
    padding-top: 0.5vh;
    margin: 1vh;
    cursor:pointer;
    align-self: flex-end;
    &:hover {
    color: #EA8C55;
    }

    @media (orientation: portrait){
        display: none;
    }
`


const NavbarSearchbarContainer = styled.div`
    width: 100%;
    height: 50%;
    background-color: #FFFFFF;
    border-color: #5B7B7A;
    border: 1.2px solid;
    border-radius:24.5vh;
    box-sizing: border-box;
    box-shadow: 0px 3px 3px rgba(0, 0, 0.05, 0.30);
    display: flex;
    padding-top: 1px;
    flex-direction: row;
`


const NavbarSearchbar = styled.input`
    flex: 80%;
    width: 100%;
    background-color: transparent;
    border: none;
    font-size: 2.5vh;
    outline: none;
`