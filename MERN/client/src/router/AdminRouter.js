import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Auth } from '../pages/admin/Auth/Auth'
import { Users } from '../pages/admin/Users/Users'
import { AdminLayout } from "../layouts"

const user = null;

export default function WebRouter() {

  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    )
  }
  return (
    <Routes>
      {!user ? (

        <Route path='/admin/*' element={loadLayout(AdminLayout, Auth)} />

      ) : (
        <>
          <Route path='/admin/users*' element={loadLayout(AdminLayout, Users)} />

        </>
      )}
    </Routes>
  )
}
