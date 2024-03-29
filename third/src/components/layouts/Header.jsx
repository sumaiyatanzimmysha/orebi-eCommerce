import React from 'react'
import Container from "../Container"
import List from '../List'
import Flex from "../Flex"
 import Image from "../Image"
 import Logo from "../../assets/logo.png"
const Header = () => {
  return (
   <nav className='py-8'>
    <Container>
 <Flex>
    <div className="w-[5%]">
        <Image src={Logo}/>
    </div>
    <div className="w-[95%]">
    <ul>
    <Flex className="justify-center gap-x-5">
    <List text= "Home"/>
      <List text= "Shop" className="text-blue-300"/>
      <List text= "About"/>
      <List text= "Contacts"/>
      <List text= "Journal"/>
      </Flex>
    
    </ul>
    </div>
 </Flex>
    </Container>
   </nav>
  )
}

export default Header
