import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <div className="flex justify-between items-center mx-auto max-w-screen-xl p-5">
      {children}
    </div>
  );
}

export default Container;
