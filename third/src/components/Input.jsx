import React from 'react'

const Input = ({inType, className,inPH, inName, inValue}) => {
  return (
 <input className={`${className} block focus:outline-none border-b-2 border-red-500 w-full fond-dm text-seconary text-sm`} type={inType} placeholder={inPH} name={inName} value={inValue} />
  )
}

export default Input