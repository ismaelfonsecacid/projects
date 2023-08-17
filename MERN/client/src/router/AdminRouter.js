import React from 'react'
import {Routes,Route} from 'react-router-dom'
import {Auth} from '../pages/admin'
import {AdminLayout} from "../layouts"

export default function WebRouter() {

  const loadLayout = (Layout,Page) => {
    return (
      <Layout>
        <Page/>
      </Layout>
    )
  }
  return (
    <Routes>
        <Route path='/admin/*' element={loadLayout(AdminLayout,Auth)}/>
    </Routes>
  )
}
