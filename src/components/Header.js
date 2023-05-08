import React from 'react'
import styled from 'styled-components'
import  './ItemRecipesTitles.css'
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <Container> 
      <a>
         <img src="/images/crown.svg" alt="" /> 
      </a>
      <Menu>
        <a href="#" >Home</a>
        <a href="#" >Recipes</a>
        <a href="#" >Article</a>
        <a href="#" >About Us</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Login</a>
        <CustomMenu />
      </RightMenu>
      <BurgerNav>
        <li><a href="#">Hello</a></li>
        <li><a href="#">Hello</a></li>
        <li><a href="#">Hello</a></li>
      </BurgerNav>
    </Container>
    
  )
}

export default Header 

const Container = styled.div`
  min-height: 600px; 
  position: fixed;
  display: flex;
  align-items: center;
  justify-content : space-between;
  padding: 0 20px;
  background: #2A5846;
  top: 0; 
  left: 0;
  right: 0;
  z-index: 1;
 
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  a {
    font-weight: 600; 
    text-decoration: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media(max-width: 768px){
    display:none;
  }
`
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-decoration: uppercase;
    margin-right: 0 10px;
    flex-wrap: nowrap;
  }
`
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;  

`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
`