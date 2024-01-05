import React from 'react'

const Badge = ({text,className}) => {
  return (
    <div className={`${className} py-2 px-7 bg-primary text-dm text-white w-24`}>{text}</div>
  )
}

export default Badge