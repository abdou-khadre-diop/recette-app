import React from 'react'
import styled from 'styled-components'
import './ItemRecipesTitles.css'

function ItemRecipes({nomRecette, createurRecette, backgroundImg}) {
  return (
    <Recette>
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
        
    </Recette>
    
    
  )
}

export default ItemRecipes
//rgb(247,247,247)
const Recette = styled.div`
    width: 20vw;
    height: 52vh;
    background: rgba(236, 236, 236);
    margin-top: 10vh;
    margin-left: 8vh;
    
    border-radius: 15px;
    display: flex;
    flex-direction: column;

    @media(max-width: 768px){
        width: 80vw;
        height: 30vh;
        margin-top: 5vh;
        margin-left: auto;
        margin-right: auto;
    }
    
    
    
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
        height: 20vh;
        
    }
    background-image:${props => `url("/images/${props.bgImage}")`}
    
   
    
`
const RecetteName = styled.div`
    padding-top: 5px;
    padding-left: 5px;
    text-align: left;
    
`
const RecetteUser = styled.div`
    text-align: left;
    padding-left: 5px;
    
`