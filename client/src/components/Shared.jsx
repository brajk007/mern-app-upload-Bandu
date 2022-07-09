import React from 'react'
import Nav from './Nav'

import {Outlet} from 'react-router-dom'

const Shared = () => {
  return (
      <>
        <Nav/>
        <Outlet/>
      </>
  )
}

export default Shared
