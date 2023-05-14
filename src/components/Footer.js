import React from 'react'
import styled from 'styled-components'


function Footer() {
  return (
    <Container>
        <divTitle>
            <h1>Sen Recette</h1>
            <p>Discover 1000+ recipes in your hand with the best recipe.<br />Help you to find the easiest way to cook.</p>
        </divTitle>
        <divInfo>
            <h2>Sign up for our newletters</h2>
            <input type='text'></input>
        </divInfo>
    </Container>
  )
}

export default Footer

const Container = styled.div`
    width: 100%;
    height: 70vh;
    background: #2A5846;
    display: flex;

    divTitle{
        padding-top: 15vh;
        text-align: left;
        padding-left: 25vh;
        h1{
            font-size: 2em;
            font-weight: bold;
            font-family: "Fantasy";
        }
    }

    divInfo{
       
        
        padding-top: 15vh;
        text-align: right;
        padding-left: 45vh;
        h2{
            font-size: 1.5em;
            font-weight: bold;
            font-family: "Fantasy";
        }
        
    }

`