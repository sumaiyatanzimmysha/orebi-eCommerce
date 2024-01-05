import React from 'react'

const Price = ({text, className}) => {
  return (
    <div className={` ${className} text-seconary text-base font-dm font-regular`}>{text}</div>
  )
}

export default Price