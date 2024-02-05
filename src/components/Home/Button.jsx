import React from 'react'


const Button = ({className, text}) => {
  return (
    <button className={`btn bg-[#98830b] text-gray-50 font-bold text-lg p-3 w-fit rounded-tr-[20px] rounded-bl-[20px] ${className} `}>{text}</button>
  )
}

export default Button