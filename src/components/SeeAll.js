import React from 'react'
import styled from 'styled-components'
import ItemRecipes from './ItemRecipes'
import ItemRecipesTitles from './ItemRecipesTitles'


function SeeAll() {
  return (
    <Wrap>
        <ItemRecipesTitles /> 
        <ItemRecipesGroup>
          <ItemRecipes 
            nomRecette = "Salade 1"
            createurRecette = "Anna Ba"
            backgroundImg = "recette1.jpg"
          />
          <ItemRecipes 
            nomRecette = "Salade 2"
            createurRecette = "Fatima S"
            backgroundImg="recette2.jpg"
          />
          <ItemRecipes 
            nomRecette = "Salade 3"
            createurRecette = "Mariama"
            backgroundImg="recette1.jpg"
          />
          <ItemRecipes 
          nomRecette = "Salade 4"
          createurRecette = "Oumy D"
          backgroundImg="recette3.jpg"/>
        </ItemRecipesGroup>
        
        
    </Wrap>
  )
}

export default SeeAll
// display
const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background: red;
    @media(max-width: 768px){
      height: 180vh;
    }
    
    
    
`
const ItemRecipesGroup = styled.div`
  display: flex;
  @media(max-width: 768px){
    flex-direction: column;
    justify-content: space-between;
    padding-top: 5px;
  }
  
`