import React from 'react'

const Button = ({className, text}) => {
  return (
    <button className={` bg-gray-900 ${className} `}>{text}</button>
  )
}

export default Button