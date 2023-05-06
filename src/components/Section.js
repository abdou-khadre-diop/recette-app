import React from 'react'
import styled from 'styled-components'
import '../index.css'

const Section = () => {
  return (
    <Wrap>
        <ItemText>
            <h1> The Easiest Way <br />To Make Your <br />Favorite Meal</h1>
            <p id="subtitle"className="text-6xl">Discover 1000+ recipes in your hand with the best recipe.<br />Help you to find the easiest way to cook.</p>
        </ItemText>
        <ButtonGroup>
            <LeftButton>
                Explores recipes 
            </LeftButton>
            
        </ButtonGroup>
        
        
        
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background: #2A5846;
    display: flex;
    flex-direction: column;
    
`
const ItemText = styled.div`
    padding-top: 25vh;
    text-align: left;
    padding-left: 15vh;
    
`
const ButtonGroup = styled.div`
    padding-left: 15vh;
    padding-top: 5vh;
    margin-bottom: 30px;
    display: flex;
    @media (max-width: 768px){
        flex-direction: column;
    }
    

`
const LeftButton = styled.div`
    background-color : #0B9A61;
    height: 50px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;
    overflow-x: hidden;
    animation: animatedArrow infinite 1.5s
`


