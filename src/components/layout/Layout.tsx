import React from "react"
import Header from "./Header"

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen w-full flex-col">
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
