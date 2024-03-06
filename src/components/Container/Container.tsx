import React, { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

function Container({ children }: ContainerProps): JSX.Element {
  return (
    <div className="flex flex-col justify-center mx-auto max-w-screen-xl p-5 ">
      {children}
    </div>
  )
}

export default Container
