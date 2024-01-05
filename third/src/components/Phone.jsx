import React from 'react'
import Container from './Container'
import Image from './Image'
 import Phone1 from '../assets/i1.png'
import Flex from './Flex'
import Button from './Button'
 import Watch2 from '../assets/w2.png'
 import Lamp from '../assets/l.png'
const Phone = () => {
  return (
  <Container>
     <Flex>
    <div className="mt-[220px]">
      
        
        
        
    
        <div className = "head-text">
        <div className = "head-image">
        <Image src={Phone1} />
        </div>
          <div class='text-on-image'>
             <h3 className='text-primary font-bold font-dm text-[39px] mt-[470px]'> Phones Sale </h3>
            <Flex>
            <p className='mt-[52px] font-dm text-[16px]'> Up to </p>
             <h3 className='text-primary font-bold font-dm text-[39px]  mt-[36px]'> 30% </h3>
             <p className='mt-[52px] font-dm text-[16px]'>  sale for all phones! </p>
            </Flex>
        <Button text='Shop Now' className={'mt-[50px]'}/>
            
          </div>
      </div>
      </div>
{/* ===== */}
      <div className="mt-[220px] mr-[50px]">
      
        
        
        
    
        <div className = "head-text">
        <div className = "head-image">
        <Image src={Watch2} />
        </div>
          <div class='text-on-image'>
             <h3 className='text-primary font-bold font-dm text-[39px] mt-[470px]'> Electronics Sale </h3>
            <Flex>
            <p className='mt-[52px] font-dm text-[16px]'> Up to </p>
             <h3 className='text-primary font-bold font-dm text-[39px]  mt-[36px]'> 70% </h3>
             <p className='mt-[52px] font-dm text-[16px]'>  sale for all electronics! </p>
            </Flex>
        <Button text='Shop Now' className={'mt-[50px]'}/>
            
          </div>
      </div>

      {/* ==== */}
      <div className="mt-[40px] mr-[50px]">
      
        
        
        
    
      <div className = "head-text">
      <div className = "head-image">
      <Image src={Lamp} />
      </div>
        <div class='text-on-image'>
           <h3 className='text-primary font-bold font-dm text-[39px] mt-[470px]'>Furniture Offer </h3>
          <Flex>
          <p className='mt-[52px] font-dm text-[16px]'> Up to </p>
           <h3 className='text-primary font-bold font-dm text-[39px]  mt-[36px]'> 50% </h3>
           <p className='mt-[52px] font-dm text-[16px]'>  sale for all furniture items! </p>
          </Flex>
      <Button text='Shop Now' className={'mt-[50px]'}/>
          
        </div>
    </div>
    </div>

      </div>


      

      </Flex>
    
  </Container>
  )
}

export default Phone