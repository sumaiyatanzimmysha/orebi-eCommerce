import React from 'react'
import Container from './Container'
import List from './List'
import Heading from './Heading'
import Flex from './Flex'
import Image from './Image'
 import Logo from '../assets/logo.png'
const Footer = () => {
  return (
   <Container>
    <Flex>
    <div className="mt-[141px]  ">
    <ul>
        <li >
           
            <Heading text={'MENU'} className='font-bold pb-[17px]'/>
            <List text={'Home'} className={'pb-[9px]'}/>
            <List text={'Shop'} className={'pb-[9px]'}/>
            <List text={'About'} className={'pb-[9px]'}/>
            <List text={'Contact'} className={'pb-[9px]'}/>
            <List text={'Journal'} className={'pb-[9px]'}/>
        </li>
    </ul>
    </div>
    {/* === */}
    <div className="mt-[141px] ml-[150px] ">
    <ul>
        <li >
           
            <Heading text={'SHOP'} className='font-bold pb-[17px]'/>
            <List text={'Category 1'} className={'pb-[9px]'}/>
            <List text={'Category 2'} className={'pb-[9px]'}/>
            <List text={'Category 3'} className={'pb-[9px]'}/>
            <List text={'Category 4'} className={'pb-[9px]'}/>
            <List text={'Category 5'} className={'pb-[9px]'}/>
        </li>
    </ul>
    </div>
    {/* ==== */}
    <div className="mt-[141px] ml-[150px] ">
    <ul>
        <li >
           
            <Heading text={'HELP'} className='font-bold pb-[17px]'/>
            <List text={'Privacy Policy'} className={'pb-[9px]'}/>
            <List text={'Terms & Conditions'} className={'pb-[9px]'}/>
            <List text={'Special E-shop'} className={'pb-[9px]'}/>
            <List text={'Shipping'} className={'pb-[9px]'}/>
            <List text={'Secure Payments'} className={'pb-[9px]'}/>
        </li>
    </ul>
    </div>
    {/* == */}
    <div className="mt-[141px] ml-[150px] ">
    <ul>
        <li >
           <h3 className='font-bold pb-[17px]'>(052) 611-5711</h3>
             
            <Heading text={'company@domain.com'} className='font-bold pb-[17px]'/>
            <List text={'575 Crescent Ave. Quakertown, PA 18951'} className={'pb-[9px] mt-[15px]'}/>
            
        </li>
    </ul>
    </div>
    <div className="mt-[141px] ml-[150px]">
        <Image src={Logo}/>
     <p className='pt-[212px] text-list'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
    </div>
    </Flex>
 

    
   </Container>
   
  )
}

export default Footer