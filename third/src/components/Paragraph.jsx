import React from 'react'

const Paragraph = ({text, className}) => {
  return (
    <p className={`font-dm text-list text-base font-regular ${className}`}>{text}</p>
  )
}

export default Paragraph