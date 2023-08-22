import React from 'react'
import { AdminMenu } from '../../components/Admin'

import { Icon } from '../../assets'
import './AdminLayout.scss'
export function AdminLayout(props) {
  const { children } = props
  return (
    <div className='admin-layout'>
      <div className='admin-layout__left'>
        <Icon.LogoWhite className='logo' />
        <AdminMenu />
      </div>
      <div className='admin-layout__right'>
        <div className='admin-layout__right-header'>
          logout
        </div>
        <div className='admin-layout__right-content'>
          {children}
        </div>
      </div>
    </div>
  )
}
