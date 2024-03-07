import clsx from 'clsx'
import React from 'react'

interface ButtonProps {
  selected?: boolean
  type?: 'button' | 'submit' | 'reset'
  children: React.ReactNode
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  selected = false,
  type = 'button',
  children,
  onClick,
}) => {
  return (
    <button
      className={clsx(
        'inline-flex px-4 py-2 rounded border border-transparent font-medium',
        'text-gray-700 bg-gray-300 hover:bg-gray-400 focus:outline-none',
        'focus:ring focus:ring-gray-500 active:bg-gray-500 transition duration-150 ease-in-out',
        {
          'bg-blue-600 text-white': selected,
        },
      )}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
