import React from 'react'

export const Label = ({labelname, className}) => {
  return (
     <label className={`${className} font-bold fond-dm text-primary text-base`}>{labelname}</label>
  )
}
