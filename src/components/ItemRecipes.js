import React from 'react'
import styled from 'styled-components'
import './ItemRecipesTitles.css'

function ItemRecipes({nomRecette, createurRecette, backgroundImg}) {
  return (
    <Wrap>
        <div>
            <ItemRecette bgImage={backgroundImg} >
                
            </ItemRecette>
        </div>
        <div>
            <RecetteName>
                <h3 className="recetteName">{ nomRecette }</h3>
            </RecetteName>
            <RecetteUser>
                <h4 className="recetteUser">by { createurRecette }</h4>
            </RecetteUser>
        </div>
        
    </Wrap>
    
    
  )
}

export default ItemRecipes

const Wrap = styled.div`
    width: 20vw;
    height: 52vh;
    background: rgb(247,247,247);
    margin-top: 10vh;
    margin-left: 8vh;
    
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    
    
    
`
const ItemRecette = styled.div`
    background: black;
    background-size: cover;
    justify-content: space-between;
    
    border-radius: 15px;
    width: 20vw;
    height: 40vh;
    @media(max-width: 768px){
        width: 80vw;
        
    }
    background-image:${props => `url("/images/${props.bgImage}")`}
    
   
    
`
const RecetteName = styled.div`
    padding-top: 5px;
    padding-left: 5px;
    text-align: left;
    @media(max-width: 768px){
        padding-top: 5px;
        padding-left: 5px;
        
    }
`
const RecetteUser = styled.div`
    text-align: left;
    padding-left: 5px;
    @media(max-width: 768px){
        text-align: left;
        padding-left: 5px;
        
    }
    
`