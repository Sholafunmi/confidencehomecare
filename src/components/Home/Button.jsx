import React from 'react'
// import './index.css';


const Button = ({className, text}) => {
  return (
    <button className={` btn bg-[#7036c7] text-gray-50 font-bold text-lg p-3 w-fit  p-3 rounded-tr-[20px] rounded-bl-[20px] ${className} `}>{text}</button>
  )
}

export default Button