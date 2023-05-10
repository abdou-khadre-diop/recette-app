import React from 'react'
import styled from 'styled-components'

function Pubsection() {
  return (
    <Wrap>
        <p>Pubsection</p>
    </Wrap>
  )
}

export default Pubsection

const Wrap = styled.div`
    width: 100vw;
    height: 65vh;
    background: blue;
    
    display: flex;
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 55px;
    flex-direction: column;
    @media(max-width: 768px){
        float: bottom;
    }    

`