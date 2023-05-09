import React from 'react'
import styled from 'styled-components'


function Pubsection() {
  return (
    <Wrap>
        <ItemPub>
            <p>Les pubs nous permettent</p>
        </ItemPub>
    </Wrap>
  )
}

export default Pubsection

const Wrap = styled.div`
    width: 100vw;
    height: 50vh;
    background: #2A5646;
    display: flex;
    flex-direction: column;
`
const ItemPub = styled.div`
    color: yellow;
`