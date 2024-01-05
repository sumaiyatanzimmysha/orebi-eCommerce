import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Bars from '../icons/Bars'
import Paragraph from '../Paragraph'
import {FaUser, FaCaretDown,FaShoppingCart,FaSearch } from "react-icons/fa";
const Category = () => {
  return (
     <section className='py-6 bg-cate border border-y border-bord'>
<Container>
  <Flex className= 'items-center'>
    <div className="w-1/4">
      <Flex className=' items-center gap-4'>
        <Bars/>
        <Paragraph text="Shop by Category " className= "text-primary text-sm"/>
      </Flex>
    </div>
    <Flex className="w-1/2 text-center items-center justify-center placeholder:text-[#C4C4C4] placeholder:text-sm">
     <input type='text' className='w-[600px] py-4 px-5 outline-none' placeholder='Search Products '/>
     <FaSearch className='ml-[-40px]' />
    </Flex>
    <div className="w-1/4">
      <Flex className='justify-end'>
      <FaUser/>
    <FaCaretDown/>
    <FaShoppingCart className='ml-5'/>
      </Flex>
   
    </div>
  </Flex>
</Container>
     </section>
  )
}

export default Category