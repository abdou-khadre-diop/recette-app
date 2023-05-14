import React from 'react'
import styled  from 'styled-components'
import Section from './Section'
import SectionBreakfast from './SectionBreakfast'

import SeeAll from './SeeAll'
import CommunitySection from './CommunitySection'
import Footer from './Footer'

/*
  <SeeAll />  
  <SectionBreakfast/>
  <SectionBreakfast/>
        <Pubsection />
*/

function Home() {
  return (
    <Container>
        <Section />
        <SeeAll />
        <SectionBreakfast/>
        <CommunitySection />
        <Footer />
    </Container>
    
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
  flex-direction: column;
  

  @media(max-width: 768px){
    flex-direction: column;
    
  }
  
`
