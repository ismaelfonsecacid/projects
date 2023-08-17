import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Auth, Blog, Users, Courses, Menu, Newsletter } from '../pages/admin'
import { AdminLayout } from "../layouts"

const user = { email: 'ismaelfonsecacid@gmail.com' };

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
          {['/admin', '/admin/blog'].map((path) => (

            <Route key={path} path={path} element={loadLayout(AdminLayout, Blog)} />

          ))};

          <Route path='/admin/users' element={loadLayout(AdminLayout, Users)} />
          <Route path='/admin/courses' element={loadLayout(AdminLayout, Courses)} />
          <Route path='/admin/menu' element={loadLayout(AdminLayout, Menu)} />
          <Route path='/admin/newsletter' element={loadLayout(AdminLayout, Newsletter)} />
        </>
      )}
    </Routes>
  )
}
