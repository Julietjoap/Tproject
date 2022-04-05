import React from 'react'
import {CardHolder} from './C0mponent/Card/CardHolder'
import {Header} from './C0mponent/Header/Header'
import {Hero} from './C0mponent/Hero/Hero'
import {SectionPhone} from './C0mponent/PhoneSection/SectionPhone'
import  {SectionHealth} from './C0mponent/HealthSection/SectionHealth'
import { CardHolder2 } from './C0mponent/Card/CardHolder2'
import {Personalized} from './C0mponent/Footer/Personalized'
import {Footer} from './C0mponent/Footer/Footer'


function App () {
  return (
    <div>
      <Header/>
       <Hero/>
      <CardHolder/>
      <SectionPhone/>
      <SectionHealth/>
      <CardHolder2/>
      <Personalized/>
      <Footer/>
         </div>
  )
}

export default App

 