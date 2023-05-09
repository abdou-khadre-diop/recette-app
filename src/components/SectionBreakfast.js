import React from 'react'
import styled from 'styled-components'
import './ItemRecipesTitles.css'

function SectionBreakfast() {
  return (
    <Wrap>
        <div id="brkfast">
            <ItemDiv>
                <h2 className="itemDiv-h2">50+ Breakfast Recipes That <br/>Very Quick And Easy</h2>
                <p className="itemDiv-p">Find the perfect food ideas to start your day with.</p>
            </ItemDiv>
        </div>
        
    </Wrap>
  )
}

export default SectionBreakfast

const Wrap = styled.div`
    width: 100vw;
    height: 65vh;
    background: rgb(233,233,233);
    margin: auto;
    display: flex;
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 55px;
    flex-direction: column;
    

`
const ItemDiv = styled.div`
    width: 30vw;
    height: 35vh;
    background: rgb(255,255,255);
    border-radius: 14px;
    margin-left: auto;
    margin-right: 8em;
    @media(max-width: 768px){
        width: 75vw;
        margin-left: auto;
        margin-right: 10em;
        
    }

`