import React from 'react'

export const InputComponent = ({type,placeholder}:{type:string, placeholder:string}) => {
  return (
    <input className="w-full p-2 border border-gray-300 rounded-md mt-1" type={type} placeholder={placeholder} />
  )
}
