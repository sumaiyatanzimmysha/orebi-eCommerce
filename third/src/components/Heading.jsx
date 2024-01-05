import React from 'react'

const Heading = ({text, className}) => {
  return (
     <h1 className={`text-39 text-primary font-dm ${className}`}>{text}</h1>
  )
}

export default Heading