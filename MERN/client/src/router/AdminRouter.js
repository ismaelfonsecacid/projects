import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Auth } from '../pages/admin/Auth/Auth'
import { Users } from '../pages/admin/Users/Users'
import { Blog } from '../pages/admin/Blog/Blog'
import { Courses } from '../pages/admin/Courses/Courses'
import { Menu } from '../pages/admin/Menu/Menu'
import { Newsletter } from '../pages/admin/Newsletter/Newsletter'
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
