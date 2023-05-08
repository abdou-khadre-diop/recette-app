import React from 'react'
import styled  from 'styled-components'
import Section from './Section'
import SectionBreakfast from './SectionBreakfast'
import SeeAll from './SeeAll'


function Home() {
  return (
    <Container>
        <Section />
        <SeeAll />  
        <SectionBreakfast/>    
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`