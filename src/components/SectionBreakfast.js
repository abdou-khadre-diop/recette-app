import React from 'react'
import styled from 'styled-components'
import './ItemRecipesTitles.css'

function SectionBreakfast() {
  return (
    <Wrap>
        <ItemDiv>
            <h2 className="itemDiv-h2">50+ Breakfast Recipes That <br/>Very Quick And Easy</h2>
            <p className="itemDiv-p">Find the perfect food ideas to start your day with.</p>
        </ItemDiv>
        
        
    </Wrap>
  )
}
//rgb(233,233,233);
export default SectionBreakfast

const Wrap = styled.div`
    width: 100vw;
    height: 55vh;
    background: black;
    
    display: flex;
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 55px;
    flex-direction: column;
    justify-content: space-between;
    @media(max-width: 768px){
        height: 35vh;
        
    }    

`
//rgb(255,255,255)
const ItemDiv = styled.div`
    width: 30vw;
    height: 35vh;
    background: yellow;
    border-radius: 14px;
    margin-right: 8em;
    
    @media(max-width: 768px){
        width: 75vw;
        height: 25vh;
        margin-left: 18px;
        margin-right: 10em;
        
    }

`