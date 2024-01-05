import React from 'react'
import Container from './Container'
import Image from './Image'
 import product9 from '../assets/p9.png'
 import product10 from '../assets/p10.png'
 import product11 from '../assets/p11.png'
 import product12 from '../assets/p12.png'
 
import Badge from './Badge'
import Paragraph from './Paragraph'
import Price from './Price'
import Flex from './Flex'
import { FaCartArrowDown,FaHeartCircleBolt } from "react-icons/fa6";
import Year from './Year'
const Product = () => {
  return (

   <Container>
     <h3 className='text-primary font-bold font-dm text-[39px] mt-[128px]'> Special Offers</h3>
    <div className="flex">
 <div className="w-1/4 relative overflow-hidden group mt-[44px]  mr-[50px] " > 
 <Image src={product9} className= 'w-full '/>
 <Badge text= 'New' className={'absolute left-2 top-3'}/>
 <Flex className= 'justify-between'>
 <Paragraph text='Basic Crew Neck Tee' className={'text-primary font-dm font-bold text-xl'}/>

<Price text= '$44.00'/>
</Flex  >
<Price text= 'Black'/>
<div className="bg-white py-8 pr-3 w-full absolute left-0 -bottom-[176px
] group-hover:bottom-0 duration-500   ">
    <div >
        <Flex className= 'justify-end items-center gap-3'>
            <Paragraph text= 'Add to Wish List'/><FaHeartCircleBolt />

        </Flex>

    </div>
    <div >
        <Flex className= 'justify-end items-center gap-3 py-5'>
            <Paragraph text= 'Compare'/><FaHeartCircleBolt />

        </Flex>

    </div>
    <div >
        <Flex className= 'justify-end items-center gap-3'>
            <Paragraph text= 'Add to Cart'/><FaCartArrowDown/>

        </Flex>

    </div>

</div>
</div>
{/* ===== */}
<div className="w-1/4 relative overflow-hidden group   mr-[50px] " > 
 <Image src={product10} className= 'w-full '/>
 <Badge text= 'New' className={'absolute left-2 top-3'}/>
 <Flex className= 'justify-between'>
 <Paragraph text='Basic Crew Neck Tee' className={'text-primary font-dm font-bold text-xl'}/>

<Price text= '$44.00'/>

</Flex  >
<Price text= 'Black'/>
<div className="bg-white py-8 pr-3 w-full absolute left-0 -bottom-[176px
] group-hover:bottom-0 duration-500   ">
    <div >
        <Flex className= 'justify-end items-center gap-3'>
            <Paragraph text= 'Add to Wish List'/><FaHeartCircleBolt />

        </Flex>

    </div>
    <div >
        <Flex className= 'justify-end items-center gap-3 py-5'>
            <Paragraph text= 'Compare'/><FaHeartCircleBolt />

        </Flex>

    </div>
    <div >
        <Flex className= 'justify-end items-center gap-3'>
            <Paragraph text= 'Add to Cart'/><FaCartArrowDown/>

        </Flex>

    </div>

</div>
</div>
{/* === */}
<div className="w-1/4 relative overflow-hidden group   mr-[50px] " > 
 <Image src={product11} className= 'w-full '/>
 <Badge text= 'New' className={'absolute left-2 top-3'}/>
 <Flex className= 'justify-between'>
 <Paragraph text='Basic Crew Neck Tee' className={'text-primary font-dm font-bold text-xl'}/>

<Price text= '$44.00'/>
</Flex  >
<Price text= 'Black'/>
<div className="bg-white py-8 pr-3 w-full absolute left-0 -bottom-[176px
] group-hover:bottom-0 duration-500   ">
    <div >
        <Flex className= 'justify-end items-center gap-3'>
            <Paragraph text= 'Add to Wish List'/><FaHeartCircleBolt />

        </Flex>

    </div>
    <div >
        <Flex className= 'justify-end items-center gap-3 py-5'>
            <Paragraph text= 'Compare'/><FaHeartCircleBolt />

        </Flex>

    </div>
    <div >
        <Flex className= 'justify-end items-center gap-3'>
            <Paragraph text= 'Add to Cart'/><FaCartArrowDown/>

        </Flex>

    </div>

</div>
</div>
{/* ==== */}
<div className="w-1/4 relative overflow-hidden group   mr-[50px] " > 
 <Image src={product12} className= 'w-full '/>
 <Badge text= 'New' className={'absolute left-2 top-3'}/>
 <Flex className= 'justify-between'>
 <Paragraph text='Basic Crew Neck Tee' className={'text-primary font-dm font-bold text-xl'}/>

<Price text= '$44.00'/>
</Flex  >
<Price text= 'Black'/>
<div className="bg-white py-8 pr-3 w-full absolute left-0 -bottom-[176px
] group-hover:bottom-0 duration-500   ">
    <div >
        <Flex className= 'justify-end items-center gap-3'>
            <Paragraph text= 'Add to Wish List'/><FaHeartCircleBolt />

        </Flex>

    </div>
    <div >
        <Flex className= 'justify-end items-center gap-3 py-5'>
            <Paragraph text= 'Compare'/><FaHeartCircleBolt />

        </Flex>

    </div>
    <div >
        <Flex className= 'justify-end items-center gap-3'>
            <Paragraph text= 'Add to Cart'/><FaCartArrowDown/>

        </Flex>

    </div>

</div>
</div>
 </div>
 {/* ---- */}
  
 
  
 

   </Container>


   
   

  )
}

export default Product

