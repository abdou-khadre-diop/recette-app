import React from 'react'
import styled from 'styled-components'
import './ItemRecipesTitles.css'

function ItemRecipesTitles() {
  return (
    <div>
        <ItemText>
            <h1 id='title'>Popular Recipes Of The Week</h1>
            <p id="subtitle" >Our most popular recipes of this week</p>
        </ItemText>
    </div>
  )
}

export default ItemRecipesTitles

const ItemText = styled.div`
    padding-top: 10vh;
    text-align: center;
    color: black;
    
`
