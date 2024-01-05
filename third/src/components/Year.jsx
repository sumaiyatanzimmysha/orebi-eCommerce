import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
 import Watch from '../assets/watch.png'
import Paragraph from './Paragraph'
import Button from './Button'
 
const Year = () => {
  return (
   <Container>
    <Flex>
        <div className="mt-[130px]">
            <Image src={Watch}/>
        </div>
        <div className="">
        <div className="pl-[50px]  mt-[190px]">
     
     <h3 className='text-primary font-bold font-dm text-[39px] mb-[38px] '> Phone of the year</h3>
     <Paragraph text='Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..' 
     
     className={'pr-[500px]'}/>
     <Button text={'Shop Now'} className={'w-[185px] mt-[50px]'}/>
         </div>
        </div>
        
         
    </Flex>
   
   </Container>
  )
}

export default Year