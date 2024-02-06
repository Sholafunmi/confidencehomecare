import React from 'react'


const Button = ({className, text=""}) => {
  return (
    <button className={`${className} btn bg-[#98830b] text-gray-50 font-bold text-lg p-3 w-fit rounded-tr-[20px] rounded-bl-[20px] hover:bg-[#7036c7] hover:text-[#fff] hover:border-l-[3px] hover:border-t-[5px] hover:border-[#b69d11]`}>{text}</button>
  )
}

export default Button